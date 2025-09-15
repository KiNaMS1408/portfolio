import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet} from "@angular/router";
import { filter } from "rxjs/operators";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { WhyMeComponent } from "./components/why-me/why-me.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, 
    HeaderComponent, FooterComponent, 
    WhyMeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
    isStartseite = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isStartseite = event.urlAfterRedirects === '/';
    });
  }
}
