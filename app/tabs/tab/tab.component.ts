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
  id = Math.random();
  private _activeTabIdSubscribtion;

  constructor(
      @Inject(forwardRef(() => TabsComponent)) private tabsComponent: TabsComponent,
      private tabsService: TabsService,
      private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._activeTabIdSubscribtion = this.tabsService.activeTabId$.subscribe(activeTabId => {
      this.isActive = activeTabId === this.id;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this._activeTabIdSubscribtion.unsubscribe();
  }

  onTabTitleClick(id) {
    this.tabsService.setActiveTab(id);
  }

}
