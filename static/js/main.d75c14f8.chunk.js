(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"data":[{"question":"What gender groups(s) are needed for this Division?","choices":["Men","Womens","Co-ed"],"id":"1"},{"question":"What is the age range needed for this Division ?","choices":["26-U","40-U","50-U","60-U","70-U"]},{"question":"What are your relevant skills mentioned here?","choices":["A","AA","AAA","Novice","Masters"]},{"question":"Choose your team here out from below YO..! ?","choices":["Sunriser Hyderabad","Barcelona","Manchestar club","Mumbai indians"]}]}')},15:function(e){e.exports=JSON.parse('{"data":[{"question":"What gender groups(s) are needed for this Division?","choices":["Men","Womens","Co-ed"]},{"question":"What is the age range needed for this Division ?","choices":["13-U","14-U","15-U","16-U","17-U"]},{"question":"What are your relevant skills mentioned here?","choices":["Bronze","Silver","Gold","High School","Club"]},{"question":"Choose your team here out from below YO..! ?","choices":["Sunriser Hyderabad","Barcelona","Manchestar club","Mumbai indians"]}]}')},31:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),i=c(11),o=c.n(i),r=c(4),l=(c(31),c(3)),d=c(8),j=c(25),b=function(e){var t=e.onQuizStart;return Object(n.jsx)("div",{className:"start",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{children:"Start Choosing"}),Object(n.jsx)("p",{children:"Hope You Like it vDoit \ud83d\ude0a"}),Object(n.jsx)("p",{children:"Thank you for the opportunity \u2714\ufe0f"}),Object(n.jsx)("div",{className:"start",children:Object(n.jsx)("button",{className:"button is-primary is-medium",onClick:t,style:{backgroundColor:"red"},children:"Start"})})]})})})})},u=c(22),h=function(e){var t=e.data,c=e.onAnswerUpdate,a=e.numberOfQuestions,i=e.activeQuestion,o=e.onSetActiveQuestion,l=e.onSetStep,j=e.changeVisible,b=Object(s.useState)([]),h=Object(r.a)(b,2),O=h[0],x=h[1],m=Object(s.useState)(""),f=Object(r.a)(m,2),p=f[0],g=f[1],v=Object(s.useRef)(),N=Object(s.useState)(!1),S=Object(r.a)(N,2),k=S[0],C=S[1];Object(s.useEffect)((function(){var e=v.current.querySelectorAll("input:checked").forEach((function(e){return e.checked=!1}));e&&(e.checked=!1)}),[t]);var y=function(e){x((function(t){return[].concat(Object(u.a)(t),[e.target.value])})),p&&g("")};return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)(d.a,{children:[Object(n.jsxs)("div",{class:"card-header",children:[Object(n.jsx)("p",{class:"card-header-title",style:{color:"#6e6e6e",fontWeight:"bolder",marginBottom:"3%"},children:"2/10"}),Object(n.jsx)("span",{class:"icon",style:{color:"#6e6e6e",fontWeight:"bolder",marginTop:"1%",marginRight:"2%"},onClick:j,children:Object(n.jsx)(d.b,{to:"/questionOne",children:Object(n.jsx)("i",{class:"fa fa-times"})})})]}),Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{className:"mb-5",style:{textAlign:"center",fontWeight:"bolder",color:"#6e6e6e",marginTop:"5%"},children:t.question}),Object(n.jsx)("p",{style:{textAlign:"center",color:"#ccbebe",fontSize:"18px",marginTop:"-1%",fontWeight:"bolder"},children:"make selection based on options below"}),Object(n.jsx)("div",{className:"checkit",style:{marginLeft:"10%",textAlign:"center",color:"#6e6e6e",fontSize:"15px",fontWeight:"bolder"},children:Object(n.jsx)("div",{className:"control",ref:v,children:t.choices.map((function(e,t){return Object(n.jsxs)("label",{className:"radio",children:[Object(n.jsx)("input",{type:"checkbox",className:"custombox",name:"answer",value:e,onChange:y}),Object(n.jsxs)("span",{children:["  ",e," "]})]},t)}))})}),Object(n.jsxs)("div",{className:"butttons",style:{marginLeft:"45%",marginTop:"7%"},children:[p&&Object(n.jsx)("div",{className:"has-text-danger",children:p}),k&&Object(n.jsx)("button",{className:"btn btn-outline-warning btn-sm",onClick:function(){C(i-1>0),o(i-1)},children:"Back"}),Object(n.jsx)("button",{className:"btn btn-warning next",onClick:function(e){if(""===O)return g("Please select one option!");0!=v.current.querySelectorAll("input:checked").length?(c((function(e){return[].concat(Object(u.a)(e),[{q:t.question,a:O}])})),console.log(O),x([]),i<a-1?o(i+1):l(3),C(i+1>0)):alert("Please select atleast one option")},children:"Next"})]})]})})]})})},O=function(e){var t=e.results,c=e.data,a=e.onReset,i=e.onAnswersCheck,o=(e.time,Object(s.useState)(0)),l=Object(r.a)(o,2);l[0],l[1];return Object(s.useEffect)((function(){t.forEach((function(e,t){e.a===c[t].answer&&0}))}),[]),Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h3",{children:"Your results"}),Object(n.jsx)("button",{className:"button is-success mr-2",onClick:i,children:"Check your Submission"}),Object(n.jsx)("button",{className:"button is-info",onClick:a,children:"Submit again"})]})})})},x=function(e){var t=e.onClose,c=e.results,s=e.data;return Object(n.jsxs)("div",{className:"modal is-active",children:[Object(n.jsx)("div",{className:"modal-background",onClick:t}),Object(n.jsxs)("div",{className:"modal-card",children:[Object(n.jsxs)("header",{className:"modal-card-head",children:[Object(n.jsx)("p",{className:"modal-card-title",children:"You Choosed"}),Object(n.jsx)("button",{className:"delete",onClick:t})]}),Object(n.jsx)("section",{className:"modal-card-body content",children:Object(n.jsx)("ul",{style:{textDecoration:"none"},children:c.map((function(e,t){return Object(n.jsxs)("li",{className:"mb-6",children:[Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:e.q})}),Object(n.jsxs)("p",{className:(e.a,s[t].answer,"has-background-success has-text-white p-2"),children:["You Choosed: ",e.a+" "]})]},t)}))})})]})]})},m=c(14),f=c(15);var p=function(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],i=c[1],o=Object(s.useState)(!0),l=Object(r.a)(o,2),d=l[0],u=l[1],p=Object(s.useState)(!1),g=Object(r.a)(p,2),v=g[0],N=g[1],S=Object(s.useState)(!1),k=Object(r.a)(S,2),C=k[0],y=k[1],A=Object(s.useState)(2),q=Object(r.a)(A,2),w=q[0],W=q[1],U=Object(s.useState)(0),z=Object(r.a)(U,2),Q=z[0],T=z[1],B=Object(s.useState)([]),D=Object(r.a)(B,2),M=D[0],Y=D[1],L=Object(s.useState)(!1),R=Object(r.a)(L,2),E=R[0],H=R[1],J=Object(s.useState)(0),P=Object(r.a)(J,2),F=P[0],I=P[1],V=function(){W(2),setInterval((function(){I((function(e){return e+1}))}),1e3)},G=function(){T(0),Y([]),W(2),I(0),setInterval((function(){I((function(e){return e+1}))}),1e3)},K=function(){N(!1),y(!1),u(!0)};return Object(n.jsxs)("div",{className:"selection",children:[d&&Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("header",{class:"card-header",children:[Object(n.jsx)("p",{class:"card-header-title",style:{fontSize:"18px",color:"#6e6e6e",fontWeight:"bolder"},children:"1/10"}),Object(n.jsx)("span",{class:"icon",style:{color:"#6e6e6e",fontWeight:"bolder",marginTop:"1%",marginRight:"2%"},children:Object(n.jsx)("i",{class:"fa fa-times"})})]}),Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{className:"mb-5 question"}),Object(n.jsxs)("div",{className:"selectit",children:[Object(n.jsx)("h3",{style:{textAlign:"center",fontWeight:"bolder",color:"#504242",fontSize:"25px"},children:"what type of age bracket is needed?"}),Object(n.jsx)("p",{style:{textAlign:"center",color:"#6e6e6e",fontSize:"20px",fontWeight:"bolder",marginTop:"-1%"},children:"make selection based on desired age group"})]}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("div",{className:"selectit",children:Object(n.jsx)(j.a,{onChange:function(e){console.log(e),i(e.value)},options:[{value:"adult",label:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Adult"},{value:"junior",label:"\ud83e\udd3c Junior"}],placeholder:Object(n.jsx)("div",{style:{color:"#6e6e6e",fontSize:"18px",fontWeight:"bolder"},children:"\ud83c\udf70 \xa0Age Bracket"})})})}),Object(n.jsxs)("div",{className:"btnss",style:{marginTop:"10%"},children:["\xa0",Object(n.jsx)("button",{onClick:function(){},className:"btn btn-outline-warning btn-sm",children:"Back"}),Object(n.jsx)("button",{onClick:function(){"adult"===a?(u(!1),console.log("adult is selected"),N(!0)):"junior"===a?(u(!1),console.log("junior is selected"),y(!0)):alert("Please select an option")},className:"btn btn-warning next",children:"Next"})]})]})})]}),Object(n.jsx)("div",{children:v&&Object(n.jsxs)("div",{className:"App",children:[1===w&&Object(n.jsx)(b,{onQuizStart:V}),2===w&&Object(n.jsx)(h,{data:m.data[Q],onAnswerUpdate:Y,numberOfQuestions:m.data.length,activeQuestion:Q,onSetActiveQuestion:T,onSetStep:W,changeVisible:K}),3===w&&Object(n.jsx)(O,{results:M,data:m.data,onReset:G,onAnswersCheck:function(){return H(!0)},time:F}),E&&Object(n.jsx)(x,{onClose:function(){return H(!1)},results:M,data:m.data})]})}),Object(n.jsx)("div",{children:C&&Object(n.jsxs)("div",{className:"App",children:[1===w&&Object(n.jsx)(b,{onQuizStart:V}),2===w&&Object(n.jsx)(h,{data:f.data[Q],onAnswerUpdate:Y,numberOfQuestions:f.data.length,activeQuestion:Q,onSetActiveQuestion:T,onSetStep:W,changeVisible:K}),3===w&&Object(n.jsx)(O,{results:M,data:f.data,onReset:G,onAnswersCheck:function(){return H(!0)},time:F}),E&&Object(n.jsx)(x,{onClose:function(){return H(!1)},results:M,data:f.data})]})})]})},g=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(l.c,{children:Object(n.jsx)(l.a,{exact:!0,path:"/questionOne",component:p})}),c&&Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{children:"Start Choosing"}),Object(n.jsx)("p",{children:"Hope You Like it vDoit \ud83d\ude0a"}),Object(n.jsx)("p",{children:"Thank you for the opportunity \u2714\ufe0f"}),Object(n.jsx)("button",{className:"button is-info is-medium",onClick:function(){a(!1)},children:Object(n.jsx)(d.b,{to:"/questionOne",children:"Start"})})]})})})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(49);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.d75c14f8.chunk.js.map