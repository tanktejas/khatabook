import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private firestore:AngularFirestore) { }   

  createuser(emailid:any,username:any)
  {
    this.firestore.collection("user").doc(emailid).set({username:username}).then((res)=>{
      // alert("done")  
    }).catch(err=>{
      alert("err")
      console.log(err)
    });
    this.firestore.collection("usediary").doc(emailid).set({});
    this.firestore.collection("useraccount").doc(emailid).set({})
    this.firestore.collection("history").doc(emailid).set({})
  }

  getdiary(email:any)
  { 
    return this.firestore.collection("usediary").get();
  }

  updatedoc(docid:any,diary:any)
  {
    return this.firestore.collection('usediary').doc("/"+`${docid}`).update({diary:diary});
  }

  getuserdiary(email:any)
  {
    return this.firestore.collection('usediary').doc(email).get();
  }

  addintohistory(email:any,document:any)
  {
    return this.firestore.collection("history").doc(email).update({history:document});
  }

  getuserhistory(email:any)
  {
    return this.firestore.collection("history").doc(email).get();
  }

}
