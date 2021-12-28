import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageRoutingModule } from './components/slidesMenus/native-ionic/main/main-routing.module';

const routes: Routes = [
  {
    path:'',redirectTo:'/main', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    MainPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

