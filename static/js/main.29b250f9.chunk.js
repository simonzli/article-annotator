(this.webpackJsonpannotator=this.webpackJsonpannotator||[]).push([[0],{104:function(e,t){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=(n(68),n(4)),s=n(5),l=n(7),u=n(6),d=n(8),p=n(3),h=n(21),f=n(18),g=n(15),v=n(59),m=n(31),y=n.n(m);var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_USERNAME"===t.type?(y.a.set("username",t.username),t.username):e},I=n(11);function O(e,t){return e.articleId===t.articleId&&e.sentenceIndex===t.sentenceIndex&&e.annotator===t.annotator&&e.category===t.category}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ANNOTATION":for(var n=0;n<e.length;n++)if(O(t.annotation,e[n]))return e;return[].concat(Object(I.a)(e),[t.annotation]);case"REMOVE_ANNOTATION":for(var a=0;a<e.length;a++)if(O(t.annotation,e[a]))return[].concat(Object(I.a)(e.slice(0,a)),Object(I.a)(e.slice(a+1)));break;case"UPDATE_ANNOTATION_RANK":for(var r=t.annotation,c=0;c<e.length;c++)if(O(r,e[c]))return[].concat(Object(I.a)(e.slice(0,c)),[r],Object(I.a)(e.slice(c+1)))}return e},A=n(23),T=n(10),j={loadedArticles:[],categoryToArticleIdListMap:{}};var C=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_ARTICLE":e=n.article;for(var a=0;a<t.loadedArticles.length;a++)if(t.loadedArticles[a].id===e.id&&t.loadedArticles[a].category===e.category)return Object(T.a)({},t,{loadedArticles:[].concat(Object(I.a)(t.loadedArticles.slice(0,a)),[e],Object(I.a)(t.loadedArticles.slice(a+1)))});return Object(T.a)({},t,{loadedArticles:[].concat(Object(I.a)(t.loadedArticles),[e])});case"REMOVE_ARTICLE":e=n.article;for(var r=0;r<t.loadedArticles.length;r++)if(t.loadedArticles[r]===e)return Object(T.a)({},t,{loadedArticles:[].concat(Object(I.a)(t.loadedArticles.slice(0,r)),Object(I.a)(t.loadedArticles.slice(r+1)))});break;case"UPDATE_CATEGORY_ARTICLE_LIST":var c=n,o=c.category,i=c.articleIds;return Object(T.a)({},t,{categoryToArticleIdListMap:Object(T.a)({},t.categoryToArticleIdListMap,Object(A.a)({},o,i))});case"UPDATE_PARAGRAPH_TO_SENTENCES":e=n.article;for(var s=n,l=s.paragraphIndex,u=s.sentences,d=0;d<t.loadedArticles.length;d++){var p=t.loadedArticles[d];if(p.id===e.id&&p.category===e.category)return(p=Object(T.a)({},p)).paragraphToSentences=p.paragraphToSentences||[],p.paragraphToSentences[l]=u,Object(T.a)({},t,{loadedArticles:[].concat(Object(I.a)(t.loadedArticles.slice(0,d)),[p],Object(I.a)(t.loadedArticles.slice(d+1)))})}}return t},x={annotatorToColorMap:{},annotatorToAnnotatorsMap:{},existingCombinations:[]};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOR":var n=t.username,a=t.color;return Object(T.a)({},e,{annotatorToColorMap:Object(T.a)({},e.annotatorToColorMap,Object(A.a)({},n,a))});case"ADD_COLORS_TO_DOCUMENT":if(!e.existingCombinations.includes(t.className))return Object(T.a)({},e,{existingCombinations:[].concat(Object(I.a)(e.existingCombinations),[t.className])})}return e};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SELECTED_TEXT":return Object(T.a)({},e,{selectedSentence:t.selectedText});case"SET_CURRENT_ARTICLE":var n=t,a=n.articleId,r=n.category;return Object(T.a)({},e,{currentArticle:{articleId:a,category:r}})}return e},k=["rgb(214, 157, 177)","rgb(255, 227, 134)","rgb(190, 144, 212)","rgb(141, 195, 234)","rgb(215, 186, 229)","rgba(0, 181, 204, 1)","rgb(140, 20, 252)","rgb(241, 169, 160)","rgb(169, 222, 204)","rgb(145, 61, 136)","rgb(226, 106, 106)","rgb(118, 93, 105)","rgb(154, 18, 179)"];function _(e,t){return{type:"SET_CURRENT_ARTICLE",articleId:e,category:t}}function R(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return{type:"ADD_ANNOTATION",annotation:{articleId:e,category:t,sentenceIndex:n,annotator:a,rank:r}}}function L(e,t,n,a){return{type:"REMOVE_ANNOTATION",annotation:{articleId:e,category:t,sentenceIndex:n,annotator:a}}}var D=n(9),M=function(e){return e.colors},w=Object(D.a)(M,(function(e){return e.annotatorToColorMap})),U=Object(D.a)(M,(function(e){return e.existingCombinations})),P=function(e){return e.articles},H=Object(D.a)(P,(function(e){return e.categoryToArticleIdListMap})),G=Object(D.a)(P,(function(e){return e.loadedArticles})),V=function(e){return Object(D.a)(H,(function(t){return t[e]}))},X=function(e,t){return Object(D.a)(V(t),(function(t){if(!t)return-1;var n=t.indexOf(e);return n<=0?-1:t[n-1]}))},q=function(e,t){return Object(D.a)(V(t),(function(t){if(!t)return-1;var n=t.indexOf(e);return n<0||n+1===t.length?-1:t[n+1]}))},K=function(e,t){return Object(D.a)(G,(function(n){var a=!0,r=!1,c=void 0;try{for(var o,i=n[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var s=o.value;if(s.id===e&&s.category===t)return s}}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}}))},W=function(e,t,n){return Object(D.a)(K(e,t),(function(e){if(void 0!==e)return e.sentences[n]}))},Y=function(e){return e.username},B=Object(D.a)(Y,(function(e){return void 0!==e&&e.length>0})),Q=n(17),J=n.n(Q),z=function(e){return e.annotations},Z=function(e,t){return Object(D.a)(z,(function(n){return n.filter((function(n){return n.articleId===e&&n.category===t}))}))},$=function(e,t,n){return Object(D.a)(Z(e,t),(function(e){return e.filter((function(e){return e.sentenceIndex===n}))}))},F=function(e,t,n){return Object(D.a)(Y,$(e,t,n),(function(e,t){var n=!0,a=!1,r=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){if(c.value.annotator===e)return!0}}catch(i){a=!0,r=i}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return!1}))},ee=function(e){return e.utils},te=function(e){return ee(e).currentArticle},ne=function(e){return ee(e).selectedSentence},ae=function(e,t,n,a,r){var c=ee(e);if(!c.selectedSentence)return!1;var o=c.selectedSentence;return"DESELECT"!==o.selectedIn&&(o.articleId===t&&o.sentenceIndex===a&&o.category===n&&r!==o.selectedIn)},re={username:y.a.get("username"),colors:{annotatorToColorMap:{},annotatorToAnnotatorsMap:{},existingCombinations:[]},articles:{categoryToArticleIdListMap:{},loadedArticles:[]},annotations:[],utils:{}},ce=Object(g.c)({username:b,annotations:E,articles:C,colors:N,utils:S}),oe=Object(g.e)(ce,re,Object(g.a)(v.a)),ie=(n(74),n(60));var se=function(e,t){if(0!==t.length){var n=document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.innerHTML=".".concat(e," {").concat(t,"}"),n.appendChild(a)}};function le(e){for(var t="",n=0;n<e.length;n++)if(e[n]>="a"&&e[n]<="z")t+=e[n];else if(e[n]>="A"&&e[n]<="Z")t+=e[n];else{for(var a=encodeURIComponent(e[n]);a.indexOf("%")>=0;)a=a.replace("%","---");t+=a}return t}var ue=function(e){return J.a.isString(e)&&(e=[e]),0===e.length?"":(e=J.a.uniq(e).sort(),"highlight-".concat(e.map(le).join("-")))};var de=function(e,t){if(J.a.isString(t)&&(t=[t]),0===t.length)return"";t=J.a.uniq(t).sort();var n=!0,a=!1,r=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value;if(!e[i]){var s=void 0,l=!0,u=!1,d=void 0;try{for(var p,h=k[Symbol.iterator]();!(l=(p=h.next()).done);l=!0){var f=p.value,g=!1;for(var v in e)if(e[v]===f){g=!0;break}if(!g){s=f;break}}}catch(E){u=!0,d=E}finally{try{l||null==h.return||h.return()}finally{if(u)throw d}}s||(s=k[Math.floor(Math.random()*k.length)]),oe.dispatch({type:"CHANGE_COLOR",username:i,color:s}),e[i]=s}}}catch(E){a=!0,r=E}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}var m="background-image: linear-gradient(";if(1===t.length){var y=e[t[0]];return m+="transparent 0px, transparent 50%, ".concat(y," 0px, ").concat(y,");")}for(var b=0;b<t.length;b++){var I=t[b],O=e[I];m+="".concat(O," 0px, ").concat(O," ").concat(100*(b+1)/t.length,"%"),t.indexOf(I)!==t.length-1?m+=",":m+=");"}return m};var pe=function(e){var t=ue(e);if(!function(e){return Object(D.a)(U,(function(t){return t.includes(e)}))}(t)(oe.getState())){var n=de(w(oe.getState()),e);se(t,n),oe.dispatch(function(e){return{type:"ADD_COLORS_TO_DOCUMENT",className:e}}(t))}},he=n(61),fe=n.n(he)()("http://0.0.0.0:5000/");fe.emit("refresh article list",{category:"Question 1"},(function(e){oe.dispatch({type:"UPDATE_CATEGORY_ARTICLE_LIST",category:"Question 1",articleIds:e})})),fe.on("add annotation",(function(e){var t=e.articleId,n=e.category,a=e.annotator,r=e.sentenceIndex;oe.dispatch(R(t,n,r,a))})),fe.on("remove annotation",(function(e){var t=e.articleId,n=e.category,a=e.annotator,r=e.sentenceIndex;oe.dispatch(L(t,n,r,a))})),fe.on("update annotation rank",(function(e){oe.dispatch({type:"UPDATE_ANNOTATION_RANK",annotation:e})}));var ge=fe,ve=function(e){var t=te(oe.getState());if(t){var n=K(t.articleId,t.category)(oe.getState());if(n){var a=n.sentences,r=ne(oe.getState());(!r||r.articleId!==t.articleId||r.articleId<0)&&(r=Object(T.a)({},t,{sentenceIndex:-e,selectedIn:"HOT_KEY"})),r.sentenceIndex+=e,r.sentenceIndex=Math.min(a.length-1,r.sentenceIndex),r.sentenceIndex=Math.max(0,r.sentenceIndex),r.selectedIn="HOT_KEY",me(),oe.dispatch({type:"CHANGE_SELECTED_TEXT",selectedText:r})}}},me=function(){var e=ne(oe.getState());if(e)return oe.dispatch({type:"CHANGE_SELECTED_TEXT",selectedText:Object(T.a)({},e,{selectedIn:"DESELECT"})});oe.dispatch({type:"CHANGE_SELECTED_TEXT",selectedText:{articleId:-1,category:"",sentenceIndex:-1,selectedIn:"DESELECT"}})},ye=function(e){var t=te(oe.getState());if(t){var n=V(t.category)(oe.getState()),a=n.indexOf(t.articleId)+e;a=Math.min(n.length-1,a),a=Math.max(0,a),oe.dispatch(_(n[a],t.category)),window.history.pushState(null,"","/".concat(t.category,"/").concat(n[a]))}},be={ENTER:["enter"],MOVE_UP:["w"],MOVE_DOWN:["s"],DESELECT:["q"],LAST_ARTICLE:["["],NEXT_ARTICLE:["]"]},Ie={ENTER:function(){var e=ne(oe.getState());if(e&&!(e.articleId<0)){var t=Y(oe.getState());if(t){var n=e.articleId,a=e.category,r=e.sentenceIndex,c=F(n,a,r)(oe.getState());c?oe.dispatch(L(n,a,r,t)):oe.dispatch(R(n,a,r,t)),ge.emit("".concat(c?"remove":"add"," annotation"),Object(T.a)({},e,{annotator:t,rank:0}))}}},MOVE_UP:function(){return ve(-1)},MOVE_DOWN:function(){return ve(1)},DESELECT:me,LAST_ARTICLE:function(){return ye(-1)},NEXT_ARTICLE:function(){return ye(1)}},Oe=Object(p.b)((function(e){var t,n;return{articleId:null===(t=te(e))||void 0===t?void 0:t.articleId,category:null===(n=te(e))||void 0===n?void 0:n.category,isUserLoggedIn:B(e)}}),(function(e){return{setCurrentArticle:function(t,n){e(_(t,n))}}})),Ee=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged()}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged()}},{key:"onRouteChanged",value:function(){this.leaveArticle();var e=this.props.match,t=+e.params.articleId,n=e.params.category;this.props.setCurrentArticle(t,n),ge.emit("join article",{articleId:t,category:n})}},{key:"leaveArticle",value:function(){if(this.props.articleId&&this.props.category){var e=this.props,t=e.articleId,n=e.category;ge.emit("leave article",{articleId:t,category:n})}}},{key:"render",value:function(){if(!this.props.articleId||!this.props.category)return r.a.createElement("div",{className:"annotation-panel-container"});var e=this.props,t=e.articleId,n=e.category;return r.a.createElement("div",{className:"annotation-panel-container"},r.a.createElement(we,{articleId:t,category:n}),r.a.createElement(Re,{articleId:t,category:n}),r.a.createElement(ie.GlobalHotKeys,{keyMap:be,handlers:Ie}))}}]),t}(r.a.Component),Ae=Object(f.g)(Oe(Ee)),Te=n(33),je=function(e,t){return{article:K(t.articleId,t.category)(e)}},Ce=(Object(p.b)(je),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(!this.props.article)return r.a.createElement("div",null);var e=this.props.article,t=e.question,n=e.explanation;return r.a.createElement("p",{className:"explanation"},r.a.createElement("b",null,r.a.createElement("i",null,t)),r.a.createElement("br",null),n)}}]),t}(r.a.Component)),xe=Object(p.b)(je)(Ce),Ne=n(32),Se=Object(p.b)((function(e,t){return{sentence:W(t.articleId,t.category,t.sentenceIndex)(e),checked:F(t.articleId,t.category,t.sentenceIndex)(e),username:Y(e),shouldScrollIntoView:ae(e,t.articleId,t.category,t.sentenceIndex,"ANNOTATION_SECTION")}}),(function(e){return{addAnnotation:function(t,n,a,r){e({type:"ADD_ANNOTATION",annotation:{articleId:t,category:n,sentenceIndex:a,annotator:r}})},removeAnnotation:function(t,n,a,r){e({type:"REMOVE_ANNOTATION",annotation:{articleId:t,category:n,sentenceIndex:a,annotator:r}})},changeSelectedText:function(t,n,a){e({type:"CHANGE_SELECTED_TEXT",selectedText:{articleId:t,category:n,sentenceIndex:a,selectedIn:"ANNOTATION_SECTION"}})}}}))(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).divRef=r.a.createRef(),n.handleClick=function(){if(n.props.username){var e=n.props,t=e.articleId,a=e.category,r=e.sentenceIndex,c=e.username;n.props.checked?n.props.removeAnnotation(t,a,r,c):n.props.addAnnotation(t,a,r,c),ge.emit(n.props.checked?"remove annotation":"add annotation",{articleId:t,category:a,sentenceIndex:r,annotator:c})}},n.handleContextMenu=function(e){e.preventDefault();var t=n.props,a=t.articleId,r=t.category,c=t.sentenceIndex;n.props.changeSelectedText(-1,"",-1),setTimeout((function(){return n.props.changeSelectedText(a,r,c)}),0)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.shouldScrollIntoView!==this.props.shouldScrollIntoView&&this.props.shouldScrollIntoView){if(!this.divRef||!this.divRef.current)return;Object(Ne.a)(this.divRef.current,{behavior:"smooth"}),this.divRef.current.classList.add("selected-sentence-card"),setTimeout((function(){var e;return null===(e=t.divRef.current)||void 0===e?void 0:e.classList.remove("selected-sentence-card")}),1500)}}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.divRef,onClick:this.handleClick,onContextMenu:this.handleContextMenu,className:"sentence-card ".concat(this.props.checked?"checked":"")},r.a.createElement("p",null,this.props.sentence),r.a.createElement("div",{className:"side"},r.a.createElement("span",null,this.props.index)),r.a.createElement("div",{className:"sentence-card-background"}))}}]),t}(r.a.Component)),ke=Object(p.b)((function(e,t){return{annotatedSentences:(n=t.articleId,a=t.category,Object(D.a)(z,Y,(function(e,t){var r=e.filter((function(e){return e.articleId===n&&e.category===a})).sort((function(e,n){return e.annotator===t!==(n.annotator===t)?e.annotator===t?-1:1:e.rank!==n.rank?(n.rank||0)-(e.rank||0):e.sentenceIndex-n.sentenceIndex})).map((function(e){return e.sentenceIndex}));return J.a.uniq(r)})))(e),lastArticleId:X(t.articleId,t.category)(e),nextArticleId:q(t.articleId,t.category)(e),annotations:Z(t.articleId,t.category)(e),username:Y(e)};var n,a}),(function(e){return{updateAnnotationRank:function(t){e({type:"UPDATE_ANNOTATION_RANK",annotation:t})},addAnnotation:function(t,n,a,r){e(R(t,n,a,r))}}})),_e=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goToLastArticle=function(){var e=n.props,t=e.category,a=e.history,r=e.lastArticleId;r<0||a.push("/".concat(t,"/").concat(r))},n.goToNextArticle=function(){var e=n.props,t=e.category,a=e.history,r=e.nextArticleId;r<0||a.push("/".concat(t,"/").concat(r))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onDragEnd",value:function(e){if(e.destination){for(var t=this.props.annotatedSentences[e.source.index],n=this.props.annotatedSentences[e.destination.index],a=null,r=0;r<this.props.annotations.length;r++){var c=this.props.annotations[r];if(t===c.sentenceIndex&&c.annotator===this.props.username){a=r;break}}if(null===a){if(!this.props.username)return;this.props.addAnnotation(this.props.articleId,this.props.category,t,this.props.username)}if(t!==n){var o=null,i=e.destination.index,s=-1;0!==i&&i!==this.props.annotatedSentences.length-1&&(s=e.source.index>i?this.props.annotatedSentences[i-1]:this.props.annotatedSentences[i+1]);for(var l=0,u=0;u<this.props.annotations.length&&l<2;u++){var d=this.props.annotations[u];[n,s].includes(d.sentenceIndex)&&d.annotator===this.props.username&&(o=(o||0)+(d.rank||1)/2,l++)}if(null!==o){if(0===i){if(l<1)return;o=2*o+1024}else if(i===this.props.annotatedSentences.length-1){if(l<1)return}else if(l<2)return;var p={articleId:this.props.articleId,category:this.props.category,sentenceIndex:t,annotator:this.props.username||"",rank:o};this.props.updateAnnotationRank(p),ge.emit("update annotation rank",p)}}}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"annotator-container"},r.a.createElement(xe,{articleId:this.props.articleId,category:this.props.category}),r.a.createElement("h3",null,"Select sentences that are relative to the question."),r.a.createElement(Te.a,{onDragEnd:this.onDragEnd.bind(this)},r.a.createElement(Te.c,{droppableId:"annotation-list"},(function(t){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef}),(e.props.annotatedSentences||[]).map((function(t,n){return r.a.createElement(Te.b,{key:"sentence-card-".concat(t),draggableId:"sentence-".concat(t),index:n},(function(a){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:Object(T.a)({outline:0},a.draggableProps.style)}),r.a.createElement(Se,{articleId:e.props.articleId,category:e.props.category,sentenceIndex:t,index:n+1}))}))})),t.placeholder)}))),r.a.createElement("div",{className:"last-next-buttons"},r.a.createElement("span",{onClick:this.goToLastArticle,className:"last-article-button",style:this.props.lastArticleId<0?{visibility:"hidden"}:{}},"Last Article"),r.a.createElement("span",{onClick:this.goToNextArticle,className:"next-article-button",style:this.props.nextArticleId<0?{visibility:"hidden"}:{}},"Next Article")))}}]),t}(r.a.Component),Re=Object(f.g)(ke(_e)),Le=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=n.props,t=e.history,a=e.match.params.category;t.push("/".concat(a))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=this.props.annotators[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var c=a.value;pe(c)}}catch(o){t=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"render",value:function(){return r.a.createElement("p",{className:"legends"},r.a.createElement("span",{onClick:this.handleClick},"Go Back"),this.props.annotators.map((function(e){return r.a.createElement("span",{className:ue([e]),key:e},e)})))}}]),t}(r.a.Component),De=Object(f.g)(Le),Me=Object(p.b)((function(e,t){return{sentence:W(t.articleId,t.category,t.sentenceIndex)(e),annotators:(n=t.articleId,a=t.category,r=t.sentenceIndex,Object(D.a)($(n,a,r),(function(e){return e.map((function(e){return e.annotator}))})))(e),username:Y(e),selectedSentence:ne(e),shouldScrollIntoView:t.plainText?null:ae(e,t.articleId,t.category,t.sentenceIndex,"ARTICLE_SECTION")};var n,a,r}))(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).ref=r.a.createRef(),n.handleClick=function(){if(n.props.annotators&&n.props.username&&n.props.dispatch){var e=n.props,t=e.articleId,a=e.category,r=e.sentenceIndex,c=e.username,o="remove annotation";n.props.annotators.includes(n.props.username)?n.props.dispatch(L(t,a,r,c)):(o="add annotation",n.props.dispatch(R(t,a,r,c))),ge.emit(o,{articleId:t,category:a,sentenceIndex:r,annotator:c,rank:0})}},n.handleContextMenu=function(e){e.preventDefault();var t,a,r,c=n.props,o=c.articleId,i=c.category,s=c.sentenceIndex;(n.props.dispatch({type:"CHANGE_SELECTED_TEXT",selectedText:{articleId:-1,category:"",sentenceIndex:-1,selectedIn:"ARTICLE_SECTION"}}),setTimeout((function(){n.props.dispatch({type:"CHANGE_SELECTED_TEXT",selectedText:{articleId:o,category:i,sentenceIndex:s,selectedIn:"ARTICLE_SECTION"}})}),0),0===n.props.annotators.length)&&(null===(t=n.ref.current)||void 0===t||null===(a=t.parentElement)||void 0===a||null===(r=a.parentElement)||void 0===r||r.classList.add("shakey-sentence"),setTimeout((function(){var e,t,a;null===(e=n.ref.current)||void 0===e||null===(t=e.parentElement)||void 0===t||null===(a=t.parentElement)||void 0===a||a.classList.remove("shakey-sentence")}),1e3))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.shouldScrollIntoView!==this.props.shouldScrollIntoView)if(this.props.shouldScrollIntoView){var n;if(!this.ref||!this.ref.current)return;Object(Ne.a)(this.ref.current,{behavior:"smooth"});var a="HOT_KEY"===(null===(n=this.props.selectedSentence)||void 0===n?void 0:n.selectedIn),r=a?"hotkey-selected-sentence":"selected-sentence";this.ref.current.classList.add(r),a||setTimeout((function(){var e;return null===(e=t.ref.current)||void 0===e?void 0:e.classList.remove("selected-sentence")}),1500)}else{var c;null===(c=this.ref.current)||void 0===c||c.classList.remove("hotkey-selected-sentence")}}},{key:"render",value:function(){return this.props.plainText?r.a.createElement("span",{className:ue(this.props.annotators||[])},this.props.sentence,pe(this.props.annotators||[])):r.a.createElement("span",{ref:this.ref,onClick:this.handleClick,onContextMenu:this.handleContextMenu,className:ue(this.props.annotators||[])},this.props.sentence,pe(this.props.annotators||[]))}}]),t}(r.a.Component)),we=Object(p.b)((function(e,t){return{article:K(t.articleId,t.category)(e),annotators:(n=t.articleId,a=t.category,Object(D.a)(Z(n,a),Y,(function(e,t){var n=e.map((function(e){return e.annotator})).filter((function(e){return e!==t}));return n.push(t||""),J.a.uniq(n)})))(e)};var n,a}),(function(e){return{addAnnotation:function(t,n,a,r){e(R(t.id,t.category,n,a,r))},addArticle:function(t){e({type:"ADD_ARTICLE",article:t})},updateParagraphToSentencesMap:function(t,n,a){e({type:"UPDATE_PARAGRAPH_TO_SENTENCES",article:t,paragraphIndex:n,sentences:a})}}}))(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getArticle=function(){ge.emit("get article",{articleId:n.props.articleId,category:n.props.category},(function(e){n.props.addArticle(e);var t=!0,a=!1,r=void 0;try{for(var c,o=(e.annotations||[])[Symbol.iterator]();!(t=(c=o.next()).done);t=!0){var i=c.value;n.props.addAnnotation(e,i.sentenceIndex,i.annotator,i.rank)}}catch(s){a=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}}))},n.blockContextMenu=function(e){return e.preventDefault()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getArticle()}},{key:"componentDidUpdate",value:function(e){e.articleId===this.props.articleId&&e.category===this.props.category||this.getArticle()}},{key:"componentWillUnmount",value:function(){ge.emit("leave article",{articleId:this.props.articleId,category:this.props.category})}},{key:"getParagraph",value:function(e,t){if(this.props.article){var n=[],a=this.props,c=a.article,o=a.articleId,i=a.category,s=a.displayOnly;if(this.props.article.paragraphToSentences&&this.props.article.paragraphToSentences[t])n=this.props.article.paragraphToSentences[t];else{for(var l=e.trim(),u=-1,d=-1,p=0;p<this.props.article.sentences.length;p++)if(l.startsWith(this.props.article.sentences[p])){if(-1===u&&(u=p),0===(l=l.slice(this.props.article.sentences[p].length).trim()).length){d=p;break}}else u=-1,l=e.trim();for(var h=u;h<=d;h++)n.push(h);this.props.updateParagraphToSentencesMap(c,t,n)}return r.a.createElement("p",{key:"paragraph-".concat(t)},n.map((function(e){return r.a.createElement("span",{key:"sentence-".concat(e)},r.a.createElement(Me,{articleId:o,category:i,sentenceIndex:e,plainText:s})," ")})))}}},{key:"render",value:function(){var e=this;return this.props.article?this.props.displayOnly?r.a.createElement("div",{className:"article-container"},this.props.article.paragraphs.map((function(t,n){return e.getParagraph(t,n)}))):r.a.createElement("div",{className:"article-container",onContextMenu:this.blockContextMenu},r.a.createElement(De,{articleId:"1",annotators:this.props.annotators}),this.props.article.paragraphs.map((function(t,n){return e.getParagraph(t,n)}))):r.a.createElement("div",{className:"article-container"})}}]),t}(r.a.Component)),Ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.history.push("/".concat(n.props.category,"/").concat(n.props.articleId))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.handleClick,className:"article-card-container"},r.a.createElement(we,Object.assign({},this.props,{displayOnly:!0})),r.a.createElement("div",{className:"article-container-mask"}),r.a.createElement("span",null,"Article ",this.props.articleId))}}]),t}(r.a.Component),Pe=Object(f.g)(Ue),He=Object(p.b)((function(e,t){return{articleIds:V(t.category)(e)}}))(function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=e.currentTarget;t.scrollTop+t.offsetHeight>=t.scrollHeight&&setTimeout((function(){n.setState((function(e){return{maxArticleCount:e.maxArticleCount+20}}))}),1e3)},n.state={maxArticleCount:20},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"article-card-panel-container",onScroll:this.handleScroll},(this.props.articleIds||[]).slice(0,this.state.maxArticleCount).map((function(t){return r.a.createElement(Pe,{category:e.props.category,articleId:t,key:"article-card-".concat(t)})})))}}]),t}(r.a.Component)),Ge=n(25),Ve=Object(p.b)(null,(function(e){return{setUsername:function(t){e({type:"CHANGE_USERNAME",username:t})}}}))(function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:""},n.handleChange=n.handleChange.bind(Object(Ge.a)(n)),n.changeUsername=n.changeUsername.bind(Object(Ge.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"changeUsername",value:function(){this.props.setUsername&&this.props.setUsername(this.state.username)}},{key:"render",value:function(){return r.a.createElement("div",{className:"username-container"},r.a.createElement("input",{placeholder:"Username",className:"username-input",onChange:this.handleChange}),r.a.createElement("span",{className:"username-button",onClick:this.changeUsername},"Set Username"))}}]),t}(r.a.Component)),Xe=Object(p.b)((function(e){return{isUserLoggedIn:B(e)}}))(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.isUserLoggedIn?r.a.createElement(h.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/:category/:articleId"},r.a.createElement(Ae,null)),r.a.createElement(f.b,{path:"/:category"},r.a.createElement(He,{category:"Question 1"})),r.a.createElement(f.b,{path:"/"},r.a.createElement(f.a,{to:"/Question 1"})))):r.a.createElement(Ve,null)}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,{store:oe},r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){e.exports=n(110)},68:function(e,t,n){},74:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.29b250f9.chunk.js.map