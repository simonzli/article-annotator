import React, { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import scrollIntoView from 'scroll-into-view-if-needed';
import {
  StateType, getSelectedSentence,
  getSentence, getAnnotators, getUsername, addAnnotation, removeAnnotation,
  shouldSentenceScrollIntoView, CHANGE_SELECTED_TEXT, ChangeSelectedTextActionType,
} from '../store';
import { getColorClassName, createHighlightStyle } from '../utils';
import socket from '../socket';

type SentenceProps = {
  sentenceIndex: number;
  articleId: number;
  category: string;
  plainText?: boolean;
}

const section = 'ARTICLE_SECTION';

const mapStateToProps = (state: StateType, props: SentenceProps) => ({
  sentence: getSentence(props.articleId, props.category, props.sentenceIndex)(state),
  annotators: getAnnotators(props.articleId, props.category, props.sentenceIndex)(state),
  username: getUsername(state),
  selectedSentence: getSelectedSentence(state),
  shouldScrollIntoView: props.plainText ? null : shouldSentenceScrollIntoView(
    state,
    props.articleId,
    props.category,
    props.sentenceIndex,
    section,
  ),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsType = SentenceProps & PropsFromRedux

class Sentence extends React.Component<PropsType> {
  ref = React.createRef<HTMLSpanElement>();

  componentDidMount() {
    this.scrollToSentenceInPlainView();
  }

  componentDidUpdate(prev: PropsType) {
    this.scrollToSentenceInPlainView();
    if (prev.shouldScrollIntoView === this.props.shouldScrollIntoView) return;
    if (this.props.shouldScrollIntoView) {
      if (!this.ref || !this.ref.current) return;
      scrollIntoView(this.ref.current, { behavior: 'smooth' });
      const isHotKeyTriggered = this.props.selectedSentence?.selectedIn === 'HOT_KEY';
      if (!isHotKeyTriggered) {
        this.ref.current.classList.add('selected-sentence');
        setTimeout(() => this.ref.current?.classList.remove('selected-sentence'), 1500);
      }
    }
  }

  scrollToSentenceInPlainView() {
    setTimeout(() => {
      if (this.props.plainText && this.props.annotators.length > 0
        && this.ref && this.ref.current) {
        if (this.ref.current.parentElement === null) return;
        let parent: HTMLElement = this.ref.current.parentElement;
        while (!parent.classList.contains('article-container')) {
          if (parent.parentElement === null) return;
          parent = parent.parentElement;
        }

        parent.scrollTo(0, this.ref.current.offsetTop - 100);
      }
    }, 0);
  }

  handleClick = () => {
    if (!this.props.annotators || !this.props.username) return;
    if (!this.props.dispatch) return;
    const { articleId, category, sentenceIndex, username } = this.props;
    let actionName = 'remove annotation';
    if (this.props.annotators.includes(this.props.username)) {
      this.props.dispatch(removeAnnotation(articleId, category, sentenceIndex, username));
    } else {
      actionName = 'add annotation';
      this.props.dispatch(addAnnotation(articleId, category, sentenceIndex, username));
    }
    socket.emit(actionName, { articleId, category, sentenceIndex, annotator: username, rank: 0 });
  }

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    const { articleId, category, sentenceIndex } = this.props;
    this.props.dispatch({
      type: CHANGE_SELECTED_TEXT,
      selectedText: { articleId: -1, category: '', sentenceIndex: -1, selectedIn: section },
    } as ChangeSelectedTextActionType);
    setTimeout(() => {
      this.props.dispatch({
        type: CHANGE_SELECTED_TEXT,
        selectedText: { articleId, category, sentenceIndex, selectedIn: section },
      } as ChangeSelectedTextActionType);
    }, 0);
    if (this.props.annotators.length === 0) {
      this.ref.current?.parentElement?.parentElement?.classList.add('shakey-sentence');
      setTimeout(() => {
        this.ref.current?.parentElement?.parentElement?.classList.remove('shakey-sentence');
      }, 1000);
    }
  }

  getClassName() {
    const classNames = [getColorClassName(this.props.annotators || [])];
    if (this.props.shouldScrollIntoView
      && this.props.selectedSentence?.selectedIn === 'HOT_KEY') {
      classNames.push('hotkey-selected-sentence');
    }
    return classNames.join(' ');
  }

  render() {
    if (this.props.plainText) {
      return (
        <span
          ref={this.ref}
          className={getColorClassName(this.props.annotators || [])}>
          {this.props.sentence}
          {createHighlightStyle(this.props.annotators || [])}
        </span>
      );
    }

    return (
      <span
        ref={this.ref}
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        className={this.getClassName()}>
        {this.props.sentence}
        {createHighlightStyle(this.props.annotators || [])}
      </span>
    );
  }
}

export default connector(Sentence);
