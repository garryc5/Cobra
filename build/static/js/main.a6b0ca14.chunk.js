(this.webpackJsonpbadbad=this.webpackJsonpbadbad||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),s=a.n(o),l=(a(30),a(6)),c=a(7),i=a(9),m=a(8),u=a(10),h=(a(31),a(11)),p=a(13),d=a.n(p),g=a(15),f=a(16),v=a(4);function E(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var b={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:E,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=E();return e?JSON.parse(atob(e.split(".")[1])).user:null}},N="/api/";var O={signup:function(e){return fetch(N+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken! test")})).then((function(e){var t=e.token;return b.setToken(t)}))},getUser:function(){return b.getUserFromToken()},logout:function(){b.removeToken()},login:function(e){return fetch(N+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return b.setToken(t)}))}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",passwordConf:""},a.handleChange=function(e){a.props.updateMessage(""),a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.signup(a.state);case 4:a.props.handleSignupOrLogin(),a.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.props.updateMessage(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"Sign Up"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(v.b,{to:"/"},"Cancel")))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).updateMessage=function(e){a.setState({message:e})},a.state={message:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(w,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",pw:""},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.login(a.state);case 4:a.props.handleSignupOrLogin(),a.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Invalid Credentials!");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("header",{className:"header-footer"},"Log In"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(v.b,{to:"/"},"Cancel")))))}}]),t}(n.Component),y=function(e){var t=e.user?r.a.createElement("div",null,r.a.createElement(v.b,{to:"",className:"NavBar-link",onClick:e.handleLogout},"LOG OUT"),"\xa0\xa0|\xa0\xa0\xa0",r.a.createElement("span",{className:"NavBar-welcome"},"WELCOME, ",e.user.name)):r.a.createElement("div",null,r.a.createElement(v.b,{to:"/login",className:"NavBar-link"},"LOG IN"),"\xa0\xa0|\xa0\xa0",r.a.createElement(v.b,{to:"/signup",className:"NavBar-link"},"SIGN UP"));return r.a.createElement("div",{className:"NavBar"},t)},C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleLogout=function(){O.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:O.getUser()})},e.state={user:O.getUser()},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Bargain"),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{user:e.state.user,handleLogout:e.handleLogout})}}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(k,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(S,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v.a,null,r.a.createElement(h.a,{component:C})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a6b0ca14.chunk.js.map