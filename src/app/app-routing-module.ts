import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { DoctoresComponent } from './components/doctores-component/doctores-component';
import { CreateDoctorComponent } from './components/create-doctor-component/create-doctor-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "doctores", component: DoctoresComponent},
  { path: "crear", component: CreateDoctorComponent},
  { path: "modificar/:id", component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
