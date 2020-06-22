(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{119:function(e,t,a){e.exports=a(134)},124:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),u=(a(124),a(6)),o=a(25),i=a(48),m=a(28),s=a(7),p=a.n(s),d=a(11),b=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),c=Object(u.a)(l,2),o=c[0],i=c[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,l,c,u,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,l=o.length>3&&void 0!==o[3]?o[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),l["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:l});case 8:return c=e.sent,e.next=11,c.json();case 11:if(u=e.sent,c.ok){e.next=14;break}throw new Error(u.errors[0]||"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return r(!1),e.abrupt("return",u);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(n.useCallback)((function(){return i(null)}),[])}},E="http://68.183.78.15/",f=a(10),j=a(31),O=a(191),h=a(171),g=a(159),v=a(135),y=a(168),C=a(68),x=a(169),k=function(e){var t=w(),a=e.product,n=e.editProduct,l=function(e){var t=Object(m.a)({},a,Object(j.a)({},e.target.name,[e.target.value]));n(t)};return r.a.createElement(g.a,{container:!0},r.a.createElement(v.a,{key:a.number},r.a.createElement(g.a,{item:!0,xs:1},r.a.createElement(C.a,{variant:"h6"},a.number)),r.a.createElement(g.a,{item:!0,container:!0,xs:11},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(O.a,{value:a.title,variant:"outlined",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",size:"small",name:"title",onChange:l,className:t.maxWidth})),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(O.a,{value:a.code,variant:"outlined",label:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",size:"small",name:"code",onChange:l,className:t.maxWidth})),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(O.a,{className:t.maxWidth,value:a.amount,variant:"outlined",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",size:"small",name:"amount",onChange:l})),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(O.a,{value:a.price,variant:"outlined",label:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",size:"small",name:"price",onChange:l,className:t.maxWidth})))),r.a.createElement(y.a,{variant:"inset",component:"li"}))},w=Object(x.a)((function(e){return{maxWidth:{width:"100%",padding:5}}})),P=a(167),S=a(185),I=a(165),N=a(193),T=a(170),D=a(172),F=function(e){var t=W(),a=e.shops,l=e.suppliers,c=e.categories,o=e.saveForm,i=e.loading,s=e.error,p=e.success,d=Object(n.useState)({productsText:"",shop:null,supplier:null,supplyType:null,category:null}),b=Object(u.a)(d,2),E=b[0],v=b[1],y=Object(n.useState)([]),C=Object(u.a)(y,2),x=C[0],w=C[1],F=Object(n.useState)(!1),L=Object(u.a)(F,2),J=L[0],M=L[1],R=function(e){v(Object(m.a)({},E,Object(j.a)({},e.target.name,e.target.value)))},A=function(e){var t=x.findIndex((function(t){return t.number===e.number}));w([].concat(Object(f.a)(x.slice(0,t)),[e],Object(f.a)(x.slice(t+1))))};return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(S.a,{labelId:"shop-select",value:E.shop,onChange:R,name:"shop"},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d"),a.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"),r.a.createElement(S.a,{labelId:"shop-select",value:E.supplier,onChange:R,name:"supplier"},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"),l.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.name)})))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430"),r.a.createElement(S.a,{labelId:"shop-select",value:E.supplyType,onChange:R,name:"supplyType"},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430"),r.a.createElement(T.a,{value:1},"\u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440"),r.a.createElement(T.a,{value:2},"\u0422\u043e\u0432\u0430\u0440 \u043f\u043e\u0434 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e"),r.a.createElement(T.a,{value:3},"\u041e\u0442\u0441\u0440\u043e\u0447\u0435\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0451\u0436"))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement(S.a,{labelId:"shop-select",value:E.category,onChange:R,name:"category"},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),c.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement("br",null),r.a.createElement(O.a,{label:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",multiline:!0,rows:10,variant:"outlined",value:E.productsText,onChange:R,name:"productsText",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){if(!(E.productsText.length<=0)){var e=E.productsText.split("\n").map((function(e){return e.split("\t")})).map((function(e){return{number:+e[0].replace(",",".").replace(/\s+/g,""),code:e[1],title:e[2],amount:+e[3].replace(",",".").replace(/\s+/g,""),price:+e[5].replace(",",".").replace(/\s+/g,""),sum:+e[6].replace(",",".").replace(/\s+/g,"")}}));w(e)}}},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){M(!0);var e=x.map((function(e){return Object(m.a)({},e,Object(j.a)({},"price",e.price+""))}));o(Object(m.a)({},E,{products:e}))},disabled:J},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement("br",null),r.a.createElement("br",null),i&&r.a.createElement(D.a,null),s&&r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430: ",s),p&&r.a.createElement("p",null,"\u0423\u0441\u043f\u0435\u0445!")),r.a.createElement(g.a,{item:!0,xs:7},r.a.createElement(P.a,null,x.map((function(e){return r.a.createElement(k,{key:e.number,product:e,editProduct:A})})))))},W=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),L=E,J=function(){var e=b(),t=e.request,a=e.loading,l=e.error,c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],s=o[1],E=Object(n.useState)([]),f=Object(u.a)(E,2),j=f[0],O=f[1],h=Object(n.useState)([]),g=Object(u.a)(h,2),v=g[0],y=g[1],C=Object(n.useState)(!1),x=Object(u.a)(C,2),k=x[0],w=x[1],P=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(L+"api/shops");case 3:a=e.sent,s(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]),S=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(L+"api/categories");case 3:a=e.sent,O(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]),I=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(L+"api/suppliers");case 3:a=e.sent,y(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);Object(n.useEffect)((function(){P(),S(),I()}),[P,S,I]);var N=function(){var e=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(L+"api/supplyProducts/import","POST",Object(m.a)({},a));case 3:e.sent,w(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(F,{shops:i,suppliers:v,categories:j,saveForm:N,loading:a,error:l,success:k})},M=a(18),R=a(8),A=E+"api/products",H=Object(R.e)(),q=Object(R.e)(),z=Object(R.e)(),B=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(A);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),V=Object(R.f)([]).on(B.doneData,(function(e,t){return Object(f.a)(t)})),K=Object(R.f)(0).on(H,(function(e,t){return t})),G=Object(R.f)(0).on(q,(function(e,t){return t})),Q=Object(R.f)("").on(z,(function(e,t){return t})),U=Object(R.b)(V,K,G,Q,(function(e,t,a,n){return e.filter((function(e){return 0===t||e.shopId===t})).filter((function(e){return 0===a||e.categoryId===a})).filter((function(e){return""===n||e.title.toLowerCase().includes(n.toLowerCase())}))})),X=E+"api/shops",Y=E+"api/categories",Z=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),$=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Y);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),_=Object(R.f)([]).on(Z.doneData,(function(e,t){return Object(f.a)(t)})),ee=Object(R.f)([]).on($.doneData,(function(e,t){return Object(f.a)(t)})),te=function(){var e=ae(),t=Object(M.a)(K),a=Object(M.a)(G),l=Object(M.a)(_),c=Object(M.a)(ee);return Object(n.useEffect)((function(){$(),Z()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:e.formControl},r.a.createElement(N.a,{id:"demo-simple-select-label"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(S.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:function(e){H(e.target.value)}},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d"),l.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(N.a,{id:"demo-simple-select-label"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement(S.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:function(e){q(e.target.value)}},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),c.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(O.a,{label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",onChange:function(e){z(e.target.value)}})))},ae=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),ne=a(174),re=a(175),le=a(176),ce=a(177),ue=a(178),oe=a(173),ie=function(e){var t=e.products,a=e.page,n=e.rowsPerPage,l=e.handleOpenDialog;return r.a.createElement(oe.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,"\u0410\u0440\u0442\u0438\u043a\u0443\u043b"),r.a.createElement(ce.a,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(ce.a,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(ce.a,null,"\u0426\u0435\u043d\u0430"),r.a.createElement(ce.a,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(ce.a,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement(ce.a,null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),r.a.createElement(ue.a,null,t.slice(a*n,a*n+n).map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(ce.a,null,e.code),r.a.createElement(ce.a,null,e.title),r.a.createElement(ce.a,null,e.amount),r.a.createElement(ce.a,null,e.price),r.a.createElement(ce.a,null,e.shop),r.a.createElement(ce.a,null,e.category),r.a.createElement(ce.a,null,r.a.createElement(h.a,{variant:"contained",onClick:l.bind(void 0,e)},"Detail")))})))))},me=a(188),se=function(e){var t=e.products,a=e.rowsPerPage,n=e.page,l=e.handleChangePage,c=e.handleChangeRowsPerPage;return r.a.createElement(me.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:t.length,rowsPerPage:a,page:n,onChangePage:l,onChangeRowsPerPage:c})},pe=a(189),de=a(181),be=a(182),Ee=a(104),fe=function(){var e=je(),t=Object(M.a)(U),a=Object(n.useState)(0),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(10),m=Object(u.a)(i,2),s=m[0],p=m[1],d=Object(n.useState)(!1),b=Object(u.a)(d,2),E=b[0],f=b[1],j=Object(n.useState)(null),h=Object(u.a)(j,2),g=(h[0],h[1]);Object(n.useEffect)((function(){B()}),[]);var v=t.map((function(e){return{code:e.code,title:e.title,amount:e.amount,price:e.price,shop:e.shop,category:e.category}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.CSVLink,{data:v,headers:[{label:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",key:"code"},{label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",key:"title"},{label:"\u041a\u043e\u043b-\u0432\u043e",key:"amount"},{label:"\u0426\u0435\u043d\u0430",key:"price"},{label:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d",key:"shop"},{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",key:"category"}],separator:";"},"Download me"),";",r.a.createElement(te,null),r.a.createElement(ie,{products:t,page:c,rowsPerPage:s,handleOpenDialog:function(e){g(e),f(!0)}}),r.a.createElement(se,{products:t,rowsPerPage:s,page:c,handleChangePage:function(e,t){o(t)},handleChangeRowsPerPage:function(e){p(+e.target.value),o(0)}}),r.a.createElement(pe.a,{open:E,onClose:function(){f(!1)}},r.a.createElement(de.a,null,"Product"),r.a.createElement(be.a,null,r.a.createElement(O.a,{autoFocus:!0,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",margin:"dense"}),r.a.createElement(O.a,{label:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",type:"text",margin:"dense"}),r.a.createElement(O.a,{label:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0438",type:"number",margin:"dense"}),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(N.a,{id:"category-select"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement(S.a,{labelId:"category-select"},r.a.createElement(T.a,null,"1111"))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(S.a,{labelId:"shop-select"},r.a.createElement(T.a,null,"1111"))))))},je=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),Oe=function(){var e=b(),t=e.loading;e.request,Object(M.a)(U);return Object(n.useEffect)((function(){B()}),[]),t?r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):r.a.createElement(fe,null)},he=a(21),ge=a(184),ve=a(66),ye=E,Ce=function(){var e=xe(),t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],E=i[1],f=Object(n.useState)(0),j=Object(u.a)(f,2),h=j[0],g=j[1],v=Object(n.useState)(0),y=Object(u.a)(v,2),C=y[0],x=y[1],k=Object(n.useState)(10),w=Object(u.a)(k,2),P=w[0],D=w[1],F=b(),W=(F.loading,F.request),L=Object(n.useState)(null),J=Object(u.a)(L,2),M=J[0],R=J[1],A=Object(n.useState)(null),H=Object(u.a)(A,2),q=H[0],z=H[1],B=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(ye+"api/productsHistory");case 3:t=e.sent,c(t.map((function(e){return Object(m.a)({},e,{date:new Date(e.dateTime)})}))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[W]),V=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(ye+"api/shops");case 3:t=e.sent,E(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[W]);return Object(n.useEffect)((function(){B(),V()}),[B,V]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:e.formControl},r.a.createElement(N.a,{id:"demo-simple-select-label"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(S.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,onChange:function(e){g(e.target.value)}},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d"),s.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(O.a,{label:"\u0414\u0430\u0442\u0430 \u0441",type:"date",defaultValue:"",className:e.textField,InputLabelProps:{shrink:!0},onChange:function(e){return R(new Date(e.target.value))}})),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(he.a,{utils:ve.a},r.a.createElement(ge.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u0441",value:M,onChange:function(e){return R(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(O.a,{label:"\u0414\u0430\u0442\u0430 \u043f\u043e",type:"date",defaultValue:"",className:e.textField,InputLabelProps:{shrink:!0},onChange:function(e){return z(new Date(e.target.value))}})),r.a.createElement(oe.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,"\u0414\u0430\u0442\u0430"),r.a.createElement(ce.a,null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement(ce.a,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(ce.a,null,"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a"),r.a.createElement(ce.a,null,"\u0422\u0438\u043f"),r.a.createElement(ce.a,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"))),r.a.createElement(ue.a,null,l.filter((function(e){return 0===h||e.shopId===h})).filter((function(e){return!M||e.date>=M})).filter((function(e){return!q||e.date<=q})).slice(C*P,C*P+P).map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(ce.a,null,e.date.toLocaleDateString()),r.a.createElement(ce.a,null,e.productTitle),r.a.createElement(ce.a,null,e.amount),r.a.createElement(ce.a,null,e.supplierName),r.a.createElement(ce.a,null,e.type),r.a.createElement(ce.a,null,e.shopTitle))}))))),r.a.createElement(me.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:l.filter((function(e){return 0===h||e.shopId===h})).filter((function(e){return!M||e.date>=M})).filter((function(e){return!q||e.date<=q})).length,rowsPerPage:P,page:C,onChangePage:function(e,t){x(t)},onChangeRowsPerPage:function(e){D(+e.target.value),x(0)}}))},xe=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),ke=function(e){var t=we(),a=e.index,n=e.changeFormHandler,l=e.supplyProduct,c=l.productId,u=l.amount,o=l.shopId,i=l.supplierId,m=l.procurementCost,s=function(e){n(a,e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"product-select"},"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement(S.a,{labelId:"product-select",name:"productId",value:c,onChange:s},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),[{id:1,title:"product1"},{id:2,title:"product2"}].map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(O.a,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",value:u,onChange:s,name:"amount"})),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"shop-select"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(S.a,{labelId:"shop-select",name:"shopId",value:o,onChange:s},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d"),[{id:2,title:"shop1"}].map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(N.a,{id:"supplier-select"},"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a"),r.a.createElement(S.a,{labelId:"supplier-select",name:"supplierId",value:i,onChange:s},r.a.createElement(T.a,{value:0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0448\u0438\u043a\u0430"),[{id:1,title:"supplier1"}].map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)})))),r.a.createElement(I.a,{className:t.formControl},r.a.createElement(O.a,{label:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",value:m,onChange:s,name:"procurementCost"})))},we=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),Pe=function(){Se();var e=Object(n.useState)([{productId:0,amount:0,shopId:0,supplierId:0,procurementCost:0}]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(e,t){var n=a[e],r=Object(m.a)({},n,Object(j.a)({},t.target.name,t.target.value));l([].concat(Object(f.a)(a.slice(0,e)),[r],Object(f.a)(a.slice(e+1))))};return r.a.createElement(r.a.Fragment,null,a.map((function(e,t){return r.a.createElement(ke,{key:t,supplyProduct:e,changeFormHandler:c,index:t})})),r.a.createElement(h.a,{onClick:function(){l([].concat(Object(f.a)(a),[{productId:0,amount:0,shopId:0,supplierId:0,procurementCost:0}]))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),r.a.createElement(h.a,{onClick:function(){console.log(a)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},Se=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),Ie=E+"api/shops",Ne=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Ie);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),Te=Object(R.d)({handler:function(e){return Object(d.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e},t.next=3,fetch(Ie,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}}),t)})))()}}),De=Object(R.f)([]).on(Ne.doneData,(function(e,t){return Object(f.a)(t)})).on(Te.doneData,(function(e,t){return[].concat(Object(f.a)(e),[t])})),Fe=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:function(e){return l(e.target.value)},name:"title"}),r.a.createElement(h.a,{onClick:function(){m(!0),Te(a),l(""),m(!1)},variant:"contained",color:"primary",disabled:i},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},We=function(){Object(n.useEffect)((function(){Ne()}),[]);var e=Object(M.a)(De);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,null),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",null,e.id," / ",e.title)}))))},Le=E+"api/suppliers",Je=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Le);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),Me=Object(R.d)({handler:function(e,t,a){return Object(d.a)(p.a.mark((function n(){var r,l;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:e,phone:t,email:a},n.next=3,fetch(Le,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)});case 3:return l=n.sent,n.abrupt("return",l.json());case 5:case"end":return n.stop()}}),n)})))()}}),Re=Object(R.f)([]).on(Je.doneData,(function(e,t){return Object(f.a)(t)})).on(Me.doneData,(function(e,t){return[].concat(Object(f.a)(e),[t])})),Ae=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(""),p=Object(u.a)(s,2),d=p[0],b=p[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),j=f[0],g=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{label:"\u0418\u043c\u044f \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430",value:a,onChange:function(e){return l(e.target.value)},name:"name"}),r.a.createElement(O.a,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",value:i,onChange:function(e){return m(e.target.value)},name:"phone"}),r.a.createElement(O.a,{label:"\u041f\u043e\u0447\u0442\u0430",value:d,onChange:function(e){return b(e.target.value)},name:"email"}),r.a.createElement(h.a,{onClick:function(){g(!0),Me(a,i,d),l(""),g(!1)},variant:"contained",color:"primary",disabled:j},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},He=function(){Object(n.useEffect)((function(){Je()}),[]);var e=Object(M.a)(Re);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",null,e.id," / ",e.name)}))))},qe=E+"api/categories",ze=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(qe);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),Be=Object(R.d)({handler:function(e){return Object(d.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:e},t.next=3,fetch(qe,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}}),t)})))()}}),Ve=Object(R.f)([]).on(ze.doneData,(function(e,t){return Object(f.a)(t)})).on(Be.doneData,(function(e,t){return[].concat(Object(f.a)(e),[t])})),Ke=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:function(e){return l(e.target.value)},name:"title"}),r.a.createElement(h.a,{onClick:function(){m(!0),Be(a),l(""),m(!1)},variant:"contained",color:"primary",disabled:i},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},Ge=function(){Object(n.useEffect)((function(){ze()}),[]);var e=Object(M.a)(Ve);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke,null),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",null,e.id," / ",e.title)}))))},Qe=E+"api/supplyProducts",Ue=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Qe);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),Xe=Object(R.f)([]).on(Ue.doneData,(function(e,t){return Object(f.a)(t)})),Ye=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(10),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(0),p=Object(u.a)(s,2),d=p[0],b=p[1];Object(n.useEffect)((function(){Ue()}),[]);var E=Object(M.a)(Xe);return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(O.a,{label:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",defaultValue:"0",onChange:function(e){return b(e.target.value)}})),r.a.createElement(oe.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,"Id"),r.a.createElement(ce.a,null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement(ce.a,null,"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"),r.a.createElement(ce.a,null,"\u041a\u043e\u043b-\u0432\u043e \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435"),r.a.createElement(ce.a,null,"\u041f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e"),r.a.createElement(ce.a,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(ce.a,null,"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a"))),r.a.createElement(ue.a,null,E.filter((function(e){return e.procurementCost>=d})).slice(a*i,a*i+i).map((function(e){return r.a.createElement(le.a,{key:e.supplyProductId},r.a.createElement(ce.a,null,e.supplyProductId),r.a.createElement(ce.a,null,e.productTitle),r.a.createElement(ce.a,null,e.procurementCost),r.a.createElement(ce.a,null,e.shopAmount),r.a.createElement(ce.a,null,e.suppliedAmount),r.a.createElement(ce.a,null,e.shopTitle),r.a.createElement(ce.a,null,e.supplierName))}))))),r.a.createElement(me.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:E.filter((function(e){return e.procurementCost>=d})).length,rowsPerPage:i,page:a,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){m(+e.target.value),l(0)}}))},Ze=E+"api/managers",$e=Object(R.d)({handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Ze);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()}}),_e=Object(R.d)({handler:function(e){return Object(d.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,t.next=3,fetch(Ze+"/filter",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 3:return n=t.sent,t.abrupt("return",n.json());case 5:case"end":return t.stop()}}),t)})))()}}),et=Object(R.f)([]).on($e.doneData,(function(e,t){return Object(f.a)(t)})).on(_e.doneData,(function(e,t){return Object(f.a)(t)})),tt=function(){var e=at(),t=Object(n.useState)(null),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),m=i[0],s=i[1],p=Object(M.a)(et);return Object(n.useEffect)((function(){$e()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:e.formControl},r.a.createElement(he.a,{utils:ve.a},r.a.createElement(ge.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u0441",value:l,onChange:function(e){return c(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(I.a,{className:e.formControl},r.a.createElement(he.a,{utils:ve.a},r.a.createElement(ge.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u043f\u043e",value:m,onChange:function(e){return s(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(h.a,{onClick:function(){console.log(l,m),_e({startDate:l,endDate:m})}},"\u041f\u043e\u0438\u0441\u043a"),r.a.createElement(oe.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,"\u0418\u043c\u044f"),r.a.createElement(ce.a,null,"\u041c\u0430\u0440\u0436\u0430"),r.a.createElement(ce.a,null,"\u041e\u0431\u043e\u0440\u043e\u0442"))),r.a.createElement(ue.a,null,p.map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(ce.a,null,e.name),r.a.createElement(ce.a,null,e.margin),r.a.createElement(ce.a,null,e.sum))}))))))},at=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),nt=a(183),rt=function(){return r.a.createElement(P.a,null,r.a.createElement(v.a,null,r.a.createElement("a",{href:"/"},"\u0421\u0442\u0430\u0440\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441")),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/import"},r.a.createElement(nt.a,{primary:"\u0418\u043c\u043f\u043e\u0440\u0442"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/supply"},r.a.createElement(nt.a,{primary:"\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/supplyProductsList"},r.a.createElement(nt.a,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u0430\u0432\u043e\u043a"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/managers"},r.a.createElement(nt.a,{primary:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/products"},r.a.createElement(nt.a,{primary:"\u0412\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/productsHistory"},r.a.createElement(nt.a,{primary:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u043e\u0432"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/shops"},r.a.createElement(nt.a,{primary:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/suppliers"},r.a.createElement(nt.a,{primary:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(o.b,{to:"/admin/categories"},r.a.createElement(nt.a,{primary:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}))))},lt=Object(x.a)((function(e){return{root:{flexGrow:1}}})),ct=function(e){var t=lt();return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{container:!0,spacing:3},r.a.createElement(g.a,{item:!0,xs:1},r.a.createElement(rt,null)),r.a.createElement(g.a,{container:!0,item:!0,xs:11},e.page)))},ut=Object(n.createContext)({userId:null,userRole:"",isAuth:!1}),ot=a(186);var it=function(){var e=r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/admin/import",exact:!0},r.a.createElement(J,null)),r.a.createElement(i.b,{path:"/admin/supply",exact:!0},r.a.createElement(Pe,null)),r.a.createElement(i.b,{path:"/admin/products",exact:!0},r.a.createElement(Oe,null)),r.a.createElement(i.b,{path:"/admin/productsHistory",exact:!0},r.a.createElement(Ce,null)),r.a.createElement(i.b,{path:"/admin/managers",exact:!0},r.a.createElement(tt,null)),r.a.createElement(i.b,{path:"/admin/shops",exact:!0},r.a.createElement(We,null)),r.a.createElement(i.b,{path:"/admin/suppliers",exact:!0},r.a.createElement(He,null)),r.a.createElement(i.b,{path:"/admin/categories",exact:!0},r.a.createElement(Ge,null)),r.a.createElement(i.b,{path:"/admin/supplyProductsList",exact:!0},r.a.createElement(Ye,null)),r.a.createElement(i.a,{to:"/admin/import"})),t=Object(ot.a)(),a=Object(u.a)(t,1)[0].userId,n=!!a;return r.a.createElement(ut.Provider,{value:{userId:a,userRole:"Administrator",isAuth:n}},r.a.createElement(o.a,null,r.a.createElement(ct,{page:e})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(it,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.afe7462b.chunk.js.map