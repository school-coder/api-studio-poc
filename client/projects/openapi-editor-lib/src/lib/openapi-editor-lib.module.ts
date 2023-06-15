import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { OpenapiDiffEditorComponent } from './openapi-diff-editor/openapi-diff-editor.component';
import { OpenapiYamlEditorComponent } from './openapi-yaml-editor/openapi-yaml-editor.component';



@NgModule({
  declarations: [
    EditorComponent,
    OpenapiDiffEditorComponent,
    OpenapiYamlEditorComponent
  ],
  imports: [
  ],
  exports: [
    EditorComponent,
    OpenapiDiffEditorComponent
  ]
})
export class OpenapiEditorLibModule { }
