import { Component, OnInit } from "@angular/core";
import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";
import { HotelComponent } from "../hotel/hotel.component";

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

  //Get hotels
  getHotels(): void {
    this.hotelService
      .getHotels()
      .subscribe(hotels => (this.hotels = hotels.slice(1, 5)));
  }

  // TODO: Finish create hotel
  // createHotel(nameParam, cityParam, descParam) {
  //   let newHotel = {
  //     id: 3,
  //     name: nameParam,
  //     city: cityParam,
  //     description: descParam
  //   };
  //   this.hotelService
  //     .createHotel(newHotel)
  //     .subscribe(hotel => this.hotels.push(hotel));
  // }
}
