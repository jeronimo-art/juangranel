(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(44369)}])},86228:function(e,n,s){"use strict";s.d(n,{db:function(){return t}});var a=s(1902),t=(s(72419),s(15063),s(19),a.Z.initializeApp({apiKey:"AIzaSyDmifrQrHHrwOCfFSzjSqa22O08XoilP5o",authDomain:"prodcutosjuangranel.firebaseapp.com",databaseURL:"https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos.json",projectId:"prodcutosjuangranel",storageBucket:"prodcutosjuangranel.appspot.com",messagingSenderId:"220006501964",appId:"1:220006501964:web:897bc51f42e8408994aee9"}).firestore())},88951:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return b}});var a=s(34051),t=s.n(a),r=s(85893),i=s(9008),o=s(67294),c=s(86228),l=s(7160),u=s.n(l),d=s(41664),m=s.n(d),h=s(34846),f=s(25675),j=s.n(f),x=s(89236);function p(e,n,s,a,t,r,i){try{var o=e[r](i),c=o.value}catch(l){return void s(l)}o.done?n(c):Promise.resolve(c).then(a,t)}function v(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function N(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(n){v(e,n,s[n])}))}return e}function b(){var e=(0,o.useState)([]),n=e[0],s=e[1],a=(0,o.useState)([]),l=(a[0],a[1]),d=(0,o.useState)([]),f=(d[0],d[1],(0,o.useState)(!1)),v=f[0],b=f[1],g=function(){var e,n=(e=t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!0),c.db.collection("links").onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(N({},e.data(),{id:e.id}))})),s(n),l(n),b(!1)}));case 2:case"end":return e.stop()}}),e)})),function(){var n=this,s=arguments;return new Promise((function(a,t){var r=e.apply(n,s);function i(e){p(r,a,t,i,o,"next",e)}function o(e){p(r,a,t,i,o,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){g()}),[]),(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Cursos | Irna Pont\xf3n"}),(0,r.jsx)("meta",{name:"description",content:"JuanGranel, Consumo Consciente"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("h1",{className:"titulo",name:"cursos",id:"cursos",children:"Cat\xe1logo"}),v?(0,r.jsx)("div",{style:{position:"absolute",top:"100vh",width:"100%",height:"100vh"},children:(0,r.jsxs)("div",{className:"loader",children:[(0,r.jsx)("div",{className:"loaderAni"}),(0,r.jsx)("div",{className:"pt-2",style:{height:"5vw",position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",width:"5vw",zIndex:"12"},children:(0,r.jsx)(j(),{src:x.Z,layout:"fill",alt:"",objectFit:"cover"})})]})}):(0,r.jsx)("div",{className:"cards",children:n&&n.map((function(e){return(0,r.jsx)("div",{itemID:e,className:"card mb-1",children:(0,r.jsx)("div",{className:"cards-cursos_hover",children:(0,r.jsxs)("div",{className:"cards-cursos",children:[(0,r.jsx)("h3",{className:"titulo-cards",children:e.description}),(0,r.jsx)("div",{className:"img-cursos_container",children:(0,r.jsx)("img",{src:e.name,alt:"",className:"img-cursos"})}),(0,r.jsx)("div",{className:"texto-card_container",children:(0,r.jsx)(m(),{href:"/productos/"+e.url,passHref:!0,children:(0,r.jsx)(h.ZP,{className:"btn-cursos",children:"Ver producto"})})})]})})},e.id)}))})]})}},44369:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return j}});var a=s(85893),t=s(9008),r=s(7160),i=s.n(r),o=s(34846),c=s(14713),l=s(41664),u=s.n(l),d=s(11163),m=s.n(d),h=s(88951),f=s(66261);function j(){var e=(0,c.aF)(),n=e.user,s=e.error;return e.isLoading?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("title",{children:"Inicio | JuanGranel"}),(0,a.jsx)("meta",{name:"description",content:"Consumo consciente"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:""})]}):s?(0,a.jsxs)("div",{children:[s.message,m().push("/")]}):n?(0,a.jsxs)("div",{children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("title",{children:"Inicio | JuanGranel"}),(0,a.jsx)("meta",{name:"description",content:"Consumo consciente"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:i().container,children:(0,a.jsx)("div",{className:"all",children:(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"overly"}),(0,a.jsxs)("h1",{className:"titulo-start",children:["JuanGranel, ",(0,a.jsx)("br",{})," consumo consciente"]}),(0,a.jsx)("div",{className:"contenedor-texto-home",children:(0,a.jsx)("p",{className:"texto-home",children:"Bienvenido/a al catalogo virtual de JuanGranel, In eget placerat ante. Nam accumsan libero odio. Quisque convallis ipsum massa, et sodales lorem interdum at. Curabitur commodo, arcu eu consectetur pulvinar, sapien leo tempus diam."})}),(0,a.jsx)(f.rU,{to:"cursos",offset:-150,smooth:!0,duration:100,delay:0,children:(0,a.jsx)(o.ZP,{className:"btn-catalogo",children:"Ver cat\xe1logo"})})]})})}),(0,a.jsx)(h.default,{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("title",{children:"Inicio | JuanGranel"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"all",children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"overly"}),(0,a.jsxs)("h1",{className:"titulo-start",children:["JuanGranel,",(0,a.jsx)("br",{})," consumo consciente"]}),(0,a.jsx)("div",{className:"contenedor-texto-home",children:(0,a.jsx)("p",{className:"texto-home",children:"Bienvenido/a al catalogo virtual de JuanGranel, In eget placerat ante. Nam accumsan libero odio. Quisque convallis ipsum massa, et sodales lorem interdum at. Curabitur commodo, arcu eu consectetur pulvinar, sapien leo tempus diam."})}),(0,a.jsx)(f.rU,{to:"cursos",spy:!0,smooth:!0,offset:50,duration:500,children:(0,a.jsx)(o.ZP,{className:"btn-catalogo",children:"Ver cat\xe1logo"})})]}),(0,a.jsx)(h.default,{})]}),(0,a.jsx)(u(),{passHref:!0,href:"/api/auth/login",children:(0,a.jsx)("button",{className:"login",children:"Entrar"})})]})}},7160:function(e){e.exports={main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD"}}},function(e){e.O(0,[16,846,116,429,774,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);