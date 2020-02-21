import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmPointbuyModule, DmPointbuyComponent } from 'dm-pointbuy';


const routes: Routes = [
  {
    path: 'pointbuy', component: DmPointbuyComponent,
  }
];

@NgModule({
  imports: [
    DmPointbuyModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
