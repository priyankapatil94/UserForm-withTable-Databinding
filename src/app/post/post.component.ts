import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostlistComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  outputChildMessage: string = 'this is the Child message to parent';
  stingvalue: string = 'This is me and Boss';
  childMessage: string = 'from child component';
  @Output() notifyMeObject: EventEmitter<any> = new EventEmitter();

  @Input() appmsgg!: string;
  @Input() anyMessagevalue!: string;

  sendMe() {
    this.notifyMeObject.emit(this.outputChildMessage);
  }
}
