import{a as P,b as L,c as j,d as y,e as E}from"./chunk-IMLBNQH4.js";import{b as W,f as v,k as O,m as B,p as I,q as R,r as F,t as A}from"./chunk-CZMJLW4B.js";import{na as N,oa as w}from"./chunk-ZV4BMCKG.js";import{e as M,j as x,s as T}from"./chunk-FZ6VNSMS.js";import{$b as l,Ib as g,Sb as t,Tb as r,db as o,eb as f,mc as e,nc as C,oc as h,pc as c,qb as b,qc as d,rc as p,xb as S}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";function k(_,s){if(_&1&&(t(0,"option",47),e(1),r()),_&2){let m=s.$implicit;g("value",m.ClientName),o(),h(`
                    `,m.ClientName,`
                `)}}function q(_,s){if(_&1&&(t(0,"option",47),e(1),r()),_&2){let m=s.$implicit;g("value",m.ProjectName),o(),h(`
                    `,m.ProjectName,`
                `)}}var H=(()=>{class _{constructor(m){this.router=m,this.project={ProjectID:Math.floor(Math.random()*1e4),ProjectName:"",ClientName:"",SubProjectIds:[],Team:"",SubTeam:"",Status:P["In Contact"],CancellationReason:"",PIF_ID:"",MCR_ID_BM_Number:"",ResourceGroup_ID:"",RevenueSource:"",Direct_Indirect:"",WorkingModel:L.Onsite,ContractType:j["Service based (YEB)"],BillingMethod:y.Email,BillingRate:0,ContractCurrency:"EUR",TargetCurrency:"EUR",Contractual_PMO_In_Period:0,StartPeriod:"2025-01-01",EndPeriod:"2025-01-01",BillingFrequency:E.Monthly,PONumber_SAPContractNumber:"",ContractNumber:"",PO_Amount:0,Remarks:""},this.clients=[],this.subProjects=[],this.projectStatusEnum=P,this.contractTypeEnum=j,this.billingMethodEnum=y,this.billingFrequencyEnum=E}ngOnInit(){let m=localStorage.getItem("clients");m&&(this.clients=JSON.parse(m));let u=localStorage.getItem("projects");u&&(this.subProjects=JSON.parse(u))}onChange(m,u){let i=u.target.value;console.log("Current form data:",this.project)}handleCancel(){this.router.navigate(["/project/project-overview"])}handleSubmit(){let m=localStorage.getItem("projects");if(m){var u=JSON.parse(m);u=[...u,this.project],localStorage.setItem("projects",JSON.stringify(u))}this.router.navigate(["/project/project-overview"])}static{this.\u0275fac=function(u){return new(u||_)(f(T))}}static{this.\u0275cmp=b({type:_,selectors:[["app-project-create"]],decls:262,vars:32,consts:[[2,"margin","1rem"],["xs","12","md","3"],[1,"mb-3"],["for","ProjectName",1,"form-label"],[2,"color","red"],["type","text","id","ProjectName",1,"form-control",3,"ngModelChange","change","ngModel"],["for","ClientName",1,"form-label"],["id","ClientName",1,"form-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","SubProjectName",1,"form-label"],["id","SubProjectName",1,"form-select",3,"change"],["for","Team",1,"form-label"],["type","text","id","Team",1,"form-control",3,"ngModelChange","change","ngModel"],["for","SubTeam",1,"form-label"],["type","text","id","SubTeam",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Status",1,"form-label"],["id","Status",1,"form-select",3,"ngModelChange","change","ngModel"],[3,"ngValue"],["for","BillingRate",1,"form-label"],["type","number","id","BillingRate",1,"form-control",3,"ngModelChange","change","ngModel"],["for","ContractCurrency",1,"form-label"],["id","ContractCurrency",1,"form-select",3,"ngModelChange","change","ngModel"],["value","USD"],["value","EUR"],["value","VND"],["for","TargetCurrency",1,"form-label"],["type","text","id","TargetCurrency",1,"form-control",3,"ngModelChange","change","ngModel"],["for","Contractual_PMO_In_Period",1,"form-label"],["type","number","id","Contractual_PMO_In_Period",1,"form-control",3,"ngModelChange","change","ngModel"],["for","StartPeriod",1,"form-label"],["type","date","id","StartPeriod",1,"form-control",3,"ngModelChange","change","ngModel"],["for","EndPeriod",1,"form-label"],["type","date","id","EndPeriod",1,"form-control",3,"ngModelChange","change","ngModel"],["for","BillingFrequency",1,"form-label"],["id","BillingFrequency",1,"form-select",3,"ngModelChange","change","ngModel"],["for","PONumber_SAPContractNumber",1,"form-label"],["type","number","id","PONumber_SAPContractNumber",1,"form-control",3,"ngModelChange","change","ngModel"],["for","ContractNumber",1,"form-label"],["type","number","id","ContractNumber",1,"form-control",3,"ngModelChange","change","ngModel"],["for","PO_Amount",1,"form-label"],["type","number","id","PO_Amount",1,"form-control",3,"ngModelChange","change","ngModel"],["xs","12"],["for","Remarks",1,"form-label"],["type","text","id","Remarks",1,"form-control",3,"ngModelChange","change","ngModel"],[1,"mb-3","float-left"],["type","button","value","Submit",1,"btn","btn-primary",3,"click","disabled"],["type","button","value","Cancel",1,"btn","btn-secondary",3,"click"],[3,"value"]],template:function(u,i){u&1&&(t(0,"c-row",0),e(1,`
    `),t(2,"c-col",1),e(3,`
        `),t(4,"div",2),e(5,`
            `),t(6,"label",3),e(7,"Project Name"),t(8,"span",4),e(9,"(*)"),r()(),e(10,`
            `),t(11,"input",5),p("ngModelChange",function(n){return d(i.project.ProjectName,n)||(i.project.ProjectName=n),n}),l("change",function(n){return i.onChange("ProjectName",n)}),r(),e(12,`
        `),r(),e(13,`
    `),r(),e(14,`
    `),t(15,"c-col",1),e(16,`
        `),t(17,"div",2),e(18,`
            `),t(19,"label",6),e(20,"Client Name"),r(),e(21,`
            `),t(22,"select",7),l("change",function(n){return i.onChange("ClientName",n)}),e(23,`
                `),S(24,k,2,2,"option",8),e(25,`
            `),r(),e(26,`
        `),r(),e(27,`
    `),r(),e(28,`
    `),t(29,"c-col",1),e(30,`
        `),t(31,"div",2),e(32,`
            `),t(33,"label",9),e(34,"Sub-Project Name"),r(),e(35,`
            `),t(36,"select",10),l("change",function(n){return i.onChange("SubProjectName",n)}),e(37,`
                `),S(38,q,2,2,"option",8),e(39,`
            `),r(),e(40,`
        `),r(),e(41,`
    `),r(),e(42,`
    `),t(43,"c-col",1),e(44,`
        `),t(45,"div",2),e(46,`
            `),t(47,"label",11),e(48,"Team"),t(49,"span",4),e(50,"(*)"),r()(),e(51,`
            `),t(52,"input",12),p("ngModelChange",function(n){return d(i.project.Team,n)||(i.project.Team=n),n}),l("change",function(n){return i.onChange("Team",n)}),r(),e(53,`
        `),r(),e(54,`
    `),r(),e(55,`
    `),t(56,"c-col",1),e(57,`
        `),t(58,"div",2),e(59,`
            `),t(60,"label",13),e(61,"Sub-Team"),t(62,"span",4),e(63,"(*)"),r()(),e(64,`
            `),t(65,"input",14),p("ngModelChange",function(n){return d(i.project.SubTeam,n)||(i.project.SubTeam=n),n}),l("change",function(n){return i.onChange("SubTeam",n)}),r(),e(66,`
        `),r(),e(67,`
    `),r(),e(68,`
    `),t(69,"c-col",1),e(70,`
        `),t(71,"div",2),e(72,`
            `),t(73,"label",15),e(74,"Status"),r(),e(75,`
            `),t(76,"select",16),p("ngModelChange",function(n){return d(i.project.Status,n)||(i.project.Status=n),n}),l("change",function(n){return i.onChange("Gender",n)}),e(77,`
                `),t(78,"option",17),e(79),r(),e(80,`
                `),t(81,"option",17),e(82),r(),e(83,`
                `),t(84,"option",17),e(85),r(),e(86,`
                `),t(87,"option",17),e(88),r(),e(89,`
            `),r(),e(90,`
        `),r(),e(91,`
    `),r(),e(92,`

    `),t(93,"c-col",1),e(94,`
        `),t(95,"div",2),e(96,`
            `),t(97,"label",18),e(98,"Billing Rate"),t(99,"span",4),e(100,"(*)"),r()(),e(101,`
            `),t(102,"input",19),p("ngModelChange",function(n){return d(i.project.BillingRate,n)||(i.project.BillingRate=n),n}),l("change",function(n){return i.onChange("BillingRate",n)}),r(),e(103,`
        `),r(),e(104,`
    `),r(),e(105,`
    `),t(106,"c-col",1),e(107,`
        `),t(108,"div",2),e(109,`
            `),t(110,"label",20),e(111,"ContractCurrency"),r(),e(112,`
            `),t(113,"select",21),p("ngModelChange",function(n){return d(i.project.ContractCurrency,n)||(i.project.ContractCurrency=n),n}),l("change",function(n){return i.onChange("ContractCurrency",n)}),e(114,`
                `),t(115,"option",22),e(116,"USD"),r(),e(117,`
                `),t(118,"option",23),e(119,"EUR"),r(),e(120,`
                `),t(121,"option",24),e(122,"VND"),r(),e(123,`
            `),r(),e(124,`
        `),r(),e(125,`
    `),r(),e(126,`
    `),t(127,"c-col",1),e(128,`
        `),t(129,"div",2),e(130,`
            `),t(131,"label",25),e(132,"Target Currency"),t(133,"span",4),e(134,"(*)"),r()(),e(135,`
            `),t(136,"input",26),p("ngModelChange",function(n){return d(i.project.TargetCurrency,n)||(i.project.TargetCurrency=n),n}),l("change",function(n){return i.onChange("BillingRate",n)}),r(),e(137,`
        `),r(),e(138,`
    `),r(),e(139,`
    `),t(140,"c-col",1),e(141,`
        `),t(142,"div",2),e(143,`
            `),t(144,"label",27),e(145,"Contractual PMO In Period"),t(146,"span",4),e(147,"(*)"),r()(),e(148,`
            `),t(149,"input",28),p("ngModelChange",function(n){return d(i.project.Contractual_PMO_In_Period,n)||(i.project.Contractual_PMO_In_Period=n),n}),l("change",function(n){return i.onChange("Contractual_PMO_In_Period",n)}),r(),e(150,`
        `),r(),e(151,`
    `),r(),e(152,`
    `),t(153,"c-col",1),e(154,`
        `),t(155,"div",2),e(156,`
            `),t(157,"label",29),e(158,"Start Period"),t(159,"span",4),e(160,"(*)"),r()(),e(161,`
            `),t(162,"input",30),p("ngModelChange",function(n){return d(i.project.StartPeriod,n)||(i.project.StartPeriod=n),n}),l("change",function(n){return i.onChange("StartPeriod",n)}),r(),e(163,`
        `),r(),e(164,`
    `),r(),e(165,`
    `),t(166,"c-col",1),e(167,`
        `),t(168,"div",2),e(169,`
            `),t(170,"label",31),e(171,"End Period"),t(172,"span",4),e(173,"(*)"),r()(),e(174,`
            `),t(175,"input",32),p("ngModelChange",function(n){return d(i.project.EndPeriod,n)||(i.project.EndPeriod=n),n}),l("change",function(n){return i.onChange("EndPeriod",n)}),r(),e(176,`
        `),r(),e(177,`
    `),r(),e(178,`
    `),t(179,"c-col",1),e(180,`
        `),t(181,"div",2),e(182,`
            `),t(183,"label",33),e(184,"Billing Frequency"),r(),e(185,`
            `),t(186,"select",34),p("ngModelChange",function(n){return d(i.project.BillingFrequency,n)||(i.project.BillingFrequency=n),n}),l("change",function(n){return i.onChange("BillingFrequency",n)}),e(187,`
                `),t(188,"option",17),e(189),r(),e(190,`
                `),t(191,"option",17),e(192),r(),e(193,`
                `),t(194,"option",17),e(195),r(),e(196,`
            `),r(),e(197,`
        `),r(),e(198,`
    `),r(),e(199,`
    `),t(200,"c-col",1),e(201,`
        `),t(202,"div",2),e(203,`
            `),t(204,"label",35),e(205,"PO Number & SAP Contract Number"),t(206,"span",4),e(207,"(*)"),r()(),e(208,`
            `),t(209,"input",36),p("ngModelChange",function(n){return d(i.project.PONumber_SAPContractNumber,n)||(i.project.PONumber_SAPContractNumber=n),n}),l("change",function(n){return i.onChange("PONumber_SAPContractNumber",n)}),r(),e(210,`
        `),r(),e(211,`
    `),r(),e(212,`
    `),t(213,"c-col",1),e(214,`
        `),t(215,"div",2),e(216,`
            `),t(217,"label",37),e(218,"Contract Number"),t(219,"span",4),e(220,"(*)"),r()(),e(221,`
            `),t(222,"input",38),p("ngModelChange",function(n){return d(i.project.ContractNumber,n)||(i.project.ContractNumber=n),n}),l("change",function(n){return i.onChange("ContractNumber",n)}),r(),e(223,`
        `),r(),e(224,`
    `),r(),e(225,`
    `),t(226,"c-col",1),e(227,`
        `),t(228,"div",2),e(229,`
            `),t(230,"label",39),e(231,"PO Amount"),t(232,"span",4),e(233,"(*)"),r()(),e(234,`
            `),t(235,"input",40),p("ngModelChange",function(n){return d(i.project.PO_Amount,n)||(i.project.PO_Amount=n),n}),l("change",function(n){return i.onChange("PO_Amount",n)}),r(),e(236,`
        `),r(),e(237,`
    `),r(),e(238,`
    `),t(239,"c-col",41),e(240,`
        `),t(241,"div",2),e(242,`
            `),t(243,"label",42),e(244,"Remarks"),r(),e(245,`
            `),t(246,"textarea",43),p("ngModelChange",function(n){return d(i.project.Remarks,n)||(i.project.Remarks=n),n}),l("change",function(n){return i.onChange("Remarks",n)}),r(),e(247,`
        `),r(),e(248,`
    `),r(),e(249,`
    `),t(250,"c-col",41),e(251,`
        `),t(252,"div",44),e(253,`
            `),t(254,"button",45),l("click",function(){return i.handleSubmit()}),e(255,"Submit"),r(),e(256,`
            `),t(257,"button",46),l("click",function(){return i.handleCancel()}),e(258,"Cancel"),r(),e(259,`
        `),r(),e(260,`
    `),r(),e(261,`
