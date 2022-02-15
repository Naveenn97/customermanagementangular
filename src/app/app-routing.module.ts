import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"view", component:ViewComponent},
  {path:"update/:CustomerId", component:UpdateComponent},
  {path:"delete", component:DeleteComponent},
  {path:"details/:CustomerId", component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
