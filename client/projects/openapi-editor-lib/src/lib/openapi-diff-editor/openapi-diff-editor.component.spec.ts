import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenapiDiffEditorComponent } from './openapi-diff-editor.component';

describe('OpenapiDiffEditorComponent', () => {
  let component: OpenapiDiffEditorComponent;
  let fixture: ComponentFixture<OpenapiDiffEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenapiDiffEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenapiDiffEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
