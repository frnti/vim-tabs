import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabComponent } from './tab/tab.component';

type NullableTabComponent = TabComponent | null;

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  activeTab$: BehaviorSubject<NullableTabComponent> =  new BehaviorSubject(null);

  constructor() { }

  setActiveTab(tab: NullableTabComponent) {
    this.activeTab$.next(tab);
  }

}
