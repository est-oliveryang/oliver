import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstechComponent } from './estech/estech.component';
import { ItriComponent } from './itri/itri.component';
import { SiucComponent } from './siuc/siuc.component';
import { PanasonicComponent } from './panasonic/panasonic.component';

const routes: Routes = [
  { path: '', redirectTo: '/estech', pathMatch: 'full' },
  { path: 'estech', component: EstechComponent },
  { path: 'itri', component: ItriComponent },
  { path: 'siuc', component: SiucComponent },
  { path: 'panasonic', component: PanasonicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
