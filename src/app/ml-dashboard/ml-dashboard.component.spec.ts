import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlDashboardComponent } from './ml-dashboard.component';

describe('MlDashboardComponent', () => {
  let component: MlDashboardComponent;
  let fixture: ComponentFixture<MlDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
