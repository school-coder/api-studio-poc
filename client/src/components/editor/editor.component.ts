import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenapiEditorLibModule} from "../../../projects/openapi-editor-lib/src/lib/openapi-editor-lib.module";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, OpenapiEditorLibModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  options: any = {};

  ngOnInit(): void {
    this.init();
  }


  private init() {
    const text = `function hello() {
	  alert('Hello world!');
    }`;

    this.options = {
      value: text,
      language: "javascript",
      automaticLayout: true,
    }
  }
}
