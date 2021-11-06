import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hlmabout',
  templateUrl: './hlmabout.page.html',
  styleUrls: ['./hlmabout.page.scss'],
})
export class HlmaboutPage implements OnInit {

  constructor(public route: Router) {}

  ngOnInit() {
    this.route.navigate(['./folder']);
  }

}
