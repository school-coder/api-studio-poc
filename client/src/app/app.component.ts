import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'openapi-editor';

  @ViewChild('editor') elementRef: ElementRef | undefined;
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
