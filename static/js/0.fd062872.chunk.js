(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{382:function(e,t,a){e.exports={markdownPreviewer:"style_markdownPreviewer__2WsNP"}},573:function(e,t,a){e.exports={editorContainer:"style_editorContainer__1Wmff",header:"style_header__1BwOO",titleInput:"style_titleInput__3EojG",fileds:"style_fileds__3fShH",checkLabel:"style_checkLabel__23t6_",submitButton:"style_submitButton__18BxS",editorContent:"style_editorContent__KEm5X"}},584:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(579),l=a(366),i=a(367),s=a(369),o=a(368),u=a(370),c=a(0),m=a.n(c),p=a(371),d=a.n(p),b=a(575),h=a(580),f=a(89),v=a(358),y=a(381),g=a.n(y),k=a(382),E=a.n(k),C=a(384),_=a.n(C);a(571);g.a.setOptions({breaks:!0,highlight:function(e){return _.a.highlightAuto(e).value}});var O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleInput=function(e){var t=a.props.onChange,n=a.editor.value;e.preventDefault(),"function"===typeof t&&t(n),a.preview.innerHTML=g()(n)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.defaultValue;e&&(this.preview.innerHTML=g()(e))}},{key:"render",value:function(){var e=this,t=this.props.defaultValue;return m.a.createElement("div",{className:E.a.markdownPreviewer},m.a.createElement("textarea",{id:"editor",spellCheck:"false",ref:function(t){return e.editor=t},onInput:this.handleInput,defaultValue:t}),m.a.createElement("section",{id:"preview",ref:function(t){return e.preview=t}}))}}]),t}(c.Component),w=a(88),j=a(573),N=a.n(j),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={title:"",body:"",milestone:void 0,labels:[]},a.handleChange=function(e){a.setState({body:e})},a.handleRadioClick=function(e){var t;if(e.stopPropagation(),"LABEL"===e.target.tagName?(e.preventDefault(),t=e.target.querySelector("input")):"INPUT"===e.target.tagName&&(t=e.target),t){var n=+t.value;a.state.milestone===n?a.setState({milestone:void 0}):a.setState({milestone:n})}return!1},a.handleCheckboxClick=function(e){var t;if(e.stopPropagation(),"LABEL"===e.target.tagName?(e.preventDefault(),t=e.target.querySelector("input")):"INPUT"===e.target.tagName&&(t=e.target),t){var n=a.state.labels,l=t.value,i=n.indexOf(l);-1!==i?(n.splice(i,1),a.setState({labels:Object(r.a)(n)})):(n.push(l),a.setState({labels:Object(r.a)(n)}))}return!1},a.handleSubmit=function(e){e.preventDefault(),e.stopPropagation();var t=a.props.dispatch,r=a.state,l=r.title,i=r.body,s=r.milestone,o=r.labels;if(l&&i&&s&&o){var u={title:l,body:i,labels:o,milestone:s,callback:function(e){a.props.history.push(e)}},c=a.number;c?t.repository.editIssue(Object(n.a)({},u,{number:c})):t.repository.createIssue(u)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.labelsList,a=e.milestonesList,n=e.dispatch,r=this.number;t.length&&a.length&&!r||n.repository.initEditor(r)}},{key:"componentWillUnmount",value:function(){this.props.dispatch.repository.closeCurrentIssue()}},{key:"render",value:function(){var e=this,t=this.props,a=t.labelsList,n=t.milestonesList,r=t.loading,l=this.number;return m.a.createElement(w.a,{loading:r},m.a.createElement("div",{className:N.a.editorContainer},m.a.createElement("header",{className:N.a.header},m.a.createElement("h2",null,"\u6587\u7ae0\u7f16\u8f91\u9875")),m.a.createElement("main",null,m.a.createElement("form",null,m.a.createElement("label",{className:N.a.fileds,htmlFor:"title"},"\u6807\u9898\uff1a",m.a.createElement("input",{className:N.a.titleInput,defaultValue:this.state.title,ref:function(t){return e.title=t},type:"text",id:"title"})),m.a.createElement("label",{className:d()(N.a.fileds,N.a.editorContent),htmlFor:"editor"},"\u5185\u5bb9\uff1a",m.a.createElement(O,{defaultValue:this.state.body,onChange:this.handleChange})),m.a.createElement("label",{className:N.a.fileds,htmlFor:"milestone"},"\u5206\u7c7b\uff1a",n.map(function(t){return m.a.createElement("label",{key:t.id,className:N.a.checkLabel,onClick:e.handleRadioClick},m.a.createElement("input",{readOnly:!0,type:"radio",name:"categories",value:t.number,checked:e.state.milestone===t.number}),t.title)})),m.a.createElement("label",{className:N.a.fileds,htmlFor:"labels"},"\u6807\u7b7e\uff1a",a.map(function(t){return m.a.createElement("label",{key:t.id,className:N.a.checkLabel,onClick:e.handleCheckboxClick},m.a.createElement("input",{readOnly:!0,type:"checkbox",value:t.name,name:"label-".concat(t.name),checked:-1!==e.state.labels.indexOf(t.name)}),t.name)})),m.a.createElement("input",{type:"submit",value:l?"\u4fee\u6539":"\u521b\u5efa",className:N.a.submitButton,onClick:this.handleSubmit}))),m.a.createElement("footer",null,m.a.createElement("p",null,"Copyright \xa9",(new Date).getFullYear()," Roy Zhi"))))}},{key:"number",get:function(){return Object(b.a)(function(e){return e.params.number})(this.props.match)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.match,n=e.currentIssue,r=e.milestonesMap,l=e.labelsMap,i=t.prevCurrentIssue,s=a.params.number;if(s&&n&&n.number===+s&&n!==i){var o=n.title||"",u=n.body||"",c=r[n.milestone].number||"",m=n.labels&&n.labels.nodes&&n.labels.nodes.map(function(e){return l[e].name})||[];return{prevCurrentIssue:n,title:o,body:u,milestone:c,labels:m}}return null}}]),t}(c.PureComponent),I=Object(v.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.labels},function(e){return e.entities.milestones},function(e){return e.entities.issues}],function(e,t,a,n,r,l){var i,s=[],o=[],u=a[e];if(u&&u.labels&&u.labels.nodes&&u.milestones&&u.milestones.nodes){s=u.labels.nodes.map(function(e){return n[e]}),o=u.milestones.nodes.map(function(e){return r[e]});var c=u.issue;c&&(i=l[c])}return{loading:t,labelsMap:n,labelsList:s,milestonesMap:r,milestonesList:o,currentIssue:i}});t.default=Object(f.b)(I)(Object(h.a)(L))}}]);
//# sourceMappingURL=0.fd062872.chunk.js.map