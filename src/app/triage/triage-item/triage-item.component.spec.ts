import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriageItemComponent } from './triage-item.component';

describe('TriageItemComponent', () => {
  let component: TriageItemComponent;
  let fixture: ComponentFixture<TriageItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
