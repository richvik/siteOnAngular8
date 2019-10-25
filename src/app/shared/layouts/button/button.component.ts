import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Output() onClick = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }


    onClickButton(event) {
        console.log('click');
        this.onClick.emit(event);
    }

}


