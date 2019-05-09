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
    distanceParam,
    ratingParam,
    pricecatParam,
    addressParam
  ) {
    const newHotel = new Hotel();
    newHotel.id = 13;
    newHotel.name = nameParam;
    newHotel.description = descParam;
    newHotel.distance_to_venue = distanceParam;
    newHotel.rating = ratingParam;
    newHotel.price_category = pricecatParam;
    newHotel.address = addressParam;

    console.log("newHotel? in controller", newHotel);

    this.hotelService.createHotel(newHotel).subscribe(
      hotel => {
        console.log("inside, ", newHotel);

        this.hotels.push(newHotel);
        // refresh list after creating new hotel
        this.getHotels();
        return true;
      },
      error => {
        console.error("Error creating hotel. ", error);
      }
    );
  }
}
