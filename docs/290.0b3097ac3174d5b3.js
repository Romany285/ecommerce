"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[290],{5290:(x,d,c)=>{c.r(d),c.d(d,{CartComponent:()=>f});var _=c(6814),m=c(756),p=c(1120),t=c(4769),g=c(6286);function C(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._UZ(2,"img",13),t.qZA(),t.TgZ(3,"div",14)(4,"div")(5,"h3",15),t._uU(6),t.qZA(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.MAs(11),a=t.oxw(2);return t.KtG(a.remove(s.product._id,i))}),t._UZ(12,"i",18),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.MAs(16),a=t.MAs(21),u=t.oxw(2);return t.KtG(u.changeCount(s.product._id,s.count-1,i,a))}),t._uU(17,"-"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",19,21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.MAs(16),a=t.MAs(21),u=t.oxw(2);return t.KtG(u.changeCount(s.product._id,s.count+1,i,a))}),t._uU(22,"+"),t.qZA()()()()}if(2&o){const e=l.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.hij(" ",e.product.title," "),t.xp6(2),t.hij(" ",t.xi3(9,5,e.price,"EGP ")," "),t.xp6(11),t.hij(" ",e.count," ")}}const b=function(o){return["/payment",o]};function h(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clear())}),t._UZ(5,"i",6),t._uU(6," Clear Your Cart"),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.YNc(10,C,23,8,"div",8),t.TgZ(11,"button",9),t._uU(12,"Online Payment "),t._UZ(13,"img",10),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(8),t.hij("Total Price : ",t.xi3(9,3,e.cartDetails.totalCartPrice," EGP ")," "),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,b,e.cartDetails._id))}}function v(o,l){1&o&&(t.TgZ(0,"h2",22),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let f=(()=>{class o{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null,this.cartOptions={loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0}}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{this.cartDetails=e.data,console.log(e.data)},error:e=>{console.log(e)}})}remove(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeItem(e).subscribe({next:n=>{this.cartDetails=n.data,console.log(n),this._CartService.cartNumber.next(n.numOfCartItems),this._Renderer2.removeAttribute(r,"disabled")},error:n=>{console.log(n)}})}changeCount(e,r,n,s){r>=1&&(this._Renderer2.setAttribute(n,"disabled","true"),this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.updateItem(e,r).subscribe({next:i=>{this.cartDetails=i.data,console.log(i),this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")},error:i=>{console.log(i),this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")}}))}clear(){this._CartService.removeCart().subscribe({next:e=>{console.log(e),"success"==e.message&&(this.cartDetails=null)},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(g.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto bg-main-light p-3 rounded my-3 shadow",4,"ngIf","ngIfElse"],["Msg",""],[1,"w-75","mx-auto","bg-main-light","p-3","rounded","my-3","shadow"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger","fs-5","fw-medium",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"text-main"],["class","row mb-3 border-bottom pb-1",4,"ngFor","ngForOf"],[1,"main-btn",3,"routerLink"],["src","./assets/images/visa-1.svg","alt",""],[1,"row","mb-3","border-bottom","pb-1"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"btn","remove","m-0","p-0","text-danger","p-1","mb-1",3,"click"],["removeItem",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-center","pt-4"]],template:function(r,n){if(1&r&&(t.YNc(0,h,14,8,"section",0),t.YNc(1,v,2,0,"ng-template",null,1,t.W1O)),2&r){const s=t.MAs(2);t.Q6J("ngIf",n.cartDetails)("ngIfElse",s)}},dependencies:[_.ez,_.sg,_.O5,_.H9,m.bB,p.rH],styles:[".remove[_ngcontent-%COMP%]:hover{color:red!important;transition:all .5s}"]})}return o})()}}]);