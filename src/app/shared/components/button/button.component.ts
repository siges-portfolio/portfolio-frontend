import { Component, ElementRef, inject, input, OnInit, ViewEncapsulation } from '@angular/core';

type ButtonColor = 'primary' | 'dark' | 'gray';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  standalone: true,
  selector: 'a[button], a[button-filled], a[button-outlined], a[button-icon], button[button], button[button-filled], button[button-outlined], button[button-icon]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'button',
    '[class.loading]': 'loading()'
  }
})
export class ButtonComponent implements OnInit {
  elementRef: ElementRef = inject(ElementRef);
  
  color = input<ButtonColor>('primary');
  size = input<ButtonSize>('md');
  loading = input<boolean>(false);
  
  ngOnInit() {
    const element = this.elementRef.nativeElement;
    
    element.classList.add(
      ...this.getButtonClass(element),
      this.color() ? `button--${this.color()}` : 'button--primary',
      this.size() ? `button--${this.size()}` : 'button--md'
    );
  }
  
  getButtonClass(button: HTMLButtonElement | HTMLLinkElement): string[] {
    let buttonClass: string[] = [];
    
    if (button.hasAttribute('button')) {
      buttonClass.push('flat');
    }
    
    if (button.hasAttribute('button-filled')) {
      buttonClass.push('filled');
    }
    
    if (button.hasAttribute('button-outlined')) {
      buttonClass.push('outlined');
    }
    
    if (button.hasAttribute('button-icon')) {
      buttonClass.push('icon');
    }
    
    return buttonClass;
  }
}
