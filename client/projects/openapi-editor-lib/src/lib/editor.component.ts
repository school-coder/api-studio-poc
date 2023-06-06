import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {BaseEditorComponent} from './base.editor.component';

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

  @Input()
  set options(options: any) {
    this._options = options;
  };

  initMonaco(options: any): void {
    monaco.editor.create(this.editorElementRef?.nativeElement, options)
  }

}
