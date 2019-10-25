import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';

// import { FooterComponent } from './footer/footer.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {MenuComponent} from './menu/menu.component';
import {ButtonComponent} from './button/button.component';
import {NavLinkComponent} from './nav-link/nav-link.component';
import {SliderComponent} from './slider/slider.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [WrapperComponent, MenuComponent, ButtonComponent, NavLinkComponent],
    exports: [WrapperComponent, MenuComponent, ButtonComponent, NavLinkComponent],
})
export class LayoutsModule {
}
