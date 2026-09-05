import {
  ApplicationRef,
  Directive,
  DOCUMENT,
  ElementRef,
  HostListener,
  inject,
  InjectionToken,
  Injector,
  input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { TOOLTIP_DATA } from './tooltip.token';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnInit {
  elementRef = inject(ElementRef);
  applicationRef = inject(ApplicationRef);
  injector = inject(Injector);
  document = inject(DOCUMENT);

  tooltip = input<TemplateRef<void> | string | null>(null);

  private static id = 0;
  readonly anchorName = `--${TooltipDirective.id++}`;
  outlet: DomPortalOutlet | null = null;

  @HostListener('mouseenter', [])
  mouseenter() {
    this.attachTooltip();
  }

  @HostListener('mouseleave', [])
  mouseleave() {
    this.outlet?.detach();
  }

  attachTooltip() {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: TOOLTIP_DATA,
          useValue: {
            anchorName: this.anchorName,
            content: this.tooltip(),
          },
        },
      ],
    });

    const component = new ComponentPortal(TooltipComponent, null, injector);

    this.outlet = new DomPortalOutlet(this.document.body, this.applicationRef, this.injector);
    this.outlet.attach(component);
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.setProperty('anchor-name', `${this.anchorName}`);
    this.elementRef.nativeElement.style.setProperty('position', 'relative');
  }
}
