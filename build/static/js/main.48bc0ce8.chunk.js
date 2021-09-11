(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__334f8",ContactLabel:"ContactForm_ContactLabel__236TT",ContactInput:"ContactForm_ContactInput__1DRCB",ContactBtn:"ContactForm_ContactBtn__1fMK0"}},21:function(t,e,n){t.exports={ContactListLi:"ContactList_ContactListLi__wVnYE",ContactBtnDel:"ContactList_ContactBtnDel__1v9Sm"}},37:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2UEsk"}},68:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(17),o=n.n(r),u=n(40),s=n(26),i=n(73),b=n(10),l=n.n(b),j=n(9),f=n(24),d=n.n(f),O=n(36),C=n(16),h=n.n(C),m=n(3),p=Object(m.b)("contacts/fetchContactRequest"),v=Object(m.b)("contacts/fetchContactSuccess"),x=Object(m.b)("contacts/fetchContactError"),_=Object(m.b)("contacts/addContactRequest"),g=Object(m.b)("contacts/addContactSuccess"),L=Object(m.b)("contacts/addContactError"),F=Object(m.b)("contacts/deleteContactRequest"),k=Object(m.b)("contacts/deleteContactSuccess"),N=Object(m.b)("contacts/deleteContactError"),w=Object(m.b)("contacts/filter");h.a.defaults.baseURL="http://localhost:4040";var y=function(){return function(){var t=Object(O.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},A=n(1),S=Object(j.b)(null,(function(t){return{onAddSubmit:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e};n(_()),h.a.post("/contacts",c).then((function(t){var e=t.data;return n(g(e))})).catch((function(t){return n(L(t))}))}}(e,n))}}}))((function(t){var e=t.onAddSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(""),b=Object(s.a)(u,2),j=b[0],f=b[1],d=Object(i.a)(),O=Object(i.a)(),C=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":f(c);break;default:return}},h=function(){f(""),o("")};return Object(A.jsxs)("form",{className:l.a.ContactForm,onSubmit:function(t){return t.preventDefault(),e(r,j),h()},children:[Object(A.jsxs)("label",{className:l.a.ContactLabel,htmlFor:d,children:["\u0418\u043c\u044f",Object(A.jsx)("input",{className:l.a.ContactInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:d,value:r,onChange:C})]}),Object(A.jsxs)("label",{htmlFor:O,className:l.a.ContactLabel,children:["\u041d\u043e\u043c\u0435\u0440",Object(A.jsx)("input",{className:l.a.ContactInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:C,id:O})]}),Object(A.jsx)("button",{className:l.a.ContactBtn,type:"submit",children:"Add contact"})]})})),B=n(21),D=n.n(B),E=n(13),I=function(t){return t.contacts.filter},q={getFilter:I,getFilteredContacts:Object(E.a)([function(t){return t.contacts.items},I],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},z=Object(j.b)((function(t){return{contacts:q.getFilteredContacts(t)}}),(function(t){return{fetchContact:function(){return t(y())},onDeleteContact:function(e){return t((n=e,function(t){t(F()),h.a.delete("/contacts/".concat(n)).then((function(){return t(k(n))})).catch((function(e){return t(N(e))}))}));var n}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(c.useEffect)((function(){y()})),Object(A.jsx)("ul",{className:D.a.ContactListUl,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(A.jsxs)("li",{className:D.a.ContactListLi,children:[Object(A.jsxs)("p",{children:[c,":",Object(A.jsx)("span",{children:a})]}),Object(A.jsx)("button",{className:D.a.ContactBtnDel,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),R=n(37),T=n.n(R),J=Object(j.b)((function(t){return{value:q.getFilter(t)}}),(function(t){return{onChange:function(e){return t(w(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(A.jsxs)("label",{className:T.a.filterLabel,children:["Find contacts by name",Object(A.jsx)("input",{type:"text",value:e,onChange:n,className:"filterInput"})]})}));n(68);function M(){return Object(A.jsxs)("div",{className:"divApp",children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(S,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(z,{}),Object(A.jsx)(J,{})]})}var U,Z,K=n(20),P=n(6),V=n(4),Y=Object(m.c)([],(U={},Object(P.a)(U,v,(function(t,e){return e.payload})),Object(P.a)(U,g,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(P.a)(U,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),$=Object(m.c)("",Object(P.a)({},w,(function(t,e){return e.payload}))),G=Object(m.c)(!1,(Z={},Object(P.a)(Z,p,(function(){return!0})),Object(P.a)(Z,v,(function(){return!1})),Object(P.a)(Z,x,(function(){return!1})),Object(P.a)(Z,_,(function(){return!0})),Object(P.a)(Z,g,(function(){return!1})),Object(P.a)(Z,L,(function(){return!1})),Object(P.a)(Z,F,(function(){return!0})),Object(P.a)(Z,k,(function(){return!1})),Object(P.a)(Z,N,(function(){return!1})),Z)),H=Object(m.c)(null,{}),Q=Object(V.b)({items:Y,filter:$,loading:G,error:H}),W=n(38),X=n.n(W),tt=n(11),et=[].concat(Object(K.a)(Object(m.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),[function(t){return function(t){return function(e){console.log("\u043c\u043e\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430",e),t(e)}}},X.a]),nt=Object(m.a)({reducer:{contacts:Q},middleware:et,devTools:!1});n(69);o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(j.a,{store:nt,children:Object(A.jsx)(u.a,{children:Object(A.jsx)(M,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.48bc0ce8.chunk.js.map