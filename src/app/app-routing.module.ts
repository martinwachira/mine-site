import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSliderComponent } from './projects/project-slider/project-slider.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },   
  { path: 'header', component: HeaderComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-slider', component: ProjectSliderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
