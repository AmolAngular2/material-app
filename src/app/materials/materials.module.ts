import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';


const materialModules:any  = [
  MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,
  MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,MatDatepickerModule, MatSelectModule,MatAutocompleteModule
,    MatNativeDateModule,MatDialogModule,MatSortModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
  ],
  exports:[
    materialModules
  ]
})
export class MaterialsModule { }
