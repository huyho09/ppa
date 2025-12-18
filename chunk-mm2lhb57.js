import{b as R,f as P,k as N,s as F,t as A}from"./chunk-CZMJLW4B.js";import{X as D,Y as V,_ as M,na as W,oa as k}from"./chunk-ZV4BMCKG.js";import{e as I,f as b,j as O,s as T}from"./chunk-FZ6VNSMS.js";import{$b as u,Ib as s,Ic as h,Sb as n,Tb as o,Yb as x,bc as c,db as a,eb as S,mc as t,nc as g,oa as _,pa as C,pc as f,qb as y,qc as v,rc as w,xb as p}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";function L(i,d){if(i&1){let e=x();n(0,"button",6),u("click",function(){_(e);let l=c();return C(l.onEditRecord())}),t(1,"Edit"),o()}}function B(i,d){if(i&1){let e=x();n(0,"button",7),u("click",function(){_(e);let l=c();return C(l.onEditRecord())}),t(1,"Stop Edit"),o()}}function j(i,d){if(i&1&&(n(0,"span"),t(1),o()),i&2){let e=c().$implicit;a(),g(e.ClientName)}}function J(i,d){if(i&1){let e=x();n(0,"input",12),w("ngModelChange",function(l){_(e);let r=c().$implicit;return v(r.ClientName,l)||(r.ClientName=l),C(l)}),o()}if(i&2){let e=c().$implicit;f("ngModel",e.ClientName)}}function X(i,d){if(i&1&&(n(0,"span"),t(1),o()),i&2){let e=c().$implicit;a(),g(e.ClientDivision)}}function H(i,d){if(i&1){let e=x();n(0,"input",12),w("ngModelChange",function(l){_(e);let r=c().$implicit;return v(r.ClientDivision,l)||(r.ClientDivision=l),C(l)}),o()}if(i&2){let e=c().$implicit;f("ngModel",e.ClientDivision)}}function U(i,d){if(i&1&&(n(0,"span"),t(1),o()),i&2){let e=c().$implicit;a(),g(e.ClientCountry)}}function q(i,d){if(i&1){let e=x();n(0,"input",12),w("ngModelChange",function(l){_(e);let r=c().$implicit;return v(r.ClientCountry,l)||(r.ClientCountry=l),C(l)}),o()}if(i&2){let e=c().$implicit;f("ngModel",e.ClientCountry)}}function z(i,d){if(i&1&&(n(0,"span"),t(1),o()),i&2){let e=c().$implicit;a(),g(e.WinRate)}}function G(i,d){if(i&1){let e=x();n(0,"input",12),w("ngModelChange",function(l){_(e);let r=c().$implicit;return v(r.WinRate,l)||(r.WinRate=l),C(l)}),o()}if(i&2){let e=c().$implicit;f("ngModel",e.WinRate)}}function K(i,d){if(i&1&&(n(0,"span"),t(1),o()),i&2){let e=c().$implicit;a(),g(e.SAPID)}}function Q(i,d){if(i&1){let e=x();n(0,"input",12),w("ngModelChange",function(l){_(e);let r=c().$implicit;return v(r.SAPID,l)||(r.SAPID=l),C(l)}),o()}if(i&2){let e=c().$implicit;f("ngModel",e.SAPID)}}function Y(i,d){if(i&1){let e=x();n(0,"tr"),t(1,`
              `),n(2,"td"),t(3,`
                `),n(4,"button",8),u("click",function(l){let r=_(e).$implicit,E=c();return C(E.onChangeFields(r.ClientID,l))}),t(5,"Save"),o(),t(6,`
                `),n(7,"button",9),u("click",function(l){let r=_(e).$implicit,E=c();return C(E.onChangeFields(r.ClientID,l))}),t(8,"Delete"),o(),t(9,`
              `),o(),t(10,`
              `),n(11,"td"),p(12,j,2,1,"span",10),t(13,`
                `),p(14,J,1,1,"input",11),t(15,`
              `),o(),t(16,`
              `),n(17,"td"),p(18,X,2,1,"span",10),t(19,`
                `),p(20,H,1,1,"input",11),t(21,`
              `),o(),t(22,`
              `),n(23,"td"),p(24,U,2,1,"span",10),t(25,`
                `),p(26,q,1,1,"input",11),t(27,`
              `),o(),t(28,`
              `),n(29,"td"),p(30,z,2,1,"span",10),t(31,`
                `),p(32,G,1,1,"input",11),t(33,`
              `),o(),t(34,`
              `),n(35,"td"),p(36,K,2,1,"span",10),t(37,`
                `),p(38,Q,1,1,"input",11),t(39,`
              `),o(),t(40,`
            `),o()}if(i&2){let e=c();a(4),s("disabled",!e.isEdit),a(3),s("disabled",!e.isEdit),a(5),s("ngIf",!e.isEdit),a(2),s("ngIf",e.isEdit),a(4),s("ngIf",!e.isEdit),a(2),s("ngIf",e.isEdit),a(4),s("ngIf",!e.isEdit),a(2),s("ngIf",e.isEdit),a(4),s("ngIf",!e.isEdit),a(2),s("ngIf",e.isEdit),a(4),s("ngIf",!e.isEdit),a(2),s("ngIf",e.isEdit)}}var rt=(()=>{class i{ngOnInit(){$(document).ready(function(){$("#example").dataTable({responsive:!0,sScrollX:"100%",sScrollXInner:"110%"})}),this.loadClientsFromLocalStorage()}constructor(e,m,l){this.formBuilder=e,this.router=m,this.cdRef=l,this.clients=[{ClientID:1,ClientName:"Client 1",ClientCountry:"Country 1",ClientDivision:"Division 1",SAPID:"SAP ID 1",WinRate:null},{ClientID:2,ClientName:"Client 2",ClientCountry:"Country 2",ClientDivision:"Division 2",SAPID:"SAP ID 2",WinRate:null}],this.isEdit=!1}loadClientsFromLocalStorage(){let e=localStorage.getItem("clients");e?this.clients=JSON.parse(e):this.saveClientsToLocalStorage()}saveClientsToLocalStorage(){localStorage.setItem("clients",JSON.stringify(this.clients))}onChangeFields(e,m){let l=this.clients.find(r=>r.ClientID===e);console.log(l,e),l&&m?.target&&(this.cdRef.detectChanges(),this.saveClientsToLocalStorage())}handleCreateClient(){this.router.navigate(["/client-create"])}onEditRecord(){this.isEdit=!this.isEdit,this.cdRef.detectChanges()}static{this.\u0275fac=function(m){return new(m||i)(S(F),S(T),S(h))}}static{this.\u0275cmp=y({type:i,selectors:[["app-client-overview"]],decls:55,vars:3,consts:[["xs","12"],[1,"btn","btn-primary",3,"click"],["class","btn btn-secondary",3,"click",4,"ngIf"],["class","btn btn-warning",3,"click",4,"ngIf"],["id","example","cellspacing","0","width","100%","data-page-length","10",1,"cell-border"],[4,"ngFor","ngForOf"],[1,"btn","btn-secondary",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-success",3,"click","disabled"],[1,"btn","btn-danger",3,"click","disabled"],[4,"ngIf"],["class","form-control","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["type","text",1,"form-control",3,"ngModelChange","ngModel"]],template:function(m,l){m&1&&(n(0,"c-row"),t(1,`
  `),n(2,"c-col",0),t(3,`
    `),n(4,"c-card"),t(5,`
      `),n(6,"c-card-header"),t(7,`
        `),n(8,"button",1),u("click",function(){return l.handleCreateClient()}),t(9,"Create"),o(),t(10,`
        `),p(11,L,2,0,"button",2),t(12,`
        `),p(13,B,2,0,"button",3),t(14,`
      `),o(),t(15,`
      `),n(16,"c-card-body"),t(17,`
        `),t(18,`
        `),n(19,"table",4),t(20,`
          `),n(21,"thead"),t(22,`
            `),n(23,"tr"),t(24,`
              `),n(25,"th"),t(26,"Action"),o(),t(27,`
              `),n(28,"th"),t(29,"Client Name"),o(),t(30,`
              `),n(31,"th"),t(32,"Client Division"),o(),t(33,`
              `),n(34,"th"),t(35,"Client Country"),o(),t(36,`
              `),n(37,"th"),t(38,"Win Rate(%)"),o(),t(39,`
              `),n(40,"th"),t(41,"SAP ID"),o(),t(42,`
            `),o(),t(43,`
          `),o(),t(44,`
          `),n(45,"tbody"),t(46,`
            `),p(47,Y,41,12,"tr",5),t(48,`
            `),t(49,`
          `),o(),t(50,`
        `),o(),t(51,`

      `),o(),t(52,`
    `),o(),t(53,`
  `),o(),t(54,`
`),o()),m&2&&(a(11),s("ngIf",!l.isEdit),a(2),s("ngIf",l.isEdit),a(34),s("ngForOf",l.clients))},dependencies:[k,W,A,R,P,N,D,M,V,O,I,b],encapsulation:2})}}return i})();export{rt as ClientOverviewComponent};
