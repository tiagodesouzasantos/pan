import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { LogingitComponent } from './logingit/logingit.component';

const routes: Routes = [
  { path: '', component: LogingitComponent },
  { path: 'logingit', component: LogingitComponent },
  { path: 'repositories', component: RepositoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
