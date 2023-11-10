import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostComponent } from './post/post.component';
import { ChildParentOutputComponent } from './child-parent-output/child-parent-output.component';
import { PostFormComponent } from './post-form/post-form.component';

NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostlistComponent,
    PostComponent,
    ChildParentOutputComponent,
    PostFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
});

export class AppModule {}
