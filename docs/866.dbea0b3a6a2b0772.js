"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[866],{1866:(g,p,a)=>{a.r(p),a.d(p,{BlankLayoutComponent:()=>m});var d=a(6814),u=a(1120),t=a(4769),v=a(9410),s=a(6286),h=a(9196);const i=["navbar"];let l=(()=>{class r{constructor(n,e,o,c){this._AuthService=n,this._CartService=e,this._WishlistService=o,this._Renderer2=c,this.cartCount=0,this.wishListCount=0}onScroll(){scrollY>0?this._Renderer2.addClass(this.navelement.nativeElement,"shadow"):this._Renderer2.removeClass(this.navelement.nativeElement,"shadow")}ngOnInit(){this._CartService.cartNumber.subscribe({next:n=>{this.cartCount=n,console.log(n)}}),this._CartService.getUserCart().subscribe({next:n=>{this._CartService.cartNumber.next(n.numOfCartItems),console.log(n)}})}logOut(){this._AuthService.signOut()}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(v.e),t.Y36(s.N),t.Y36(h.M),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-nav-blank"]],viewQuery:function(e,o){if(1&e&&t.Gf(i,5),2&e){let c;t.iGM(c=t.CRH())&&(o.navelement=c.first)}},hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(){return o.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:58,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","px-3","fixed-top"],["navbar",""],[1,"container-fluid"],["href","#",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLink","/home","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","/products","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","/categories","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","/brands","routerLinkActive","active-link",1,"nav-link","text-capitalize"],[1,"nav-item","pe-2"],["routerLink","/cart",1,"nav-link","text-capitalize","position-relative"],[1,"fas","fa-cart-shopping","fa-2x","text-main"],[1,"badge","bg-info","position-absolute","top-0","end-0"],["routerLink","/wishList",1,"nav-link","text-capitalize","position-relative"],[1,"fas","fa-heart","fa-2x","text-danger"],[1,"nav-item","dropdown","mt-1"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fa-solid","fa-gear","ico"],[1,"dropdown-menu","p-0"],[1,"pb-1"],["role","button","routerLink","/forget","routerLinkActive","active-link",1,"dropdown-item"],[1,"nav-link"],[1,"fab","fa-instagram"],[1,"fab","fa-facebook"],[1,"fab","fa-tiktok"],[1,"fab","fa-linkedin"],[1,"fab","fa-twitter"],[1,"fab","fa-youtube"],[1,"nav-link","cursor",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"Products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"categories"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"brands"),t.qZA()()(),t.TgZ(21,"ul",8)(22,"li",14)(23,"a",15),t._UZ(24,"i",16),t.TgZ(25,"span",17),t._uU(26),t.qZA()()(),t.TgZ(27,"li",14)(28,"a",18),t._UZ(29,"i",19),t.qZA()(),t.TgZ(30,"li",20)(31,"a",21),t._UZ(32,"i",22),t.qZA(),t.TgZ(33,"ul",23)(34,"li",24)(35,"a",25),t._uU(36,"Forget Password"),t.qZA()()()(),t.TgZ(37,"li",9)(38,"a",26),t._UZ(39,"i",27),t.qZA()(),t.TgZ(40,"li",9)(41,"a",26),t._UZ(42,"i",28),t.qZA()(),t.TgZ(43,"li",9)(44,"a",26),t._UZ(45,"i",29),t.qZA()(),t.TgZ(46,"li",9)(47,"a",26),t._UZ(48,"i",30),t.qZA()(),t.TgZ(49,"li",9)(50,"a",26),t._UZ(51,"i",31),t.qZA()(),t.TgZ(52,"li",9)(53,"a",26),t._UZ(54,"i",32),t.qZA()(),t.TgZ(55,"li",9)(56,"a",33),t.NdJ("click",function(){return o.logOut()}),t._uU(57,"logOut"),t.qZA()()()()()()),2&e&&(t.xp6(26),t.hij(" ",o.cartCount," "))},dependencies:[d.ez,u.rH,u.Od],styles:["nav[_ngcontent-%COMP%]{transition:all .7s}.ico[_ngcontent-%COMP%]{font-size:23px}"]})}return r})();var f=a(7913);let m=(()=>{class r{goToUp(){window.scrollTo(0,0)}static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","main-section"],[1,"btn-up",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(e,o){1&e&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return o.goToUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[d.ez,l,u.lC,f.c],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.main-section[_ngcontent-%COMP%]{padding-top:68px}.btn-up[_ngcontent-%COMP%]{background-color:#0aad0a;color:#fff;position:fixed;bottom:20px;right:15px;z-index:999;width:40px;height:40px;border-radius:10px;border:unset}"]})}return r})()},6286:(g,p,a)=>{a.d(p,{N:()=>v});var d=a(5619),u=a(4769),t=a(9862);let v=(()=>{class s{constructor(i){this._HttpClient=i,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new d.X(0)}addProductToCart(i){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:i})}getUserCart(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart")}removeItem(i){return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${i}`)}updateItem(i,l){return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${i}`,{count:l})}removeCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart")}checkOut(i,l){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${i}?url=http://localhost:4200`,{shippingAddress:l})}static#t=this.\u0275fac=function(l){return new(l||s)(u.LFG(t.eN))};static#e=this.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);