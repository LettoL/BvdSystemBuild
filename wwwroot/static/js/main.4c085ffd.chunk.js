(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{67:function(e,t,a){e.exports=a(77)},72:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),u=(a(72),a(12)),o=a.n(u),s=a(18),i=a(10),m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),c=Object(i.a)(l,2),u=c[0],m=c[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n,l,c,u,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,l=s.length>3&&void 0!==s[3]?s[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),l["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:l});case 8:return c=e.sent,e.next=11,c.json();case 11:if(u=e.sent,c.ok){e.next=14;break}throw new Error(u.message||"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return r(!1),e.abrupt("return",u);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),m(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(n.useCallback)((function(){return m(null)}),[])}},p=a(111),f=a(112),b=a(113),d=a(114),E=a(115),h=a(116),g=a(104),j=a(119),O=a(108),v=a(124),k=a(118),w=a(123),C=a(117),x=a(121),y=(Object(C.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),a(52)),S=function(){var e=P(),t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)([]),C=Object(i.a)(u,2),S=C[0],N=C[1],T=Object(n.useState)(0),I=Object(i.a)(T,2),D=I[0],J=I[1],L=Object(n.useState)(0),q=Object(i.a)(L,2),F=q[0],V=q[1],W=Object(n.useState)(10),B=Object(i.a)(W,2),G=B[0],H=B[1],M=m(),R=(M.loading,M.request),z=Object(n.useState)(null),A=Object(i.a)(z,2),K=A[0],Q=A[1],U=Object(n.useState)(null),X=Object(i.a)(U,2),Y=X[0],Z=X[1],$=Object(n.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("http://68.183.78.15/api/productsHistory");case 3:t=e.sent,c(t.map((function(e){return Object(y.a)({},e,{date:new Date(e.dateTime)})}))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[R]),_=Object(n.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("http://68.183.78.15/api/shops");case 3:t=e.sent,N(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[R]);return Object(n.useEffect)((function(){$(),_()}),[$,_]),r.a.createElement(g.a,null,r.a.createElement(O.a,{className:e.formControl},r.a.createElement(v.a,{id:"demo-simple-select-label"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(k.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:D,onChange:function(e){J(e.target.value)}},r.a.createElement(w.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d"),S.map((function(e){return r.a.createElement(w.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(O.a,{className:e.formControl},r.a.createElement(x.a,{label:"\u0414\u0430\u0442\u0430 \u0441",type:"date",defaultValue:"",className:e.textField,InputLabelProps:{shrink:!0},onChange:function(e){return Q(new Date(e.target.value))}})),r.a.createElement(O.a,{className:e.formControl},r.a.createElement(x.a,{label:"\u0414\u0430\u0442\u0430 \u043f\u043e",type:"date",defaultValue:"",className:e.textField,InputLabelProps:{shrink:!0},onChange:function(e){return Z(new Date(e.target.value))}})),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,"\u0414\u0430\u0442\u0430"),r.a.createElement(E.a,null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement(E.a,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(E.a,null,"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a"),r.a.createElement(E.a,null,"\u0422\u0438\u043f"),r.a.createElement(E.a,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"))),r.a.createElement(h.a,null,l.filter((function(e){return 0===D||e.shopId===D})).filter((function(e){return!K||e.date>=K})).filter((function(e){return!Y||e.date<=Y})).slice(F*G,F*G+G).map((function(e){return r.a.createElement(d.a,{key:e.id},r.a.createElement(E.a,null,e.date.toLocaleDateString()),r.a.createElement(E.a,null,e.productTitle),r.a.createElement(E.a,null,e.amount),r.a.createElement(E.a,null,e.supplierName),r.a.createElement(E.a,null,e.type),r.a.createElement(E.a,null,e.shopTitle))}))))),r.a.createElement(j.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:l.filter((function(e){return 0===D||e.shopId===D})).filter((function(e){return!K||e.date>=K})).filter((function(e){return!Y||e.date<=Y})).length,rowsPerPage:G,page:F,onChangePage:function(e,t){V(t)},onChangeRowsPerPage:function(e){H(+e.target.value),V(0)}}))},P=Object(C.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var N=function(){return r.a.createElement("div",null,r.a.createElement(S,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4c085ffd.chunk.js.map