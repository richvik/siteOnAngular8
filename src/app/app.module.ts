import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {SharedModule} from './shared/shared.module';
import {AboutComponent} from './pages/about/about.component';
import {AnimateTranslateDirective} from './directives/animate-translate.directive';
import {BrandComponent} from './pages/brand/brand.component';
import {ProductionComponent} from './pages/production/production.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GeographyComponent} from './pages/geography/geography.component';
import {TastesComponent} from './pages/tastes/tastes.component';
import {Angular2UsefulSwiperModule} from 'angular2-useful-swiper';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {MatSelectModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import {PopupComponent} from './popup/popup.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {VideoPopupDirective} from './directives/video-popup.directive';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        AnimateTranslateDirective,
        BrandComponent,
        ProductionComponent,
        RecipeComponent,
        GeographyComponent,
        TastesComponent,
        ContactsComponent,
        PopupComponent,
        VideoPopupDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        Angular2UsefulSwiperModule,
        MatSelectModule,
        MatDialogModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        NgxMaskModule.forRoot({}),
        DragDropModule,
        DeviceDetectorModule.forRoot(),
        AnimateOnScrollModule.forRoot()
    ],
    entryComponents: [PopupComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
