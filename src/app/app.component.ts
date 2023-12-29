import { Component } from '@angular/core';
import { getAuth } from "firebase/auth"; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'khtabook';
  // auth1:any = getAuth();
  user:any;
 

}
