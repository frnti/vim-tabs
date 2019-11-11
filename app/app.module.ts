import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabTitleComponent } from './tabs/tab/tab-title/tab-title.component';
import { TabContentComponent } from './tabs/tab/tab-content/tab-content.component';
import { TabContentDirective } from './tabs/tab/tab-content/tab-content-directive.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, TabsComponent, TabComponent, TabTitleComponent, TabContentComponent, TabContentDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
