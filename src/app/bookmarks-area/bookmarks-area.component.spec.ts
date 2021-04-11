import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksAreaComponent } from './bookmarks-area.component';

describe('BookmarksAreaComponent', () => {
  let component: BookmarksAreaComponent;
  let fixture: ComponentFixture<BookmarksAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
