import { Component } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private exitGuard = false;

  user: User={
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    role: ''
  }
  constructor(private registerService: RegisterService) {
  }

  addUser(): void {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;

    this.registerService.addUser(firstName, lastName, password, email, role);
  }
  canExit() {
    if(this.exitGuard) return true;
    if (this.user.firstName || this.user.lastName || this.user.email || this.user.password || this.user.role) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    else return true;
  }
}
