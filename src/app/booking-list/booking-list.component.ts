import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateBookingComponent } from '../create-booking/create-booking.component';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {
  displayedColumns: string[] = ['action', 'id', 'customerName', 'checkInDate', 'checkoutDate', 'location'];
  dataSource!: MatTableDataSource<Booking>;

  bookingData: Booking[] = [
    { id: 1, customerName: "Sam", checkInDate: "01-01-2024", checkoutDate: "10-01-2024", "location": "Delhi" },
    { id: 2, customerName: "Mike", checkInDate: "01-01-2024", checkoutDate: "10-01-2024", "location": "Shimla" },
    { id: 3, customerName: "John", checkInDate: "01-01-2024", checkoutDate: "10-01-2024", "location": "Shimla" },
    { id: 4, customerName: "David", checkInDate: "01-01-2024", checkoutDate: "10-01-2024", "location": "Shimla" },
    { id: 5, customerName: "Smith", checkInDate: "01-01-2024", checkoutDate: "10-01-2024", "location": "Shimla" },

  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.bookingData);
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(actionName: string, index: number) {
    let config: any = {
      width: "600px",
      padding: "5px",
    }
    if (actionName == 'Edit') {
       let selectedBookingObj = this.bookingData[index];
      config = { ...config, data: { actionName: 'Edit', bookingObj: selectedBookingObj } }
    }

    const dialogRef = this.dialog.open(CreateBookingComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result && actionName == 'Create') {
        this.bookingData.push(result);
      }else if(result && actionName == 'Edit'){
        this.bookingData[index] = result;
      }
      this.updateDataSource();
    });
  }

  updateDataSource(){
    this.dataSource = new MatTableDataSource(this.bookingData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(index:number){
    this.bookingData.splice(index,1);
    this.updateDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}

export interface Booking {
  id: number,
  customerName: string,
  checkInDate: string,
  checkoutDate: string,
  location: string
}
