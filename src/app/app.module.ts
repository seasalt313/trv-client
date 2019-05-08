import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HotelComponent } from "./hotel/hotel.component";
import { HotelDetailComponent } from "./hotel-detail/hotel-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HotelSearchComponent } from "./hotel-search/hotel-search.component";
import { FooterComponent } from "./footer/footer.component";
import { AccountComponent } from "./account/account.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HotelSearchComponent,
    FooterComponent,
    AccountComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
