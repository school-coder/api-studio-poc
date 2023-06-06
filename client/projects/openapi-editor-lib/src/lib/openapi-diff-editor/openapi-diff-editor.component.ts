import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {BaseEditorComponent} from "../base.editor.component";

declare var monaco: any;

@Component({
    selector: 'lib-openapi-diff-editor',
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
    styleUrls: ['./openapi-diff-editor.component.css']
})
export class OpenapiDiffEditorComponent extends BaseEditorComponent {

    @ViewChild('editor') editorElementRef: ElementRef | undefined;

    @Input() original: string = '';
    @Input() modified: string = '';

    @Input() mode = 'text/javascript';

    initMonaco(options: any): void {
        this.initDiffEditor();
    }

    private initDiffEditor() {
        const originalModel = monaco.editor.createModel(this.original, this.mode);
        const modifiedModel = monaco.editor.createModel(this.modified, this.mode);

        const diffEditor = monaco.editor.createDiffEditor(this.editorElementRef?.nativeElement, {
                automaticLayout: true,
            }
        );

        diffEditor.setModel({
            original: originalModel,
            modified: modifiedModel
        });
    }
}
