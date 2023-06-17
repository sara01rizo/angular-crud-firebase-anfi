import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-firebase-anfi';
  userData!: Observable<any>;

  constructor(private firestore: Firestore) {
    this.getData();
  }

  addData(f: any) {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data Saved Successfully DSS');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getData () {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
    })

    this.userData = collectionData(collectionInstance);

  }

}
