(this.webpackJsonpcharityadvisor=this.webpackJsonpcharityadvisor||[]).push([[0],[,,,,,,function(e,a,t){},,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/background.0d34e806.jpeg"},function(e,a,t){e.exports=t.p+"static/media/background2.e3893f9b.jpg"},function(e,a,t){e.exports=t.p+"static/media/background4.1febad35.jpg"},function(e,a,t){e.exports=t.p+"static/media/background5.4256c48a.jpg"},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),i=t.n(c),l=(t(24),t(1)),o=t(2),s=t(5),m=t(4),u=t(3),d=(t(11),t(6),function(e){var a=e.onRouteChange;return r.a.createElement("nav",{className:"bg-dark-green w-100 top-bar fixed mt0 pa3"},r.a.createElement("ul",{className:"main-nav dark-gray f6 fw6 ttu tracked "},r.a.createElement("li",null," ",r.a.createElement("a",{onClick:function(){return a("home")},className:" link dim white  dib mr3",href:"#",title:"Home"},"Home")," "),r.a.createElement("li",null," ",r.a.createElement("a",{onClick:function(){return a("about")},className:" link dim white dib mr3",href:"#",title:"About"},"About")," "),r.a.createElement("li",null," ",r.a.createElement("a",{onClick:function(){return a("teaching")},className:"  link  dim white pr3 dib",href:"#",title:"About"},"Giving")),r.a.createElement("li",{className:"Push"},r.a.createElement("a",{onClick:function(){return a("contact")},className:"link Push dim  white",href:"#",title:"contact"},"contact"))))}),h=new URL("https://cors-anywhere.herokuapp.com/https://api.data.charitynavigator.org/v2/Organizations"),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleChange=function(e){return n.setState({criteria:e.target.value})},n.handleInput=function(e){return n.setState({value:e.target.value})},n.sendDataToParent=function(){n.props.getData(n.state.charityList)},n.onSubmitSearch=function(e){var a,t=n.state,r=t.criteria,c=t.value;"zip"===r?("zip",a={app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",zip:c}):"city"===r?("city",a={app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",city:c}):("name",a={app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",name:c}),h.search=new URLSearchParams(a).toString(),fetch(h).then((function(e){return e.json()})).then((function(e){n.setState({charityList:e}),n.sendDataToParent()}))},n.state={criteria:"zip",value:"",charityList:[]},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleInput=n.handleInput.bind(Object(s.a)(n)),n.sendDataToParent=n.sendDataToParent.bind(Object(s.a)(n)),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex center"},r.a.createElement("form",{className:"flex-column center search pt5 black-80"},r.a.createElement("div",null,r.a.createElement("label",null,"Search charity by:",r.a.createElement("select",{className:"center fw6 w-300",criteria:this.state.criteria,onChange:this.handleChange},r.a.createElement("option",{value:"zip"},"Zip Code"),r.a.createElement("option",{value:"city"},"City"),r.a.createElement("option",{value:"name"},"Name")))),r.a.createElement("div",{className:"measure"},r.a.createElement("input",{value:this.state.value,onChange:this.handleInput,id:"name",className:"input-reset ba b--black-20 pa2 pl4 mb2 ",type:"text"}),r.a.createElement("a",{onClick:this.onSubmitSearch,className:" center buttonn w-70 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green w-300",href:"#0"},"Go!"))))}}]),t}(r.a.Component),f=t(14),b=t(15),g=t.n(b),v=t(16),E=t.n(v),y=t(17),k=t.n(y),w=t(18),N=t.n(w),S=(t(12),{duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,onChange:function(e,a){}}),C=function(){return r.a.createElement("div",{className:"slide-container"},r.a.createElement(f.Fade,S,r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:g.a})),r.a.createElement("h2",null,"Feed The Hungry")),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:E.a})),r.a.createElement("h2",null,"Prevent Food Waste")),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:k.a})),r.a.createElement("h2",null,"Support Local Charities")),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:N.a})),r.a.createElement("h2",null,"Pay It Forward"))))},j=(t(35),r.a.Component,function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"  ba b--dark-green charityList"},r.a.createElement("span",{className:"charityListText"},"<CharityList />"),r.a.createElement("div",null,e.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("li",{key:a}," ",e.charityName," "))})))))}}]),t}(r.a.Component)),O=(t(36),{input:"",hideSlideShow:!1,list:[]}),x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).onRouteChange=function(a){"signout"===a&&e.setState(O),e.setState({route:a})},e.getDataFromSearchBar=function(a,t){e.setState({list:a,hideSlideShow:!0})},e.state=O,e.getDataFromSearchBar=e.getDataFromSearchBar.bind(Object(s.a)(e)),e}return Object(o.a)(t,[{key:"render",value:function(){this.state;return r.a.createElement("div",null,r.a.createElement("div",{className:"App flex"},r.a.createElement(d,null," "),r.a.createElement("h3",{className:"light-red dark-green orange mt5"},"Every day, thousands of pounds of perfectly good food is wasted in the hotel/Restaurant industry while thousands of needy people go hungry. We want to solve this problem by giving you a chance to connect instantly with charities nearby who could distribute this food to deserving people!")),r.a.createElement("div",{className:"center"},r.a.createElement("div",null,r.a.createElement(p,{getData:this.getDataFromSearchBar}),r.a.createElement(j,{data:this.state.list}),r.a.createElement(C,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.cf6f959d.chunk.js.map