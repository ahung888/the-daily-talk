!function(t){function e(e){for(var o,r,a=e[0],c=e[1],l=e[2],d=0,g=[];d<a.length;d++)r=a[d],i[r]&&g.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);for(u&&u(e);g.length;)g.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={1:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/the-daily-talk/dist";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([11,0]),n()}([,,,function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("1e57e95d",o,!0,{})},function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("5dfbceea",o,!0,{})},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("f0f04144",o,!0,{})},function(t,e,n){var o=n(18);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("0edea1dc",o,!0,{})},function(t,e,n){var o=n(20);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("9254438c",o,!0,{})},function(t,e,n){var o=n(22);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(1).default)("288c5b44",o,!0,{})},,,function(t,e,n){"use strict";n.r(e);var o=n(10),i={CLIENT_ID:"191102243305-2ukd78gabslfmta72c0u77rhvgrsquqb.apps.googleusercontent.com",DISCOVERY_DOCS:["https://sheets.googleapis.com/$discovery/rest?version=v4"],CLIENT_SCOPES:"profile https://www.googleapis.com/auth/spreadsheets",spreadsheetId:"1UZmh2yXSrctW-7uYJi53OsM8lK9nAyVjuaxzKm74jzU",spreadsheetRange:"messages!A2:D",spreadsheetMessageRange:{sheetId:0,startRowIndex:1,startColumnIndex:2,endColumnIndex:3}},s={data:function(){return{showCollapse:!1}},props:{googleUser:Object},computed:{profile:function(){return this.googleUser.getBasicProfile()},userImageUrl:function(){return this.profile.getImageUrl()},userName:function(){return this.profile.getName()}},methods:{toggleCollapse:function(){this.showCollapse=!this.showCollapse},signout:function(){this.$emit("signout"),this.showCollapse=!1}}},r=(n(23),n(0)),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",{staticClass:"navbar fixed-top navbar-expand-lg bg-success shadow-sm"},[n("h2",{staticClass:"mx-auto mt-3 text-white",attrs:{href:"/"}},[t._v("The Daily Talk")]),t._v(" "),t.googleUser?n("span",[n("img",{staticClass:"portrait-icon",attrs:{src:t.userImageUrl,alt:t.userName},on:{click:t.toggleCollapse}})]):t._e()]),t._v(" "),t.showCollapse?n("div",{staticClass:"mycollapse fixed-top text-center d-flex flex-column bg-success shadow-sm"},[n("button",{staticClass:"btn btn-outline-light my-2",on:{click:t.signout}},[t._v("Sign out")])]):t._e()])},[],!1,null,"2e7d78f8",null).exports,c={methods:{signin:function(){this.$emit("signin")}}},l=(n(21),Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"abcRioButton abcRioButtonBlue",staticStyle:{height:"50px",width:"240px"},on:{click:this.signin}},[e("div",{staticClass:"abcRioButtonContentWrapper"},[e("div",{staticClass:"abcRioButtonIcon",staticStyle:{padding:"15px"}},[e("div",{staticClass:"abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18",staticStyle:{width:"18px",height:"18px"}},[e("svg",{staticClass:"abcRioButtonSvg",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"18px",height:"18px",viewBox:"0 0 48 48"}},[e("g",[e("path",{attrs:{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}}),e("path",{attrs:{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}}),e("path",{attrs:{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}}),e("path",{attrs:{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}}),e("path",{attrs:{fill:"none",d:"M0 0h48v48H0z"}})])])])]),this._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"abcRioButtonContents",staticStyle:{"font-size":"16px","line-height":"48px"}},[e("span",{attrs:{id:"not_signed_inxv6qmxbqei8f"}},[this._v("Sign in with Google")]),e("span",{staticStyle:{display:"none"},attrs:{id:"connectedxv6qmxbqei8f"}},[this._v("Signed in with Google")])])}],!1,null,null,null).exports),u={props:{message:String,emotion:String,fixedCenter:Boolean},data:function(){return{editingMessage:"",editingEmotion:"",emotions:["😍","😀","😜","😘","😭"]}},computed:{position:function(){return this.fixedCenter?"dialog-new-message fixed-top":""}},methods:{submit:function(){var t={message:this.editingMessage,emotion:this.editingEmotion};this.$emit("submit",t),this.close()},close:function(){this.editingMessage="",this.editingEmotion="",this.$emit("close")},pickEmotion:function(t){this.editingEmotion=t}},mounted:function(){this.editingMessage=this.message||"",this.editingEmotion=this.emotion||"",console.log("msgForm mounted",this.editingMessage,this.editingEmotion)}},d=(n(19),Object(r.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",class:t.position},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header d-flex justify-content-between"},[n("i",{staticClass:"btn btn-light"},[t._v("Message")]),t._v(" "),n("i",{staticClass:"btn btn-light",on:{click:t.close}},[t._v("X")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editingMessage,expression:"editingMessage"}],staticClass:"form-control",attrs:{type:"text",rows:"8",placeholder:"Leave a message"},domProps:{value:t.editingMessage},on:{input:function(e){e.target.composing||(t.editingMessage=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"emotion d-flex justify-content-between mb-3"},t._l(t.emotions,function(e){return n("label",{staticClass:"form-check-label btn",class:{"btn-outline-primary":t.editingEmotion!==e,"btn-primary":t.editingEmotion===e},attrs:{for:"emotion"},on:{click:function(n){t.pickEmotion(e)}}},[t._v("\n              "+t._s(e)+"\n            ")])})),t._v(" "),n("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"},on:{click:t.submit}},[t._v("Submit")])])])])])])},[],!1,null,null,null).exports),g={components:{MessageForm:d},data:function(){return{showForm:!1,emotions:["😍","😀","😜","😘","😭"]}},methods:{openDialog:function(){this.showForm=!0,this.$emit("showDialog","messageForm",!0)},onClose:function(){this.showForm=!1,this.$emit("showDialog","messageForm",!1)},onSubmit:function(t){this.$emit("addMessage",{message:t.message,emotion:t.emotion})}}},p=(n(17),Object(r.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.showForm?e("MessageForm",{attrs:{fixedCenter:!0},on:{submit:this.onSubmit,close:this.onClose}}):this._e(),this._v(" "),e("div",{staticClass:"fixed-add-button btn-primary shadow",on:{click:this.openDialog}},[this._v("+")])],1)},[],!1,null,null,null).exports),h=(n(15),{}),f={name:"TheDailyTalk",components:{Header:a,GoogleSigninButton:l,FixedAddButton:p,CoverLoading:Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cover-loading fixed-top container-fluid d-flex justify-content-center align-items-center"},[e("i",{staticClass:"fa fa-3x fa-refresh fa-spin text-light"})])}],!1,null,null,null).exports,MessageForm:d,Footer:Object(r.a)(h,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"my-4 text-center"},[e("p",{staticClass:"text-light"},[this._v("© 2018 Hung & Sao")]),e("p")])}],!1,null,null,null).exports},data:function(){return{auth2Loaded:!1,auth2:null,googleUser:null,googleSignInParams:{client_id:i.CLIENT_ID,discoveryDocs:i.DISCOVERY_DOCS,scope:i.CLIENT_SCOPES},records:[],isShowDialogNewMessage:!1,editedRecord:null}},computed:{profile:function(){return this.googleUser?this.googleUser.getBasicProfile():null},userFullName:function(){return this.profile?this.profile.getName():null},userGivenName:function(){return this.profile?this.profile.getGivenName():null},userFamilyName:function(){return this.profile?this.profile.getFamilyName():null},userImageUrl:function(){return this.profile?this.profile.getImageUrl():null},userEmail:function(){return this.profile?this.profile.getEmail():null}},filters:{onlyDate:function(t){return t.substr(0,10)},authorColor:function(t){return"Yun Hung"==t?"text-success":"text-info"}},methods:{onSignIn:function(){this.auth2.signIn(),this.auth2.isSignedIn.listen(this.checkForLoggedInUser)},onSignOut:function(){this.auth2.disconnect(),this.googleUser=null},checkForLoggedInUser:function(){this.auth2.isSignedIn.get()&&(this.googleUser=this.auth2.currentUser.get(),this.reloadMessages())},reloadMessages:function(){var t=this;this.loadMessages().then(function(e){t.records=[],e.forEach(function(e){return t.records.push({time:e[0],author:e[1],message:e[2],emotion:e[3]})})})},loadMessages:function(){return new Promise(function(t,e){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:i.spreadsheetId,range:i.spreadsheetRange}).then(function(e){t(e.result.values)},function(t){return e(t)})})},onAddMessage:function(t){var e=this,n=t.message.trim(),o=t.emotion||"";if(""!=n){var s={spreadsheetId:i.spreadsheetId,range:i.spreadsheetRange,valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS"},r={values:[[new Date,this.userGivenName,n,o]]};window.gapi.client.sheets.spreadsheets.values.append(s,r).then(function(t){e.reloadMessages()},function(t){console.error("error: "+t.result.error.message)})}},onShowDialog:function(t,e){"messageForm"==t&&(this.isShowDialogNewMessage=e)},editRecord:function(t){t.author==this.userGivenName&&(this.beforeEditCache=t.message,this.editedRecord=t)},doneEdit:function(t){this.editedRecord&&(this.editedRecord=null,this.modifyRecord(t))},cancelEdit:function(t){this.editedRecord=null,t.message=this.beforeEditCache},modifyRecord:function(t){var e=this,n=[];n.push({findReplace:{find:this.beforeEditCache,replacement:t.message,range:i.spreadsheetMessageRange,matchEntireCell:!0}});var o={requests:n};window.gapi.client.sheets.spreadsheets.batchUpdate({spreadsheetId:i.spreadsheetId,resource:o}).then(function(t){e.reloadMessages()},function(t){console.error("modify error",t)})},onSubmit:function(t){this.modifyRecord(t),this.editedRecord=null}},mounted:function(){var t=this;window.gapi?this.googleSignInParams.client_id?window.gapi.load("client:auth2",function(){window.gapi.client.init(t.googleSignInParams).then(function(){t.auth2=window.gapi.auth2.getAuthInstance(),t.auth2Loaded=!0,t.checkForLoggedInUser()})}):console.log("client_id must be specified."):console.log('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')},directives:{"record-focus":function(t,e){e.value&&t.focus()}}},m=(n(13),Object(r.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header",{attrs:{googleUser:t.googleUser},on:{signout:t.onSignOut}}),t._v(" "),t._m(0),t._v(" "),t.auth2Loaded?n("div",[t.googleUser&&!t.isShowDialogNewMessage?n("div",{staticClass:"d-flex flex-column-reverse"},t._l(t.records,function(e){return n("div",{staticClass:"card border-primary my-2 shadow",class:{editing:e==t.editedRecord}},[n("div",{staticClass:"card-body"},[e!==t.editedRecord?n("div",{staticClass:"recordInfo"},[n("h5",{staticClass:"card-title"},[n("pre",{on:{dblclick:function(n){t.editRecord(e)}}},[t._v(t._s(e.message))])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v(t._s(e.emotion))]),t._v(" "),n("span",{staticClass:"blockquote-footer",class:t._f("authorColor")(e.author)},[t._v("\n                "+t._s(e.author)+", "+t._s(t._f("onlyDate")(e.time))+"\n              ")])])]):n("div",{staticClass:"form-group edit w-100"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"record.message"},{name:"record-focus",rawName:"v-record-focus",value:e==t.editedRecord,expression:"record == editedRecord"}],ref:"modifiedMsg",refInFor:!0,staticClass:"form-control mb-2",attrs:{type:"text",rows:"8"},domProps:{value:e.message},on:{blur:function(n){t.doneEdit(e)},keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key,"Escape"))return null;t.cancelEdit(e)},input:function(n){n.target.composing||t.$set(e,"message",n.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(n){t.doneEdit(e)}}},[t._v("Save")])])])])})):t._e(),t._v(" "),t.googleUser?t._e():n("div",{staticClass:"d-flex justify-content-center my-5"},[n("GoogleSigninButton",{on:{signin:t.onSignIn}})],1),t._v(" "),t.googleUser?n("FixedAddButton",{on:{addMessage:t.onAddMessage,showDialog:t.onShowDialog}}):t._e()],1):n("div",[n("CoverLoading")],1),t._v(" "),n("Footer")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-white text-center"},[e("small",[this._v("This is a space about for both of us to share the thinking, dream, and funny things.")])])}],!1,null,"2c7c23c1",null).exports);o.a.component("theDailyTalk",m),new o.a({el:"#app"})},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\npre[data-v-2c7c23c1] {\n  font-family: 'Lobster', cursive;\n  font-size: 1.5rem;\n  padding: .25rem 0;\n  white-space: pre-wrap;\n  /* css-3 */\n  white-space: -moz-pre-wrap;\n  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;\n  /* Opera 4-6 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n  /* Internet Explorer 5.5+ */\n}\n.card .form-group.edit[data-v-2c7c23c1] {\n  display: none;\n}\n.card.editing .form-group.edit[data-v-2c7c23c1] {\n  display: block;\n}\n.card.editing .card-body .recordInfo[data-v-2c7c23c1] {\n  display: none;\n}\n.card .form-group.edit textarea[data-v-2c7c23c1] {\n  font-family: 'Lobster', cursive;\n  font-size: 1.5rem;\n  border: none;\n}\n",""])},function(t,e,n){"use strict";var o=n(3);n.n(o).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.cover-loading {\n  height: 100vh;\n  z-index: 3000;\n  background-color: rgba(0,0,0,.5);\n}\n",""])},function(t,e,n){"use strict";var o=n(4);n.n(o).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.fixed-add-button {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n  z-index: 1000;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n",""])},function(t,e,n){"use strict";var o=n(5);n.n(o).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.dialog-new-message {\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.emotion input {display: none;\n}\n.emotion label {font-size: 2rem;\n}\n.emotion label.selected {\n  border: 1px solid #f0f;\n  border-radius: 50%;\n}\n",""])},function(t,e,n){"use strict";var o=n(6);n.n(o).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.abcRioButton{-webkit-border-radius:1px;border-radius:1px;-webkit-box-shadow: 0 2px 4px 0px rgba(0,0,0,.25);box-shadow:0 2px 4px 0 rgba(0,0,0,.25);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .218s,border-color .218s,box-shadow .218s;transition:background-color .218s,border-color .218s,box-shadow .218s;-webkit-user-select:none;-webkit-appearance:none;background-color:#fff;background-image:none;color:#262626;cursor:pointer;outline:none;overflow:hidden;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;width:auto\n}\n.abcRioButton:hover{-webkit-box-shadow:0 0 3px 3px rgba(66,133,244,.3);box-shadow:0 0 3px 3px rgba(66,133,244,.3)\n}\n.abcRioButtonBlue{background-color:#4285f4;border:none;color:#fff\n}\n.abcRioButtonBlue:hover{background-color:#4285f4\n}\n.abcRioButtonBlue:active{background-color:#3367d6\n}\n.abcRioButtonLightBlue{background-color:#fff;color:#757575\n}\n.abcRioButtonLightBlue:active{background-color:#eee;color:#6d6d6d\n}\n.abcRioButtonIcon{float:left\n}\n.abcRioButtonBlue .abcRioButtonIcon{background-color:#fff;-webkit-border-radius:1px;border-radius:1px\n}\n.abcRioButtonSvg{display:block\n}\n.abcRioButtonContents{font-family:Roboto,arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.21px;margin-left:6px;margin-right:6px;vertical-align:top\n}\n.abcRioButtonContentWrapper{height:100%;width:100%\n}\n.abcRioButtonBlue .abcRioButtonContentWrapper{border:1px solid transparent\n}\n.abcRioButtonErrorWrapper,.abcRioButtonWorkingWrapper{display:none;height:100%;width:100%\n}\n.abcRioButtonErrorIcon,.abcRioButtonWorkingIcon{margin-left:auto;margin-right:auto\n}\n.abcRioButtonErrorState,.abcRioButtonWorkingState{border:1px solid #d5d5d5;border:1px solid rgba(0,0,0,.17);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 0 rgba(0,0,0,.05);color:#262626\n}\n.abcRioButtonErrorState:hover,.abcRioButtonWorkingState:hover{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 0 rgba(0,0,0,.1)\n}\n.abcRioButtonErrorState:active,.abcRioButtonWorkingState:active{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:inset 0 1px 0 #ddd;box-shadow:inset 0 1px 0 #ddd;color:#262626\n}\n.abcRioButtonWorkingState,.abcRioButtonWorkingState:hover{background-color:#f5f5f5\n}\n.abcRioButtonWorkingState:active{background-color:#e5e5e5\n}\n.abcRioButtonErrorState,.abcRioButtonErrorState:hover{background-color:#fff\n}\n.abcRioButtonErrorState:active{background-color:#e5e5e5\n}\n.abcRioButtonWorkingState .abcRioButtonWorkingWrapper,.abcRioButtonErrorState .abcRioButtonErrorWrapper{display:block\n}\n.abcRioButtonErrorState .abcRioButtonContentWrapper,.abcRioButtonWorkingState .abcRioButtonContentWrapper,.abcRioButtonErrorState .abcRioButtonWorkingWrapper{display:none\n}\n.-webkit-keyframes abcRioButtonWorkingIconPathSpinKeyframes{\n0%{-webkit-transform:rotate(0)\n}\n}\n",""])},function(t,e,n){"use strict";var o=n(7);n.n(o).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\nimg.portrait-icon[data-v-2e7d78f8] {\n  width: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n}\nheader[data-v-2e7d78f8] {\n  margin-bottom: 78px;\n}\n.mycollapse[data-v-2e7d78f8] {\n  margin-top: 78px;\n}\n",""])},function(t,e,n){"use strict";var o=n(8);n.n(o).a}]);