import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsService } from './tabs.service';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    activeTab: TabComponent;
    constructor(private tabsService: TabsService) {
    }

    ngAfterContentInit() {
        this.activeTab = this.tabs.first;
        this.tabsService.setActiveTab(this.tabs.first.id);
        this.tabs.changes.subscribe(next => {
            if (next.length === 1 || (next.length !== 0 && !this.isActiveTabExists())) {
                this.tabsService.setActiveTab(next.first.id);
            }
            if (next.length === 0) {
                this.activeTab = null;
            }
        });
        this.tabsService.activeTabId$.subscribe(tabId => {
            this.activeTab = this.tabs.find(tab => tab.id === tabId) ;
        })
    }

    ngOnInit() {
    }

    isActiveTabExists(): boolean {
        return typeof this.tabs.find((tab: TabComponent) => tab.id === this.tabsService.activeTabId$.getValue()) !== 'undefined';
    }

}
