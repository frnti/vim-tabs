import { Directive, TemplateRef } from '@angular/core';
import { TabComponent } from '../tab.component';

@Directive({
  selector: '[tabContent]'
})
export class TabContentDirective {

  constructor(templateRef: TemplateRef<void>, tabComponent: TabComponent) {
    tabComponent.tabContentTemplate = templateRef;
  }

}
