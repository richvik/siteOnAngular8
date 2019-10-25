import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './shared/layouts/wrapper/wrapper.component';
import {MainComponent} from './pages/main/main.component';
import {AboutComponent} from './pages/about/about.component';
import {BrandComponent} from './pages/brand/brand.component';
import {ProductionComponent} from './pages/production/production.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {GeographyComponent} from './pages/geography/geography.component';
import {TastesComponent} from './pages/tastes/tastes.component';
import {ContactsComponent} from './pages/contacts/contacts.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: MainComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'about',
        component: AboutComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'brand',
        component: BrandComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'production',
        component: ProductionComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'recipe',
        component: RecipeComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'geography',
        component: GeographyComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'tastes',
        component: TastesComponent,
        // canActivateChild: [MetaGuard],
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        // canActivateChild: [MetaGuard],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
