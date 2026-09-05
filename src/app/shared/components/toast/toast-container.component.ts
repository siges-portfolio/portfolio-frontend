import { Component, inject } from '@angular/core';
import { ToastService } from '@shared/components/toast/toast.service';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  imports: [MatIcon, NgClass],
})
export class ToastContainerComponent {
  toastsService = inject(ToastService);
  toasts = toSignal(this.toastsService.toasts$);

  onClose(id: number) {
    this.toastsService.hideToast(id);
  }
}
