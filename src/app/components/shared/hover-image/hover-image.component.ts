import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-hover-image',
  standalone: true,
  templateUrl: './hover-image.component.html',
  styleUrls: ['./hover-image.component.scss']
})
export class HoverImageComponent {
  @Input({ required: true }) defaultSrc!: string;
  @Input({ required: true }) hoverSrc!: string;
  @Input() alt = '';

  @Input() transitionDuration = '.1s';
  @Input() transitionTiming = 'ease';

  isHovered = signal(false);
}
