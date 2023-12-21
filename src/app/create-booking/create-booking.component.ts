import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent {

 bookingForm:any;
 options: string[] = ['Delhi', 'Shimla', 'Manali'];
 filteredOptions!: Observable<string[]>;
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<CreateBookingComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any){

      console.log("Data Received ", data);

  }

  ngOnInit(){
     this.initializeForm();
     if(this.data && this.data.actionName == 'Edit'){
      this.bookingForm.patchValue(this.data.bookingObj);
      this.bookingForm.get('checkInDate').setValue(new Date(this.data.bookingObj.checkInDate));
      this.bookingForm.get('checkoutDate').setValue(new Date(this.data.bookingObj.checkoutDate));
     // this.bookingForm.get('location').setValue(new Date(this.data.bookingObj.checkInDate));
     // this.bookingForm.get('checkInDate').setValue(new Date(this.data.bookingObj.checkInDate));

     }
     this.filteredOptions = this.bookingForm.get('location').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

   initializeForm(){
    this.bookingForm = this.fb.group({
      'customerName':['',[Validators.required]],
      'checkInDate':['',[Validators.required]],
      'checkoutDate':['',[Validators.required]],
      'location':['',[Validators.required]],
    })
   }

   private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  createBooking(){
    const formData = this.bookingForm.value;
    this.dialogRef.close(formData);
  }
}
