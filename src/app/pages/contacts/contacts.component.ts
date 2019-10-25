import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PopupComponent} from '../../popup/popup.component';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ContactsComponent implements OnInit {
    contactForm: FormGroup;
    submitted = false;

    stateShowBtn = {
        selectState: false,
        checkboxState: false
    };

    foods = [
        {value: '1', viewValue: 'Качество продукции'},
        {value: '2', viewValue: 'Вопросы о продукте'},
        {value: '3', viewValue: 'Маркетинговые акции'},
        {value: '4', viewValue: 'Сотрудничество'},
        {value: '5', viewValue: 'Трудоустройство'},
        {value: '6', viewValue: 'Общие вопросы'},
    ];

    constructor(private formBuilder: FormBuilder, public matDialog: MatDialog) {
    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            fatherName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            comment: ['']
        });

    }

    // convenience getter for easy access to form fields
    get f() {
        return this.contactForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.openDialog();
        this.clearForm();
    }

    changeOnSelect() {
        this.stateShowBtn.selectState = true;
    }

    checkBoxChange(event) {
        this.stateShowBtn.checkboxState = event.target.checked;
    }

    openDialog(): void {
        const dialogRef = this.matDialog.open(PopupComponent, {
            data: {typePopup: 'info', title: 'Спасибо!', description: 'Ваше сообщение было отправлено успешно. <br> Наши специалисты свяжутся с&nbsp;вами.'}
        });
    }

    clearForm() {
        this.contactForm.reset();
    }
}
