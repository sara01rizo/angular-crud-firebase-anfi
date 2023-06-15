import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class AnfiService {
  private dbPath = '/tasks';

  tasksRef: AngularFireList<Task>;

  constructor(private db: AngularFireDatabase) {
     this.tasksRef = db.list(this.dbPath);
   }
   getAll(): AngularFireList<Task> {
    return this.tasksRef;
   }

   create(task: Task): any {
    return this.tasksRef.push(task);
   }

   update(key: string, value: any): Promise<void> {
    return this.tasksRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tasksRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tasksRef.remove();
  }
}
