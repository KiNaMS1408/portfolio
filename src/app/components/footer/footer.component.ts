import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router"; //if RouterLinkActive is needet add in imports

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
