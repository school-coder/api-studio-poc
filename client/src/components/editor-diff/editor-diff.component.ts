import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenapiEditorLibModule} from "../../../projects/openapi-editor-lib/src/lib/openapi-editor-lib.module";

@Component({
  selector: 'app-editor-diff',
  standalone: true,
  imports: [CommonModule, OpenapiEditorLibModule],
  templateUrl: './editor-diff.component.html',
  styleUrls: ['./editor-diff.component.css']
})
export class EditorDiffComponent {
  original = 'function x() {\nconsole.log("Hello world!");\n}';
  modified = 'function y() {\nconsole.log("Hello world!");\n}';

}
