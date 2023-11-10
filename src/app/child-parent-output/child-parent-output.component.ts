import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-parent-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-parent-output.component.html',
  styleUrls: ['./child-parent-output.component.css'],
})
export class ChildParentOutputComponent {
  childMessage: string = 'This is the child Component Data';

  @Output() eventMessage: EventEmitter<any> = new EventEmitter();

  clickbyMe() {
    this.eventMessage.emit(this.childMessage);
  }
}
