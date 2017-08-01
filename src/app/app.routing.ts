import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.page.component';
import {IngredientsComponent} from './components/ingredients/ingredients.component';
import {CategoryComponent} from './components/category/category.component';
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ingredients', component: IngredientsComponent},
  { path: 'category', component: CategoryComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'profile', component: UserProfileComponent}

];

export  const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

