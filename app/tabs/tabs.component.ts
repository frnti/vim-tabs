import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsService } from './tabs.service';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    constructor(private tabsService: TabsService) {
    }

    ngAfterContentInit() {
        this.tabsService.setActiveTab(this.tabs.first);
        this.tabs.changes.subscribe(next => {
            if (next.length === 1 || (next.length !== 0 && !this.isActiveTabExists())) {
                this.tabsService.setActiveTab(next.first);
            }
            if (next.length === 0) {
                this.tabsService.setActiveTab(null);
            }
        });
    }

    ngOnInit() {
    }

    isActiveTabExists(): boolean {
        return typeof this.tabs.find((tab: TabComponent) => tab === this.tabsService.activeTab$.getValue()) !== 'undefined';
    }

}
