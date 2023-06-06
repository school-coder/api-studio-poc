import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenapiEditorLibModule} from "../../../projects/openapi-editor-lib/src/lib/openapi-editor-lib.module";
import {ORIGINAL} from "./original";
import {MODIFIED} from "./modified";

@Component({
  selector: 'app-editor-diff',
  standalone: true,
  imports: [CommonModule, OpenapiEditorLibModule],
  templateUrl: './editor-diff.component.html',
  styleUrls: ['./editor-diff.component.css']
})
export class EditorDiffComponent {
  original = JSON.stringify(ORIGINAL, null, 2);
  modified = JSON.stringify(MODIFIED, null, 2);

}
