import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` <div>
      <p> Power of: {{ 2 | powerOf:10:"p" }}</p>
      <br>
      {{ title }} <br>
      {{ title | brackets }} <br>
      {{ title | brackets:false }}

      <br>

      <input type="text" [(ngModel)]="search">
<ul *ngFor="let N of names ">
  <li> {{ N }} </li>
</ul>



  </div> `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'CustomPipe';

  search?:string
  names = ["mohan","pooja","gopal","shiva","krishna"]




}
