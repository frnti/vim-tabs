import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-title',
  template: '<ng-content></ng-content>',
})
export class TabTitleComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
