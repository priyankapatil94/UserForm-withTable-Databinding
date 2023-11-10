import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent {
  name!: string;
  email!: string;
  address!: string;

  userArary: Array<any> = [];

  onclick() {
    this.userArary.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.userArary);
  }

  onDelete(index: any) {
    this.userArary.splice(index, 1);
  }
}
