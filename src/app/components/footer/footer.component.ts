import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconLibraryComponent } from '../icons/icon-library/icon-library.component';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconLibraryComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  device = inject(DeviceService);
}
