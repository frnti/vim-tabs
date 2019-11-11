import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: '<ng-content></ng-content>'
})
export class TabContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
