import { Component, OnInit } from "@angular/core";
import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService
      .getHotels()
      .subscribe(hotels => (this.hotels = hotels.slice(1, 5)));
  }
}
