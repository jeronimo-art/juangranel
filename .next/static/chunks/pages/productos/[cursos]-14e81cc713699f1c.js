(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{50956:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[cursos]",function(){return n(55380)}])},55380:function(e,t,n){"use strict";n.r(t);var s=n(34051),a=n.n(s),i=n(85893),r=n(80880),o=n(67294),c=n(9669),d=n.n(c),l=n(9008),u=n(14713),p=n(34846),h=n(41664),m=n.n(h);function x(e,t,n,s,a,i,r){try{var o=e[i](r),c=o.value}catch(d){return void n(d)}o.done?t(c):Promise.resolve(c).then(s,a)}t.default=function(){var e=(0,u.aF)().user,t=(0,o.useState)(""),n=t[0],s=t[1],c=(0,r.useRouter)().query.cursos,h=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d().get("https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos/"+c+".json").then((function(e){var t=e.data;s(t)}));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function r(e){x(i,s,a,r,o,"next",e)}function o(e){x(i,s,a,r,o,"throw",e)}r(void 0)}))});return function(){return t.apply(this,arguments)}}(),f=(0,o.useState)(""),j=f[0],g=f[1],v=(0,o.useState)(""),N=v[0],b=v[1],y=(0,o.useState)(""),C=y[0],P=y[1],w=(0,o.useState)(""),_=w[0],k=w[1],S=(0,o.useState)(""),E=S[0],D=S[1],T=function(e){e.preventDefault(),fetch("https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos/"+c+".json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({desc:j,dieta:N,propiedades:C,imagen:_,titulo:E})}).then((function(){console.log()}))};return(0,o.useEffect)((function(){h()})),e?(0,i.jsx)(i.Fragment,{children:"gerorobalino@gmail.com"===e.email?(0,i.jsxs)("div",{className:"header-curso-manage",children:[(0,i.jsxs)(l.default,{children:[(0,i.jsxs)("title",{children:[n.titulo," manage | Irina Pont\xf3n"]}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("form",{onSubmit:T,style:{height:"57vh"},className:"form-producto card card-body border-primary",children:[(0,i.jsx)("div",{className:"form-group input-group",children:(0,i.jsx)("input",{type:"text",value:j,name:"categoria1",placeholder:"Descripci\xf3n",className:"input-news",autoComplete:"off",onChange:function(e){g(e.target.value)}})}),(0,i.jsx)("div",{className:"form-group input-group",children:(0,i.jsx)("input",{type:"text",value:N,name:"categoria2",placeholder:"Dieta",className:"input-news",autoComplete:"off",onChange:function(e){b(e.target.value)}})}),(0,i.jsx)("div",{className:"form-group input-group",children:(0,i.jsx)("input",{type:"text",value:C,name:"categoria3",placeholder:"Propiedades",className:"input-news",autoComplete:"off",onChange:function(e){P(e.target.value)}})}),(0,i.jsx)("div",{className:"form-group input-group",children:(0,i.jsx)("input",{type:"text",value:E,name:"categoria3",placeholder:"Titulo",className:"input-news",autoComplete:"off",onChange:function(e){D(e.target.value)}})}),(0,i.jsx)("div",{className:"form-group input-group",children:(0,i.jsx)("input",{type:"text",value:_,name:"categoria3",placeholder:"Imagen",className:"input-news",autoComplete:"off",onChange:function(e){k(e.target.value)}})}),(0,i.jsxs)("div",{className:"btns-data",children:[(0,i.jsx)(p.ZP,{onClick:function(e){T(e)},children:"Enviar"}),(0,i.jsx)(p.ZP,{onClick:function(){g(n.desc),b(n.dieta),k(n.imagen),P(n.propiedades),D(n.titulo)},children:"Cargar datos del servidor"})]})]}),(0,i.jsx)("h1",{className:"titulo-producto",children:n.titulo}),(0,i.jsx)("div",{className:"img-container",children:(0,i.jsx)("img",{className:"foto-producto",alt:"",src:n.imagen})}),(0,i.jsx)("p",{className:"descripcion-producto",children:n.desc}),(0,i.jsx)(m(),{href:"/pedir",children:(0,i.jsx)("button",{className:"btn-producto",children:"Pedir producto"})}),(0,i.jsx)("h1",{className:"caracteristicas-titulo",children:"Caracteristicas"}),(0,i.jsxs)("div",{className:"propie",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Dietas"}),(0,i.jsx)("p",{children:n.dieta})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Propiedades"}),(0,i.jsx)("p",{children:n.propiedades})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Recetas"}),(0,i.jsx)("p",{children:n.propiedades})]})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.default,{children:[(0,i.jsxs)("title",{children:[n.titulo," | Irina Pont\xf3n"]}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"propie",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Dietas"}),(0,i.jsx)("p",{children:n.dieta})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Propiedades"}),(0,i.jsx)("p",{children:n.propiedades})]})]}),(0,i.jsx)("h1",{className:"titulo-producto",children:n.titulo}),(0,i.jsx)("div",{className:"img-container",children:(0,i.jsx)("img",{className:"foto-producto",alt:"",src:n.imagen})}),(0,i.jsx)("p",{className:"descripcion-producto",children:n.desc}),(0,i.jsx)(p.ZP,{className:"btn-producto",children:"Pedir producto"})]})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.default,{children:[(0,i.jsxs)("title",{children:[n.titulo," | Irina Pont\xf3n"]}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("h1",{className:"titulo-producto",children:n.titulo}),(0,i.jsx)("div",{className:"img-container",children:(0,i.jsx)("img",{className:"foto-producto",alt:"",src:n.imagen})}),(0,i.jsx)("p",{className:"descripcion-producto",children:n.desc}),(0,i.jsx)("button",{className:"btn-producto",children:"Pedir producto"})]})}}},function(e){e.O(0,[846,669,774,888,179],(function(){return t=50956,e(e.s=t);var t}));var t=e.O();_N_E=t}]);