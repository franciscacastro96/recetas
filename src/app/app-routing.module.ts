import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./pages/ingredients/ingredients.module').then( m => m.IngredientsPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
