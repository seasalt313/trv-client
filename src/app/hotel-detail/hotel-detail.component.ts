import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hotel } from "../hotel/hotel";
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHotel()
  }

  getHotel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id)
      .subscribe(hotel => this.hotel = hotel);
  }

  goBack(): void {
    this.location.back();
  }

}
