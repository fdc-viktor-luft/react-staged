(this["webpackJsonpreact-staged"]=this["webpackJsonpreact-staged"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(6);var a,r=n(0),c=n.n(r),i=n(3),u=n.n(i),l=n(1);!function(e){e.DURATION="--s-trans-dur",e.ANIMATION="--s-trans-animation",e.TRANSFORM_X="--s-transform-x",e.AMOUNT="--s-amount"}(a||(a={}));var o=function(e,t,n){var a=e.current;a&&a.style.setProperty(t,n)},s=function(e){var t=e.current,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;t&&t.style.setProperty(a.TRANSFORM_X,"".concat(-t.clientWidth*r+n,"px"))},m=function(e){o(e,a.DURATION,"0"),s(e,0,1)},f=function(e,t,n){Object(r.useLayoutEffect)((function(){d.amount(e,t)}),[t]),Object(r.useLayoutEffect)((function(){d.animation(e,n)}),[n])},d={goTo:function(e,t){o(e,a.DURATION,"".concat(.5,"s")),s(e,0,t)},finish:m,update:function(e,t){return s(e,t,1)},transition:function(e,t,n){return n?Promise.resolve(m(e)):(d.goTo(e,t+1),new Promise((function(t){setTimeout((function(){m(e),t()}),500)})))},amount:function(e,t){return o(e,a.AMOUNT,String(t))},animation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ease-out";return o(e,a.ANIMATION,t)}},v=function(e){Object(r.useEffect)((function(){var t=function(){return d.finish(e)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[])},p=function(e){var t=Object(r.useRef)(!1);return Object(r.useEffect)((function(){var n=e.current,a=function(e){t.current&&e.stopPropagation()};if(n)return n.addEventListener("click",a,!0),function(){return n.removeEventListener("click",a,!0)}}),[]),t},E={start:function(){},stop:function(){}},b=function(e,t){var n=Object(r.useMemo)((function(){return function(e,t){var n=0;return t?{start:function(){n||(n=setInterval(e,t))},stop:function(){clearInterval(n),n=0}}:E}(e,t)}),[e,t]);return Object(r.useEffect)((function(){return n.start(),n.stop}),[n]),n},h=function(e){return"touches"in e?e.touches[0].pageX:e.pageX},g=function(e){var t=e.outerRef,n=e.forwardRef,a=e.slides,i=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:E,i=arguments.length>5?arguments[5]:void 0,u=arguments.length>6?arguments[6]:void 0,l=p(t),o=Object(r.useRef)(void 0),s=Object(r.useRef)(0),m=Object(r.useCallback)((function(e){c.stop(),o.current=h(e)}),[c]),f=Object(r.useCallback)((function(t){var n=o.current;if(void 0!==n){if(s.current=h(t)-n,i&&s.current>0)return;if(u&&s.current<0)return;d.update(e,s.current)}}),[i,u]),v=Object(r.useCallback)((function(){var t=e.current,r=o.current,m=s.current;if(t&&void 0!==r){if(c.start(),o.current=void 0,s.current=0,l.current=!!m,Math.abs(m)/t.clientWidth>.1){if(i&&m>0)return;if(u&&m<0)return;return m<0?a():n()}d.transition(e,0,!1)}}),[a,n,l,c,i,u]);return[m,f,v]}(t,n,e.prev,e.next,e.autoSlider,e.isLeft,e.isRight),u=Object(l.a)(i,3),o=u[0],s=u[1],m=u[2];return c.a.createElement("div",{className:"staged",ref:n,onMouseDown:o,onTouchStart:o,onTouchMove:s,onMouseMove:s,onTouchEnd:m,onMouseUp:m,onMouseLeave:m},a)},j=function(e){return Object(r.useMemo)((function(){return Array(3*e).fill(void 0).map((function(t,n){return n-e}))}),[e])},O=function(e,t){var n=Object(r.useRef)(t);n.current=t;var a=Object(r.useRef)(e);Object(r.useEffect)((function(){e!==a.current&&(a.current=e,n.current&&n.current(e))}),[e])},N=function(e){var t=e.children,n=e.amount,a=void 0===n?1:n,i=e.hideArrows,u=e.noDrag,o=e.animation,s=e.onSwipe,m=Object(r.useRef)(null),p=Object(r.useRef)(null);v(m),f(m,a,o);var E=function(e,t,n,a){var c=Object(r.useState)(0),i=Object(l.a)(c,2),u=i[0],o=i[1],s=0===u,m=Math.max(0,t-n),f=u>=m;Object(r.useEffect)((function(){u>m&&o(m)}),[n,u,m]);var v=Object(r.useCallback)((function(t){var r=1===t?Math.min(m,u+n):Math.max(0,u-n),c=t*Math.abs(r-u)/n;d.transition(e,c,a).then((function(){return o(r)}))}),[a,n,t,u,t,m]),p=Object(r.useRef)(v);p.current=v;var E=Object(r.useCallback)((function(){return p.current(-1)}),[]),b=Object(r.useCallback)((function(){return p.current(1)}),[]);return[u,E,b,s,f]}(m,t.length,a,"none"===o),b=Object(l.a)(E,5),h=b[0],N=b[1],k=b[2],S=b[3],y=b[4];O(h,s);var R=function(e,t,n){var a=j(t);return Object(r.useMemo)((function(){return a.map((function(t){return c.a.createElement("div",{className:"staged-child",key:n+t},e[n+t]||c.a.createElement("div",null))}))}),[e,a,n])}(t,a,h);return c.a.createElement("div",{className:"staged-outer",ref:m},i||S||c.a.createElement("div",{className:"staged-left-nav",onClick:N}),u?c.a.createElement("div",{className:"staged",ref:p},R):c.a.createElement(g,{outerRef:m,forwardRef:p,prev:N,next:k,slides:R,isLeft:S,isRight:y}),i||y||c.a.createElement("div",{className:"staged-right-nav",onClick:k}))},k=function(e,t){return(e%t+t)%t},S=function(e){var t=e.children,n=e.amount,a=void 0===n?1:n,i=e.hideArrows,u=e.autoSlide,o=e.noDrag,s=e.animation,m=e.onSwipe,p=Object(r.useRef)(null),E=Object(r.useRef)(null);v(p),f(p,a,s);var h=function(e,t,n,a){var c=Object(r.useState)({pos:0,paged:0}),i=Object(l.a)(c,2),u=i[0],o=i[1],s=Object(r.useCallback)((function(r){d.transition(e,r,a).then((function(){return o((function(e){var a=e.pos,c=e.paged;return{pos:k(a+r*n,t),paged:c+r}}))}))}),[a,n,t]),m=Object(r.useRef)(s);return m.current=s,[u,Object(r.useCallback)((function(){return m.current(-1)}),[]),Object(r.useCallback)((function(){return m.current(1)}),[])]}(p,t.length,a,"none"===s),N=Object(l.a)(h,3),S=N[0],y=S.pos,R=S.paged,w=N[1],x=N[2];O(y,m);var A=b(x,u),M=function(e,t,n,a){var i=j(t);return Object(r.useMemo)((function(){return i.map((function(r){return c.a.createElement("div",{className:"staged-child",key:k(a*t+r,3*t)},e[k(n+r,e.length)])}))}),[e,i,n,t,a])}(t,a,y,R);return c.a.createElement("div",{className:"staged-outer",ref:p},i||c.a.createElement("div",{className:"staged-left-nav",onClick:w}),o?c.a.createElement("div",{className:"staged",ref:E},M):c.a.createElement(g,{outerRef:p,forwardRef:E,prev:w,next:x,slides:M,autoSlider:A}),i||c.a.createElement("div",{className:"staged-right-nav",onClick:x}))},y=[{authors:"Charlotte Link",title:"Investigations",cover:"/2016/09/10/17/18/book-1659717__340.jpg"},{authors:"Helen Fields",title:"The perfect silence",cover:"/2014/11/27/10/29/forest-547363__340.jpg"},{authors:"Carmen Korn",title:"Alligators in the canals",cover:"/2018/09/14/22/57/manhole-cover-3678303__340.jpg"},{authors:"Julia Kaufhold",title:"Jobs of the future",cover:"/2016/11/21/14/12/books-1845614__340.jpg"},{authors:"Rita Falk",title:"No more wine",cover:"/2015/04/25/03/09/cork-738603__340.jpg"},{authors:"Andreas Gruber",title:"Baby Jackson",cover:"/2016/05/17/22/16/baby-1399332__340.jpg"},{authors:"Annette Hess",title:"Ice, ice and more ice",cover:"/2017/11/28/22/25/lapland-2984828__340.jpg"},{authors:"Lori Nelson Spielman",title:"Dream today for tomorrow",cover:"/2015/07/12/14/26/coffee-842020__340.jpg"},{authors:"Elizabeth George",title:"The heaven is no shelter",cover:"/2017/01/06/23/03/sunrise-1959227__340.jpg"},{authors:"Jussi Adler-Olsen",title:"Bad little murders",cover:"/2017/05/13/12/40/fashion-2309519__340.jpg"}],R=function(e){var t=e.article,n=t.title,a=t.cover,i=Object(r.useState)(!1),u=Object(l.a)(i,2),o=u[0],s=u[1],m=Object(r.useCallback)((function(){s(!0),setTimeout((function(){return s(!1)}),250)}),[]);return c.a.createElement("img",{className:o?"clicked":"",src:"https://cdn.pixabay.com/photo".concat(a),alt:n,draggable:!1,onClick:m})},w=function(){return c.a.createElement("div",{className:"example-1"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 1"),c.a.createElement("p",null,"<InfinityStaged amount={3}>")),c.a.createElement(S,{amount:3},y.map((function(e,t){return c.a.createElement(R,{article:e,key:t})}))))},x=n(4),A=Object(x.a)(y);A.sort((function(){return.5-Math.random()}));var M=function(){var e=Object(r.useState)(5e3),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useCallback)((function(e){var t=+e.target.value;isNaN(t)||a(t||void 0)}),[]);return c.a.createElement("div",{className:"example-2"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 2"),c.a.createElement("p",null,"<InfinityStaged hideArrows autoSlide={".concat(n,'} animation="ease-in">')),c.a.createElement("label",{htmlFor:"example-2-autoSlide"},"autoSlide (in ms): "),c.a.createElement("input",{id:"example-2-autoSlide",type:"number",value:String(n||""),onChange:i})),c.a.createElement("div",{className:"carousel"},c.a.createElement(S,{hideArrows:!0,autoSlide:n,animation:"ease-in"},A.map((function(e,t){return c.a.createElement(R,{article:e,key:t})})))))},_=function(){return c.a.createElement("div",{className:"example-3"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 3"),c.a.createElement("p",null,"In some cases it might be necessary to disable animations."),c.a.createElement("p",null,'<Staged amount={2} noDrag animation="none">')),c.a.createElement(N,{amount:2,noDrag:!0,animation:"none"},y.slice(0,6).map((function(e,t){return c.a.createElement(R,{article:e,key:t})}))))},T=function(){return c.a.createElement("div",{className:"example-4"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 4"),c.a.createElement("p",null,"Only 2 children"),c.a.createElement("p",null,'<InfinityStaged animation="cubic-bezier(.19,.91,.24,.87)">')),c.a.createElement(S,{animation:"cubic-bezier(.19,.91,.24,.87)"},c.a.createElement(R,{article:y[0]}),c.a.createElement(R,{article:y[1]})))},C=n(13),I=function(e){var t=e.article;return c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"cover"},c.a.createElement(R,{article:t})),c.a.createElement("div",{className:"title"},t.title),c.a.createElement("div",{className:"authors"},t.authors))},L=function(){var e=Object(C.a)("(max-width: 650px)")?2:5;return c.a.createElement("div",{className:"example-5"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 5"),c.a.createElement("p",null,"- You can stage arbitrary React nodes."),c.a.createElement("p",null,"- Please notice the breakpoint at 650px screen width."),c.a.createElement("p",null,"<Staged amount={".concat(e,"}>"))),c.a.createElement(N,{amount:e},y.map((function(e,t){return c.a.createElement(I,{article:e,key:t})}))))},D=new Array(7).fill(null).map((function(e,t){return t+1})),P=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",{className:"example-6"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example 6"),c.a.createElement("p",null,"- The slider automatically adjusts sliding amounts."),c.a.createElement("p",null,"- The slider allows to add a swipe listener (current\xa0pos:\xa0",n,")"),c.a.createElement("p",null,"<Staged amount={3} onSwipe={setPos}>")),c.a.createElement(N,{amount:3,onSwipe:a},D.map((function(e){return c.a.createElement("div",{className:"huge-num-container",key:e},c.a.createElement("div",{className:"huge-num"},e))}))))};u.a.render(c.a.createElement((function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(M,null),c.a.createElement(_,null),c.a.createElement(T,null),c.a.createElement(L,null),c.a.createElement(P,null))}),null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.77468b8d.chunk.js.map