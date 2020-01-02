(this["webpackJsonptwilio-test"]=this["webpackJsonptwilio-test"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),o=(a(3),a(17),a(5)),c=a.n(o),i=a(6),d=a(7),u=a(8),m=a(10),h=a(9),b=a(1),p=a(11),g=(a(19),{send_sms:function(e){return window.fetch("/web-sms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return 200===e.status?e.json():null})).then((function(e){if(!e||e.error)throw console.log("API Error: ",{data:e}),Error("API Error");return e}))}}),f=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,s=a.state.errors;switch(n){case"sender_name":s.sender_name=r.length<2?"Name must contain at least two characters.":"";break;case"sender_number":s.sender_number=12!=r.length?"Enter phone number with 10 digits (incl. int`l code) starting with +":"";break;case"sender_message":s.sender_message=r.length>120?"Messages need to be <120 characters because this app is old school.":""}a.setState(Object(i.a)({errors:s},n,r)),f(a.state.errors)?(console.log("Valid Form"),a.setState({valid:!0,disabled:!1,btnColor:"blue"})):(console.log("Invalid form"),a.setState({valid:!1,disabled:!0,btnColor:"lightblue"}))},a.state={btnColor:"lightblue",disabled:!0,succeeded:!1,failed:!1,valid:!1,error:null,errors:{sender_name:"",sender_number:"",sender_message:""}},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),g.send_sms({name:this.state.sender_name,number:this.state.sender_number,message:this.state.sender_message}).then((function(e){e.error?(t.setState({error:"Sending failed: ".concat(e.error.message),disabled:!1,proessing:!1}),console.log("[error",e.error)):(t.setState({succeeded:!0,error:""}),console.log("Success!"))})).catch((function(e){t.setState({error:e.message,failed:!0,processing:!1}),console.log(e)}));case 2:case"end":return a.stop()}}),null,this)}},{key:"renderSuccess",value:function(){return r.a.createElement("div",{className:"sr-field-success message"},r.a.createElement("h3",null,"Message sent!"),r.a.createElement("p",null,"Refresh to send another."))}},{key:"renderForm",value:function(){return r.a.createElement("div",{className:"full-container vertical-center"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Just like using your phone..."),r.a.createElement("h3",null,"...except a web app..."),r.a.createElement("h4",null,"...and also dumber."),r.a.createElement("h4",null,"Enter your details and message below."),r.a.createElement("div",{className:"sr-combo-inputs",style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement("input",{type:"text",name:"sender_name",placeholder:"Name - This will tell Steve who's texting.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"sender_number",placeholder:"Your number - Format like +12244878383.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"sender_message",placeholder:"Your message. 140 character max.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("div",null,this.state.failed?"Sending message failed. Try again.":null)),!this.state.succeeded&&r.a.createElement("button",{className:"btn",disabled:this.state.disabled,style:{backgroundColor:this.state.btnColor,border:this.state.btnColor}},this.state.failed?"Try again.":"Send"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.succeeded&&this.renderSuccess(),!this.state.succeeded&&this.renderForm())}}]),t}(n.Component),E=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"An app to send an ",r.a.createElement(E,{symbol:"\u260e\ufe0f"}),"SMS",r.a.createElement(E,{symbol:"\u260e\ufe0f"})," to ",r.a.createElement("a",{href:"http://www.stevehind.me",className:""},"Steve"),".")),r.a.createElement("div",{className:"App-body"},r.a.createElement(v,null)),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("p",null,"\xa9Steve Hind, 2020.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3a68f9c1.chunk.js.map