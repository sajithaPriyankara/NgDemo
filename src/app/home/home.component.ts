import {Component, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations:[
  //   trigger('items',[
  //     transition('* => *',[
  //       query(':enter', style({opacity:0}), {optional:true}),
  //       query(':enter', stagger('300ms', [
  //         animate('.6s ease-in',keyframes([
  //           style({opacity:0, transform:'translateY(-75%)', offset:0}),
  //           style({opacity:0.5, transform:'translateY(35px)', offset:.3}),
  //           style({opacity:1, transform:'translateY(0)', offset:1})
  //         ]))
  //       ]), {optional:true}),
  //
  //       query(':leave', stagger('300ms', [
  //         animate('.6s ease-in',keyframes([
  //
  //           style({opacity:1, transform:'translateY(0)', offset:0}),
  //           style({opacity:0.5, transform:'translateY(35px)', offset:.3}),
  //           style({opacity:0, transform:'translateY(-75%)', offset:1})
  //         ]))
  //       ]),{optional:true})
  //     ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  buttonText: string = 'Add an Item';
  goalText: string = 'Item';

  items = [];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.item.subscribe((packages) => {
      this.items = packages;
    });

    this.data.loadAllPackages();
    this.itemCount = this.items.length;
  }


  addItem() {
    const item = {};
    item['name'] = this.goalText;
    item['price'] = 3455;


    this.items.push(item);
    this.goalText = '';

    this.data.changeItem(this.items);
    this.itemCount = this.items.length;
  }

  removeItem(i) {
    this.items.splice(i, 1);
    this.data.changeItem(this.items);
    this.itemCount = this.items.length;

  }


}
