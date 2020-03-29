import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: false})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
