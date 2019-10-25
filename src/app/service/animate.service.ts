import {AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, Renderer, ViewChild} from '@angular/core';

@Component({})


export class AnimateComponent implements AfterViewInit {
    @ViewChild('tref', {static: true}) tref: ElementRef;

    constructor(private elem: ElementRef) {
        console.log('sadas', elem.nativeElement);
    }

    ngAfterViewInit(): void {
        // outputs `I am span`
        console.log(this.tref.nativeElement.textContent);
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        console.log('scroll');
    }
}
