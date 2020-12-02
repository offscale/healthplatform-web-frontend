import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriageComponent } from './triage.component';

describe('TriageComponent', () => {
  let component: TriageComponent;
  let fixture: ComponentFixture<TriageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
