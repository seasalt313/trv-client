import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";

@Component({
  selector: "app-hotel-search",
  templateUrl: "./hotel-search.component.html",
  styleUrls: ["./hotel-search.component.scss"]
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) {}

  private searchTerms = new Subject<string>();
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {}

  /**
   * Send params to hotelService
   * @param city - search by city name
   * @param country - search by country name
   * @param price_category - low, medium, high
   * @param rating - number value
   */

  searchHotels(
    city: string,
    country: string,
    price_category: string,
    rating: number
  ) {
    this.hotels$ = this.hotelService.searchHotels(
      city,
      country,
      price_category,
      rating
    );
  }
}
