import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactTableComponent } from './artifact-table.component';

describe('ArtifactTableComponent', () => {
  let component: ArtifactTableComponent;
  let fixture: ComponentFixture<ArtifactTableComponent>;

  beforeEach(async(() => {
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
