import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createHighlightStyle, getColorClassName } from '../utils';

type ColorLegendProps = {
  articleId: string;
  annotators: string[];
}
type PropsType = ColorLegendProps & RouteComponentProps;

class ColorLegend extends React.Component<PropsType> {
  componentDidUpdate(prev: PropsType) {
    if (prev.annotators !== this.props.annotators) {
      for (const annotator of this.props.annotators) {
        createHighlightStyle(annotator);
      }
    }
  }

  handleClick = () => {
    const { history, match } = this.props;
    const category: string = (match.params as any).category;
    history.push(`/${category}`);
  }

  render() {
    return (
      <p className="legends">
        <span onClick={this.handleClick}>Go Back</span>
        {this.props.annotators.map(annotator => (
          <span className={getColorClassName([annotator])} key={annotator}>
            {annotator}
          </span>
        ))}
      </p>
    );
  }
}

export default withRouter(ColorLegend);
