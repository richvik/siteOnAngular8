import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

    open() {
        // let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
    }


    close() {
        this.dialogRef.close();
    }
}
