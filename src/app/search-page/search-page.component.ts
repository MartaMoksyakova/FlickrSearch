import { Component, OnInit } from '@angular/core';
import { FlickrPhoto, FlickrService } from '../services/flickr.service';




@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  images = [];
  keyword: string;
  route: any;
  image: FlickrPhoto[];
  public isVisible: boolean = false;


  p: number = 1;
  config = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1,
    totalItems: this.images.length,
  };
  
  constructor(private flickrService: FlickrService,) { }

  ngOnInit(): void {
  }
  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = this.images.concat(res);
      });
    }
  }

  add(image: FlickrPhoto): void {
    let order: FlickrPhoto[] = [];
    if (localStorage.length > 0 && localStorage.getItem('bookmarks-area')) {
      order = JSON.parse(localStorage.getItem('bookmarks-area'));
      if (order.some((img) => img.id === image.id)) {
        const index = order.findIndex((prod) => prod.id === image.id);
      } 
      order.push(image);

    }

    localStorage.setItem('bookmarks-area', JSON.stringify(order));
    console.log(order) 
  }
  onPageChange(page: number) {
    this.config.currentPage = page;
    window.scrollTo(0, 0);
  }
  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
