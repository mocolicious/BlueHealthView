import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { AppointmentsComponent } from 'src/app/components/appointments/appointments.component';
import { AppointmentInstanceComponent } from 'src/app/components/appointment-instance/appointment-instance.component';
import { AppointmentFeedbackComponent } from 'src/app/components/appointment-feedback/appointment-feedback.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { OnboardComponent } from 'src/app/components/onboard/onboard.component';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';



@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentInstanceComponent,
    AppointmentFeedbackComponent,
    LoginComponent,
    RegisterComponent,
    OnboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
