import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  private items = new BehaviorSubject<any>([]);
  item = this.items.asObservable();
  constructor(private http: HttpClient) { }



  loadAllPackages () {
    this.http
      .get('https://api.myjson.com/bins/1g87r')
      .subscribe (
        (data: any) => {
          this.items.next(data);
        },
        (err: any) => console.error("loadAllPackages: ERROR"),
        () => console.log("loadAllPackages: always")
      );
  }

  changeItem(item){
    this.items.next(item);
  }
}
