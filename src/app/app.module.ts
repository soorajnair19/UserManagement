import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { CalculatorService } from './services/calculator.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { TwowaydatabindingComponent } from './components/twowaydatabinding/twowaydatabinding.component';
import { SqrtPipe } from './custompipes/sqrt.pipe';
import { ChangetextDirective } from './customdirectives/changetext.directive';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    LoginComponent,
    CalculatorComponent,
    TwowaydatabindingComponent,
    SqrtPipe,
    ChangetextDirective,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService,CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
