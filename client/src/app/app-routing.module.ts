import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from "../components/editor/editor.component";
import {EditorDiffComponent} from "../components/editor-diff/editor-diff.component";
import {
    OpenapiYamlEditorComponent
} from "../../projects/openapi-editor-lib/src/lib/openapi-yaml-editor/openapi-yaml-editor.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: EditorComponent
    },
    {
        path: 'editor-diff',
        component: EditorDiffComponent
    },
    {
        path: 'yaml-editor',
        component: OpenapiYamlEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
