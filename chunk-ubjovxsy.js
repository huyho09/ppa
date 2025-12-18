import{b as f,f as x,k as M,m as T,p as B,q as b,r as D,t as w}from"./chunk-CZMJLW4B.js";import{na as C,oa as S}from"./chunk-ZV4BMCKG.js";import{j as E,s as h}from"./chunk-FZ6VNSMS.js";import{$b as r,Ib as s,Sb as n,Tb as i,db as a,eb as u,mc as e,pc as m,qb as _,qc as p,rc as d}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";var J=(()=>{class c{constructor(g){this.router=g,this.employee={EmployeeID:Math.floor(Math.random()*1e4),NTID:"",EmployeeName:"",DOB:"",Gender:!0,Team:"",EmployeeLevel:0,SOJoinedDate:"",BoschJoinedDate:"",ResourceType:"Internal",TotalYearExperienceBeforeBosch:0,Status:"",DeactivationReason:"",LastWorkingDate:"",TerminationDate:"",MaternityEndDate:"",Remarks:"",MaternityStartDate:""}}onChange(g,y){let o=y.target.value;console.log("Current form data:",this.employee)}handleCancel(){this.router.navigate(["/employee-profile/employee-overview"])}handleSubmit(){let g=localStorage.getItem("employees");if(g){var y=JSON.parse(g);y=[...y,this.employee],localStorage.setItem("employees",JSON.stringify(y))}this.router.navigate(["/employee-profile/employee-overview"])}static{this.\u0275fac=function(y){return new(y||c)(u(h))}}static{this.\u0275cmp=_({type:c,selectors:[["app-employee-create"]],decls:177,vars:14,consts:[[2,"margin","1rem"],["xs","12","md","3"],[1,"mb-3"],["for","NTID",1,"form-label"],[2,"color","red"],["type","text","id","NTID",1,"form-control",3,"ngModelChange","change","ngModel"],["for","EmployeeName",1,"form-label"],["type","text","id","EmployeeName",1,"form-control",3,"ngModelChange","change","ngModel"],["for","DOB",1,"form-label"],["type","date","id","DOB",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Gender",1,"form-label"],["id","Gender",1,"form-select",3,"ngModelChange","change","ngModel"],[3,"ngValue"],["for","EmployeeLevel",1,"form-label"],["type","number","id","EmployeeLevel",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Team",1,"form-label"],["type","text","id","Team",1,"form-control",3,"ngModelChange","change","ngModel"],["for","SOJoinedDate",1,"form-label"],["type","date","id","SOJoinedDate",1,"form-control",3,"ngModelChange","change","ngModel"],["for","BoschJoinedDate",1,"form-label"],["type","date","id","BoschJoinedDate",1,"form-control",3,"ngModelChange","change","ngModel"],["for","ResourceType",1,"form-label"],["id","ResourceType",1,"form-select",3,"ngModelChange","change","ngModel"],["value","Internal",3,"defaultSelected"],["value","External"],["value","Fixed term"],["for","TotalYearExperienceBeforeBosch",1,"form-label"],["type","number","id","TotalYearExperienceBeforeBosch",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Status",1,"form-label"],["id","Status",1,"form-select"],["value","Working"],["xs","12"],["for","Remarks",1,"form-label"],["type","text","id","Remarks",1,"form-control",3,"ngModelChange","change","ngModel"],[1,"mb-3","float-left"],["type","button","value","Submit",1,"btn","btn-primary",3,"click","disabled"],["type","button","value","Cancel",1,"btn","btn-secondary",3,"click"]],template:function(y,o){y&1&&(n(0,"c-row",0),e(1,`
    `),n(2,"c-col",1),e(3,`
        `),n(4,"div",2),e(5,`
            `),n(6,"label",3),e(7,"NTID"),n(8,"span",4),e(9,"(*)"),i()(),e(10,`
            `),n(11,"input",5),d("ngModelChange",function(t){return p(o.employee.NTID,t)||(o.employee.NTID=t),t}),r("change",function(t){return o.onChange("NTID",t)}),i(),e(12,`
        `),i(),e(13,`
    `),i(),e(14,`
    `),n(15,"c-col",1),e(16,`
        `),n(17,"div",2),e(18,`
            `),n(19,"label",6),e(20,"Employee Name"),n(21,"span",4),e(22,"(*)"),i()(),e(23,`
            `),n(24,"input",7),d("ngModelChange",function(t){return p(o.employee.EmployeeName,t)||(o.employee.EmployeeName=t),t}),r("change",function(t){return o.onChange("EmployeeName",t)}),i(),e(25,`
        `),i(),e(26,`
    `),i(),e(27,`
    `),n(28,"c-col",1),e(29,`
        `),n(30,"div",2),e(31,`
            `),n(32,"label",8),e(33,"DOB"),i(),e(34,`
            `),n(35,"input",9),d("ngModelChange",function(t){return p(o.employee.DOB,t)||(o.employee.DOB=t),t}),r("change",function(t){return o.onChange("DOB",t)}),i(),e(36,`
        `),i(),e(37,`
    `),i(),e(38,`
    `),n(39,"c-col",1),e(40,`
        `),n(41,"div",2),e(42,`
            `),n(43,"label",10),e(44,"Gender"),i(),e(45,`
            `),n(46,"select",11),d("ngModelChange",function(t){return p(o.employee.Gender,t)||(o.employee.Gender=t),t}),r("change",function(t){return o.onChange("Gender",t)}),e(47,`
                `),n(48,"option",12),e(49,"Male"),i(),e(50,`
                `),n(51,"option",12),e(52,"Female"),i(),e(53,`
            `),i(),e(54,`
        `),i(),e(55,`
    `),i(),e(56,`
    `),n(57,"c-col",1),e(58,`
        `),n(59,"div",2),e(60,`
            `),n(61,"label",13),e(62,"Employee Level"),n(63,"span",4),e(64,"(*)"),i()(),e(65,`
            `),n(66,"input",14),d("ngModelChange",function(t){return p(o.employee.EmployeeLevel,t)||(o.employee.EmployeeLevel=t),t}),r("change",function(t){return o.onChange("EmployeeLevel",t)}),i(),e(67,`
        `),i(),e(68,`
    `),i(),e(69,`
    `),n(70,"c-col",1),e(71,`
        `),n(72,"div",2),e(73,`
            `),n(74,"label",15),e(75,"Team"),n(76,"span",4),e(77,"(*)"),i()(),e(78,`
            `),n(79,"input",16),d("ngModelChange",function(t){return p(o.employee.Team,t)||(o.employee.Team=t),t}),r("change",function(t){return o.onChange("Team",t)}),i(),e(80,`
        `),i(),e(81,`
    `),i(),e(82,`
    `),n(83,"c-col",1),e(84,`
        `),n(85,"div",2),e(86,`
            `),n(87,"label",17),e(88,"SO Joined Date"),i(),e(89,`
            `),n(90,"input",18),d("ngModelChange",function(t){return p(o.employee.SOJoinedDate,t)||(o.employee.SOJoinedDate=t),t}),r("change",function(t){return o.onChange("SOJoinedDate",t)}),i(),e(91,`
        `),i(),e(92,`
    `),i(),e(93,`
    `),n(94,"c-col",1),e(95,`
        `),n(96,"div",2),e(97,`
            `),n(98,"label",19),e(99,"Bosch Joined Date"),i(),e(100,`
            `),n(101,"input",20),d("ngModelChange",function(t){return p(o.employee.BoschJoinedDate,t)||(o.employee.BoschJoinedDate=t),t}),r("change",function(t){return o.onChange("BoschJoinedDate",t)}),i(),e(102,`
        `),i(),e(103,`
    `),i(),e(104,`
    `),n(105,"c-col",1),e(106,`
        `),n(107,"div",2),e(108,`
            `),n(109,"label",21),e(110,"Resource Type"),i(),e(111,`
            `),n(112,"select",22),d("ngModelChange",function(t){return p(o.employee.ResourceType,t)||(o.employee.ResourceType=t),t}),r("change",function(t){return o.onChange("ResourceType",t)}),e(113,`
                `),n(114,"option",23),e(115,"Internal"),i(),e(116,`
                `),n(117,"option",24),e(118,"External"),i(),e(119,`
                `),n(120,"option",25),e(121,"Fixed term"),i(),e(122,`
            `),i(),e(123,`
        `),i(),e(124,`
    `),i(),e(125,`
    `),n(126,"c-col",1),e(127,`
        `),n(128,"div",2),e(129,`
            `),n(130,"label",26),e(131,"Total Year Experience Before Bosch"),n(132,"span",4),e(133,"(*)"),i()(),e(134,`
            `),n(135,"input",27),d("ngModelChange",function(t){return p(o.employee.TotalYearExperienceBeforeBosch,t)||(o.employee.TotalYearExperienceBeforeBosch=t),t}),r("change",function(t){return o.onChange("TotalYearExperienceBeforeBosch",t)}),i(),e(136,`
        `),i(),e(137,`
    `),i(),e(138,`
    `),n(139,"c-col",1),e(140,`
        `),n(141,"div",2),e(142,`
            `),n(143,"label",28),e(144,"Status"),i(),e(145,`
            `),n(146,"select",29),e(147,`
                `),n(148,"option",30),e(149,"Working"),i(),e(150,`
            `),i(),e(151,`
        `),i(),e(152,`
    `),i(),e(153,`
    `),n(154,"c-col",31),e(155,`
        `),n(156,"div",2),e(157,`
            `),n(158,"label",32),e(159,"Remarks"),i(),e(160,`
            `),n(161,"input",33),d("ngModelChange",function(t){return p(o.employee.Remarks,t)||(o.employee.Remarks=t),t}),r("change",function(t){return o.onChange("Remarks",t)}),i(),e(162,`
        `),i(),e(163,`
    `),i(),e(164,`
    `),n(165,"c-col",31),e(166,`
        `),n(167,"div",34),e(168,`
            `),n(169,"button",35),r("click",function(){return o.handleSubmit()}),e(170,"Submit"),i(),e(171,`
            `),n(172,"button",36),r("click",function(){return o.handleCancel()}),e(173,"Cancel"),i(),e(174,`
        `),i(),e(175,`
    `),i(),e(176,`
`),i()),y&2&&(a(11),m("ngModel",o.employee.NTID),a(13),m("ngModel",o.employee.EmployeeName),a(11),m("ngModel",o.employee.DOB),a(11),m("ngModel",o.employee.Gender),a(2),s("ngValue",!0),a(3),s("ngValue",!1),a(15),m("ngModel",o.employee.EmployeeLevel),a(13),m("ngModel",o.employee.Team),a(11),m("ngModel",o.employee.SOJoinedDate),a(11),m("ngModel",o.employee.BoschJoinedDate),a(11),m("ngModel",o.employee.ResourceType),a(23),m("ngModel",o.employee.TotalYearExperienceBeforeBosch),a(26),m("ngModel",o.employee.Remarks),a(8),s("disabled",!o.employee.EmployeeName||!o.employee.NTID||!o.employee.EmployeeLevel||o.employee.EmployeeLevel==0||!o.employee.Team||!o.employee.TotalYearExperienceBeforeBosch||o.employee.TotalYearExperienceBeforeBosch==0))},dependencies:[E,S,C,w,b,D,f,T,B,x,M],encapsulation:2})}}return c})();export{J as EmployeeCreateComponent};
