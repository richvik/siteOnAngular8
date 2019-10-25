import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';

interface SwiperInterface {
    dataColor: string;
    imgUrl: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-tastes',
    templateUrl: './tastes.component.html',
    styleUrls: ['./tastes.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TastesComponent implements AfterViewInit {
    @ViewChild('usefulSwiper', {static: false}) usefulSwiper;

    arrayToSLider: SwiperInterface[] = [
        {
            dataColor: 'color-milk',
            imgUrl: '/assets/img/products/slivochniy.png',
            title: '«Альметте» <br class="tastes-br"> сливочный',
            description: 'Нежная взбитая консистенция и&nbsp;сливочный вкус натурального молока и&nbsp;сливок.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/zelen.png',
            title: '«Альметте» <br class="tastes-br"> с&nbsp;зеленью',
            description: 'Творожный сыр «Альметте» с&nbsp;зеленью&nbsp;— это\n' +
            '                                        петрушка и&nbsp;зеленый лук в&nbsp;сочетании с&nbsp;молодым сыром и&nbsp;сливками.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/ogurec.png',
            title: '«Альметте» <br class="tastes-br"> с&nbsp;огурцами и&nbsp;зеленью',
            description: 'Сыр «Альметте» с&nbsp;огурцами и&nbsp;зеленью объединяет в&nbsp;себе\n' +
            '                                        пряность трав, пикантность маринованых огурчиков и&nbsp;сливочный вкус\n' +
            '                                        творожного сыра.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/gribi.png',
            title: '«Альметте» <br class="tastes-br"> с&nbsp;белыми грибами',
            description: 'Сыр «Альметте» с&nbsp;белыми грибами&nbsp;— это аппетитные грибы в&nbsp;сочетании\n' +
            '                                        с&nbsp;нежным сливочно-сырным вкусом.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/tomat.png',
            title: '«Альметте» <br class="tastes-br"> с&nbsp;томатами <br class="tastes-br">\n' +
            '                                        по-итальянски',
            description: 'Сыр «Альметте» с&nbsp;томатами, пряными травами и&nbsp;оливковым маслом.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/chesnok.png',
            title: '«Альметте» <br class="tastes-br">  с&nbsp;сыром Маасдам',
            description: 'Творожный сыр «Альметте» с&nbsp;соблазнительной пикантной ноткой чеснока.'
        },
        {
            dataColor: 'color-zelen',
            imgUrl: '/assets/img/products/maasdam.png',
            title: '«Альметте» <br class="tastes-br"> с&nbsp;чесноком',
            description: '«Альметте» с&nbsp;сыром Маасдам&nbsp;— это сочетание нежной взбитой консистенции\n' +
            '                                        творожного сыра и&nbsp;сладковато-орехового вкуса настоящего сыра Маасдам.'
        }
    ];
    arraySmalImages = [
        {
            id: 0,
            state: true,
            colorName: 'color-milk',
            imgUrl: '/assets/img/products-box/slivochniy.png'
        },
        {
            id: 1,
            state: false,
            colorName: 'color-zelen',
            imgUrl: '/assets/img/products-box/zelen.png'
        },
        {
            id: 2,
            state: false,
            colorName: 'color-ogurec',
            imgUrl: '/assets/img/products-box/ogurec.png'
        },
        {
            id: 3,
            state: false,
            colorName: 'color-mushroom',
            imgUrl: '/assets/img/products-box/gribi.png'
        },
        {
            id: 4,
            state: false,
            colorName: 'color-tomato',
            imgUrl: '/assets/img/products-box/tomat.png'
        },
        {
            id: 5,
            state: false,
            colorName: 'color-garlic',
            imgUrl: '/assets/img/products-box/chesnok.png'
        },
        {
            id: 6,
            state: false,
            colorName: 'color-cheese',
            imgUrl: '/assets/img/products-box/maasdam.png'
        },
    ];

    constructor() {}

    config: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        pagination: {el: '.swiper-pagination', clickable: true},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        speed: 600
    };

    ngAfterViewInit() {
        this.usefulSwiper.swiper.on('slideChange', () => {
            this.changeCurrentSmallImage(this.usefulSwiper.swiper.realIndex);
        });
    }

    changeCurrentSmallImage(index) {
        this.arraySmalImages.forEach((item) => {
            (item.id === index) ? item.state = true : item.state = false;
        });
    }

    scrollToCurrentSlider(curObj) {
        this.arraySmalImages.forEach((item) => {
            if (item.state) {
                item.state = false;
            }
        });
        curObj.state = !curObj.state;
        this.usefulSwiper.swiper.slideTo(curObj.id, 600, false);
    }

}
