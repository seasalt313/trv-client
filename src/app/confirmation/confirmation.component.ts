import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hotel } from "../hotel/hotel";
import { HotelService } from "../hotel.service";
import { Room } from "../hotel/room";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  hotel: Hotel;
  room: Room;
  roomId;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.getHotel();
  }

  //Ex: localhost:3000/hotels?id=2&room=202
  //Get Hotel info, get room info, sends id to service
  getHotel(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    const roomId = +this.route.snapshot.paramMap.get("room");
    this.roomId = roomId;

    this.hotelService.getHotel(id).subscribe(hotel => {
      this.hotel = hotel;
      const rooms = this.hotel.rooms;
      rooms.forEach(roomObj => {
        if (roomObj.id === this.roomId) {
          return (this.room = roomObj);
        }
      });
    });
  }
}
