import{b as f,f as y,k as M,m as x,p as E,q as B,r as P,t as T}from"./chunk-CZMJLW4B.js";import{na as S,oa as b}from"./chunk-ZV4BMCKG.js";import{j as c,s as h}from"./chunk-FZ6VNSMS.js";import{$b as a,Sb as t,Tb as i,db as r,eb as p,mc as e,pc as _,qb as s,qc as m,rc as g}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";var I=(()=>{class u{constructor(C){this.router=C,this.billing={BilllingId:Math.floor(Math.random()*1e4),Team:"OPM31",Team_CF:"OPM31",Sub_Team:"",Sub_Team_CF:"",Sub_Project:"",Emp_ID:0,Employee_Name:"",PIF_ID:"",Rev_Source:"",Cus_Div:"",Cus_Div_CF:"",DI:"Direct",MCR:"Non MCR",Onsite_Nearshore_Offshore:"Nearshore",Cus_Country:"",Cus_Country_CF:"",Contract_Type:"",Rate_In_Billing:0,CONV:"USD",Plan_1:0,Billed_1:0,Unbilled_SAP_1:0,Unbilled_No_PO_1:0,Other_Rev_1:0,Plan_2:0,Billed_2:0,Unbilled_SAP_2:0,Unbilled_No_PO_2:0,Other_Rev_2:0,Plan_3:0,Billed_3:0,Unbilled_SAP_3:0,Unbilled_No_PO_3:0,Other_Rev_3:0,Plan_4:0,Billed_4:0,Unbilled_SAP_4:0,Unbilled_No_PO_4:0,Other_Rev_4:0,Plan_5:0,Billed_5:0,Unbilled_SAP_5:0,Unbilled_No_PO_5:0,Other_Rev_5:0,Plan_6:0,Billed_6:0,Unbilled_SAP_6:0,Unbilled_No_PO_6:0,Other_Rev_6:0,Plan_7:0,Billed_7:0,Unbilled_SAP_7:0,Unbilled_No_PO_7:0,Other_Rev_7:0,Plan_8:0,Billed_8:0,Unbilled_SAP_8:0,Unbilled_No_PO_8:0,Other_Rev_8:0,Plan_9:0,Billed_9:0,Unbilled_SAP_9:0,Unbilled_No_PO_9:0,Other_Rev_9:0,Plan_10:0,Billed_10:0,Unbilled_SAP_10:0,Unbilled_No_PO_10:0,Other_Rev_10:0,Plan_11:0,Billed_11:0,Unbilled_SAP_11:0,Unbilled_No_PO_11:0,Other_Rev_11:0,Plan_12:0,Billed_12:0,Unbilled_SAP_12:0,Unbilled_No_PO_12:0,Other_Rev_12:0}}onChange(C,d){let l=d.target.value;console.log("Current form data:",this.billing)}handleCancel(){this.router.navigate(["/billing"])}handleSubmit(){let C=localStorage.getItem("billings");if(C){var d=JSON.parse(C);d=[...d,this.billing],localStorage.setItem("billings",JSON.stringify(d))}this.router.navigate(["/billing"])}static{this.\u0275fac=function(d){return new(d||u)(p(h))}}static{this.\u0275cmp=s({type:u,selectors:[["app-billing-create"]],decls:272,vars:19,consts:[[2,"margin","1rem"],["xs","12","md","3"],[1,"mb-3"],["for","Team",1,"form-label"],["id","Team",1,"form-select",3,"ngModelChange","change","ngModel"],["value","OPM31",3,"defaultSelected"],["value","OPM30"],["for","Team_CF",1,"form-label"],["id","Team_CF",1,"form-select",3,"ngModelChange","change","ngModel"],["for","Sub_Team",1,"form-label"],["type","text","id","Sub_Team",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Sub_Team_CF",1,"form-label"],["type","text","id","Sub_Team_CF",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Sub_Project",1,"form-label"],["type","text","id","Sub_Project",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Emp_ID",1,"form-label"],["type","text","id","Emp_ID",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Employee_Name",1,"form-label"],["type","text","id","Employee_Name",1,"form-control",3,"ngModelChange","change","ngModel"],["for","PIF_ID",1,"form-label"],["type","text","id","PIF_ID",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Rev_Source",1,"form-label"],["type","text","id","Rev_Source",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Cus_Div",1,"form-label"],["type","text","id","Cus_Div",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Cus_Div_CF",1,"form-label"],["type","text","id","Cus_Div_CF",1,"form-control",3,"ngModelChange","change","ngModel"],["for","DI",1,"form-label"],["id","DI",1,"form-select",3,"ngModelChange","change","ngModel"],["value","Direct"],["for","MCR",1,"form-label"],["id","MCR",1,"form-select",3,"ngModelChange","change","ngModel"],["value","MCR"],["value","Non MCR"],["for","Onsite_Nearshore_Offshore",1,"form-label"],["id","Onsite_Nearshore_Offshore",1,"form-select",3,"ngModelChange","change","ngModel"],["value","Onsite"],["value","Nearshore"],["value","Offshore"],["for","Cus_Country",1,"form-label"],["type","text","id","Cus_Country",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Cus_Country_CF",1,"form-label"],["type","text","id","Cus_Country_CF",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Contract_Type",1,"form-label"],["type","text","id","Contract_Type",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Rate_In_Billing",1,"form-label"],["type","number","id","Rate_In_Billing",1,"form-control",3,"ngModelChange","change","ngModel"],["for","CONV",1,"form-label"],["id","CONV",1,"form-select",3,"ngModelChange","change","ngModel"],["value","USD"],["value","VND"],["value","EUR"],["value","JPY"],["xs","12"],[1,"mb-3","float-left"],["type","button","value","Submit",1,"btn","btn-primary",3,"click"],["type","button","value","Cancel",1,"btn","btn-secondary",3,"click"]],template:function(d,l){d&1&&(t(0,"c-row",0),e(1,`
    `),t(2,"c-col",1),e(3,`
        `),t(4,"div",2),e(5,`
            `),t(6,"label",3),e(7,"Team"),i(),e(8,`
            `),t(9,"select",4),g("ngModelChange",function(n){return m(l.billing.Team,n)||(l.billing.Team=n),n}),a("change",function(n){return l.onChange("Team",n)}),e(10,`
                `),t(11,"option",5),e(12,"OPM31"),i(),e(13,`
                `),t(14,"option",6),e(15,"OPM30"),i(),e(16,`
            `),i(),e(17,`
        `),i(),e(18,`
    `),i(),e(19,`
    `),t(20,"c-col",1),e(21,`
        `),t(22,"div",2),e(23,`
            `),t(24,"label",7),e(25,"Team (CF)"),i(),e(26,`
            `),t(27,"select",8),g("ngModelChange",function(n){return m(l.billing.Team_CF,n)||(l.billing.Team_CF=n),n}),a("change",function(n){return l.onChange("Team_CF",n)}),e(28,`
                `),t(29,"option",5),e(30,"OPM31"),i(),e(31,`
                `),t(32,"option",6),e(33,"OPM30"),i(),e(34,`
            `),i(),e(35,`
        `),i(),e(36,`
    `),i(),e(37,`
    `),t(38,"c-col",1),e(39,`
        `),t(40,"div",2),e(41,`
            `),t(42,"label",9),e(43,"Sub Team"),i(),e(44,`
            `),t(45,"input",10),g("ngModelChange",function(n){return m(l.billing.Sub_Team,n)||(l.billing.Sub_Team=n),n}),a("change",function(n){return l.onChange("Sub_Team",n)}),i(),e(46,`
        `),i(),e(47,`
    `),i(),e(48,`
    `),t(49,"c-col",1),e(50,`
        `),t(51,"div",2),e(52,`
            `),t(53,"label",11),e(54,"Sub Team (CF)"),i(),e(55,`
            `),t(56,"input",12),g("ngModelChange",function(n){return m(l.billing.Sub_Team_CF,n)||(l.billing.Sub_Team_CF=n),n}),a("change",function(n){return l.onChange("Sub_Team_CF",n)}),i(),e(57,`
        `),i(),e(58,`
    `),i(),e(59,`
    `),t(60,"c-col",1),e(61,`
        `),t(62,"div",2),e(63,`
            `),t(64,"label",13),e(65,"Sub Project"),i(),e(66,`
            `),t(67,"input",14),g("ngModelChange",function(n){return m(l.billing.Sub_Project,n)||(l.billing.Sub_Project=n),n}),a("change",function(n){return l.onChange("Sub_Project",n)}),i(),e(68,`
        `),i(),e(69,`
    `),i(),e(70,`
    `),t(71,"c-col",1),e(72,`
        `),t(73,"div",2),e(74,`
            `),t(75,"label",15),e(76,"Emp ID"),i(),e(77,`
            `),t(78,"input",16),g("ngModelChange",function(n){return m(l.billing.Emp_ID,n)||(l.billing.Emp_ID=n),n}),a("change",function(n){return l.onChange("Emp_ID",n)}),i(),e(79,`
        `),i(),e(80,`
    `),i(),e(81,`
    `),t(82,"c-col",1),e(83,`
        `),t(84,"div",2),e(85,`
            `),t(86,"label",17),e(87,"Employee Name"),i(),e(88,`
            `),t(89,"input",18),g("ngModelChange",function(n){return m(l.billing.Employee_Name,n)||(l.billing.Employee_Name=n),n}),a("change",function(n){return l.onChange("Employee_Name",n)}),i(),e(90,`
        `),i(),e(91,`
    `),i(),e(92,`
    `),t(93,"c-col",1),e(94,`
        `),t(95,"div",2),e(96,`
            `),t(97,"label",19),e(98,"PIF ID"),i(),e(99,`
            `),t(100,"input",20),g("ngModelChange",function(n){return m(l.billing.PIF_ID,n)||(l.billing.PIF_ID=n),n}),a("change",function(n){return l.onChange("PIF_ID",n)}),i(),e(101,`
        `),i(),e(102,`
    `),i(),e(103,`
    `),t(104,"c-col",1),e(105,`
        `),t(106,"div",2),e(107,`
            `),t(108,"label",21),e(109,"Rev Source"),i(),e(110,`
            `),t(111,"input",22),g("ngModelChange",function(n){return m(l.billing.Rev_Source,n)||(l.billing.Rev_Source=n),n}),a("change",function(n){return l.onChange("Rev_Source",n)}),i(),e(112,`
        `),i(),e(113,`
    `),i(),e(114,`
    `),t(115,"c-col",1),e(116,`
        `),t(117,"div",2),e(118,`
            `),t(119,"label",23),e(120,"Cus Div"),i(),e(121,`
            `),t(122,"input",24),g("ngModelChange",function(n){return m(l.billing.Cus_Div,n)||(l.billing.Cus_Div=n),n}),a("change",function(n){return l.onChange("Cus_Div",n)}),i(),e(123,`
        `),i(),e(124,`
    `),i(),e(125,`
    `),t(126,"c-col",1),e(127,`
        `),t(128,"div",2),e(129,`
            `),t(130,"label",25),e(131,"Cus Div (CF)"),i(),e(132,`
            `),t(133,"input",26),g("ngModelChange",function(n){return m(l.billing.Cus_Div_CF,n)||(l.billing.Cus_Div_CF=n),n}),a("change",function(n){return l.onChange("Cus_Div_CF",n)}),i(),e(134,`
        `),i(),e(135,`
    `),i(),e(136,`
    `),t(137,"c-col",1),e(138,`
        `),t(139,"div",2),e(140,`
            `),t(141,"label",27),e(142,"D/I"),i(),e(143,`
            `),t(144,"select",28),g("ngModelChange",function(n){return m(l.billing.DI,n)||(l.billing.DI=n),n}),a("change",function(n){return l.onChange("DI",n)}),e(145,`
                `),t(146,"option",29),e(147,"Direct"),i(),e(148,`
            `),i(),e(149,`
        `),i(),e(150,`
    `),i(),e(151,`
    `),t(152,"c-col",1),e(153,`
        `),t(154,"div",2),e(155,`
            `),t(156,"label",30),e(157,"MCR"),i(),e(158,`
            `),t(159,"select",31),g("ngModelChange",function(n){return m(l.billing.MCR,n)||(l.billing.MCR=n),n}),a("change",function(n){return l.onChange("MCR",n)}),e(160,`
                `),t(161,"option",32),e(162,"MCR"),i(),e(163,`
                `),t(164,"option",33),e(165,"Non MCR"),i(),e(166,`
            `),i(),e(167,`
        `),i(),e(168,`
    `),i(),e(169,`
    `),t(170,"c-col",1),e(171,`
        `),t(172,"div",2),e(173,`
            `),t(174,"label",34),e(175,"Onsite/Nearshore/Offshore"),i(),e(176,`
            `),t(177,"select",35),g("ngModelChange",function(n){return m(l.billing.Onsite_Nearshore_Offshore,n)||(l.billing.Onsite_Nearshore_Offshore=n),n}),a("change",function(n){return l.onChange("Onsite_Nearshore_Offshore",n)}),e(178,`
                `),t(179,"option",36),e(180,"Onsite"),i(),e(181,`
                `),t(182,"option",37),e(183,"Nearshore"),i(),e(184,`
                `),t(185,"option",38),e(186,"Offshore"),i(),e(187,`
            `),i(),e(188,`
        `),i(),e(189,`
    `),i(),e(190,`
    `),t(191,"c-col",1),e(192,`
        `),t(193,"div",2),e(194,`
            `),t(195,"label",39),e(196,"Cus Country"),i(),e(197,`
            `),t(198,"input",40),g("ngModelChange",function(n){return m(l.billing.Cus_Country,n)||(l.billing.Cus_Country=n),n}),a("change",function(n){return l.onChange("Cus_Country",n)}),i(),e(199,`
        `),i(),e(200,`
    `),i(),e(201,`
    `),t(202,"c-col",1),e(203,`
        `),t(204,"div",2),e(205,`
            `),t(206,"label",41),e(207,"Cus Country (CF)"),i(),e(208,`
            `),t(209,"input",42),g("ngModelChange",function(n){return m(l.billing.Cus_Country_CF,n)||(l.billing.Cus_Country_CF=n),n}),a("change",function(n){return l.onChange("Cus_Country_CF",n)}),i(),e(210,`
        `),i(),e(211,`
    `),i(),e(212,`
    `),t(213,"c-col",1),e(214,`
        `),t(215,"div",2),e(216,`
            `),t(217,"label",43),e(218,"Contract Type"),i(),e(219,`
            `),t(220,"input",44),g("ngModelChange",function(n){return m(l.billing.Contract_Type,n)||(l.billing.Contract_Type=n),n}),a("change",function(n){return l.onChange("Contract_Type",n)}),i(),e(221,`
        `),i(),e(222,`
    `),i(),e(223,`
    `),t(224,"c-col",1),e(225,`
        `),t(226,"div",2),e(227,`
            `),t(228,"label",45),e(229,"Rate In Billing"),i(),e(230,`
            `),t(231,"input",46),g("ngModelChange",function(n){return m(l.billing.Rate_In_Billing,n)||(l.billing.Rate_In_Billing=n),n}),a("change",function(n){return l.onChange("Rate_In_Billing",n)}),i(),e(232,`
        `),i(),e(233,`
    `),i(),e(234,`
    `),t(235,"c-col",1),e(236,`
        `),t(237,"div",2),e(238,`
            `),t(239,"label",47),e(240,"CONV"),i(),e(241,`
            `),t(242,"select",48),g("ngModelChange",function(n){return m(l.billing.CONV,n)||(l.billing.CONV=n),n}),a("change",function(n){return l.onChange("CONV",n)}),e(243,`
                `),t(244,"option",49),e(245,"USD"),i(),e(246,`
                `),t(247,"option",50),e(248,"VND"),i(),e(249,`
                `),t(250,"option",51),e(251,"EUR"),i(),e(252,`
                `),t(253,"option",52),e(254,"JPY"),i(),e(255,`
            `),i(),e(256,`
        `),i(),e(257,`
    `),i(),e(258,`
    `),e(259,`
    `),t(260,"c-col",53),e(261,`
        `),t(262,"div",54),e(263,`
            `),t(264,"button",55),a("click",function(){return l.handleSubmit()}),e(265,"Submit"),i(),e(266,`
            `),t(267,"button",56),a("click",function(){return l.handleCancel()}),e(268,"Cancel"),i(),e(269,`
        `),i(),e(270,`
    `),i(),e(271,`
`),i()),d&2&&(r(9),_("ngModel",l.billing.Team),r(18),_("ngModel",l.billing.Team_CF),r(18),_("ngModel",l.billing.Sub_Team),r(11),_("ngModel",l.billing.Sub_Team_CF),r(11),_("ngModel",l.billing.Sub_Project),r(11),_("ngModel",l.billing.Emp_ID),r(11),_("ngModel",l.billing.Employee_Name),r(11),_("ngModel",l.billing.PIF_ID),r(11),_("ngModel",l.billing.Rev_Source),r(11),_("ngModel",l.billing.Cus_Div),r(11),_("ngModel",l.billing.Cus_Div_CF),r(11),_("ngModel",l.billing.DI),r(15),_("ngModel",l.billing.MCR),r(18),_("ngModel",l.billing.Onsite_Nearshore_Offshore),r(21),_("ngModel",l.billing.Cus_Country),r(11),_("ngModel",l.billing.Cus_Country_CF),r(11),_("ngModel",l.billing.Contract_Type),r(11),_("ngModel",l.billing.Rate_In_Billing),r(11),_("ngModel",l.billing.CONV))},dependencies:[c,T,B,P,f,x,E,y,M,b,S],styles:["label[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:bolder}"]})}}return u})();export{I as BillingCreateComponent};
