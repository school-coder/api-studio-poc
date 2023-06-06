import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {BaseEditorComponent} from './base.editor.component';
import {OPENAPI_SCHEMA} from "./schema/openapi-schema";

declare var monaco: any;

@Component({
    selector: 'lib-openapi-editor',
    template: `
        <div #editor class="editor-container"></div>
    `,
    styles: [`
        :host {
            display: block;
            height: 600px;
        }

        .editor-container {
            width: 100%;
            height: 98%;
        }
    `],
})
export class EditorComponent extends BaseEditorComponent {

    @ViewChild('editor') editorElementRef: ElementRef | undefined;

    @Input() mode: 'json' | 'yaml' = 'json';
    @Input() content: string = ["{", '    "p1": "v3",', '    "p2": false', "}"].join("\n");

    initMonaco(options: any): void {
        let modelUri = monaco.Uri.parse('a://b/foo.json');
        let model = monaco.editor.createModel(this.content, this.mode, modelUri);

        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [{
                uri: "http://myserver/foo-schema.json",
                fileMatch: [modelUri.toString()],
                schema: OPENAPI_SCHEMA
             },
            ]
        });

        monaco.editor.create(this.editorElementRef?.nativeElement, {
            model,
        })
    }

}
