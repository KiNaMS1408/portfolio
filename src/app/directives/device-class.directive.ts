import { Directive, effect, inject, Renderer2, ElementRef } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Directive({
  selector: '[appDeviceClass]',
  standalone: true,
})
export class DeviceClassDirective {
  private device = inject(DeviceService);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  constructor() {
    // effekt: renders auto on signal change
    effect(() => {
      const element = this.el.nativeElement;

      // remove existing classes
      this.renderer.removeClass(element, 'is-mobile');
      this.renderer.removeClass(element, 'is-tablet');
      this.renderer.removeClass(element, 'is-desktop');

      // adds class based on device type
      if (this.device.mobile()) {
        this.renderer.addClass(element, 'is-mobile');
      } else if (this.device.tablet()) {
        this.renderer.addClass(element, 'is-tablet');
      } else {
        this.renderer.addClass(element, 'is-desktop');
      }
    });
  }
}
