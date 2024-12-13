import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() buttonText: string = 'Text';
  @Input() buttonIconUrl: string = 'Url';
  @Output() clickEvent = new EventEmitter();

  public onClick(): void {
    this.clickEvent.emit();
  }
}
