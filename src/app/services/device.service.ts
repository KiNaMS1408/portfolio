import { computed, Injectable, signal} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class DeviceService {
 private currentDevice = signal<'mobile' | 'tablet' | 'desktop'>('desktop');

  constructor() {
    if (typeof window !== 'undefined') {
      this.detectDevice();
      window.addEventListener('resize', () => this.detectDevice());
    }
  }

  private detectDevice() {
    const width = window.innerWidth;
    if (width < 400) {
      this.currentDevice.set('mobile');
    } else if (width < 1200) {
      this.currentDevice.set('tablet');
    } else {
      this.currentDevice.set('desktop');
    }
  }

  device = computed(() => this.currentDevice());

  mobile = computed(() => this.device() === 'mobile');
  tablet = computed(() => this.device() === 'tablet');
  desktop = computed(() => this.device() === 'desktop');
}