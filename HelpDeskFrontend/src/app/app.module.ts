import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {path:'userLogin',component:UserLoginComponent},
  {path:'ticketPage', component:TicketListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    SingleTicketComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
