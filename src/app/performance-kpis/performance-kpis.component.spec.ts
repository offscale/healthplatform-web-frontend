import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceKpisComponent } from './performance-kpis.component';

describe('PerformanceKpisComponent', () => {
  let component: PerformanceKpisComponent;
  let fixture: ComponentFixture<PerformanceKpisComponent>;

  beforeEach(async(() => {
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
