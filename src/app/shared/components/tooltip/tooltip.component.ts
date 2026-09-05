import { Component, inject, InjectionToken, TemplateRef, ViewEncapsulation } from '@angular/core';
import { TOOLTIP_DATA } from './tooltip.token';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  imports: [NgTemplateOutlet],
  host: {
    '[style.position-anchor]': 'anchorName',
  },
})
export class TooltipComponent {
  tooltipData = inject(TOOLTIP_DATA);

  get anchorName(): string {
    return this.tooltipData.anchorName;
  }

  get string(): string | false {
    return typeof this.tooltipData.content === 'string' ? this.tooltipData.content : false;
  }

  get template(): TemplateRef<void> | false {
    return this.tooltipData.content instanceof TemplateRef ? this.tooltipData.content : false;
  }
}
