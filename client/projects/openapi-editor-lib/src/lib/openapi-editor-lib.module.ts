import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { OpenapiDiffEditorComponent } from './openapi-diff-editor/openapi-diff-editor.component';



@NgModule({
  declarations: [
    EditorComponent,
    OpenapiDiffEditorComponent
  ],
  imports: [
  ],
  exports: [
    EditorComponent,
    OpenapiDiffEditorComponent
  ]
})
export class OpenapiEditorLibModule { }
