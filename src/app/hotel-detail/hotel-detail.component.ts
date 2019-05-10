import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";
import { ArraySortPipe } from "../-array-sort.pipe";

@Component({
  selector: "app-hotel-detail",
  templateUrl: "./hotel-detail.component.html",
  styleUrls: ["./hotel-detail.component.scss"]
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel;
  name;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) {}

  //Initialization
  ngOnInit(): void {
    this.getHotel();
  }

  //Get Hotel info, sends id to service
  getHotel(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.hotelService.getHotel(id).subscribe(hotel => (this.hotel = hotel));
  }

  //Go back functionality on page
  goBack(): void {
    this.location.back();
  }

  //Toast to show the booking is confirmed
  confirmed(name): void {
    var x = document.getElementById("confirmed");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 10000);
    this.name = name;
  }
}
