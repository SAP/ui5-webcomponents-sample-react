(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,n){e.exports=n.p+"static/media/logo.60a8874b.png"},71:function(e,t,n){e.exports=n(86)},76:function(e,t,n){},78:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n.n(a),d=n(69),o=n.n(d),r=(n(76),n(19)),s=n(41),c=n(3),l=n(2),u=n(7),h=n(5),p=n(6),m=n(70),f=n.n(m),v=(n(78),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).delete=i.a.createRef(),n.edit=i.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.delete.current.addEventListener("press",function(t){e.props.handleDelete(e.props.id)}),this.edit.current.addEventListener("press",function(t){e.props.handleEdit(parseInt(e.props.id))})}},{key:"render",value:function(){return i.a.createElement("ui5-li-custom",{key:this.props.id,selected:this.props.done||void 0,"data-key":this.props.id,class:this.props.hidden?"hidden":""},i.a.createElement("div",{className:"li-content"},i.a.createElement("span",{className:"li-content-text"},this.props.text," - finish before: ",this.props.deadline),i.a.createElement("div",{className:"li-content-actions"},i.a.createElement("ui5-button",{class:"edit-btn",ref:this.edit},"Edit"),i.a.createElement("ui5-button",{type:"Negative",ref:this.delete},"Delete"))))}}]),t}(a.Component)),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).list=i.a.createRef(),n.deleteBtn=i.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.list.current.addEventListener("selectionChange",function(t){e.props.selectionChange(t)})}},{key:"render",value:function(){var e=this;return i.a.createElement("ui5-list",{id:"todo-list",mode:"MultiSelect",ref:this.list},this.props.items.map(function(t){return i.a.createElement(v,{key:t.id,id:t.id,text:t.text,deadline:t.deadline,done:t.done,handleDelete:e.props.remove.bind(e),handleEdit:e.props.edit.bind(e)})}))}}]),t}(a.Component),b=(n(91),n(58),n(85),n(87),n(65),n(83),n(64),n(90),n(84),n(89),n(66),n(88),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={todos:[{text:"Get some carrots",id:1,deadline:"27/7/2018",done:!1},{text:"Do some magic",id:2,deadline:"22/7/2018",done:!1},{text:"Go to the gym",id:3,deadline:"24/7/2018",done:!0},{text:"Buy milk",id:4,deadline:"30/7/2018",done:!1},{text:"Eat some fruits",id:5,deadline:"29/7/2018",done:!1}],todoBeingEdittedText:"",todoBeingEdittedDate:"",selectedEditTodo:""},n.addButton=i.a.createRef(),n.todoInput=i.a.createRef(),n.todoDeadline=i.a.createRef(),n.editDialog=i.a.createRef(),n.cancelBtn=i.a.createRef(),n.saveBtn=i.a.createRef(),n.titleEditInput=i.a.createRef(),n.dateEditInput=i.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.addButton.current.addEventListener("press",function(t){e.handleAdd()}),this.todoInput.current.addEventListener("submit",function(t){e.handleAdd()}),this.cancelBtn.current.addEventListener("press",function(t){e.editDialog.current.close()}),this.saveBtn.current.addEventListener("press",function(t){e.saveEdits(),e.editDialog.current.close()})}},{key:"saveEdits",value:function(){var e=this,t=this.titleEditInput.current.value,n=this.dateEditInput.current.value,a=this.state.todos.map(function(a){return a.id===e.state.selectedEditTodo&&(a.text=t,a.deadline=n),a});this.setState(function(e){return Object(s.a)({},e,{todos:a})})}},{key:"handleDone",value:function(e){var t=e.detail.selectedItems[0].getAttribute("data-key"),n=this.state.todos.map(function(e){return Object(s.a)({},e,{done:e.done||t===e.id.toString()})});this.setState(function(e){return Object(s.a)({},e,{todos:n})})}},{key:"handleUnDone",value:function(e){var t=e.detail.selectedItems,n=this.state.todos.map(function(e){var n=t.filter(function(t){return t.getAttribute("data-key")===e.id.toString()});return e.done=n[0],e});this.setState(function(e){return Object(s.a)({},e,{todos:n})})}},{key:"handleAdd",value:function(){var e=this;this.setState(function(t,n){return Object(s.a)({},t,{todos:[].concat(Object(r.a)(t.todos),[{text:e.todoInput.current.value,id:t.todos.length+1,deadline:e.todoDeadline.current.value,done:!1}])})})}},{key:"handleRemove",value:function(e){var t=this.state.todos.filter(function(t){return t.id!==e});this.setState(function(e,n){return Object(s.a)({},e,{todos:t})})}},{key:"handleEdit",value:function(e){var t=this.state.todos.filter(function(t){return t.id===e})[0];this.setState(function(n,a){return Object(s.a)({},n,{todoBeingEdittedText:t.text,todoBeingEdittedDate:t.deadline,selectedEditTodo:e})}),this.editDialog.current.open()}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("ui5-shellbar",{"primary-title":"UI5 Web Components React Sample Application",logo:f.a}),i.a.createElement("section",{className:"app-content"},i.a.createElement("div",{className:"create-todo-wrapper"},i.a.createElement("ui5-input",{placeholder:"My Todo ...",ref:this.todoInput,class:"add-todo-element-width",id:"add-input"}),i.a.createElement("ui5-datepicker",{"format-pattern":"dd/MM/yyyy",class:"add-todo-element-width",ref:this.todoDeadline,id:"date-picker"}),i.a.createElement("ui5-button",{class:"add-todo-element-width",ref:this.addButton,type:"Emphasized"},"Add Todo")),i.a.createElement("div",{className:"list-todos-wrapper"},i.a.createElement(E,{items:this.state.todos.filter(function(e){return!e.done}),selectionChange:this.handleDone.bind(this),remove:this.handleRemove.bind(this),edit:this.handleEdit.bind(this)}),i.a.createElement("ui5-panel",{"header-text":"Completed tasks",collapsed:!this.state.todos.filter(function(e){return e.done}).length||void 0},i.a.createElement(E,{items:this.state.todos.filter(function(e){return e.done}),selectionChange:this.handleUnDone.bind(this),remove:this.handleRemove.bind(this),edit:this.handleEdit.bind(this)})))),i.a.createElement("ui5-dialog",{"header-text":"Edit Todo item",ref:this.editDialog},i.a.createElement("div",{className:"dialog-content"},i.a.createElement("div",{className:"edit-wrapper"},i.a.createElement("ui5-label",null,"Title:"),i.a.createElement("ui5-textarea",{class:"title-textarea","max-length":"24","show-exceeded-text":!0,value:this.state.todoBeingEdittedText,ref:this.titleEditInput})),i.a.createElement("div",{className:"edit-wrapper date-edit-fields"},i.a.createElement("ui5-label",null,"Date:"),i.a.createElement("ui5-datepicker",{"format-pattern":"dd/MM/yyyy",value:this.state.todoBeingEdittedDate,ref:this.dateEditInput}))),i.a.createElement("div",{className:"dialog-footer"},i.a.createElement("ui5-button",{type:"Transparent",ref:this.cancelBtn},"Cancel"),i.a.createElement("ui5-button",{type:"Emphasized",ref:this.saveBtn},"Save"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[71,2,1]]]);
//# sourceMappingURL=main.a1dfb299.chunk.js.map