import { Component, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { NgIf } from '@angular/common';
import { HoverImageComponent } from "../shared/hover-image/hover-image.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HoverImageComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  device = inject(DeviceService);
}
