import { Component } from "@angular/core";
import {signal, computed} from '@angular/core';
// user-profile.ts
@Component({
    selector: 'user-profile',
    imports: [],
    template: `
      <h1>User profile</h1>
      <p>This is the user profile page</p>
    `,
    styles: `h1 { background-color: yellow; }`,
  })
  export class UserProfile {
    firstName = signal('Pinco');
    lastName = signal('Pallino');
    fullName = computed(() => `{{ this.firstName() }} {{ this.lastName() }}`)
  
    username = signal('p.pallino')
  }