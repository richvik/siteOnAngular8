import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BrandComponent implements OnInit {

    arraySmallImages = [
        {
            id: 0,
            state: true,
            title: 'сливочный',
            imgUrl: '/assets/img/products-box/slivochniy.png'
        },
        {
            id: 1,
            state: false,
            title: 'с зеленью',
            imgUrl: '/assets/img/products-box/zelen.png'
        },
        {
            id: 2,
            state: false,
            title: 'с огурцами и зеленью',
            imgUrl: '/assets/img/products-box/ogurec.png'
        },
        {
            id: 3,
            state: false,
            title: 'с белыми грибами',
            imgUrl: '/assets/img/products-box/gribi.png'
        },
        {
            id: 4,
            state: false,
            title: 'с томатами по-итальянскиo',
            imgUrl: '/assets/img/products-box/tomat.png'
        },
        {
            id: 5,
            state: false,
            title: 'с чесноком',
            imgUrl: '/assets/img/products-box/chesnok.png'
        },
        {
            id: 6,
            state: false,
            title: 'c сыром Масдаам',
            imgUrl: '/assets/img/products-box/maasdam.png'
        },
    ];

    configBrand: SwiperOptions = {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        spaceBetween: 10,
        // loop:true,
        touchRatio: 1,
        watchOverflow: true,
        breakpoints: {
            1024: {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                slidesPerView: 'auto'
            }
        }
    };


    constructor() {
    }

    ngOnInit() {
    }

}
