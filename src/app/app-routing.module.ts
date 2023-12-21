import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

const routes: Routes = [
  {path:'booking-list',component:BookingListComponent},
  {path:'create-booking',component:CreateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
