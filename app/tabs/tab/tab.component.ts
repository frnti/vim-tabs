import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Inject,
  OnInit,
  Output, TemplateRef
} from '@angular/core';
import { TabsComponent } from '../tabs.component';
import { TabsService } from '../tabs.service';
import { TabContentComponent } from './tab-content/tab-content.component';


@Component({
  selector: 'tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  tabContentTemplate: TemplateRef<void>;
  isActive = false;
  private _activeTabSubscribtion;

  constructor(
      @Inject(forwardRef(() => TabsComponent)) private tabsComponent: TabsComponent,
      private tabsService: TabsService,
      private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._activeTabSubscribtion = this.tabsService.activeTab$.subscribe(activeTab => {
      this.isActive = activeTab === this;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this._activeTabSubscribtion.unsubscribe();
  }

  onTabTitleClick(tab: TabComponent) {
    this.tabsService.setActiveTab(tab);
  }

}
