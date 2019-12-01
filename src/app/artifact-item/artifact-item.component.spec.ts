import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactItemComponent } from './artifact-item.component';

describe('ArtifactItemComponent', () => {
  let component: ArtifactItemComponent;
  let fixture: ComponentFixture<ArtifactItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
