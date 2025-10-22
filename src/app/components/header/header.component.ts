import { Component, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { HoverImageComponent } from "../shared/hover-image/hover-image.component";
import { DeveloperSignatureComponent } from "../shared/developer-signature/developer-signature.component";
import { IconLibraryComponent } from "../icons/icon-library/icon-library.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HoverImageComponent, DeveloperSignatureComponent, IconLibraryComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  device = inject(DeviceService);
}
