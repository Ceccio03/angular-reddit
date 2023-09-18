import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FavComponent } from './components/fav/fav.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'fav', component: FavComponent},
  {path: '', redirectTo:'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
