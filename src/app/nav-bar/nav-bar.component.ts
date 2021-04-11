import { Component, OnInit } from '@angular/core';
import { FlickrPhoto, FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  count: number = 0;
  getProducts: Array<FlickrPhoto>=[];


  ngOnInit(): void {
  }
 

}
