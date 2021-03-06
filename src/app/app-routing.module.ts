import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HotelComponent } from "./hotel/hotel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HotelDetailComponent } from "./hotel-detail/hotel-detail.component";
import { AccountComponent } from "./account/account.component";
import { AdminComponent } from "./admin/admin.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";

const routes: Routes = [
  { path: "hotels", component: HotelComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "account", component: AccountComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "detail/:id", component: HotelDetailComponent },
  { path: "admin", component: AdminComponent },
  { path: "confirmation/:id/:room", component: ConfirmationComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
