import { InjectionToken, TemplateRef } from '@angular/core';

export type TooltipData = {
  anchorName: string;
  content: string | TemplateRef<void>;
};
export const TOOLTIP_DATA = new InjectionToken<TooltipData>('Data to display in tooltip');
