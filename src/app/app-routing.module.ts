import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './book/home/home.component';
import {CreateComponent} from './book/create/create.component';
import {DetailComponent} from './book/detail/detail.component';
import {UpdateComponent} from './book/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
