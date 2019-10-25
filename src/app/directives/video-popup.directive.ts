import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {PopupComponent} from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';

@Directive({
    selector: '[appVideoPopup]'
})
export class VideoPopupDirective {
    @Input() appVideoPopup = '';
    videoUrl: object = {
        'almette': {
            mp4: `/assets/video/almette.mp4`
        }

    };

    constructor(public matDialog: MatDialog) {
    }

    ngOnInit() {
        // this.backgroundColor = this.defaultColor;
    }

    @HostListener('click') click(eventData: Event) {
        // this.backgroundColor = this.highlightColor;
        console.log(this.appVideoPopup);
        this.openDialog();
    }

    openDialog(): void {
        const dialogRef = this.matDialog.open(PopupComponent, {
            data: {
                typePopup: 'video',
                videoUrl: this.videoUrl[this.appVideoPopup],
                title: 'Спасибо!',
                description: 'Ваше сообщение было отправлено успешно. <br> Наши специалисты свяжутся с&nbsp;вами.'
            }
        });
    }
}
