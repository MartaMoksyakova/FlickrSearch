import { Component, OnInit } from '@angular/core';
import { FlickrPhoto, FlickrService } from '../services/flickr.service';


@Component({
  selector: 'app-bookmarks-area',
  templateUrl: './bookmarks-area.component.html',
  styleUrls: ['./bookmarks-area.component.css']
})
export class BookmarksAreaComponent implements OnInit {
  

  constructor(private flickrService: FlickrService,) { }

  ngOnInit(): void {
    this.getBasket();

  }
  localProducts: FlickrPhoto[] = [];
  images = [];
  
  image: FlickrPhoto[]
  private getBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('bookmarks-area')) {
      this.localProducts = JSON.parse(localStorage.getItem('bookmarks-area'));
    }
  }
  updateLocalProducts(): void {
    localStorage.setItem('bookmarks-area', JSON.stringify(this.localProducts));
  }
  deleteProduct(image: FlickrPhoto): void {
    const index = this.localProducts.findIndex(
      (prod) => prod.id === image.id
    );
    this.localProducts.splice(index, 1);
    this.updateLocalProducts();
    this.getBasket();
    console.log('deleted')

  }
 
    
  
}
