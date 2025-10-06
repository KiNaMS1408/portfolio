import { Component, Input } from '@angular/core';
import { GithubIconComponent } from '../github-icon/github-icon.component';
import { LinkedinIconComponent } from '../linkedin-icon/linkedin-icon.component';
import { MailIconComponent } from '../mail-icon/mail-icon.component';

@Component({
  selector: 'app-icon-library',
  standalone: true,
  imports: [
     GithubIconComponent,
     LinkedinIconComponent, 
     MailIconComponent
  ],
  template: `   
 @switch (name) {
      @case ('github') {
        <app-github-icon [variant]="variant"></app-github-icon>
      }
      @case ('linkedin') {
        <app-linkedin-icon [variant]="variant"></app-linkedin-icon>
      }
      @case ('mail') {
        <app-mail-icon [variant]="variant"></app-mail-icon>
      }
      @default {
        <span>❓</span>
      }
    }
  `,
  styleUrls: ['./icon-library.component.scss']
})
export class IconLibraryComponent {
  @Input() name: 'github' | 'linkedin' | 'mail' = 'github';
  @Input() variant: 'default' | 'hover' | 'dark' | 'white' | 'mobile' = 'default';
}