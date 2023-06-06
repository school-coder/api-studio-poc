import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from "../components/editor/editor.component";
import {EditorDiffComponent} from "../components/editor-diff/editor-diff.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: EditorComponent
    },
    {
        path: 'editor-diff',
        component: EditorDiffComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
