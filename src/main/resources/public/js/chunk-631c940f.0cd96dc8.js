(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631c940f"],{"70f3":function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[l("sui-modal",{attrs:{name:"delete-disabled"}},[t._v(" hello, world! ")]),l("h3",[t._v("Skills Database")]),t.message?l("div",{staticClass:"alert alert-success"},[t._v(" "+t._s(t.message)+" ")]):t._e(),l("div",{staticClass:"container",staticStyle:{width:"80%","margin-left":"auto","margin-right":"auto"}},[l("table",{staticClass:"ui celled table"},[t._m(0),l("tbody",t._l(t.skills,(function(e){return l("tr",{key:e.id},[l("td",[t._v(t._s(e.skillName))]),l("td",[l("button",{staticClass:"ui button",on:{click:function(l){return t.updateSkillClicked(e.id)}}},[t._v("Details")]),l("button",{staticClass:"ui red icon button",on:{click:function(l){return t.deleteSkillClicked(e.id)}}},[l("i",{staticClass:"trash icon"})])])])})),0)]),l("div",{staticClass:"row"},[l("button",{staticClass:"ui button positive",on:{click:function(e){return t.addSkillClicked()}}},[t._v("Add Skill")])])])],1)},a=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("thead",[l("tr",[l("th",[t._v("Name")]),l("th",[t._v("Details")])])])}],n=l("86d2"),s={name:"SkillsList",data:function(){return{skills:[],message:null}},methods:{refreshSkills:function(){var t=this;n["a"].retrieveAllSkills().then((function(e){t.skills=e.data.content}))},deleteSkillClicked:function(t){this.$modal.show("delete-disabled");var e=n["a"].deleteSkill(t);null==e.id?this.$modal.show("delete-disabled"):this.refreshSkills()},updateSkillClicked:function(t){this.$router.push("/skills/".concat(t))},addSkillClicked:function(){this.$router.push("/skills/add")}},created:function(){this.refreshSkills()}},c=s,u=l("2877"),r=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=r.exports},"86d2":function(t,e,l){"use strict";l("99af");var i=l("d4ec"),a=l("bee2"),n=l("4b88"),s="".concat(n["a"].API_URL,"/skills"),c=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"retrieveAllSkills",value:function(){return n["a"].get("".concat(s,"?page=0&size=1000"))}},{key:"deleteSkill",value:function(t){return n["a"].delete("".concat(s,"/").concat(t))}},{key:"retrieveSkill",value:function(t){return n["a"].get("".concat(s,"/").concat(t))}},{key:"updateSkill",value:function(t,e){return n["a"].put("".concat(s,"/").concat(t),e)}},{key:"createSkill",value:function(t){return n["a"].post("".concat(s),t)}}]),t}();e["a"]=new c}}]);
//# sourceMappingURL=chunk-631c940f.0cd96dc8.js.map