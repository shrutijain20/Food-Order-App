(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"CheckoutForm_form__2UWg_",control:"CheckoutForm_control__IJBWF",actions:"CheckoutForm_actions__2_jr4",submit:"CheckoutForm_submit__Xp_VE",invalid:"CheckoutForm_invalid__85kzb"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__14-jC",total:"Cart_total__1NMJs",actions:"Cart_actions__17e4t","button--alt":"Cart_button--alt__2mJkw",button:"Cart_button__2Jw_r"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3kEPE",icon:"HeaderCartButton_icon__2y0n2",badge:"HeaderCartButton_badge__OTTYP",bump:"HeaderCartButton_bump__3vh6E"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1T2e3",summary:"CartItem_summary__vNznD",price:"CartItem_price__2eb-U",amount:"CartItem_amount__mpmV1",actions:"CartItem_actions__1UVAm"}},,,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__1pEDp","meals-appear":"AvailableMeals_meals-appear__1WK_-",mealsLoading:"AvailableMeals_mealsLoading__2QEPt",mealsError:"AvailableMeals_mealsError__GuV6E"}},function(e,t,n){e.exports={meal:"MealItem_meal__1V_T_",description:"MealItem_description__CfQne",price:"MealItem_price__14MJy"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3QU2x",modal:"Modal_modal__2BCac","slide-down":"Modal_slide-down__1c8Op"}},,function(e,t,n){e.exports={header:"Header_header__3PKX7","main-image":"Header_main-image__2LjM5"}},,function(e,t,n){e.exports={card:"Card_card__3Mhqf"}},function(e,t,n){e.exports={input:"Input_input___AD97"}},function(e,t,n){e.exports={form:"MealItemForm_form__21VOY"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__OyG9z"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(17),l=n.n(o),u=n.p+"static/media/Meals.a984a2e3.jpg",d=n(7),j=n.n(d),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),x=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(O),o=s.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(j.a.button,"  ").concat(a?j.a.bump:""," "),u=s.items;return Object(i.useEffect)((function(){if(0!==u.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[u]),Object(m.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{className:j.a.bump,children:"Your Cart"}),Object(m.jsxs)("span",{className:j.a.badge,children:[" ",o," "]})]})},h=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:l.a.header,children:[Object(m.jsx)("h2",{children:"React meals"}),Object(m.jsx)(x,{onShowCart:e.onShowCart})]}),Object(m.jsx)("div",{className:l.a["main-image"],children:Object(m.jsx)("img",{src:u,alt:"Table is full of delicios food !!"})})]})},p=n(12),f=n(6),_=n.n(f),v=n(19),C=n.n(v),y=function(e){return Object(m.jsx)("div",{className:C.a.card,children:e.children})},N=n(13),g=n.n(N),k=n(14),A=n.n(k),w=n(4),I=n(20),S=n.n(I),M=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:S.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(w.a)({ref:t},e.input))]})})),F=n(21),E=n.n(F),R=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(m.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(M,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},T=function(e){var t=Object(i.useContext)(O),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:A.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:A.a.description,children:e.description}),Object(m.jsx)("div",{className:A.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(R,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(null),d=Object(r.a)(u,2),j=d[0],b=d[1],O=Object(i.useCallback)(Object(p.a)(_.a.mark((function e(){var t,n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),b(null),e.prev=2,e.next=5,fetch("https://food-order-app-fcc45-default-rtdb.firebaseio.com/meals.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),b(e.t0.message);case 19:l(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);if(Object(i.useEffect)((function(){O()}),[O]),j)return Object(m.jsx)("section",{className:g.a.mealsError,children:Object(m.jsx)("p",{children:j})});if(o)return Object(m.jsx)("section",{className:g.a.mealsLoading,children:Object(m.jsx)("p",{children:"Loading......"})});var x=n.map((function(e){return Object(m.jsx)(T,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(m.jsx)("section",{className:g.a.meals,children:Object(m.jsx)(y,{children:Object(m.jsx)("ul",{children:x})})})},H=n(22),P=n.n(H),B=function(){return Object(m.jsxs)("section",{className:P.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},V=function(){return Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(D,{})]})},J=n(5),W=n.n(J),z=n(15),L=n.n(z),Y=function(e){return Object(m.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},U=function(e){return Object(m.jsx)("div",{className:L.a.modal,children:Object(m.jsx)("div",{className:L.a.content,children:e.children})})},Q=document.getElementById("overlays"),$=function(e){return Object(m.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(m.jsx)(Y,{onClose:e.onClose}),Q),c.a.createPortal(Object(m.jsxs)(U,{children:[" ",e.children]}),Q)]})},q=n(8),G=n.n(q),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:G.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:G.a.summary,children:[Object(m.jsx)("span",{className:G.a.price,children:t}),Object(m.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:G.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(3),Z=n.n(X),ee=function(e){var t=Object(i.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=function(e){return""===e.trim()},j="".concat(Z.a.control," ").concat(!a.name&&Z.a.invalid," "),b="".concat(Z.a.control," ").concat(!a.street&&Z.a.invalid," "),O="".concat(Z.a.control," ").concat(!a.postalCode&&Z.a.invalid," "),x="".concat(Z.a.control," ").concat(!a.city&&Z.a.invalid," ");return Object(m.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=u.current.value,i=l.current.value,j=!d(n),m=!d(a),b=6===i.trim().length,O=!d(r);c({name:j,street:m,postalCode:b,city:O}),j&&m&&b&&O&&e.onConfirm({name:n,street:a,postalCode:i,city:r})},children:[Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(m.jsx)("p",{children:"Write a valid name"})]}),Object(m.jsxs)("div",{className:b,children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(m.jsx)("p",{children:"Write a valid street"})]}),Object(m.jsxs)("div",{className:O,children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(m.jsx)("p",{children:"Write a valid postalCode(6 chars long)"})]}),Object(m.jsxs)("div",{className:x,children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(m.jsx)("p",{children:"Write a valid city"})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:Z.a.submit,children:"Confirm"})]})]})},te=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),x=b[0],h=b[1],f=Object(i.useContext)(O),v="$".concat(f.totalAmount.toFixed(2)),C=f.items.length>0,y=function(e){f.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},N=function(e){f.removeItem(e)},g=Object(m.jsx)("ul",{className:W.a["cart-items"],children:f.items.map((function(e){return Object(m.jsx)(K,{name:e.name,price:e.price,amount:e.amount,onAdd:y.bind(null,e),onRemove:N.bind(null,e.id)},e.id)}))}),k=function(){var e=Object(p.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch("https://food-order-app-fcc45-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:c(!1),d(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(m.jsxs)("div",{className:W.a.actions,children:[Object(m.jsx)("button",{className:W.a["button--alt"],onClick:e.onClose,children:"Cancel"}),C&&Object(m.jsx)("button",{className:W.a.button,onClick:function(){h(!0)},children:"Order"})]}),I=Object(m.jsxs)(s.a.Fragment,{children:[g,Object(m.jsxs)("div",{className:W.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:v})]}),x&&Object(m.jsx)(ee,{onConfirm:k,onCancel:e.onClose}),!x&&A]}),S=Object(m.jsx)("p",{children:"Sending data......"}),M=Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("p",{children:"Sucessfully sent the data.."}),Object(m.jsx)("div",{className:W.a.actions,children:Object(m.jsx)("button",{className:W.a.button,onClick:e.onClose,children:"Cancel"})})]});return Object(m.jsxs)($,{onClose:e.onClose,children:[!a&&!u&&I,a&&S,u&&M]})},ne=n(18),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(w.a)(Object(w.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},re=function(e){var t=Object(i.useReducer)(ce,ae),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(re,{children:[n&&Object(m.jsx)(te,{onClose:function(){a(!1)}}),Object(m.jsx)(h,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(V,{})})]})};c.a.render(Object(m.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.bb27e165.chunk.js.map