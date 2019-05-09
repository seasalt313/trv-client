import { Component, OnInit } from "@angular/core";
import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  hotels: Hotel[];
  hotel: Hotel;
  id;
  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => (this.hotels = hotels));
  }

  deleteHotel(id) {
    this.id = id;
    this.hotelService.deleteHotel(this.id).subscribe(
      data => {
        // refresh list after deleting
        this.getHotels();
        return true;
      },
      error => {
        console.error("Error deleting hotel. ", error);
      }
    );
  }

  // TODO: Finish create hotel
  createHotel(nameParam, cityParam, descParam) {
    let newHotel = {
      id: 3,
      name: nameParam,
      city: cityParam,
      description: descParam
    };
    this.hotelService
      .createHotel(newHotel)
      .subscribe(hotel => this.hotels.push(hotel));
  }
}
