import{b as x,f as M,k as v,p as b,q as E,r as D,t as w}from"./chunk-CZMJLW4B.js";import{na as h,oa as y}from"./chunk-ZV4BMCKG.js";import{j as _,s as f}from"./chunk-FZ6VNSMS.js";import{$b as m,Ib as S,Sb as t,Tb as n,db as C,eb as u,mc as e,pc as c,qb as g,qc as d,rc as s}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";var k=(()=>{class p{constructor(r){this.router=r,this.client={ClientID:Math.floor(Math.random()*1e4),ClientCountry:"CN",ClientDivision:"CC",SAPID:"",ClientName:"",WinRate:null}}onChange(r,o){let l=o.target.value;console.log("Current form data:",this.client)}handleCancel(){this.router.navigate(["/project/client-overview"])}handleSubmit(){let r=localStorage.getItem("clients");if(r){var o=JSON.parse(r);o=[...o,this.client],localStorage.setItem("clients",JSON.stringify(o))}this.router.navigate(["/project/client-overview"])}static{this.\u0275fac=function(o){return new(o||p)(u(f))}}static{this.\u0275cmp=g({type:p,selectors:[["app-client-create"]],decls:74,vars:5,consts:[[2,"margin","1rem"],["xs","12","md","6"],[1,"mb-3"],["for","ClientName",1,"form-label"],[2,"color","red"],["type","text","id","EmployeeID",1,"form-control",3,"ngModelChange","change","ngModel"],["for","ClientDivision",1,"form-label"],["id","ClientDivision",1,"form-select",3,"ngModelChange","change","ngModel"],["value","CC"],["for","ClientCountry",1,"form-label"],["id","ClientCountry",1,"form-select",3,"ngModelChange","change","ngModel"],["value","CN"],["for","SAPID",1,"form-label"],["type","text","id","SAPID",1,"form-control",3,"ngModelChange","change","ngModel"],["xs","12"],[1,"mb-3","float-left"],["type","button","value","Submit",1,"btn","btn-primary",3,"click","disabled"],["type","button","value","Cancel",1,"btn","btn-secondary",3,"click"]],template:function(o,l){o&1&&(t(0,"c-row",0),e(1,`
    `),t(2,"c-col",1),e(3,`
        `),t(4,"div",2),e(5,`
            `),t(6,"label",3),e(7,"Employee Name"),t(8,"span",4),e(9,"(*)"),n()(),e(10,`
            `),t(11,"input",5),s("ngModelChange",function(i){return d(l.client.ClientName,i)||(l.client.ClientName=i),i}),m("change",function(i){return l.onChange("ClientName",i)}),n(),e(12,`
        `),n(),e(13,`
    `),n(),e(14,`
    `),t(15,"c-col",1),e(16,`
        `),t(17,"div",2),e(18,`
            `),t(19,"label",6),e(20,"Client Division"),t(21,"span",4),e(22,"(*)"),n()(),e(23,`
            `),t(24,"select",7),s("ngModelChange",function(i){return d(l.client.ClientDivision,i)||(l.client.ClientDivision=i),i}),m("change",function(i){return l.onChange("ClientDivision",i)}),e(25,`
                `),t(26,"option",8),e(27,"CC"),n(),e(28,`
            `),n(),e(29,`
        `),n(),e(30,`
    `),n(),e(31,`
    `),t(32,"c-col",1),e(33,`
        `),t(34,"div",2),e(35,`
            `),t(36,"label",9),e(37,"Client Country"),t(38,"span",4),e(39,"(*)"),n()(),e(40,`
            `),t(41,"select",10),s("ngModelChange",function(i){return d(l.client.ClientCountry,i)||(l.client.ClientCountry=i),i}),m("change",function(i){return l.onChange("ClientCountry",i)}),e(42,`
                `),t(43,"option",11),e(44,"CN"),n(),e(45,`
            `),n(),e(46,`
        `),n(),e(47,`
    `),n(),e(48,`
    `),t(49,"c-col",1),e(50,`
        `),t(51,"div",2),e(52,`
            `),t(53,"label",12),e(54,"SAP ID"),t(55,"span",4),e(56,"(*)"),n()(),e(57,`
            `),t(58,"input",13),s("ngModelChange",function(i){return d(l.client.SAPID,i)||(l.client.SAPID=i),i}),m("change",function(i){return l.onChange("SAPID",i)}),n(),e(59,`
        `),n(),e(60,`
    `),n(),e(61,`
   
    `),t(62,"c-col",14),e(63,`
        `),t(64,"div",15),e(65,`
            `),t(66,"button",16),m("click",function(){return l.handleSubmit()}),e(67,"Submit"),n(),e(68,`
            `),t(69,"button",17),m("click",function(){return l.handleCancel()}),e(70,"Cancel"),n(),e(71,`
        `),n(),e(72,`
    `),n(),e(73,`
`),n()),o&2&&(C(11),c("ngModel",l.client.ClientName),C(13),c("ngModel",l.client.ClientDivision),C(17),c("ngModel",l.client.ClientCountry),C(17),c("ngModel",l.client.SAPID),C(8),S("disabled",!l.client.ClientName||!l.client.SAPID))},dependencies:[_,y,h,w,E,D,x,b,M,v],encapsulation:2})}}return p})();export{k as ClientCreateComponent};
