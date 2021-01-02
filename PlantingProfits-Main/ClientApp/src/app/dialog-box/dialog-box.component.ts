import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  form!: FormGroup;
  action!: string;
  local_data: any;
  currentUser: User;
  selected = "";

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) {  }) {
    this.currentUser = this.authenticationService.currentUserValue;
   
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
