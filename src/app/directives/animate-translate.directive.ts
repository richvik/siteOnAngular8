import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';


@Directive({
    selector: '[appAnimateTranslate]'
})
export class AnimateTranslateDirective implements OnInit {
    @Input() appAnimateTranslate: string;
    canTranslateElement: boolean = true;

    constructor(private el: ElementRef) {
    }

    speedElements: object = {
        'speed_slow': 0.10,
        'speed_middle': 0.20,
        'speed_fast': 0.30
    }

    ngOnInit() {
        if (this.checkMobile()) {
            this.canTranslateElement = false;
            return
        }
        this.parallaxScroll();
    }

    parallaxScroll() {
        const obj = this.el.nativeElement;
        if (obj.getBoundingClientRect().top <= (1.35 * window.innerHeight) && obj.getBoundingClientRect().bottom >= (0.05 * window.innerHeight)) {
            obj.style.transform = 'translate3d(0,' + ((obj.getBoundingClientRect().top * this.speedElements[this.appAnimateTranslate])) + 'px,0';
            if (!obj.style.willChange) {
                obj.style.willChange = 'transform';
            }
        }
    }

    checkMobile(){
        return window.innerWidth <= 1024;
    }

    @HostListener('window:scroll', ['$event']) checkScroll() {
        if (this.canTranslateElement) {
            this.parallaxScroll();
        }
    }

    @HostListener('window:resize', ['$event']) checkResize() {
        if (this.checkMobile()) {
            this.canTranslateElement = false
        }else{
            this.parallaxScroll();
            this.canTranslateElement = true
        }
    }
}
