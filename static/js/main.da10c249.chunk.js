(this.webpackJsonpcharityadvisor=this.webpackJsonpcharityadvisor||[]).push([[0],{10:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/food.c2d14d7f.svg"},16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(21),a(3)),s=a(4),l=a(2),u=a(6),h=a(5),d=(a(10),a(11),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState({criteria:e.target.value})},n.handleInput=function(e){return n.setState({value:e.target.value})},n.sendDataToParent=function(){n.props.getData(n.state.value,n.state.criteria)},n.onSubmitSearch=function(e){n.sendDataToParent(),console.log(n.state.value),console.log(n.state.critera)},n.state={criteria:"zip",value:"",charityList:[],errorOccured:!1},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleInput=n.handleInput.bind(Object(l.a)(n)),n.sendDataToParent=n.sendDataToParent.bind(Object(l.a)(n)),n.onSubmitSearch=n.onSubmitSearch.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex center"},r.a.createElement("form",{className:"flex-column center search pt5 black-80"},r.a.createElement("div",null,r.a.createElement("label",null,"Search charity by:",r.a.createElement("select",{className:"center fw6 w-300",criteria:this.state.criteria,onChange:this.handleChange},r.a.createElement("option",{value:"zip"},"Zip Code"),r.a.createElement("option",{value:"city"},"City"),r.a.createElement("option",{value:"name"},"Name")))),r.a.createElement("div",{className:"measure"},r.a.createElement("input",{value:this.state.value,onChange:this.handleInput,id:"name",className:"input-reset ba b--black-20 pa2 pl4 mb2 ",type:"text"}),r.a.createElement("a",{onClick:this.onSubmitSearch,className:" center buttonn w-70 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green w-300",href:"#0"},"Go!"))))}}]),a}(n.Component)),m=(a(22),new URL("https://cors-anywhere.herokuapp.com/https://api.data.charitynavigator.org/v2/Organizations")),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fetching:!1,criteria:"zip",value:"",charityList:[],errorOccured:!1,error:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({fetching:!0});var t,a=this.props.data,n=a.criteria,r=a.value;console.log(n),console.log(r),t="zip"===n?{app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",zip:r}:"city"===n?{app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",city:r}:{app_id:"b8cb661c",app_key:"b55d0a5d26c6fad893f91244e7229e4b",search:r},m.search=new URLSearchParams(t).toString(),fetch(m).then((function(e){return e.json()})).then((function(t){t.errorMessage?e.setState({error:t.errorMessage.message}):e.setState({charityList:t}),e.setState({fetching:!1})})).catch((function(t){e.setState({errorOccured:!0})}))}},{key:"render",value:function(){var e=this.state.charityList;return r.a.createElement("div",null,r.a.createElement("div",{className:" center charityList"},!0===this.state.fetching?r.a.createElement("div",null," ",r.a.createElement("h4",{className:"fw4 dark-green"}," Looking up nearest charities...Please Wait... ")," "):""!==this.state.error?r.a.createElement("div",null," ",r.a.createElement("p",{className:"dark-red center"}," Invalid input.",this.state.error,".Please check your input and try again.")," "):r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement("ul",null,r.a.createElement("div",{className:" center dark-green"},r.a.createElement("li",{className:"fw6 white bg-dark-green",key:t}," Name: ",e.charityName),r.a.createElement("h5",null,"Type: ",e.irsClassification.classification),r.a.createElement("h5",null," Address: ",e.mailingAddress.streetAddress1),r.a.createElement("h5",null," ",e.mailingAddress.streetAddress2," "),r.a.createElement("h5",null," City: ",e.mailingAddress.city," "),r.a.createElement("h5",null," State: ",e.mailingAddress.stateOrProvince," ")))})))))}}]),a}(n.Component),p=(a(23),a(14)),f=a.n(p),v=a(15),b=(a(41),function(e){var t=e.onRouteChange;return r.a.createElement(v.slide,null,r.a.createElement("a",{className:"menu-item white",onClick:function(){return t("Home")},href:"/Home"},"Home"))}),E={route:"Home",data:{criteria:"",value:""}},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onRouteChange=function(t){console.log("changging route to: "+t),"Home"===t?(e.setState({route:"Home"}),e.setState({data:{value:"",criteria:""}})):"Search"===t?(e.setState({route:"Search"}),e.setState({data:{value:"",criteria:""}})):e.setState({route:t}),console.log("state route is : "+e.state.route)},e.getDataFromSearchBar=function(t,a){e.setState({data:{value:t,criteria:a}}),console.log(e.state.data.value),console.log(e.state.data.criteria)},e.state=E,e.getDataFromSearchBar=e.getDataFromSearchBar.bind(Object(l.a)(e)),e.onRouteChange=e.onRouteChange.bind(Object(l.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.route;return r.a.createElement("div",{className:"App flex"},r.a.createElement("div",null,r.a.createElement(b,{onRouteChange:this.onRouteChange})),"Home"===t?r.a.createElement("div",{className:"site-container flex flex-wrap"},r.a.createElement("div",{className:"center mt7 ml7 w-30 pa0"},r.a.createElement("h1",{className:"light-red dark-green orange fw6"},"  Let's fight food waste together and help those in need in the process."),r.a.createElement("h3",{className:"light-red fw3 dark-green orange"},"Every day, thousands of pounds of perfectly good food is wasted in the hotel/Restaurant industry while thousands of needy people go hungry. We want to solve this problem by giving you a chance to connect instantly with charities nearby who could distribute this food to deserving people!"),r.a.createElement("button",{className:" center buttonn link  h-30 grow  w-30 white f6 pointer dim bg-dark-green ba pa3",onClick:function(){return e.onRouteChange("Search")}},"  Let's Go! ")),r.a.createElement("img",{alt:"",className:" o-75 flex h5 center mt7 mr5",src:f.a})):""!==this.state.data.value?r.a.createElement("div",{className:"center mt5 w-300"},console.log("value is of input is :"+this.state.value),console.log("CharityList"),r.a.createElement(g,{data:this.state.data})):r.a.createElement(d,{getData:this.getDataFromSearchBar}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.da10c249.chunk.js.map