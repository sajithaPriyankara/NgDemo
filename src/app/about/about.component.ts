import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  routeId;
  items:any;
  constructor(private route:ActivatedRoute, private data:DataService) {
    this.route.params.subscribe(res => this.routeId = res.id )
  }

  ngOnInit() {
    this.data.item.subscribe(res=> this.items= res)
  }

}
