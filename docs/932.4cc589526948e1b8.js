"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[932],{6666:(C,m,l)=>{l.r(m),l.d(m,{LoginComponent:()=>E});var p=l(6814),i=l(95),_=l(1120),n=l(4769),d=l(9410);function c(e,a){1&e&&(n.TgZ(0,"p",17),n._uU(1,"Email is Required"),n.qZA())}function f(e,a){1&e&&(n.TgZ(0,"p",17),n._uU(1,"Email invalid"),n.qZA())}function h(e,a){if(1&e&&(n.TgZ(0,"div",15),n.YNc(1,c,2,0,"p",16),n.YNc(2,f,2,0,"p",16),n.qZA()),2&e){const r=n.oxw();let o,t;n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("email"))?null:o.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("email"))}}function v(e,a){1&e&&(n.TgZ(0,"p"),n._uU(1,"Password is Required"),n.qZA())}function Z(e,a){1&e&&(n.TgZ(0,"p"),n._uU(1,"Password is invalid"),n.qZA())}function T(e,a){if(1&e&&(n.TgZ(0,"div",18),n.YNc(1,v,2,0,"p",13),n.YNc(2,Z,2,0,"p",13),n.qZA()),2&e){const r=n.oxw();let o,t;n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("password"))?null:o.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("pattern"))}}function L(e,a){1&e&&(n.TgZ(0,"span"),n._UZ(1,"i",19),n.qZA())}let E=(()=>{class e{constructor(r,o,t){this._FormBuilder=r,this._AuthService=o,this._Router=t,this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^\w{6,}$/)]]})}handleForm(){const r=this.loginForm.value;this.isLoading=!0,this.loginForm.valid&&this._AuthService.setLogin(r).subscribe({next:o=>{"success"==o.message&&(localStorage.setItem("etoken",o.token),this._AuthService.decodeUser(),this._Router.navigate(["/home"]),this.isLoading=!1),console.log(o)},error:o=>{this.isLoading=!1,console.log(o)}})}static#n=this.\u0275fac=function(o){return new(o||e)(n.Y36(i.qu),n.Y36(d.e),n.Y36(_.F0))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:22,vars:5,consts:[[1,"py-5","w-75","shadow","mx-auto","my-4","p-4","bg-main-light",3,"formGroup","ngSubmit"],[1,"py-2"],[1,"my-3"],["for","email"],["type","email","placeholder","Enter Your Email...","id","email","formControlName","email",1,"form-control","py-2","my-1"],["emailInput",""],["class","alert alert-danger p-1 font-md",4,"ngIf"],["for","password"],["type","password","placeholder","Enter Your Password...","id","password","formControlName","password",1,"form-control","py-2","my-1"],["passwordInput",""],["class","alert alert-danger",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn",3,"disabled"],[4,"ngIf"],["routerLink","/forgetpassword",1,"link-primary"],[1,"alert","alert-danger","p-1","font-md"],["class","mb-0 p-1",4,"ngIf"],[1,"mb-0","p-1"],[1,"alert","alert-danger"],[1,"fas","fa-spin","fa-spinner"]],template:function(o,t){if(1&o&&(n.TgZ(0,"section")(1,"form",0),n.NdJ("ngSubmit",function(){return t.handleForm()}),n.TgZ(2,"h2",1),n._uU(3,"Login Now"),n.qZA(),n.TgZ(4,"div",2)(5,"label",3),n._uU(6,"Email :"),n.qZA(),n._UZ(7,"input",4,5),n.YNc(9,h,3,2,"div",6),n.qZA(),n.TgZ(10,"div",2)(11,"label",7),n._uU(12,"Password :"),n.qZA(),n._UZ(13,"input",8,9),n.YNc(15,T,3,2,"div",10),n.qZA(),n.TgZ(16,"div",11)(17,"button",12),n._uU(18," Login Now "),n.YNc(19,L,2,0,"span",13),n.qZA(),n.TgZ(20,"a",14),n._uU(21,"Forget Password"),n.qZA()()()()),2&o){const u=n.MAs(8),A=n.MAs(14);let s,g;n.xp6(1),n.Q6J("formGroup",t.loginForm),n.xp6(8),n.Q6J("ngIf",(null==(s=t.loginForm.get("email"))?null:s.errors)&&((null==(s=t.loginForm.get("email"))?null:s.touched)||u.value.length>0)),n.xp6(6),n.Q6J("ngIf",(null==(g=t.loginForm.get("password"))?null:g.errors)&&((null==(g=t.loginForm.get("password"))?null:g.touched)||A.value.length<0)),n.xp6(2),n.Q6J("disabled",t.loginForm.invalid),n.xp6(2),n.Q6J("ngIf",t.isLoading)}},dependencies:[p.ez,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,_.rH],styles:["[_ngcontent-%COMP%]::placeholder{font-size:12px}"]})}return e})()}}]);