`),r()),u&2&&(o(11),c("ngModel",i.project.ProjectName),o(13),g("ngForOf",i.clients),o(14),g("ngForOf",i.subProjects),o(14),c("ngModel",i.project.Team),o(13),c("ngModel",i.project.SubTeam),o(11),c("ngModel",i.project.Status),o(2),g("ngValue",i.projectStatusEnum["In Contact"]),o(),C(i.projectStatusEnum["In Contact"]),o(2),g("ngValue",i.projectStatusEnum["Lost/Cancel"]),o(),C(i.projectStatusEnum["Lost/Cancel"]),o(2),g("ngValue",i.projectStatusEnum.Proposing),o(),C(i.projectStatusEnum.Proposing),o(2),g("ngValue",i.projectStatusEnum.Won),o(),C(i.projectStatusEnum.Won),o(14),c("ngModel",i.project.BillingRate),o(11),c("ngModel",i.project.ContractCurrency),o(23),c("ngModel",i.project.TargetCurrency),o(13),c("ngModel",i.project.Contractual_PMO_In_Period),o(13),c("ngModel",i.project.StartPeriod),o(13),c("ngModel",i.project.EndPeriod),o(11),c("ngModel",i.project.BillingFrequency),o(2),g("ngValue",i.billingFrequencyEnum.Monthly),o(),C(i.billingFrequencyEnum.Monthly),o(2),g("ngValue",i.billingFrequencyEnum["One time"]),o(),C(i.billingFrequencyEnum["One time"]),o(2),g("ngValue",i.billingFrequencyEnum.Quarterly),o(),C(i.billingFrequencyEnum.Quarterly),o(14),c("ngModel",i.project.PONumber_SAPContractNumber),o(13),c("ngModel",i.project.ContractNumber),o(13),c("ngModel",i.project.PO_Amount),o(11),c("ngModel",i.project.Remarks),o(8),g("disabled",!i.project.ProjectName||!i.project.Team||i.project.BillingRate==0||!i.project.PO_Amount||i.project.PO_Amount==0||!i.project.TargetCurrency||!i.project.Contractual_PMO_In_Period||i.project.Contractual_PMO_In_Period==0))},dependencies:[x,M,w,N,A,R,F,W,B,I,v,O],encapsulation:2})}}return _})();export{H as ProjectCreateComponent};
