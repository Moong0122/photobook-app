(this["webpackJsonpphotobook-app"]=this["webpackJsonpphotobook-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n(72)},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n.n(r),i=n(16),l=n(12),s=n(19),u=n.n(s),m=n(5),d=n(11),p=n(9),f=n(7),b=n(10),v=n(33),E=n.n(v),h=n(17),g=n(14);n(60),n(61);var y=function(e){var t=e.name,n=e.updated,a=e.bio,r=e.portfolio;return o.a.createElement("div",{className:"info__container"},o.a.createElement("div",null,o.a.createElement("b",null,"name")),o.a.createElement("div",null,t),o.a.createElement("div",null,o.a.createElement("b",null,"upload date")),o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("b",null,"bio")),o.a.createElement("div",null,null==a?"-":a),o.a.createElement("div",null,o.a.createElement("b",null,"portfolio")),o.a.createElement("div",null,null==r?"-":r))};var w=function(e){var t=e.id,n=e.updated,r=e.image,c=e.name,i=e.bio,l=e.portfolio,s=Object(a.useState)(!1),u=Object(h.a)(s,2),m=u[0],d=u[1],p=Object(g.b)({opacity:m?1:0,transform:"perspective(600px) rotateX(".concat(m?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),f=p.transform,b=p.opacity;return o.a.createElement("div",{id:"card_inner",onClick:function(){return d((function(e){return!e}))}},o.a.createElement(g.a.div,{className:"c back",style:{opacity:b.interpolate((function(e){return 1-e})),transform:f}},o.a.createElement("img",{src:r,alt:c})),o.a.createElement(g.a.div,{className:"c front",style:{opacity:b,transform:f.interpolate((function(e){return"".concat(e," rotateX(180deg)")}))}},o.a.createElement(y,{name:c,id:t,updated:n,bio:i,portfolio:l})))},N=(n(62),function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]}),x=function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")};var j=function(e){var t=e.number,n=e.id,a=e.updated,r=e.image,c=e.name,i=e.bio,l=e.portfolio,s=document.getElementsByClassName("photo"),u=Object(g.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),m=Object(h.a)(u,2),d=m[0],p=m[1];return o.a.createElement(g.a.div,{className:"card",onMouseMove:function(e){var n=e.clientX,a=e.clientY,o=s[t].getBoundingClientRect(),r=o.left,c=o.right,i=window.innerWidth;return r<i/2?n+=(i/2-r)/2:r>i/2&&(n-=(c-i/2)/2),p({xys:N(n,a)})},onMouseLeave:function(){return p({xys:[0,0,1]})},style:{transform:d.xys.interpolate(x)}},o.a.createElement("div",{className:"photo"},o.a.createElement(w,{id:n,updated:a,image:r,name:c,bio:i,portfolio:l})))},k=(n(63),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!0,photos:[]},n.getPhotos=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(E.a.get("https://api.unsplash.com/photos/?client_id=".concat("4c492adbdcb5a07528dc6b56a4ef75f31a9a199f646a081c79f4ab6bc4ca1cd0")));case 2:e=t.sent,n.setState({photos:e.data,isLoading:!1});case 4:case"end":return t.stop()}}))},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.photos;return o.a.createElement("section",{className:"container"},t?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader__text"},"Loading...")):o.a.createElement("div",{className:"photos"},n.map((function(e,t){return o.a.createElement(j,{number:t,key:e.id,id:e.id,updated:e.updated_at.slice(0,10),image:e.urls.small,name:e.user.username,bio:e.user.bio,portfolio:e.user.portfolio_url})}))))}}]),t}(o.a.Component));n(64);var O=function(e){return console.log(e),o.a.createElement("div",{className:"about__container"},o.a.createElement("span",null,"This Photobook shows you the 10 most recent photos from ",o.a.createElement("b",null,"Unsplash")))};n(65);var _=function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(i.b,{to:"/"},"Home"),o.a.createElement(i.b,{to:"/about"},"About"))};n(71);var L=function(){return o.a.createElement(i.a,null,o.a.createElement(_,null),o.a.createElement(l.a,{path:"/",exact:!0,component:k}),o.a.createElement(l.a,{path:"/about",component:O}))};c.a.render(o.a.createElement(L,null),document.getElementById("chocolate"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d43bdddf.chunk.js.map