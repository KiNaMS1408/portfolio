import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-developer-signature',
  standalone: true,
  templateUrl: './developer-signature.component.html',
  styleUrl: './developer-signature.component.scss'
})
export class DeveloperSignatureComponent {
  @Input() nameShort = 'F.Neußer';
  @Input() nameFull = 'Franz Neußer';
  @Input() strokeColor = '#89BCD9'; //default if needed
  @Input() fillColor = '#F8F5EC'; //default if needed

isHovered = signal(false);}
