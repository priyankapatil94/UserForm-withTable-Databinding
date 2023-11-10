import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent implements OnInit {
  @Input() datavalue!: string;
  postListMessage: string = 'This is the Post message';
  @Output() anyObjectmessage: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSaveMessage() {
    this.anyObjectmessage.emit(this.postListMessage);
  }
}
