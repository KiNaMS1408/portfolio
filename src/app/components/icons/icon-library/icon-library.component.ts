import { Component, Input, computed, inject, signal } from '@angular/core';
import { GithubIconComponent } from '../github-icon/github-icon.component';
import { LinkedinIconComponent } from '../linkedin-icon/linkedin-icon.component';
import { MailIconComponent } from '../mail-icon/mail-icon.component';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-icon-library',
  standalone: true,
  imports: [
    GithubIconComponent,
    LinkedinIconComponent,
    MailIconComponent,
  ],
  template: `
     <div
      class="icon-wrapper"
      (mouseenter)="isHovered.set(true)"
      (mouseleave)="isHovered.set(false)"
    >
    @switch (name) {
      @case ('github') {
        <app-github-icon [variant]="finalVariant()" />
      }
      @case ('linkedin') {
        <app-linkedin-icon [variant]="finalVariant()" />
      }
      @case ('mail') {
        <app-mail-icon [variant]="finalVariant()" />
      }
      @default {
        <span>❓</span>
      }
    }
  `,
  styleUrls: ['./icon-library.component.scss'],
})
export class IconLibraryComponent {
  private deviceService = inject(DeviceService);

  @Input() name: 'github' | 'linkedin' | 'mail' = 'github';
  @Input() variant?: 'default' | 'hover' | 'dark' | 'white' | 'mobile';

    isHovered = signal(false);

    // uses the input variant or resolves based on device type
  finalVariant = computed(() => {
    if (this.isHovered()) return 'hover'; // Hover hat Priorität

    // falls Variante manuell gesetzt wurde (z. B. "dark")
    if (this.variant && this.variant !== 'default') return this.variant;

    // falls nix angegeben: Gerät entscheidet
    if (this.deviceService.mobile()) return 'mobile';
    if (this.deviceService.tablet()) return 'default';
    if (this.deviceService.desktop()) return 'default';

    return 'default';
  });
}
