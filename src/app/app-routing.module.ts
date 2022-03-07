import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';


const routes: Routes = [
  {path: 'home', component:HomepageComponent },
  {path: 'search', component: SearchpageComponent},
  {path: 'profile', component: ProfilepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
