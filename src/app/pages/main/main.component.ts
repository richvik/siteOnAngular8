import {Component, OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [],
    animations: [
        trigger('toggle', [
            state('false', style({transform: 'scale(1)'})),
            state('true', style({transform: 'scale(1.2)'})),
            transition('false <=> true', animate(300))
        ])
    ],
    encapsulation : ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
    @ViewChild('mainElementOnDrag', {static: true}) mainElementOnDrag: ElementRef;
    isOpen: boolean = false;
    currentDataAttrName: string = 'milk';
    objectRenderDragdedElement: object = {
        title: '',
        description: '',
        currentImg: ''
    };
    imagesToDrag = [
        {
            urlPath: '/assets/img/tastes/slivki.png',
            name: 'milk'
        },
        {
            urlPath: '/assets/img/tastes/ogurets.png',
            name: 'ogurec'
        },
        {
            urlPath: '/assets/img/tastes/zelen.png',
            name: 'zelen'
        },
        {
            urlPath: '/assets/img/tastes/masdaam.png',
            name: 'cheese'
        },
        {
            urlPath: '/assets/img/tastes/garlic.png',
            name: 'garlic'
        },
        {
            urlPath: '/assets/img/tastes/mushroom.png',
            name: 'mushroom'
        },
        {
            urlPath: '/assets/img/tastes/tomato.png',
            name: 'tomato'
        },
    ];

    objectImages = {
        'milk': {
            currentImg: '/assets/img/products-box/slivochniy.png',
            title: 'Almette сливочный',
            description: 'Нежная взбитая консистенция и сливочный вкус натурального творожного сыра.'
        },
        'ogurec': {
            currentImg: '/assets/img/products-box/ogurec.png',
            title: 'Almette c огурцами и зеленью',
            description: 'Душистая зелень и маринованные огурчики в сочетании со сливочным сыром'
        },
        'zelen': {
            currentImg: '/assets/img/products-box/zelen.png',
            title: 'Almette c зеленью',
            description: 'Нежный сливочный сыр Almette в сочетании с петрушкой и зеленым луком'
        },
        'cheese': {
            currentImg: '/assets/img/products-box/maasdam.png',
            title: 'Almette с сыром Маасдам',
            description: 'Мягкий сладковато-ореховый вкус Almette c сыром Маасдам'
        },
        'garlic': {
            currentImg: '/assets/img/products-box/chesnok.png',
            title: 'Almette c чесноком',
            description: 'Сливочный вкус с мягкими, но пикантными нотками чеснока'
        },
        'mushroom': {
            currentImg: '/assets/img/products-box/gribi.png',
            title: 'Almette с белыми грибами',
            description: 'Аппетитные белые грибы в нежном творожном сыре Almette'
        },
        'tomato': {
            currentImg: '/assets/img/products-box/tomat.png',
            title: 'Almette с томатами по-итальянски',
            description: 'В этом сливочном сыре объединились настоящие итальянские вкусы'
        },
    };

    constructor() {
    }

    ngOnInit() {
        this.objectRenderDragdedElement = this.objectImages[this.currentDataAttrName];
    }

    animationDone() {
        this.isOpen = false;
    }

    onDragEnded(event, curName) {
        const element = event.source.getRootElement();
        const boundingClientRect = element.getBoundingClientRect();

        event['source']['element']['nativeElement']['style']['transform'] = 'translate3d(0,0,0)';
        event['source']['_dragRef']['_activeTransform'] = {x: 0, y: 0};
        event['source']['_dragRef']['_passiveTransform'] = {x: 0, y: 0};

        this.checkPositionOnMainElementDrag(boundingClientRect, curName);
    }

    checkPositionOnMainElementDrag(draggedEl, curName) {
        const boundingClientRect = this.mainElementOnDrag.nativeElement.getBoundingClientRect();
        const leftPositionDraggedEl = draggedEl.left + (draggedEl.width / 2);
        const topPositionDraggedEl = draggedEl.top + (draggedEl.height / 2);
        if (leftPositionDraggedEl >= boundingClientRect.x && leftPositionDraggedEl <= boundingClientRect.right
            && topPositionDraggedEl >= boundingClientRect.top && topPositionDraggedEl <= boundingClientRect.bottom) {
            this.currentDataAttrName = curName;
            this.objectRenderDragdedElement = this.objectImages[curName];
            this.isOpen = true;
        }
    }


    clickOnElement(event) {
        if (event.button === 0) {
            event.target.style.transform = 'scale(0.5)';
        }
    }

    mouseUpOnElement(event) {
        if (event.button === 0) {
            event.target.style.transform = 'scale(1)';
        }
    }
}
