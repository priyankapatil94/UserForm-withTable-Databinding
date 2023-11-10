import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  postTitle!: string;
  postDetails!: string;
  postImageUrl!: string;
  postUrl!: string;

  postArray: Array<string> = ['Sr.No', 'Name', 'id', 'contact', 'Dataname'];

  objArray: Array<any> = [
    { id: 1, postTitle: 'Post1' },
    { id: 2, postTitle: 'Post2' },
    { id: 3, postTitle: 'Post3' },
    { id: 4, postTitle: 'Post4' },
    { id: 5, postTitle: 'Post5' },
  ];
  // objArray: Array<string> = [];
  addbackGround!: boolean;

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    //this.objArray.push({ id: 6, postTitle: 'PostTitle6' });
  }
  onDelete(index: any) {
    this.objArray.splice(index, 1);
  }

  onKeyup($event: any) {
    console.log($event);
  }
}
