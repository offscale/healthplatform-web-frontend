import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtifactComponent } from './artifact.component';

describe('ArtifactComponent', () => {
  let component: ArtifactComponent;
  let fixture: ComponentFixture<ArtifactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
