!function(t){function e(e){for(var a,o,r=e[0],l=e[1],u=e[2],d=0,g=[];d<r.length;d++)o=r[d],s[o]&&g.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(c&&c(e);g.length;)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={1:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/the-daily-talk/dist";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;i.push([13,0]),n()}([,,,function(t,e,n){var a=n(14);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("490630d1",a,!0,{})},function(t,e,n){var a=n(16);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("647c515c",a,!0,{})},function(t,e,n){var a=n(18);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("432e9c78",a,!0,{})},function(t,e,n){var a=n(20);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("f0f04144",a,!0,{})},function(t,e,n){var a=n(22);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("0edea1dc",a,!0,{})},function(t,e,n){var a=n(24);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("9254438c",a,!0,{})},function(t,e,n){var a=n(26);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("e416e176",a,!0,{})},function(t,e,n){var a=n(28);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("937fc18c",a,!0,{})},,,function(t,e,n){"use strict";n.r(e);var a=n(12),s=0,i=1,o=3,r=4,l=5,u=6,c=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t})({DISCOVERY_DOCS:["https://sheets.googleapis.com/$discovery/rest?version=v4"],CLIENT_SCOPES:"profile https://www.googleapis.com/auth/spreadsheets"},{CLIENT_ID:"191102243305-2ukd78gabslfmta72c0u77rhvgrsquqb.apps.googleusercontent.com",spreadsheetId:"1UZmh2yXSrctW-7uYJi53OsM8lK9nAyVjuaxzKm74jzU",messagesTable:{sheetname:"messages",range:"A2:G"},pivotTable:{sheetname:"pivot table",range:"A3:H",rangeMetaMessages:"A3:C5",rangeMetaTags:"D2:F"}}),d={TAIWAN:10,VIETNAM:11};function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.TAIWAN,e=new Date;return e.setUTCHours(t),e.getTime()}function h(t){var e=function(t){return new Date(parseInt(t))}(t);return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).substr(-2)+"-"+("0"+e.getDate()).substr(-2)}var p=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],a=!0,s=!1,i=void 0;try{for(var o,r=t[Symbol.iterator]();!(a=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(s)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var v={client_id:"",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:["profile","https://www.googleapis.com/auth/spreadsheets"].join(" ")},b=function(){function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"A1:A";m(this,t),this.api=e,this.spreadsheetId=n,this.range=s,this.sheetName=a}return f(t,[{key:"initSpreadsheet",value:function(){var t=this,e={spreadsheetId:this.spreadsheetId,range:this.rangeNotation("A1:C")};return this.api.values.clear(e,{}).then(function(e){var n={spreadsheetId:t.spreadsheetId,range:t.rangeNotation("A1:C"),valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS"};return t.api.values.append(n,{values:[[0,"created","updated"]]})}.bind(this))}},{key:"insert",value:function(){}},{key:"append",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.lastRowId().then(function(n){var a=n,s=g(d.VIETNAM);e.forEach(function(t){return t.unshift(++a,s,s)});var i={spreadsheetId:t.spreadsheetId,range:t.rangeNotation(),valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS"},o={values:e};return new Promise(function(t,e){var n=this;this.api.values.append(i,o).then(function(e){n.updateLastRowId(a),t(e.result)},function(t){e(t.result.error.message)})}.bind(t))}.bind(this))}},{key:"select",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(e,n){this.api.values.get({spreadsheetId:this.spreadsheetId,range:this.rangeNotation(t)}).then(function(t){e(t.result.values)},function(t){return n(t)})}.bind(this))}},{key:"selectMultiRanges",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(e,n){var a=this;this.api.values.batchGet({spreadsheetId:this.spreadsheetId,ranges:t.map(function(t){return a.rangeNotation(t)}.bind(this))}).then(function(t){e(t.result.valueRanges.map(function(t){return t.values&&t.values.length>0&&void 0!==t.values[0]?t.values[0]:[]}))},function(t){return n(t)})}.bind(this))}},{key:"selectRow",value:function(t){var e=this.idRow(t),n="A"+e+":"+this.lastColumnTag()+e;return this.select(n)}},{key:"selectRows",value:function(t){var e=this,n=t.map(function(t){var n=e.idRow(t);return"A"+n+":"+e.lastColumnTag()+n}.bind(this));return this.selectMultiRanges(n)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={spreadsheetId:this.spreadsheetId,range:this.rangeNotation(e),valueInputOption:"USER_ENTERED"},a={values:t},s=this.api.values.update(n,a);return new Promise(function(t,e){s.then(function(e){return t(e)},function(t){return e(t)})})}},{key:"updateLastRowId",value:function(t){return this.update([[t]],"A1")}},{key:"updateById",value:function(t,e){var n={spreadsheetId:this.spreadsheetId,range:this.rowNotation(t),valueInputOption:"USER_ENTERED"},a=g(d.VIETNAM);e.unshift(null,null,a);var s={values:[e]},i=this.api.values.update(n,s);return new Promise(function(t,e){i.then(function(e){return t(e)},function(t){return e(t)})})}},{key:"updateCellById",value:function(t,e,n){var a={spreadsheetId:this.spreadsheetId,range:this.rowNotation(t),valueInputOption:"USER_ENTERED"},s=[];for(e=parseInt(e);e--;)s.push(null);s.push(n);var i={values:[s]};this.api.values.update(a,i).then(function(t){},function(t){console.error("error: "+t.result.error.message)})}},{key:"delete",value:function(){}},{key:"lastRowId",value:function(){return new Promise(function(t,e){this.api.values.get({spreadsheetId:this.spreadsheetId,range:this.rangeNotation("A1")}).then(function(e){e.result.values?t(parseInt(e.result.values[0][0])):t(0)},function(t){return e(t)})}.bind(this))}},{key:"lastRow",value:function(){var t=this;return this.lastRowId().then(function(e){var n=t.idRow(e),a="A"+n+":"+t.lastColumnTag()+n;return t.select(a)}.bind(this))}},{key:"lastColumnTag",value:function(){return this.range.split(":")[1]}},{key:"idRow",value:function(t){return parseInt(t)+1}},{key:"rowNotation",value:function(t){return this.sheetName+"!A"+this.idRow(t)+":"+this.lastColumnTag()}},{key:"rangeNotation",value:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.range;return this.sheetName+"!"+t}}]),t}(),w=function(){function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"A1:A";m(this,t),this.api=e,this.spreadsheetId=n,this.messages=new b(e,n,a,s)}return f(t,[{key:"initSpreadsheet",value:function(){this.messages.initSpreadsheet()}},{key:"addMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.messages.append([t])}},{key:"getAllMessages",value:function(){return this.messages.select()}},{key:"getMessageByIds",value:function(t){return this.messages.selectRows(t)}},{key:"lastMessages",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Promise.all([this.messages.lastRowId()]).then(function(a){var s=p(a,1)[0],i=s-n*e+1;i=i<1?1:i;var o=s-n*(e-1);o=o<1?1:o;var r=t.messages.idRow(i),l=t.messages.idRow(o),u="A"+r+":"+t.messages.lastColumnTag()+l;return t.messages.select(u)})}},{key:"updateMessage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return this.messages.updateById(t,e)}}]),t}(),x=function(t){if(window.gapi){if((v=Object.assign(v,t)).client_id)return new Promise(function(t,e){window.gapi.load("client:auth2",function(){window.gapi.client.init(v).then(function(){var e=window.gapi.client.sheets.spreadsheets;t(e)})})});console.log("client_id must be specified.")}else console.log('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')},_={data:function(){return{baseurl:BASEURL}}},y=(n(29),n(0)),k=Object(y.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mdl-layout__header mdl-layout__header--transparent"},[e("div",{staticClass:"mdl-layout__header-row fixed d-flex justify-content-center w-100 p-0"},[e("a",{attrs:{href:this.baseurl}},[e("span",{staticClass:"mdl-layout-title"},[this._v("The Daily Talk")])])])])},[],!1,null,null,null).exports,C={props:{googleUser:Object,metaData:Object},data:function(){return{selectedSubNav:""}},computed:{profile:function(){return this.googleUser?this.googleUser.getBasicProfile():null},userImageUrl:function(){return this.profile?this.profile.getImageUrl():null},userGivenName:function(){return this.profile?this.profile.getGivenName():null}},filters:{pluralizeTagClass:function(t){return t>1?"fa-tags":"fa-tag"}},methods:{showSubNav:function(t){this.selectedSubNav=t},signout:function(){this.$emit("signout")},loadMessageByIds:function(t){this.$emit("loadMessageByIds",t.split(",")),this.closeDrawer()},closeDrawer:function(){var t=document.querySelector(".mdl-layout__obfuscator");this.$el.classList.remove("is-visible"),t.classList.remove("is-visible")}}},I=(n(27),Object(y.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdl-layout__drawer"},[t.googleUser?n("span",[n("span",{staticClass:"mdl-layout-title d-flex flex-column align-items-center p-20"},[n("img",{staticClass:"portrait-icon",attrs:{src:t.userImageUrl,alt:t.userGivenName}}),t._v(" "),n("p",{staticClass:"mt-20"},[t._v("Welcome "+t._s(t.userGivenName)+" !")])]),t._v(" "),n("nav",{staticClass:"mdl-navigation"},[n("a",{staticClass:"mdl-navigation__link",attrs:{href:"#"},on:{click:function(e){t.showSubNav("messages")}}},[t._m(0),t._v(" "),n("span",[t._v(t._s(t.metaData.messages.total))])]),t._v(" "),t._l(t.metaData.messages.users,function(e){return"messages"==t.selectedSubNav?n("a",{staticClass:"mdl-navigation__link sub-nav",attrs:{href:"#"},on:{click:function(n){t.loadMessageByIds(e.ids)}}},[n("span",[n("i",{staticClass:"fa fa-child"}),t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("span",[t._v(t._s(e.messageCount))])]):t._e()}),t._v(" "),n("a",{staticClass:"mdl-navigation__link",attrs:{href:"#"},on:{click:function(e){t.showSubNav("tags")}}},[t._m(1),t._v(" "),n("span",[t._v(t._s(t.metaData.tags.total))])]),t._v(" "),"tags"==t.selectedSubNav?n("div",{staticClass:"tags mx-20"},t._l(t.metaData.tags.tags,function(e){return n("span",{staticClass:"tag",on:{click:function(n){t.loadMessageByIds(e.ids)}}},[n("i",{staticClass:"fa",class:t._f("pluralizeTagClass")(e.messageCount)}),t._v("\n          "+t._s(e.messageCount)+"\n          "),n("span",{staticClass:"tag-appendage"},[t._v(t._s(e.name))])])})):t._e(),t._v(" "),n("a",{staticClass:"mdl-navigation__link",attrs:{href:"#"},on:{click:t.signout}},[t._m(2)])],2)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-commenting-o"}),this._v("\n          Messages\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-tags"}),this._v("\n          Tags\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-sign-out"}),this._v("\n          Sign Out\n        ")])}],!1,null,"74e76256",null).exports),R=Object(y.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"my-4 text-center"},[e("p",{staticClass:"text-light"},[this._v("© 2018 Hung & Sao")])])}],!1,null,null,null).exports,S={methods:{signin:function(){this.$emit("signin")}}},E=(n(25),Object(y.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"abcRioButton abcRioButtonBlue",staticStyle:{height:"50px",width:"240px"},on:{click:this.signin}},[e("div",{staticClass:"abcRioButtonContentWrapper"},[e("div",{staticClass:"abcRioButtonIcon",staticStyle:{padding:"15px"}},[e("div",{staticClass:"abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18",staticStyle:{width:"18px",height:"18px"}},[e("svg",{staticClass:"abcRioButtonSvg",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"18px",height:"18px",viewBox:"0 0 48 48"}},[e("g",[e("path",{attrs:{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}}),e("path",{attrs:{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}}),e("path",{attrs:{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}}),e("path",{attrs:{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}}),e("path",{attrs:{fill:"none",d:"M0 0h48v48H0z"}})])])])]),this._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"abcRioButtonContents",staticStyle:{"font-size":"16px","line-height":"48px"}},[e("span",{attrs:{id:"not_signed_inxv6qmxbqei8f"}},[this._v("Sign in with Google")]),e("span",{staticStyle:{display:"none"},attrs:{id:"connectedxv6qmxbqei8f"}},[this._v("Signed in with Google")])])}],!1,null,null,null).exports),M={props:{id:String,message:String,emotion:String,tags:String,fixedCenter:Boolean},data:function(){return{editingId:"",editingMessage:"",editingEmotion:"",emotions:["😍","😀","😜","😘","😭"],editingTags:[],newTag:""}},computed:{position:function(){return this.fixedCenter?"dialog-new-message fixed-top":""}},watch:{newTag:function(t,e){if(""!==t&&-1!==t.indexOf(" ")){var n=t.split(" ")[0];this.editingTags.push(n),this.newTag=""}}},methods:{submit:function(){this.addCurrentEditingNewTag();var t={id:this.editingId,message:this.editingMessage,emotion:this.editingEmotion,tags:this.editingTags.join(",")};this.$emit("submit",t),this.close()},close:function(){this.editingId="",this.editingMessage="",this.editingEmotion="",this.editingTags=[],this.$emit("close")},pickEmotion:function(t){this.editingEmotion=t},focusTagInput:function(){this.$refs.taginput.focus()},removeTag:function(t){this.editingTags.splice(t,1)},addCurrentEditingNewTag:function(){var t=this.newTag.trim();""!==t&&(this.editingTags.push(t),this.newTag="")}},mounted:function(){this.editingId=this.id||"",this.editingMessage=this.message||"",this.editingEmotion=this.emotion||"",this.editingTags=this.tags?this.tags.split(","):[]}},B=(n(23),Object(y.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",class:t.position},[n("div",{staticClass:"demo-card-event mdl-card mdl-shadow--2dp min-height-auto w-100 mb-20 background-transparent-3"},[n("div",{staticClass:"mdl-card__menu text-white"},[n("button",{staticClass:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect",on:{click:t.close}},[n("i",{staticClass:"material-icons"},[t._v("close")])])]),t._v(" "),n("div",{staticClass:"mdl-card__title mdl-card--expand flex-column"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"mdl-textfield mdl-js-textfield mt-30 mb-10 p-0"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editingMessage,expression:"editingMessage"}],staticClass:"mdl-textfield__input text-white",attrs:{type:"text",rows:"8",placeholder:"Leave a message"},domProps:{value:t.editingMessage},on:{input:function(e){e.target.composing||(t.editingMessage=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"container-tags-input mb-10",on:{click:t.focusTagInput}},[t._l(t.editingTags,function(e,a){return n("span",{staticClass:"tag"},[t._v("\n              "+t._s(e)+"\n              "),n("span",{staticClass:"tag-btn-remove",on:{click:function(e){t.removeTag(a)}}},[t._v("x")])])}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTag,expression:"newTag"}],ref:"taginput",staticClass:"tags-input",attrs:{type:"text",placeholder:"tags..."},domProps:{value:t.newTag},on:{input:function(e){e.target.composing||(t.newTag=e.target.value)}}})],2)]),t._v(" "),n("div",{staticClass:"emotion d-flex justify-content-between mb-3"},t._l(t.emotions,function(e){return n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-bg-transparent-white",class:{"btn-bg-transparent-none":t.editingEmotion!==e,"btn-bg-transparent-white":t.editingEmotion===e},on:{click:function(n){t.pickEmotion(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}))]),t._v(" "),n("div",{staticClass:"mdl-card__actions mdl-card--border"},[n("div",{staticClass:"mdl-layout-spacer"}),t._v(" "),n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-bg-transparent-white",on:{click:t.submit}},[t._v("\n          Save\n        ")])])])])])},[],!1,null,null,null).exports),T={components:{MessageForm:B},data:function(){return{showForm:!1,emotions:["😍","😀","😜","😘","😭"]}},methods:{openDialog:function(){this.showForm=!0,this.$emit("showDialog","messageForm",!0)},onClose:function(){this.showForm=!1,this.$emit("showDialog","messageForm",!1)},onSubmit:function(t){this.$emit("addMessage",t)}}},D=(n(21),Object(y.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.showForm?e("MessageForm",{attrs:{fixedCenter:!0},on:{submit:this.onSubmit,close:this.onClose}}):this._e(),this._v(" "),e("button",{staticClass:"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored fixed-rb z-index-100",on:{click:this.openDialog}},[e("i",{staticClass:"material-icons"},[this._v("add")])])],1)},[],!1,null,null,null).exports),N={props:{fullScreen:Boolean},computed:{fullScreenClass:function(){return!0===this.fullScreen?"cover-loading fixed-top":""}}},j=(n(19),Object(y.a)(N,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center",class:this.fullScreenClass},[e("i",{staticClass:"fa fa-3x fa-refresh fa-spin text-light"})])},[],!1,null,null,null).exports),O={props:{record:Object},computed:{tags:function(){return this.record.tags?this.record.tags.split(","):[]}},filters:{onlyDate:function(t){return h(t)}},methods:{onEdit:function(){this.$emit("dblclick")}}},A=(n(17),Object(y.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-card-event mdl-card mdl-shadow--2dp min-height-auto w-100 mb-20 background-transparent-3 text-white",on:{dblclick:t.onEdit}},[n("div",{staticClass:"mdl-card__title mdl-card--expand text-white"},[n("h4",{staticClass:"m-0"},[n("pre",[t._v(t._s(t.record.message))])])]),t._v(" "),n("div",{staticClass:"mdl-card__actions mdl-card--border"},[n("span",[t._v(t._s(t.record.emotion))]),t._v(" "),t._l(t.tags,function(e){return n("span",{staticClass:"tag"},[n("i",{staticClass:"fa fa-tag"}),t._v(" "),n("span",{staticClass:"tag-appendage"},[t._v(t._s(e))])])}),t._v(" "),n("div",{staticClass:"mdl-layout-spacer"}),t._v(" "),n("span",[t._v(t._s(t.record.author)+" "+t._s(t._f("onlyDate")(t.record.time)))]),t._v(" "),n("i",{staticClass:"fa fa-pencil-square-o mx-10",on:{click:t.onEdit}})],2)])},[],!1,null,null,null).exports),L=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],a=!0,s=!1,i=void 0;try{for(var o,r=t[Symbol.iterator]();!(a=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(s)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),U={name:"TheDailyTalk",components:{Header:k,Drawer:I,Footer:R,GoogleSigninButton:E,FixedAddButton:D,LoaderIcon:j,MessageCard:A,MessageForm:B},data:function(){return{auth2Loaded:!1,auth2:null,googleUser:null,records:[],isShowDialogMessage:!1,editedRecord:null,currentPage:0,pageLimit:20,pageEnd:!1,pageLoading:!1,metaData:{messages:{total:0,users:[]},tags:{total:0,tags:[]}}}},computed:{profile:function(){return this.googleUser?this.googleUser.getBasicProfile():null},userFullName:function(){return this.profile?this.profile.getName():null},userGivenName:function(){return this.profile?this.profile.getGivenName():null},userFamilyName:function(){return this.profile?this.profile.getFamilyName():null},userImageUrl:function(){return this.profile?this.profile.getImageUrl():null},userEmail:function(){return this.profile?this.profile.getEmail():null}},methods:{onSignIn:function(){this.auth2.signIn(),this.auth2.isSignedIn.listen(this.checkForLoggedInUser)},onSignOut:function(){this.auth2.disconnect(),this.googleUser=null,window.location.reload()},checkForLoggedInUser:function(){this.auth2.isSignedIn.get()&&(this.googleUser=this.auth2.currentUser.get(),this.reloadMessages())},initMessages:function(){this.currentPage=0,this.pageEnd=!1,this.records=[]},initMetaDataMessages:function(){this.metaData.messages.users=[],this.metaData.messages.total=0},initMetaDataTags:function(){this.metaData.tags.tags=[],this.metaData.tags.total=0},reloadMessages:function(){var t=this;this.initMessages(),this.loadMessages(),this.pivotTable.select(c.pivotTable.rangeMetaMessages).then(function(e){var n=L(e,3),a=n[0],s=n[1],i=n[2];t.initMetaDataMessages(),[a,s].forEach(function(e){t.metaData.messages.users.push({name:e[0],messageCount:e[1],ids:e[2]})}),t.metaData.messages.total=i[1]}),this.pivotTable.select(c.pivotTable.rangeMetaTags).then(function(e){t.initMetaDataTags();var n=e.shift(),a=L(n,2),s=(a[0],a[1]);e.forEach(function(e){t.metaData.tags.tags.push({name:e[0],messageCount:parseInt(e[1]),ids:e[2]})}),t.metaData.tags.tags.sort(function(t,e){return e.messageCount-t.messageCount}),t.metaData.tags.total=s})},loadMessages:function(){var t=this;if(!0!==this.pageEnd)return this.pageLoading=!0,this.messageMgr.lastMessages(++this.currentPage,this.pageLimit).then(function(e){!0!==t.pageEnd&&(t.renderMessages(e),e.forEach(function(e){1===parseInt(e[s])&&(t.pageEnd=!0)}),t.pageLoading=!1)})},onLoadMessageByIds:function(t){var e=this;return this.initMessages(),this.pageLoading=!0,this.messageMgr.getMessageByIds(t).then(function(t){e.renderMessages(t),e.pageLoading=!1,e.pageEnd=!0})},renderMessages:function(t){var e=this;t.reverse().forEach(function(t){!0!==e.pageEnd&&(1===parseInt(t[s])&&(e.pageEnd=!0),e.records.push({id:t[s],time:t[i],author:t[o],message:t[r],emotion:t[l],tags:t[u]}))})},onAddMessage:function(t){var e=this,n=t.message.trim(),a=t.emotion||"",s=t.tags||"";""!=n&&this.messageMgr.addMessage([this.userGivenName,n,a,s]).then(function(t){return setTimeout(e.reloadMessages,1500)})},onShowDialog:function(t,e){"messageForm"==t&&(this.isShowDialogMessage=e)},editRecord:function(t){t.author==this.userGivenName&&(this.beforeEditCache=t.message,this.editedRecord=t,this.isShowDialogMessage=!0)},modifyRecord:function(t){var e=this;this.messageMgr.updateMessage(t.id,[t.name,t.message,t.emotion,t.tags]).then(function(t){return e.reloadMessages()})},onSubmit:function(t){this.modifyRecord(t),this.editedRecord=null,this.isShowDialogMessage=!1}},mounted:function(){var t=this;x({client_id:c.CLIENT_ID}).then(function(e){t.messageMgr=new w(e,c.spreadsheetId,c.messagesTable.sheetname,c.messagesTable.range),t.pivotTable=new b(e,c.spreadsheetId,c.pivotTable.sheetname,c.pivotTable.range),t.auth2=window.gapi.auth2.getAuthInstance(),t.auth2Loaded=!0,t.checkForLoggedInUser()}.bind(this));var e=document.querySelector("main.mdl-layout__content");e.addEventListener("scroll",function(n){e.clientHeight+e.scrollTop>=e.scrollHeight&&t.loadMessages()})},directives:{"record-focus":function(t,e){e.value&&t.focus()}}},W=(n(15),Object(y.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper mdl-layout mdl-js-layout mdl-layout--fixed-header"},[n("Header"),t._v(" "),n("Drawer",{attrs:{googleUser:t.googleUser,metaData:t.metaData},on:{loadMessageByIds:t.onLoadMessageByIds,signout:t.onSignOut}}),t._v(" "),n("main",{staticClass:"mdl-layout__content"},[t._m(0),t._v(" "),t.auth2Loaded?n("div",[t.isShowDialogMessage?n("div",[t.editedRecord?n("MessageForm",{attrs:{id:t.editedRecord.id,message:t.editedRecord.message,emotion:t.editedRecord.emotion,tags:t.editedRecord.tags,fixedCenter:!0},on:{submit:t.onSubmit,close:function(e){t.onShowDialog("messageForm",!1)}}}):t._e()],1):n("div",[n("div",{staticClass:"page-content d-flex justify-content-center flex-column px-20"},t._l(t.records,function(e,a){return n("MessageCard",{key:a,attrs:{record:e},on:{dblclick:function(n){t.editRecord(e)}}})}))]),t._v(" "),t.googleUser?n("div",[t.googleUser?n("FixedAddButton",{on:{addMessage:t.onAddMessage,showDialog:t.onShowDialog}}):t._e()],1):n("div",{staticClass:"d-flex justify-content-center my-5"},[n("GoogleSigninButton",{on:{signin:t.onSignIn}})],1),t._v(" "),t.pageLoading?n("LoaderIcon",{staticClass:"mb-20"}):t._e()],1):n("div",[n("LoaderIcon",{attrs:{fullScreen:!0}})],1),t._v(" "),n("Footer")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-white text-center mx-20"},[e("small",[this._v("This is a space about for both of us to share the thinking, dream, and funny things.")])])}],!1,null,"3805230e",null).exports);a.a.component("theDailyTalk",W),new a.a({el:"#app"})},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.wrapper .mdl-layout__header[data-v-3805230e],\n.wrapper .mdl-layout__drawer-button[data-v-3805230e] {\n  color: white;\n}\n",""])},function(t,e,n){"use strict";var a=n(3);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.bg-red-t20 {\n  background-color: rgba(125,0,0,.2);\n}\n.bg-green-t20 {\n  background-color: rgba(0,125,0,.2);\n}\npre {\n  font-family: 'Lobster', cursive;\n  font-size: 1.5rem;\n  padding: .25rem 0;\n  white-space: pre-wrap;       /* css-3 */\n  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;      /* Opera 4-6 */\n  white-space: -o-pre-wrap;    /* Opera 7 */\n  word-wrap: break-word;       /* Internet Explorer 5.5+ */\n}\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.tag {\n  display: inline;\n  padding: .3em .6em .2em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  background-color: #5bc0de;\n  margin: 2px;\n}\n.tag-appendage {\n  border-left: 1px solid rgba(255,255,255,.2);\n  margin-left: 4px;\n  padding-left: 4px;\n}\n",""])},function(t,e,n){"use strict";var a=n(4);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.cover-loading {\n  height: 100vh;\n  z-index: 3000;\n  background-color: rgba(0,0,0,.5);\n}\n",""])},function(t,e,n){"use strict";var a=n(5);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.fixed-rb {\n  position:fixed;\n  right: 30px;\n  bottom: 30px;\n}\n.z-index-100{z-index: 100;\n}\n",""])},function(t,e,n){"use strict";var a=n(6);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.dialog-new-message {\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.btn-bg-transparent-white {background-color: rgba(255,255,255,.8)!important;\n}\n.btn-bg-transparent-none {background-color: rgba(255,255,255,0)!important;\n}\n\n/*tags*/\n.container-tags-input {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  display: inline-block;\n  padding: 4px 6px;\n  color: #555;\n  vertical-align: middle;\n  border-radius: 4px;\n  width: 100%;\n  line-height: 22px;\n  cursor: text;\n  display: flex;\n  flex-wrap: wrap;\n}\n.tags-input {\n  border: none;\n  outline: none;\n}\n.tag {\n  display: inline;\n  padding: .3em .6em .2em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  background-color: #5bc0de;\n  margin-right: 5px;\n}\n.tag-btn-remove {\n  border-left: 1px solid rgba(255,255,255,.2);\n  margin-left: 4px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n",""])},function(t,e,n){"use strict";var a=n(7);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.abcRioButton{-webkit-border-radius:1px;border-radius:1px;-webkit-box-shadow: 0 2px 4px 0px rgba(0,0,0,.25);box-shadow:0 2px 4px 0 rgba(0,0,0,.25);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .218s,border-color .218s,box-shadow .218s;transition:background-color .218s,border-color .218s,box-shadow .218s;-webkit-user-select:none;-webkit-appearance:none;background-color:#fff;background-image:none;color:#262626;cursor:pointer;outline:none;overflow:hidden;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;width:auto\n}\n.abcRioButton:hover{-webkit-box-shadow:0 0 3px 3px rgba(66,133,244,.3);box-shadow:0 0 3px 3px rgba(66,133,244,.3)\n}\n.abcRioButtonBlue{background-color:#4285f4;border:none;color:#fff\n}\n.abcRioButtonBlue:hover{background-color:#4285f4\n}\n.abcRioButtonBlue:active{background-color:#3367d6\n}\n.abcRioButtonLightBlue{background-color:#fff;color:#757575\n}\n.abcRioButtonLightBlue:active{background-color:#eee;color:#6d6d6d\n}\n.abcRioButtonIcon{float:left\n}\n.abcRioButtonBlue .abcRioButtonIcon{background-color:#fff;-webkit-border-radius:1px;border-radius:1px\n}\n.abcRioButtonSvg{display:block\n}\n.abcRioButtonContents{font-family:Roboto,arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.21px;margin-left:6px;margin-right:6px;vertical-align:top\n}\n.abcRioButtonContentWrapper{height:100%;width:100%\n}\n.abcRioButtonBlue .abcRioButtonContentWrapper{border:1px solid transparent\n}\n.abcRioButtonErrorWrapper,.abcRioButtonWorkingWrapper{display:none;height:100%;width:100%\n}\n.abcRioButtonErrorIcon,.abcRioButtonWorkingIcon{margin-left:auto;margin-right:auto\n}\n.abcRioButtonErrorState,.abcRioButtonWorkingState{border:1px solid #d5d5d5;border:1px solid rgba(0,0,0,.17);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 0 rgba(0,0,0,.05);color:#262626\n}\n.abcRioButtonErrorState:hover,.abcRioButtonWorkingState:hover{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 0 rgba(0,0,0,.1)\n}\n.abcRioButtonErrorState:active,.abcRioButtonWorkingState:active{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:inset 0 1px 0 #ddd;box-shadow:inset 0 1px 0 #ddd;color:#262626\n}\n.abcRioButtonWorkingState,.abcRioButtonWorkingState:hover{background-color:#f5f5f5\n}\n.abcRioButtonWorkingState:active{background-color:#e5e5e5\n}\n.abcRioButtonErrorState,.abcRioButtonErrorState:hover{background-color:#fff\n}\n.abcRioButtonErrorState:active{background-color:#e5e5e5\n}\n.abcRioButtonWorkingState .abcRioButtonWorkingWrapper,.abcRioButtonErrorState .abcRioButtonErrorWrapper{display:block\n}\n.abcRioButtonErrorState .abcRioButtonContentWrapper,.abcRioButtonWorkingState .abcRioButtonContentWrapper,.abcRioButtonErrorState .abcRioButtonWorkingWrapper{display:none\n}\n.-webkit-keyframes abcRioButtonWorkingIconPathSpinKeyframes{\n0%{-webkit-transform:rotate(0)\n}\n}\n",""])},function(t,e,n){"use strict";var a=n(8);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\nimg.portrait-icon[data-v-74e76256] {\n  width: 96px;\n  border-radius: 50%;\n}\n.mdl-navigation a[data-v-74e76256]:not(.sub-nav) {\n  padding: 16px;\n}\n.mdl-navigation a[data-v-74e76256] {\n  display: flex !important;\n  justify-content:space-between;\n}\n.sub-nav[data-v-74e76256] {\n  padding-left: 3rem !important;\n}\n.tags[data-v-74e76256] {\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.tag[data-v-74e76256] {\n  display: inline;\n  padding: .3em .6em .2em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  background-color: #5bc0de;\n  margin: 2px;\n}\n.tag-appendage[data-v-74e76256] {\n  border-left: 1px solid rgba(255,255,255,.2);\n  margin-left: 4px;\n  padding-left: 4px;\n}\n",""])},function(t,e,n){"use strict";var a=n(9);n.n(a).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\nheader a {text-decoration: none; color:white;\n}\n",""])},function(t,e,n){"use strict";var a=n(10);n.n(a).a}]);