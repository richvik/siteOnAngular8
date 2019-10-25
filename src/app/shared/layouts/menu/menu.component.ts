import {Component, ViewEncapsulation} from '@angular/core';
import {Router, NavigationEnd, Event} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation : ViewEncapsulation.None,

})
export class MenuComponent {
    stateMenuOpen:boolean = false;

    constructor(private router: Router){
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.stateMenuOpen = false;
            }
        })
    }

    toggleMenu(){
        this.stateMenuOpen = !this.stateMenuOpen;
    }
}
