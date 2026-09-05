import { DOCUMENT, inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly theme = signal<Themes>(Themes.LIGHT);

  readonly themeSignal = this.theme.asReadonly();

  constructor() {
    this.changeTheme(this.getInitialTheme());
  }

  changeTheme(theme: Themes): void {
    const htmlRef = this.document.documentElement;

    htmlRef.classList.remove('dark-theme', 'light-theme');
    this.renderer.addClass(htmlRef, `${theme}-theme`);

    this.document.defaultView?.localStorage.setItem('theme', theme);
    this.theme.set(theme);
  }

  private getInitialTheme(): Themes {
    const storage = this.document.defaultView?.localStorage;
    const storedTheme = storage?.getItem('theme');

    if (storedTheme === Themes.DARK || storedTheme === Themes.LIGHT) {
      return storedTheme;
    }

    return this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
      ? Themes.DARK
      : Themes.LIGHT;
  }
}
