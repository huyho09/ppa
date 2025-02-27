'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ppwa-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerCreateComponent.html" data-type="entity-link" >CustomerCreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerDeleteComponent.html" data-type="entity-link" >CustomerDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerIndexComponent.html" data-type="entity-link" >CustomerIndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerUpdateComponent.html" data-type="entity-link" >CustomerUpdateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DepartmenIndexComponentComponent.html" data-type="entity-link" >DepartmenIndexComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DepartmentCreateComponentComponent.html" data-type="entity-link" >DepartmentCreateComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DepartmentDeleteComponentComponent.html" data-type="entity-link" >DepartmentDeleteComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DepartmentDescribeComponent.html" data-type="entity-link" >DepartmentDescribeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DepartmentUpdateComponentComponent.html" data-type="entity-link" >DepartmentUpdateComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeCreateComponent.html" data-type="entity-link" >EmployeeCreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeDeleteComponent.html" data-type="entity-link" >EmployeeDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeIndexComponent.html" data-type="entity-link" >EmployeeIndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeUpdateComponent.html" data-type="entity-link" >EmployeeUpdateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpertProfileComponent.html" data-type="entity-link" >ExpertProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NodeComponentComponent.html" data-type="entity-link" >NodeComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrgChartComponent.html" data-type="entity-link" >OrgChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectCreateComponent.html" data-type="entity-link" >ProjectCreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectDeleteComponent.html" data-type="entity-link" >ProjectDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectIndexComponent.html" data-type="entity-link" >ProjectIndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectUpdateComponent.html" data-type="entity-link" >ProjectUpdateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RoleCreateComponent.html" data-type="entity-link" >RoleCreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RoleDeleteComponent.html" data-type="entity-link" >RoleDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RoleIndexComponent.html" data-type="entity-link" >RoleIndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RoleUpdateComponent.html" data-type="entity-link" >RoleUpdateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SqlDocsComponent.html" data-type="entity-link" >SqlDocsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TopnavComponent.html" data-type="entity-link" >TopnavComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomerServiceService.html" data-type="entity-link" >CustomerServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartmentServiceService.html" data-type="entity-link" >DepartmentServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmployeeServiceService.html" data-type="entity-link" >EmployeeServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginServiceService.html" data-type="entity-link" >LoginServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavbarServiceService.html" data-type="entity-link" >NavbarServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectServiceService.html" data-type="entity-link" >ProjectServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleServiceService.html" data-type="entity-link" >RoleServiceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-1.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-2.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-3.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-4.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-5.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-6.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-7.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-8.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer-9.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-1.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-2.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-3.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-4.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-5.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-6.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-7.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-8.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Department-9.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-1.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-2.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-3.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-4.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-5.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-6.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-7.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-8.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-9.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-10.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-11.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-1.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-2.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-3.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-4.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-5.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-6.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-7.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project-8.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectEmployee.html" data-type="entity-link" >ProjectEmployee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectEmployee-1.html" data-type="entity-link" >ProjectEmployee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectEmployee-2.html" data-type="entity-link" >ProjectEmployee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role-1.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role-2.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role-3.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role-4.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadResponse.html" data-type="entity-link" >UploadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadResponse-1.html" data-type="entity-link" >UploadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadResponse-2.html" data-type="entity-link" >UploadResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});