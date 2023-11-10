import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { ChildParentOutputComponent } from './child-parent-output/child-parent-output.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    PostComponent,
    PostlistComponent,
    ChildParentOutputComponent,
    FormsModule,
    PostFormComponent,
    UserdetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  AppcomponentData: string = 'App component sending the message to Nav';
  appdata: string = 'New Data for Post Component by App Component';
  postdata: string = 'this for Post-list Component from App Component';
  title = 'homes';
  message1: string = 'Message from Typscript Componnet File';
  imageUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  // Two way data binding
  userNameData: string = '';
  // Two way data binding
  textvalue: string = 'value is coming from component';
  bool: boolean = false;
  message!: string;
  testMessage!: string;
  fromChildOutput!: string;
  //child-parent-comp
  childParentComponentData!: string;

  @ViewChild(PostComponent) childComp: any;
  @ViewChild(NavbarComponent) directMessagename: any;

  constructor() {
    //alert(this.childComp);
  }

  recivedMessage($event: any) {
    this.fromChildOutput = $event;
    //alert($event);
  }
  recivedDataFromChildparent($event: any) {
    this.childParentComponentData = $event;
  }
  buttonClick() {
    //alert('Hi');
  }
  onKeyUp($event: any) {
    console.log($event.target.value);
  }
  onkeyUpMain(username: any) {
    console.log(username);
  }

  KeyUpTwoawayDataBinding(username1: any) {
    console.log(username1);
  }

  onkeypBinding() {
    console.log(this.userNameData);
  }
  keychange() {
    console.log(this.textvalue);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
