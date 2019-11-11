import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content
    </div>
  `,
})
export class TestComponent implements OnInit, OnDestroy {
  @Input() tab: number;

  public ngOnInit() {
    console.log(`>>> TestComponent ${this.tab} initialized`);
  }

  public ngOnDestroy(): void {
    console.log(`>>> TestComponent ${this.tab} destroyed`);
  }
}
