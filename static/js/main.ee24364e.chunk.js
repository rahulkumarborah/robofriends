(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(14),n(1));n(15);var i=function(e){var t=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Robot Avatar"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))};var s=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(i,{key:"".concat(e.id,"-").concat(t),name:e.name,email:e.email})})))};var u=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))};var h=function(e){return r.a.createElement("div",{style:{overflowX:"scroll",border:"1px solid black",height:"500px"}},e.children)},m=n(4),f=n(5),b=n(7),d=n(6),v=n(8),E=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component);var g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],f=i[1];if(Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),0===n.length)return r.a.createElement("h1",{className:"tc"},"Loading...");var b=n.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(u,{onSearchChange:function(e){var t=e.target.value;f(t)}}),r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(s,{robots:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ee24364e.chunk.js.map