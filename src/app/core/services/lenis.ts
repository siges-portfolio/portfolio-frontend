import { Injectable } from '@angular/core';
import Lenis from 'lenis';

export type ScrollToTarget = string | HTMLElement;

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  readonly lenis = new Lenis({
    autoRaf: true,
    duration: 1.5,
    smoothWheel: true,
    syncTouch: true,
    anchors: true,
  });

  scrollTo(target: ScrollToTarget, options?: Parameters<Lenis['scrollTo']>[1]) {
    this.lenis.scrollTo(target, options);
  }

  stop() {
    this.lenis.stop();
  }

  start() {
    this.lenis.start();
  }

  destroy() {
    this.lenis.destroy();
  }
}
