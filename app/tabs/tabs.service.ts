import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  activeTabId$: BehaviorSubject<number> =  new BehaviorSubject(0);
  activeTabChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  setActiveTab(id: number) {
    this.activeTabChanged.emit(id);
    this.activeTabId$.next(id);
  }

}
