import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';



const routes: Routes = [
  { path: 'hotels', component: HotelComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HotelDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }