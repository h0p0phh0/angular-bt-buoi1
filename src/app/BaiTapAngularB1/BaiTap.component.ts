import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-baitap',
  template: `
    <div class="container mt-3">
      <h1>Register form</h1>
      <div class="form-group">
        <h3>Email:</h3>
        <input class="form-control w-50" [(ngModel)]="email"/>
      </div>
      <div class="form-group">
        <h3>FullName:</h3>
        <input class="form-control w-50" #tagName/>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" (click)="changeFullname(tagName.value)">Submit</button>
      </div>
      <div class="form-group">
          <p class="font-weight-bold">Email : {{email}}</p>
          <p class="font-weight-bold" [innerHTML]="'FullName: ' + fullName" ></p>
      </div>
    </div>
  `,
})
export class BaiTapComponent implements OnInit {
  email: string = 'Dùng [(ngModel)]';
  fullName: string = 'Dùng event binding';

  changeFullname(newFullname:string) {
      this.fullName = newFullname;
  }

  constructor() {}

  ngOnInit() {}
}
