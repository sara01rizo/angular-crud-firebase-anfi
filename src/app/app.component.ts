import { Component } from '@angular/core';
import { FireStore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-firebase-anfi';

  constructor(private firestore: Firestore) {}

  addData(f: any) {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data Saved Successfully DSS');
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
