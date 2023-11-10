import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostlistComponent } from '../postlist/postlist.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  anyStringMessage: string = 'My   Data App thisone';

  @Input()
  appmsg!: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
