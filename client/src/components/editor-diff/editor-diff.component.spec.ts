import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDiffComponent } from './editor-diff.component';

describe('EditorDiffComponent', () => {
  let component: EditorDiffComponent;
  let fixture: ComponentFixture<EditorDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditorDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
