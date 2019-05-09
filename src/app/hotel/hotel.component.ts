import { Component, OnInit } from "@angular/core";
import { Hotel } from "./hotel";
import { HotelService } from "../hotel.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];
  hotel: Hotel;
  id;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => (this.hotels = hotels));
  }
}
