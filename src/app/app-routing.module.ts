import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { BookmarksAreaComponent } from './bookmarks-area/bookmarks-area.component';



// const routes: Routes = [];
const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'search-page' },
  { path: 'search-page', component: SearchPageComponent },
  { path: 'bookmarks-area', component: BookmarksAreaComponent },
  { path: '**', redirectTo: 'search-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
