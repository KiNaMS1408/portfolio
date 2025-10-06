import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconLibraryComponent } from '../icons/icon-library/icon-library.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconLibraryComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
