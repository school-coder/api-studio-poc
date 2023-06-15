import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {BaseEditorComponent} from "../base.editor.component";



@Component({
  selector: 'lib-openapi-yaml-editor',
  template: `
    <div #editor class="editor-container"></div>
  `,
  styles: [`
  :host {
            display: block;
            height: calc(100vh - 60px);
        }

        .editor-container {
            width: 100%;
            height: 98%;
        }
  `]
})
export class OpenapiYamlEditorComponent extends BaseEditorComponent {


  @ViewChild('editor') editorElementRef: ElementRef | undefined;

  mode: 'yaml' = 'yaml';

  @Input() content: string = ["{", '    "p1": "v3",', '    "p2": false', "}"].join("\n");

  constructor() {
    super();
  }

  initMonaco(options: any): void {
  }

}
