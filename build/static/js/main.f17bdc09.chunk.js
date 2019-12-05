(this["webpackJsonpomega-pricing-frontend"]=this["webpackJsonpomega-pricing-frontend"]||[]).push([[0],{75:function(e,t,a){e.exports=a(87)},80:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),o=(a(80),a(22)),s=a(15),c=a(27),u=a(28),d=a(29),m=a(40),h=a(37),f=a(116),b=a(119),p=a(121),g=a(122),E=a(48),v=a(123),y=(Object(f.a)((function(e){return{iconBtn:{marginRight:e.spacing(2)}}})),function(e){var t=e.handler;return r.a.createElement(b.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(g.a,{edge:"start",onClick:t},r.a.createElement(v.a,null)),r.a.createElement(E.a,{variant:"h6"},"Omega Services")))}),w=a(9),k=a.n(w),S=a(17),O=a(67),x=a(125),C=a(129),j=a(130),D=a(124),P=a(131),M=a(4),I=a(126),T=a(127),H=a(128),A=Object(M.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(D.a),L=Object(M.a)((function(e){return{body:{fontSize:14,textAlign:"center"}}}))(x.a),z=function(e){var t=e.item,a=e.editable,n=e.handleEdit,i=e.handleDelete;return r.a.createElement(A,null,r.a.createElement(L,{component:"th",scope:"row"},t.id),r.a.createElement(L,null,t.model),r.a.createElement(L,null,t.afficheur," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.batterie," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.connecteur," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.micro," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.hautParleur," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.bouttonOnOff," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.desoxydation," ",r.a.createElement(I.a,null)),r.a.createElement(L,null,t.restoration," ",r.a.createElement(I.a,null)),a&&r.a.createElement(L,null,r.a.createElement(g.a,{onClick:function(){return n(t)}},r.a.createElement(T.a,null)),r.a.createElement(g.a,{onClick:function(){return i(t)}},r.a.createElement(H.a,null))))},F=Object(M.a)((function(e){return{root:{backgroundColor:e.palette.background.default}}}))(D.a),B=Object(M.a)((function(e){return{body:{textAlign:"center",width:"100%",fontSize:19}}}))(x.a),W=function(){return r.a.createElement(F,null,r.a.createElement(B,null,"No Data"))},J=Object(f.a)({table:{minWidth:700}}),N=Object(M.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white}}}))(x.a),U=function(e){var t=e.data,a=e.editable,n=e.handleEdit,i=e.handleDelete,l=J();return r.a.createElement(C.a,{className:l.table},r.a.createElement(j.a,null,r.a.createElement(D.a,null,r.a.createElement(N,null,"ID"),r.a.createElement(N,{align:"right"},"Model"),r.a.createElement(N,{align:"right"},"Afficheur"),r.a.createElement(N,{align:"right"},"Batterie"),r.a.createElement(N,{align:"right"},"Connecteur"),r.a.createElement(N,{align:"right"},"Micro"),r.a.createElement(N,{align:"right"},"Haut Parleur"),r.a.createElement(N,{align:"right"},"Boutton On Off"),r.a.createElement(N,{align:"right"},"Desoxydation"),r.a.createElement(N,{align:"right"},"Restoration"),a&&r.a.createElement(N,{align:"right"},"Edition"))),r.a.createElement(P.a,null,0===t.length&&r.a.createElement(W,null),t.length>0&&t.map((function(e){return r.a.createElement(z,{key:e.id.toString(),item:e,editable:a,handleEdit:n||null,handleDelete:i||null})}))))},q=a(151),V=a(134),R=a(135),G={flexDiv:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50},field:{padding:8,width:400}},X=function(e){var t=e.handler;return r.a.createElement("div",{style:G.flexDiv},r.a.createElement("div",null,r.a.createElement(q.a,{variant:"outlined",style:G.field,onChange:t,InputProps:{startAdornment:r.a.createElement(V.a,{position:"start"},r.a.createElement(R.a,null)),fullWidth:!0}})))},$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).navigateToMain=function(){localStorage.getItem("token")&&a.props.history.push("/customer")},a.fetchData=Object(S.a)(k.a.mark((function e(){var t,n,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://omega-pricing.herokuapp.com/api/v1/phone/getAll");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.body,i=r,a.setState({data:i,forFilter:i});case 9:case"end":return e.stop()}}),e)}))),a.searchHandler=function(e){var t=e.target.value.trim().length>0?a.state.forFilter.filter((function(t){return t.model.toLowerCase().startsWith(e.target.value.toLowerCase())})):a.state.forFilter;a.setState({data:t})},a.state={data:[],forFilter:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.navigateToMain(),e.next=3,this.fetchData();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,{handler:this.searchHandler}),r.a.createElement(O.a,{style:{width:"100%",overflowX:"auto",marginTop:30}},r.a.createElement(U,{data:this.state.data,editable:!1})))}}]),t}(n.Component),K=a(153),Q=a(133),Y=a(136),Z=a(137),_=a(139),ee=a(142),te=a(138),ae=a(140),ne=a(141),re=a(143),ie=function(e){var t=e.open,a=e.closeHandler,n=e.isLoggedIn,i=e.logoutHandler;return r.a.createElement(K.a,{open:t,anchor:"left",onClose:a},r.a.createElement(Q.a,null,!n&&r.a.createElement("div",null,r.a.createElement(Y.a,{onClick:a,button:!0,component:function(e){return r.a.createElement(m.b,Object.assign({to:"/login"},e))}},r.a.createElement(Z.a,null,r.a.createElement(te.a,null)),r.a.createElement(_.a,{primary:"Connecter"})),r.a.createElement(Y.a,{onClick:a,button:!0,component:function(e){return r.a.createElement(m.b,Object.assign({to:"/"},e))}},r.a.createElement(Z.a,null,r.a.createElement(ae.a,null)),r.a.createElement(_.a,{primary:"Home"}))),n&&r.a.createElement("div",null,r.a.createElement(Y.a,{onClick:a,button:!0,component:function(e){return r.a.createElement(m.b,Object.assign({to:"/customer"},e))}},r.a.createElement(Z.a,null,r.a.createElement(ae.a,null)),r.a.createElement(_.a,{primary:"Main"})),r.a.createElement(Y.a,{onClick:a,button:!0,component:function(e){return r.a.createElement(m.b,Object.assign({to:"/register"},e))}},r.a.createElement(Z.a,null,r.a.createElement(ne.a,null)),r.a.createElement(_.a,{primary:"Enregister"})),r.a.createElement(ee.a,null),r.a.createElement(Y.a,{onClick:i,button:!0},r.a.createElement(Z.a,null,r.a.createElement(re.a,null)),r.a.createElement(_.a,{primary:"Logout"})))))},le=a(144),oe=a(145),se=a(148),ce=a(149),ue=a(154),de=a(146),me=a(147),he=a(55),fe=a.n(he),be={flexDiv:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50},card:{minWidth:400},field:{width:"100%",marginBottom:30},progress:{marginTop:10,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},pe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).change=function(e){var t=a.state.data;t[e.target.name]=e.target.value,a.setState({data:t})},a.hideSnackbar=function(){a.setState({showSnackbar:!1})},a.submit=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,i,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showProgress:!0}),e.next=3,fetch("https://omega-pricing.herokuapp.com/api/v1/admin/login",{body:JSON.stringify(a.state.data),method:"POST",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,i=r.body,l=r.statusCode,n.ok&&!(l>=400)){e.next=12;break}return a.setState({showProgress:!1,showSnackbar:!0,snackbarMessage:JSON.stringify(i)}),e.abrupt("return");case 12:200===l&&(a.setState({showProgress:!1,showSnackbar:!0,snackbarMessage:"Successfully logged user in",data:{email:"",password:""}}),localStorage.setItem("token",i.token),a.props.history.push("/customer"));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.isValid=function(){return fe()().test(a.state.data.email)&&a.state.data.email.trim().length>0&&a.state.data.password.trim().length>0},a.state={data:{email:"",password:""},showProgress:!1,showSnackbar:!1,snackbarMessage:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:be.flexDiv},r.a.createElement(le.a,{style:be.card},r.a.createElement(oe.a,null,r.a.createElement(q.a,{style:be.field,onChange:this.change,name:"email",type:"email",label:"Email",required:!0,value:this.state.data.email,InputProps:{startAdornment:r.a.createElement(V.a,{position:"start"},r.a.createElement(de.a,null))}}),r.a.createElement(q.a,{style:be.field,onChange:this.change,name:"password",label:"Password",type:"password",required:!0,value:this.state.data.password,InputProps:{startAdornment:r.a.createElement(V.a,{position:"start"},r.a.createElement(me.a,null))}}),r.a.createElement(se.a,{variant:"contained",color:"primary",disabled:!this.isValid(),onClick:this.submit},"Submit"),this.state.showProgress&&r.a.createElement("div",{style:be.progress},r.a.createElement(ce.a,{size:32})))),r.a.createElement(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.showSnackbar,autoHideDuration:4e3,onClose:this.hideSnackbar,message:r.a.createElement("span",null,this.state.snackbarMessage),action:r.a.createElement(se.a,{key:"undo",color:"secondary",size:"small",onClick:this.hideSnackbar},"CLOSE")}))}}]),t}(n.Component),ge=a(150),Ee={flexDiv:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},div:{flex:.5},field:{padding:8,width:200},btn:{margin:5}},ve=function(e){var t=e.handleChange,a=e.editEnabled,n=e.handleSubmit,i=e.handleEdit,l=e.preEdit;return r.a.createElement("div",null,r.a.createElement("div",{style:Ee.flexDiv},r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Model",variant:"outlined",name:"model",type:"text",onChange:t,value:l.model})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Module Afficheur",variant:"outlined",name:"afficheur",type:"number",onChange:t,value:l.afficheur})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Batterie",variant:"outlined",name:"batterie",type:"number",onChange:t,value:l.batterie})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Connecteur",variant:"outlined",name:"connecteur",type:"number",onChange:t,value:l.connecteur})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Micro",variant:"outlined",name:"micro",type:"number",onChange:t,value:l.micro})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Haut Parleur",variant:"outlined",name:"hautParleur",type:"number",onChange:t,value:l.hautParleur})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Boutton On Off",variant:"outlined",name:"bouttonOnOff",type:"number",onChange:t,value:l.bouttonOnOff})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Desoxydation",variant:"outlined",name:"desoxydation",type:"number",onChange:t,value:l.desoxydation})),r.a.createElement("div",{style:Ee.div},r.a.createElement(q.a,{style:Ee.field,label:"Restoration",variant:"outlined",name:"restoration",type:"number",onChange:t,value:l.restoration}))),r.a.createElement(se.a,{style:Ee.btn,variant:"contained",disabled:a,color:"primary",onClick:n},"Add"),r.a.createElement(se.a,{style:Ee.btn,variant:"contained",disabled:!a,color:"secondary",onClick:i},"Edit"))},ye={flexDiv:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},flexDiv2:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:8}},we=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).showSnackbar=function(e){a.setState({showSnackbar:!0,snackbarMessage:e})},a.hideSnackbar=function(){a.setState({showSnackbar:!1,snackbarMessage:""})},a.getLoggedUser=Object(S.a)(k.a.mark((function e(){var t,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://omega-pricing.herokuapp.com/api/v1/admin",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.body,console.log(r),a.setState({verifiedUser:r});case 9:case"end":return e.stop()}}),e)}))),a.fetchData=Object(S.a)(k.a.mark((function e(){var t,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://omega-pricing.herokuapp.com/api/v1/phone/getAll");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.body,a.setState({data:r,forFilter:r});case 8:case"end":return e.stop()}}),e)}))),a.resetSubmittable=function(){var e=a.state.submittable;Object.keys(e).forEach((function(t){e[t]=""})),a.setState({submittable:e})},a.switchModes=function(){a.setState({editMode:!1})},a.preFillForEdit=function(e){var t=a.state.data.find((function(t){return e.id===t.id}));a.setState({submittable:t,editMode:!0})},a.handleDelete=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://omega-pricing.herokuapp.com/api/v1/phone/delete/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,i=r.body,a.showSnackbar(JSON.stringify(i)),e.next=10,a.fetchData();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=a.state.submittable;t[e.target.name]=e.target.value,a.setState({submittable:t})},a.handleEdit=Object(S.a)(k.a.mark((function e(){var t,n,r,i,l,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showProgress:!0}),t=a.state.submittable.id,n={model:a.state.submittable.model,afficheur:a.state.submittable.afficheur,batterie:a.state.submittable.batterie,connecteur:a.state.submittable.connecteur,micro:a.state.submittable.micro,hautParleur:a.state.submittable.hautParleur,bouttonOnOff:a.state.submittable.bouttonOnOff,desoxydation:a.state.submittable.desoxydation,restoration:a.state.submittable.restoration},e.next=5,fetch("https://omega-pricing.herokuapp.com/api/v1/phone/edit/".concat(t),{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:return r=e.sent,e.next=8,r.json();case 8:if(i=e.sent,l=i.statusCode,o=i.body,!(l>=400)){e.next=15;break}return a.showSnackbar(JSON.stringify(o)),a.setState({showProgress:!1}),e.abrupt("return");case 15:return a.showSnackbar("Updated model"),a.setState({showProgress:!1}),e.next=19,a.fetchData();case 19:case"end":return e.stop()}}),e)}))),a.handleSubmit=Object(S.a)(k.a.mark((function e(){var t,n,r,i,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showProgress:!0}),t=a.state.submittable.id?{model:a.state.submittable.model,afficheur:a.state.submittable.afficheur,batterie:a.state.submittable.batterie,connecteur:a.state.submittable.connecteur,micro:a.state.submittable.micro,hautParleur:a.state.submittable.hautParleur,bouttonOnOff:a.state.submittable.bouttonOnOff,desoxydation:a.state.submittable.desoxydation,restoration:a.state.submittable.restoration}:a.state.submittable,e.next=4,fetch("https://omega-pricing.herokuapp.com/api/v1/phone/add",{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,i=r.body,(l=r.statusCode)>=400&&("string"===typeof i?a.showSnackbar(i):"object"===typeof i&&a.showSnackbar(i.errors[0].message)),l>=200&&l<=300&&(a.resetSubmittable(),a.showSnackbar("Successfully added model")),a.setState({showProgress:!1}),e.next=15,a.fetchData();case 15:case"end":return e.stop()}}),e)}))),a.searchHandler=function(e){var t=e.target.value.trim().length>0?a.state.forFilter.filter((function(t){return t.model.toLowerCase().startsWith(e.target.value.toLowerCase())})):a.state.forFilter;a.setState({data:t})},a.state={data:[],forFilter:[],submittable:{model:"",afficheur:null,batterie:null,connecteur:null,micro:null,hautParleur:null,bouttonOnOff:null,desoxydation:null,restoration:null},showProgress:!1,showSnackbar:!1,snackbarMessage:"",editMode:!1,verifiedUser:{email:"emailGoesHere",id:0}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLoggedUser();case 2:return e.next=4,this.fetchData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:ye.flexDiv},r.a.createElement("div",{style:ye.flexDiv2},r.a.createElement(ge.a,null),r.a.createElement("h6",null,this.state.verifiedUser.email)),r.a.createElement(ve,{editEnabled:this.state.editMode,handleChange:this.handleChange,preEdit:this.state.submittable,handleSubmit:this.handleSubmit,handleEdit:this.handleEdit}),r.a.createElement("div",null,r.a.createElement(se.a,{color:"secondary",onClick:this.switchModes,variant:"contained",disabled:!this.state.editMode},"Switch Mode")),this.state.showProgress&&r.a.createElement(ce.a,{size:32})),r.a.createElement(X,{handler:this.searchHandler}),r.a.createElement(U,{data:this.state.data,editable:!0,handleEdit:this.preFillForEdit,handleDelete:this.handleDelete}),r.a.createElement(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.showSnackbar,autoHideDuration:4e3,onClose:this.hideSnackbar,message:r.a.createElement("span",null,this.state.snackbarMessage),action:r.a.createElement(se.a,{key:"undo",color:"secondary",size:"small",onClick:this.hideSnackbar},"CLOSE")}))}}]),t}(n.Component),ke={flexDiv:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50},card:{minWidth:400},field:{width:"100%",marginBottom:30},progress:{marginTop:10,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},Se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).change=function(e){var t=a.state.data;t[e.target.name]=e.target.value,a.setState({data:t})},a.hideSnackbar=function(){a.setState({showSnackbar:!1})},a.submit=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,i,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showProgress:!0}),e.next=3,fetch("https://omega-pricing.herokuapp.com/api/v1/admin",{body:JSON.stringify(a.state.data),method:"POST",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,i=r.body,l=r.statusCode,n.ok&&!(l>=400)){e.next=12;break}return a.setState({showProgress:!1,showSnackbar:!0,snackbarMessage:JSON.stringify(i)}),e.abrupt("return");case 12:201===l&&a.setState({showProgress:!1,showSnackbar:!0,snackbarMessage:"Successfully added user",data:{email:"",password:""}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.isValid=function(){return fe()().test(a.state.data.email)&&a.state.data.email.trim().length>0&&a.state.data.password.trim().length>0},a.state={data:{email:"",password:""},showProgress:!1,showSnackbar:!1,snackbarMessage:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:ke.flexDiv},r.a.createElement(le.a,{style:ke.card},r.a.createElement(oe.a,null,r.a.createElement(q.a,{style:ke.field,onChange:this.change,name:"email",type:"email",label:"Email",required:!0,value:this.state.data.email,InputProps:{startAdornment:r.a.createElement(V.a,{position:"start"},r.a.createElement(de.a,null))}}),r.a.createElement(q.a,{style:ke.field,onChange:this.change,name:"password",label:"Password",type:"password",required:!0,value:this.state.data.password,InputProps:{startAdornment:r.a.createElement(V.a,{position:"start"},r.a.createElement(me.a,null))}}),r.a.createElement(se.a,{variant:"contained",color:"primary",disabled:!this.isValid(),onClick:this.submit},"Submit"),this.state.showProgress&&r.a.createElement("div",{style:ke.progress},r.a.createElement(ce.a,{size:32})))),r.a.createElement(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.showSnackbar,autoHideDuration:4e3,onClose:this.hideSnackbar,message:r.a.createElement("span",null,this.state.snackbarMessage),action:r.a.createElement(se.a,{key:"undo",color:"secondary",size:"small",onClick:this.hideSnackbar},"CLOSE")}))}}]),t}(n.Component),Oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).showSidebar=function(){a.setState({showSidebar:!0})},a.hideSidebar=function(){a.setState({showSidebar:!1})},a.logOut=function(){a.hideSidebar(),localStorage.clear(),window.location.href="/login"},a.isLoggedIn=function(){return window.location.href.endsWith("/customer")||window.location.href.endsWith("/register")},a.state={showSidebar:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(y,{handler:this.showSidebar}),r.a.createElement(ie,{open:this.state.showSidebar,closeHandler:this.hideSidebar,isLoggedIn:this.isLoggedIn(),logoutHandler:this.logOut}),r.a.createElement(h.a,{exact:!0,path:"/",component:$}),r.a.createElement(h.a,{exact:!0,path:"/login",component:pe}),r.a.createElement(h.a,{exact:!0,path:"/customer",component:we}),r.a.createElement(h.a,{exact:!0,path:"/register",component:Se})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Oe,null),document.getElementById("root")),function(){var e=fetch;fetch=function(t,a){return new Promise(function(){var n=Object(S.a)(k.a.mark((function n(r){var i;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a&&a.headers&&localStorage.getItem("token")&&(a.headers.Authorization="Bearer ".concat(localStorage.getItem("token"))),n.next=3,e(t,a);case 3:401===(i=n.sent).status&&(localStorage.clear(),window.location.href="/login"),r(i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.f17bdc09.chunk.js.map