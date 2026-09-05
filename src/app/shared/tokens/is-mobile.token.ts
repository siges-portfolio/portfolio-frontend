import { inject, InjectionToken } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

export const IS_MOBILE = new InjectionToken('isMobile', {
  factory() {
    const platform = inject(Platform);

    return platform.IOS || platform.ANDROID;
  },
});
