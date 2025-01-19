import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequirementAssignmentComponent } from './project-requirement-assignment.component';

describe('ProjectRequirementAssignmentComponent', () => {
  let component: ProjectRequirementAssignmentComponent;
  let fixture: ComponentFixture<ProjectRequirementAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRequirementAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRequirementAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
