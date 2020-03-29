import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from 'src/app/components/appointments/appointments.component';
import { AppointmentInstanceComponent } from 'src/app/components/appointment-instance/appointment-instance.component';
import { AppointmentFeedbackComponent } from 'src/app/components/appointment-feedback/appointment-feedback.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { OnboardComponent } from 'src/app/components/onboard/onboard.component';
import { RegisterComponent } from 'src/app/components/register/register.component';


const routes: Routes = [
    { path: '', redirectTo: 'appointments', pathMatch: 'full' },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'appointments/:id', component: AppointmentInstanceComponent },
    { path: 'appointmentsFeedback/:id', component: AppointmentFeedbackComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'onboard', component: OnboardComponent },
    { path: '**', redirectTo: 'appointments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: false})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
