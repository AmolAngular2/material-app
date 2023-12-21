import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookingListComponent } from './booking-list/booking-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    CreateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
