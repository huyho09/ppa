import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDashboardComponent } from './table-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../../icons/icon-subset';

describe('TableDashboardComponent', () => {
  let component: TableDashboardComponent;
  let fixture: ComponentFixture<TableDashboardComponent>;
  let iconSetService: IconSetService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModule, GridModule, ButtonModule, RouterTestingModule, IconModule, TableDashboardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };
    
    fixture = TestBed.createComponent(TableDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
