import{a as O}from"./chunk-ITS5XNHJ.js";import{a as B}from"./chunk-YKQDYALA.js";import{X as C,Y as I,_ as D,na as T,oa as _}from"./chunk-ZV4BMCKG.js";import{e as g,j as u}from"./chunk-FZ6VNSMS.js";import{$b as y,Ib as x,Ic as f,Sb as t,Tb as n,Yb as h,bc as v,db as l,eb as s,mc as e,nc as o,oa as p,pa as c,qb as S,xb as E}from"./chunk-D5ADUCRO.js";import"./chunk-7CGTOI24.js";function N(m,A){if(m&1){let i=h();t(0,"tr",4),e(1,`
                `),t(2,"td",2),e(3,`
                  `),t(4,"select",5),y("change",function(r){let d=p(i).$implicit,F=v();return c(F.updateStatus(d.EmployeeID,r))}),e(5,`
                    `),t(6,"option",6),e(7,"Select"),n(),e(8,`
                    `),t(9,"option",7),e(10,"Approve"),n(),e(11,`
                    `),t(12,"option",8),e(13,"Reject"),n(),e(14,`
                  `),n(),e(15,`
                `),n(),e(16,`
                `),e(17,`
                `),t(18,"td"),e(19),n(),e(20,`
                `),t(21,"td"),e(22),n(),e(23,`
                `),t(24,"td"),e(25),n(),e(26,`
                `),t(27,"td"),e(28),n(),e(29,`
                `),t(30,"td"),e(31),n(),e(32,`
                `),t(33,"td"),e(34),n(),e(35,`
                `),t(36,"td"),e(37),n(),e(38,`
                `),t(39,"td"),e(40),n(),e(41,`
                `),t(42,"td"),e(43),n(),e(44,`
                `),t(45,"td"),e(46),n(),e(47,`
            `),n()}if(m&2){let i=A.$implicit;x("hidden",i.Status=="Active"),l(19),o(i.NTID),l(3),o(i.EmployeeName),l(3),o(i.DOB),l(3),o(i.Gender?"Male":"Female"),l(3),o(i.Team),l(3),o(i.EmployeeLevel),l(3),o(i.SOJoinedDate),l(3),o(i.BoschJoinedDate),l(3),o(i.ResourceType),l(3),o(i.TotalYearExperienceBeforeBosch)}}var j=(()=>{class m{constructor(i){this.cdRef=i,this.employees=O}ngOnInit(){$(document).ready(function(){$("#example").dataTable({sScrollX:"100%",sScrollXInner:"110%"})}),this.loadEmployeesFromLocalStorage()}updateStatus(i,a){let r=this.employees.find(d=>d.EmployeeID===i);if(console.log(r,i),r&&a?.target){let d=a.target.value;r.Status=d,this.cdRef.detectChanges(),this.saveEmployeesToLocalStorage()}}saveEmployeesToLocalStorage(){localStorage.setItem("employees",JSON.stringify(this.employees))}loadEmployeesFromLocalStorage(){let i=localStorage.getItem("employees");i&&(this.employees=JSON.parse(i))}static{this.\u0275fac=function(a){return new(a||m)(s(f))}}static{this.\u0275cmp=S({type:m,selectors:[["app-pending-approvals"]],decls:64,vars:1,consts:[["xs","12"],["id","example","cellspacing","0","width","100%",1,"display"],[1,"col-1"],[3,"hidden",4,"ngFor","ngForOf"],[3,"hidden"],[1,"form-select",3,"change"],["value",""],["value","Active"],["value","Reject"]],template:function(a,r){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card"),e(5,`
      `),t(6,"c-card-header"),e(7,`
      `),n(),e(8,`
      `),t(9,"c-card-body"),e(10,`
        `),e(11,`
        `),t(12,"table",1),e(13,`
          `),t(14,"thead"),e(15,`
            `),t(16,"tr"),e(17,`
              `),t(18,"th",2),e(19,"Action"),n(),e(20,`
              `),e(21,`
              `),t(22,"th"),e(23,"NTID"),n(),e(24,`
              `),t(25,"th"),e(26,"Employee Name"),n(),e(27,`
              `),t(28,"th"),e(29,"DOB"),n(),e(30,`
              `),t(31,"th"),e(32,"Gender"),n(),e(33,`
              `),t(34,"th"),e(35,"Team"),n(),e(36,`
              `),t(37,"th"),e(38,"Employee Level"),n(),e(39,`
              `),t(40,"th"),e(41,"SO Joined Date"),n(),e(42,`
              `),t(43,"th"),e(44,"Bosch Joined Date"),n(),e(45,`
              `),t(46,"th"),e(47,"Resource Type"),n(),e(48,`
              `),t(49,"th"),e(50,"Total Year Experience Before Bosch"),n(),e(51,`

            `),n(),e(52,`
          `),n(),e(53,`
          `),t(54,"tbody"),e(55,`
            `),E(56,N,48,11,"tr",3),e(57,`
            `),e(58,`
          `),n(),e(59,`
        `),n(),e(60,`

      `),n(),e(61,`
    `),n(),e(62,`
  `),n(),e(63,`
`),n()),a&2&&(l(56),x("ngForOf",r.employees))},dependencies:[_,T,C,D,I,u,g,B],encapsulation:2})}}return m})();export{j as PendingApprovalsComponent};
