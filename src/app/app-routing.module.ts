import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };


const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
