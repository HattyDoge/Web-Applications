import { Component } from '@angular/core';
import {signal, computed, input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Per effettuare richieste HTTP
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  firstName = signal('Pinco');
  lastName = signal('Pallino');
  fullName = computed(() => this.firstName() + " " + this.lastName())()

  username = signal('p.pallino')()
}
