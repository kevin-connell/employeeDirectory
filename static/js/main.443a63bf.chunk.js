(this["webpackJsonpreact-directory"]=this["webpackJsonpreact-directory"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),i=a(4),l=a.n(i),o=a(5),s=a(6),c=a(8),m=a(7);var p=function(e){return Object(r.jsxs)("div",{className:"mainCard collection col s12 m6",children:[Object(r.jsx)("img",{src:e.picture,alt:e.fullname+" profile picture",className:"circle center-align bigImage"}),Object(r.jsx)("h3",{className:"center-align",children:e.fullname}),Object(r.jsxs)("div",{className:"row center-align",children:[Object(r.jsxs)("h6",{children:["Phone: ",e.phone]}),Object(r.jsx)("button",{onClick:function(){return window.open("tel:"+e.phone)},className:"btn",children:"Call"})]}),Object(r.jsxs)("div",{className:"row center-align",children:[Object(r.jsxs)("h6",{children:["Email: ",e.email," "]}),Object(r.jsx)("button",{onClick:function(){return window.open("mailto:"+e.email)},className:"btn",children:"Email"})]})]})};var u=function(e){return Object(r.jsxs)("li",{className:e.active?"collection-item avatar active clickMe":"collection-item avatar clickMe",name:e.id,onClick:e.handleSelection,children:[Object(r.jsx)("img",{name:e.id,src:e.picture,alt:e.fullname+" profile picture",className:"circle"}),Object(r.jsx)("span",{name:e.id,className:"title",children:e.fullname}),Object(r.jsxs)("p",{name:e.id,children:[e.phone," ",Object(r.jsx)("br",{}),e.email]})]})};var d=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)("div",{className:"nav-wrapper",children:Object(r.jsx)("a",{href:"/",className:"brand-logo center",children:"Employee Directory"})})})};var h=function(e){return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"fullname"===e.sort?"sortThis center-align clickMe col offset-s3 s3":"center-align clickMe col offset-s3 s3",name:"fullname",onClick:e.handleSortChange,children:["Name ","fullname"===e.sort&&"DESC"===e.direction?"\u25b3":"\u25bd"]}),Object(r.jsxs)("p",{className:"phone"===e.sort?"sortThis center-align clickMe col s3":"center-align clickMe col s3",name:"phone",onClick:e.handleSortChange,children:["Number ","phone"===e.sort&&"DESC"===e.direction?"\u25b3":"\u25bd"]}),Object(r.jsxs)("p",{className:"email"===e.sort?"sortThis center-align clickMe col s3":"center-align clickMe col s3",name:"email",onClick:e.handleSortChange,children:["Email ","email"===e.sort&&"DESC"===e.direction?"\u25b3":"\u25bd"]})]})},j=a(2);var f=function(e){return Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("input",{id:"search",type:"search",onChange:e.handleInputChange}),Object(r.jsx)("i",{className:"material-icons",children:"X"})]})},g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={query:"",currentId:"1",currentData:{},contacts:j,sort:"",direction:""},e.handleSelection=function(t){e.setState({currentId:t.target.getAttribute("name")},(function(){e.updateCurrent()}))},e.updateCurrent=function(){console.log("CURRENT CHANGE");var t=j.filter((function(t){return t.id===e.state.currentId}));e.setState({currentData:t[0]},(function(){console.log(e.state.currentData)}))},e.handleSortChange=function(t){e.updateCurrent(),console.log(t.target.getAttribute("name")),t.target.getAttribute("name")===e.state.sort?"ASC"===e.state.direction?e.setState({direction:"DESC"},(function(){e.updateResults()})):e.setState({direction:"",sort:""},(function(){e.updateResults()})):e.setState({direction:"ASC",sort:t.target.getAttribute("name")},(function(){e.updateResults()})),console.log("Sort: ".concat(e.state.sort,"   Direction: ").concat(e.state.direction))},e.handleInputChange=function(t){console.log("handling"),e.setState({query:t.target.value},(function(){e.updateResults()}))},e.updateResults=function(){console.log("filtering...");var t=j.filter((function(t){return t.fullname.toLowerCase().includes(e.state.query.toLowerCase())||t.phone.toLowerCase().includes(e.state.query.toLowerCase())}));""!==e.state.sort?(console.log("sorting..."),e.sortThem(t,e.state.sort,e.state.direction),e.setState({contacts:t})):e.setState({contacts:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.updateCurrent()}},{key:"sortThem",value:function(e,t,a){e.sort((function(e,r){var n,i,l=a;switch(t){case"fullname":n=e.fullname.toLowerCase(),i=r.fullname.toLowerCase();break;case"email":n=e.email.toLowerCase(),i=r.email.toLowerCase();break;case"phone":n=e.phone.toLowerCase(),i=r.phone.toLowerCase()}return"ASC"===l?n<i?-1:n>i?1:0:n<i?1:n>i?-1:0}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s1",children:Object(r.jsx)("p",{children:"Search:"})}),Object(r.jsx)("div",{className:"col s11",children:Object(r.jsx)("form",{children:Object(r.jsx)(f,{handleInputChange:this.handleInputChange})})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"collection col s12 m6",children:[Object(r.jsx)(h,{sort:this.state.sort,direction:this.state.direction,handleSortChange:this.handleSortChange}),Object(r.jsx)("ul",{className:"tableScroll collection",children:this.state.contacts.map((function(t){return Object(r.jsx)(u,{id:t.id,fullname:t.fullname,picture:t.picture,email:t.email,phone:t.phone,active:t.id===e.state.currentId,handleSelection:e.handleSelection},t.id)}))})]}),Object(r.jsx)(p,{id:this.state.currentId,fullname:this.state.currentData.fullname,picture:this.state.currentData.picture,email:this.state.currentData.email,phone:this.state.currentData.phone})]})]})]})}}]),a}(n.Component);var b=function(){return Object(r.jsx)(g,{})};a(14);l.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":"1","fullname":"Tonya Burns","email":"tonya.burns@example.com","phone":"(746)-523-9503","picture":"https://randomuser.me/api/portraits/women/68.jpg"},{"id":"2","fullname":"Jeffery Boyd","email":"jeffery.boyd@example.com","phone":"(421)-239-3059","picture":"https://randomuser.me/api/portraits/men/42.jpg"},{"id":"3","fullname":"Tyrone Barnett","email":"tyrone.barnett@example.com","phone":"(391)-815-8235","picture":"https://randomuser.me/api/portraits/men/86.jpg"},{"id":"4","fullname":"Sophie Pierce","email":"sophie.pierce@example.com","phone":"(303)-870-9680","picture":"https://randomuser.me/api/portraits/women/60.jpg"},{"id":"5","fullname":"Howard Miller","email":"howard.miller@example.com","phone":"(011)-343-0981","picture":"https://randomuser.me/api/portraits/men/61.jpg"},{"id":"6","fullname":"Norma Rice","email":"norma.rice@example.com","phone":"(624)-045-8622","picture":"https://randomuser.me/api/portraits/women/93.jpg"},{"id":"7","fullname":"Kirk Torres","email":"kirk.torres@example.com","phone":"(177)-205-6258","picture":"https://randomuser.me/api/portraits/men/79.jpg"},{"id":"8","fullname":"Bertha Allen","email":"bertha.allen@example.com","phone":"(013)-173-9903","picture":"https://randomuser.me/api/portraits/women/20.jpg"},{"id":"9","fullname":"Ernest Ellis","email":"ernest.ellis@example.com","phone":"(179)-120-0674","picture":"https://randomuser.me/api/portraits/men/18.jpg"},{"id":"10","fullname":"Gabriel Miller","email":"gabriel.miller@example.com","phone":"(880)-966-1519","picture":"https://randomuser.me/api/portraits/men/23.jpg"},{"id":"11","fullname":"Henry Steward","email":"henry.steward@example.com","phone":"(095)-393-3955","picture":"https://randomuser.me/api/portraits/men/71.jpg"},{"id":"12","fullname":"Tommy Curtis","email":"tommy.curtis@example.com","phone":"(852)-700-8177","picture":"https://randomuser.me/api/portraits/men/72.jpg"},{"id":"13","fullname":"Dana Thompson","email":"dana.thompson@example.com","phone":"(567)-803-9792","picture":"https://randomuser.me/api/portraits/women/59.jpg"},{"id":"14","fullname":"Kim Ferguson","email":"kim.ferguson@example.com","phone":"(524)-773-9527","picture":"https://randomuser.me/api/portraits/women/74.jpg"},{"id":"15","fullname":"Herminia Weaver","email":"herminia.weaver@example.com","phone":"(321)-452-7673","picture":"https://randomuser.me/api/portraits/women/56.jpg"},{"id":"16","fullname":"Chloe Cole","email":"chloe.cole@example.com","phone":"(617)-985-8784","picture":"https://randomuser.me/api/portraits/women/83.jpg"},{"id":"17","fullname":"Dora Murphy","email":"dora.murphy@example.com","phone":"(197)-780-3054","picture":"https://randomuser.me/api/portraits/women/6.jpg"},{"id":"18","fullname":"Annette Welch","email":"annette.welch@example.com","phone":"(849)-648-7739","picture":"https://randomuser.me/api/portraits/women/93.jpg"},{"id":"19","fullname":"Katrina Barnes","email":"katrina.barnes@example.com","phone":"(754)-084-9639","picture":"https://randomuser.me/api/portraits/women/89.jpg"},{"id":"20","fullname":"Harold Welch","email":"harold.welch@example.com","phone":"(307)-044-6575","picture":"https://randomuser.me/api/portraits/men/73.jpg"},{"id":"21","fullname":"Daryl Oliver","email":"daryl.oliver@example.com","phone":"(297)-326-8881","picture":"https://randomuser.me/api/portraits/men/30.jpg"},{"id":"22","fullname":"Laurie Weaver","email":"laurie.weaver@example.com","phone":"(607)-787-1221","picture":"https://randomuser.me/api/portraits/women/60.jpg"},{"id":"23","fullname":"Carter Ray","email":"carter.ray@example.com","phone":"(678)-593-4114","picture":"https://randomuser.me/api/portraits/men/61.jpg"},{"id":"24","fullname":"Bobby Bates","email":"bobby.bates@example.com","phone":"(649)-827-9426","picture":"https://randomuser.me/api/portraits/men/0.jpg"},{"id":"25","fullname":"Alberto Powell","email":"alberto.powell@example.com","phone":"(610)-891-5345","picture":"https://randomuser.me/api/portraits/men/21.jpg"},{"id":"26","fullname":"Arianna Morris","email":"arianna.morris@example.com","phone":"(874)-900-6743","picture":"https://randomuser.me/api/portraits/women/79.jpg"},{"id":"27","fullname":"Bruce Dunn","email":"bruce.dunn@example.com","phone":"(628)-409-0994","picture":"https://randomuser.me/api/portraits/men/33.jpg"},{"id":"28","fullname":"Heidi Austin","email":"heidi.austin@example.com","phone":"(820)-679-4137","picture":"https://randomuser.me/api/portraits/women/8.jpg"},{"id":"29","fullname":"Richard Wheeler","email":"richard.wheeler@example.com","phone":"(607)-222-2777","picture":"https://randomuser.me/api/portraits/men/91.jpg"},{"id":"30","fullname":"Josephine Perry","email":"josephine.perry@example.com","phone":"(905)-617-0254","picture":"https://randomuser.me/api/portraits/women/74.jpg"},{"id":"31","fullname":"Manuel Mitchelle","email":"manuel.mitchelle@example.com","phone":"(816)-217-7340","picture":"https://randomuser.me/api/portraits/men/29.jpg"},{"id":"32","fullname":"Kelly Berry","email":"kelly.berry@example.com","phone":"(248)-960-3971","picture":"https://randomuser.me/api/portraits/women/14.jpg"},{"id":"33","fullname":"Dianne Gray","email":"dianne.gray@example.com","phone":"(337)-630-2930","picture":"https://randomuser.me/api/portraits/women/15.jpg"},{"id":"34","fullname":"Gertrude Brewer","email":"gertrude.brewer@example.com","phone":"(046)-719-6924","picture":"https://randomuser.me/api/portraits/women/88.jpg"},{"id":"35","fullname":"Brandie Pena","email":"brandie.pena@example.com","phone":"(664)-916-4487","picture":"https://randomuser.me/api/portraits/women/40.jpg"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.443a63bf.chunk.js.map