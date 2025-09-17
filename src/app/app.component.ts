import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet} from "@angular/router";
import { filter } from "rxjs/operators";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, FooterComponent, 
    CommonModule],
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
      this.isStartseite = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
    });
  }
}
