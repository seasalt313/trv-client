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
  createHotel(
    nameParam,
    descParam,
    addressParam,
    distanceParam,
    pricecatParam,
    ratingParam
  ) {
    const newHotel = new Hotel();
    newHotel.name = nameParam;
    newHotel.description = descParam;
    newHotel.address = addressParam;
    newHotel.distance_to_venue = distanceParam;
    newHotel.price_category = pricecatParam;
    newHotel.rating = ratingParam;

    console.log("is this working", newHotel);

    this.hotelService.createHotel(newHotel).subscribe(
      hotel => {
        this.hotels.push(newHotel);
        // Refresh list after creating new hotel
        this.getHotels();
        return true;
      },
      error => {
        console.error("Error creating hotel. ", error);
      }
    );
  }
}
