import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirestorageService } from '../services/firestorage.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  // write this only you need to reload current component if input from previous changes
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class HistoryComponent {
  user:any;
  history:any;

   constructor(private storage:FirestorageService,private auth:AngularFireAuth)
   {
    this.auth.authState.subscribe((tempu)=>{
      this.user=tempu?.email;

      this.storage.getuserhistory(this.user).subscribe((ok)=>{
        let temp:any=ok.data();
        this.history=temp.history;
      })

    })
   }

   tbyfun(idx:any,item:any)
   {
    return idx;
   }
}
