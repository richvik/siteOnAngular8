import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-geography',
    templateUrl: './geography.component.html',
    styleUrls: ['./geography.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GeographyComponent implements OnInit {
    currentName: number = 0;
    constructor() {
    }

    ngOnInit() {
    }

    geographyPopupClose() {
        this.currentName = 0;
    }

    geographyOpenPopup(name) {
        this.currentName = name;
    }


}
