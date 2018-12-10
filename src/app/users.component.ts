import { Component,Input} from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: './users.component.html',
})
export class userComponent {
   @Input() title;
   users = [
      {
       id:1,
       name:"Ram",
       location:"chennai"
      },
      {
       id:2,
       name:"Krish",
       location:"coimbatore"
      },
      {
       id:3,
       name:"Karna",
       location:"madurai"
      }
  ]
  
}
