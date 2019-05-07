import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hotel } from '../hotel/hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) { }

  private searchTerms = new Subject<string>();
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

  }

  searchHotels(city: string, country: string, price_category: string) {
    this.hotels$ = this.hotelService.searchHotels(city, country, price_category);
    console.log(price_category);

  }

}

