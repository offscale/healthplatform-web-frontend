import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtifactTableComponent } from './artifact-table.component';

describe('ArtifactTableComponent', () => {
  let component: ArtifactTableComponent;
  let fixture: ComponentFixture<ArtifactTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
