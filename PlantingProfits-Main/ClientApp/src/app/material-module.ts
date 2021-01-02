import { NgModule } from '@angular/core';
//import { MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatTableModule, MatSelect, MatSelectModule, MatDialogModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatSelectModule, MatDialogModule],

  exports: [MatNativeDateModule, FormsModule,
    MatDatepickerModule, MatIconModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatSelectModule, MatDialogModule],

})

export class MyMaterialModule { }
