!function e(n,t,r){function o(i,a){if(!t[i]){if(!n[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(s)return s(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var p=t[i]={exports:{}};n[i][0].call(p.exports,function(e){var t=n[i][1][e];return o(t?t:e)},p,p.exports,e,n,t,r)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){function r(e,n,t){if(!a(n))throw new TypeError("iterator must be a function");arguments.length<3&&(t=this),"[object Array]"===u.call(e)?o(e,n,t):"string"==typeof e?s(e,n,t):i(e,n,t)}function o(e,n,t){for(var r=0,o=e.length;o>r;r++)l.call(e,r)&&n.call(t,e[r],r,e)}function s(e,n,t){for(var r=0,o=e.length;o>r;r++)n.call(t,e.charAt(r),r,e)}function i(e,n,t){for(var r in e)l.call(e,r)&&n.call(t,e[r],r,e)}var a=e("is-function");n.exports=r;var u=Object.prototype.toString,l=Object.prototype.hasOwnProperty},{"is-function":3}],2:[function(e,n,t){(function(e){"undefined"!=typeof window?n.exports=window:"undefined"!=typeof e?n.exports=e:"undefined"!=typeof self?n.exports=self:n.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,n,t){function r(e){var n=o.call(e);return"[object Function]"===n||"function"==typeof e&&"[object RegExp]"!==n||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}n.exports=r;var o=Object.prototype.toString},{}],4:[function(e,n,t){var r=e("trim"),o=e("for-each"),s=function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.exports=function(e){if(!e)return{};var n={};return o(r(e).split("\n"),function(e){var t=e.indexOf(":"),o=r(e.slice(0,t)).toLowerCase(),i=r(e.slice(t+1));"undefined"==typeof n[o]?n[o]=i:s(n[o])?n[o].push(i):n[o]=[n[o],i]}),n}},{"for-each":1,trim:5}],5:[function(e,n,t){function r(e){return e.replace(/^\s*|\s*$/g,"")}t=n.exports=r,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},{}],6:[function(e,n,t){"use strict";function r(e,n){for(var t=0;t<e.length;t++)n(e[t])}function o(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}function s(e,n,t){var r=e;return c(n)?(t=n,"string"==typeof e&&(r={uri:e})):r=f(n,{uri:e}),r.callback=t,r}function i(e,n,t){return n=s(e,n,t),a(n)}function a(e){function n(){4===l.readyState&&s()}function t(){var e=void 0;if(l.response?e=l.response:"text"!==l.responseType&&l.responseType||(e=l.responseText||l.responseXML),y)try{e=JSON.parse(e)}catch(n){}return e}function r(e){clearTimeout(m),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,a(e,u)}function s(){if(!f){var n;clearTimeout(m),n=e.useXDR&&void 0===l.status?200:1223===l.status?204:l.status;var r=u,o=null;0!==n?(r={body:t(),statusCode:n,method:w,headers:{},url:v,rawRequest:l},l.getAllResponseHeaders&&(r.headers=d(l.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),a(o,r,r.body)}}var a=e.callback;if("undefined"==typeof a)throw new Error("callback argument missing");a=p(a);var u={body:void 0,headers:{},statusCode:0,method:w,url:v,rawRequest:l},l=e.xhr||null;l||(l=e.cors||e.useXDR?new i.XDomainRequest:new i.XMLHttpRequest);var c,f,m,v=l.url=e.uri||e.url,w=l.method=e.method||"GET",g=e.body||e.data||null,b=l.headers=e.headers||{},h=!!e.sync,y=!1;if("json"in e&&(y=!0,b.accept||b.Accept||(b.Accept="application/json"),"GET"!==w&&"HEAD"!==w&&(b["content-type"]||b["Content-Type"]||(b["Content-Type"]="application/json"),g=JSON.stringify(e.json))),l.onreadystatechange=n,l.onload=s,l.onerror=r,l.onprogress=function(){},l.ontimeout=r,l.open(w,v,!h,e.username,e.password),h||(l.withCredentials=!!e.withCredentials),!h&&e.timeout>0&&(m=setTimeout(function(){f=!0,l.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",r(e)},e.timeout)),l.setRequestHeader)for(c in b)b.hasOwnProperty(c)&&l.setRequestHeader(c,b[c]);else if(e.headers&&!o(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(l.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(l),l.send(g),l}function u(){}var l=e("global/window"),p=e("once"),c=e("is-function"),d=e("parse-headers"),f=e("xtend");n.exports=i,i.XMLHttpRequest=l.XMLHttpRequest||u,i.XDomainRequest="withCredentials"in new i.XMLHttpRequest?i.XMLHttpRequest:l.XDomainRequest,r(["get","put","post","patch","head","delete"],function(e){i["delete"===e?"del":e]=function(n,t,r){return t=s(n,t,r),t.method=e.toUpperCase(),a(t)}})},{"global/window":2,"is-function":3,once:7,"parse-headers":4,xtend:8}],7:[function(e,n,t){function r(e){var n=!1;return function(){return n?void 0:(n=!0,e.apply(this,arguments))}}n.exports=r,r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{}],8:[function(e,n,t){function r(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)o.call(t,r)&&(e[r]=t[r])}return e}n.exports=r;var o=Object.prototype.hasOwnProperty},{}],9:[function(e,n,t){"use strict";var r=e("./templates"),o=e("./ui"),s=e("./lib/pushState"),i=e("./lib/router"),a=e("./lib/preventDefault"),u=e("./users/signup"),l=e("./users/login"),p=e("./pages");if(!p.home()){var c=o.button();a(c),c.addEventListener("click",function(e){p.signup()&&u(o),p.signup()&&l(o)})}i(o.nav(),o.app()),window.addEventListener("popstate",function(){var e=window.location.pathname.slice(1),n=o.app();if(r[e]){var t=o.button();n.innerHTML=r[e],a(t),t.addEventListener("click",function(e){p.signup()&&u(o),p.login()&&l(o)})}else s("/"),n.innerHTML=""})},{"./lib/preventDefault":10,"./lib/pushState":11,"./lib/router":12,"./pages":14,"./templates":15,"./ui":16,"./users/login":17,"./users/signup":18}],10:[function(e,n,t){"use strict";n.exports=function(e){return e.addEventListener("click",function(e){return e.preventDefault()})}},{}],11:[function(e,n,t){"use strict";n.exports=function(e){e!==window.location.pathname&&window.history.pushState({},"",e)}},{}],12:[function(e,n,t){"use strict";var r=e("./setTemplate");n.exports=function(e,n){e.addEventListener("click",function(e){e.preventDefault();var t=e.target.pathname.slice(1);r(n,t)})}},{"./setTemplate":13}],13:[function(e,n,t){"use strict";var r=e("./pushState"),o=e("../templates"),s=e("./preventDefault"),i=e("../pages"),a=e("../users/signup"),u=e("../users/login"),l=e("../ui");n.exports=function(e,n){if(o[n]){r(n),e.innerHTML=o[n];var t=l.button();s(t),t.addEventListener("click",function(e){i.signup()&&a(l),i.login()&&u(l)})}else r("/"),e.innerHTML=""}},{"../pages":14,"../templates":15,"../ui":16,"../users/login":17,"../users/signup":18,"./preventDefault":10,"./pushState":11}],14:[function(e,n,t){"use strict";n.exports={home:function(){return"/"===window.location.pathname},signup:function(){return"/signup"===window.location.pathname},login:function(){return"/login"===window.location.pathname}}},{}],15:[function(e,n,t){"use strict";n.exports={login:"<form class='pvl mvxl'>\n  <fieldset>\n    <legend class='pbl'>\n      Login\n    </legend>\n    <div class='pbl'>\n      <label class='pbs' for='username'>username</label>\n      <input id='username' type='text' name='username' placeholder='username'>\n    </div>\n    <div class='pbl'>\n      <label class='pbs' for='password'>password</label>\n      <input id='password' type='password' name='password' placeholder='password'>\n    </div>\n    <div class='pbl'>\n      <button type='submit' value='Login'>Login</button>\n    </div>\n  </fieldset>\n</form>\n",signup:"<form class='pvl mvxl'>\n  <fieldset>\n    <legend class=\"pbl\">\n      Sign Up\n    </legend>\n    <div class=\"pbl\">\n      <label class='pbs' for='username'>username</label>\n      <input id='username' type='text' name='username' placeholder='username'>\n    </div>\n    <div class=\"pbl\">\n      <label class='pbs' for='email'>email</label>\n      <input id='email' type='text' name='email' placeholder='email'>\n    </div>\n    <div class=\"pbl\">\n      <label class='pbs' for='password'>password</label>\n      <input id='password' type='password' name='password' placeholder='password'>\n    </div>\n    <div class=\"pbl\">\n      <label class='pbs' for='confirm-password'>confirm password</label>\n      <input id='confirm-password' type='password' name='confirm-password' placeholder='confirm password'>\n    </div>\n    <div class=\"pbl\">\n      <button type='submit' value='Sign Up'>Sign Up</button>\n    </div>\n  </fieldset>\n</form>\n"}},{}],16:[function(e,n,t){"use strict";n.exports={nav:function(){return document.querySelector("nav")},app:function(){return document.getElementById("app")},button:function(){return document.querySelector("button")},username:function(){return document.getElementById("username")},email:function(){return document.getElementById("email")},password:function(){return document.getElementById("password")},confirmPassword:function(){return document.getElementById("confirm-password")}}},{}],17:[function(e,n,t){"use strict";var r=e("xhr");n.exports=function(e){var n=e.username(),t=e.password(),o={username:n.value,password:t.value};console.log(o),r({json:o,uri:"/login",method:"POST"},function(e,n,t){e&&console.error(e),"Incorrect username or password\n"===t?console.log("not logged in",t):console.log("logged in",t)})}},{xhr:6}],18:[function(e,n,t){"use strict";var r=e("xhr"),o=e("./login");n.exports=function(e){var n=e.username(),t=e.email(),s=e.password(),i=e.confirmPassword(),a={username:n.value,email:t.value,password:s.value,confirmPassword:i.value};r({json:a,uri:"/signup",method:"POST"},function(n,t,r){n&&console.error(n),r===a.username+" has signed up!\n"?(console.log("sign up",r),o(e)):console.log("not signed up",r)})}},{"./login":17,xhr:6}]},{},[9]);