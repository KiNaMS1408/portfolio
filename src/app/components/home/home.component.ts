import { Component } from '@angular/core';
import { WhyMeComponent } from '../why-me/why-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyMeComponent, ProjectsComponent, ContactComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
