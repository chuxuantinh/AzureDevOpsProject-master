(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47146d33"],{"0673":function(t,e,a){"use strict";a("99af");var n=a("d4ec"),i=a("bee2"),s=a("4b88"),l="".concat(s["a"].API_URL,"/personProfiles"),u=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,[{key:"retrieveAllConsultants",value:function(){return s["a"].get("".concat(l,"?page=0&size=1000"))}},{key:"deleteConsultant",value:function(t){return s["a"].delete("".concat(l,"/").concat(t))}},{key:"retrieveConsultant",value:function(t){return s["a"].get("".concat(l,"/").concat(t))}},{key:"updateConsultant",value:function(t,e){return s["a"].put("".concat(l,"/").concat(t),e)}},{key:"createConsultant",value:function(t){return s["a"].post("".concat(l),t)}},{key:"retrieveConsultantSkills",value:function(t){return s["a"].get("".concat(l,"/").concat(t,"/skills?page=0&size=1000"))}},{key:"deleteConsultantSkill",value:function(t,e){return s["a"].delete("".concat(l,"/").concat(t,"/skills/").concat(e))}},{key:"addConsultantSkill",value:function(t,e){return s["a"].post("".concat(l,"/").concat(t,"/skills"),e)}}]),t}();e["a"]=new u},"57f6":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("d4ec"),i=function t(e,a,i,s){Object(n["a"])(this,t),this.id=e,this.firstName=a,this.lastName=i,this.email=s}},ddc0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[a("sui-header",{tag:"h3",staticStyle:{"text-align":"center"}},[t._v("Add Consultant")]),a("div",{staticClass:"container",staticStyle:{"margin-right":"auto","margin-left":"auto"}},[a("form",{on:{submit:t.validateAndSubmit}},[a("sui-form-fields",{staticClass:"form-group"},[a("sui-label-detail",[t._v("First Name")]),a("sui-input",{attrs:{type:"text"},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}}),a("sui-label-detail",[t._v("Last Name")]),a("sui-input",{attrs:{type:"text"},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}}),a("sui-label-detail",[t._v("Email")]),a("sui-input",{attrs:{type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("sui-divider"),a("sui-button",{staticClass:"ui button positive",attrs:{primary:"",type:"submit"}},[t._v("Add")])],1)])],1)},i=[],s=a("0673"),l=a("57f6"),u={name:"consultantDetails",data:function(){return{first_name:"",last_name:"",email:"",errors:[]}},methods:{validateAndSubmit:function(t){var e=this;t.preventDefault();var a=new l["a"](null,this.first_name,this.last_name,this.email);s["a"].createConsultant(a).then((function(){e.$router.push("/consultants")}))}}},c=u,r=a("2877"),o=Object(r["a"])(c,n,i,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-47146d33.f011ba46.js.map