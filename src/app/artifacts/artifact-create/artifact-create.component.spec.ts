import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtifactCreateComponent } from './artifact-create.component';

describe('ArtifactCreateComponent', () => {
  let component: ArtifactCreateComponent;
  let fixture: ComponentFixture<ArtifactCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
