import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PerformanceKpisComponent } from './performance-kpis.component';

describe('PerformanceKpisComponent', () => {
  let component: PerformanceKpisComponent;
  let fixture: ComponentFixture<PerformanceKpisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceKpisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
