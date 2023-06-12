import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const appRoutes: Routes = [
  {path:'userLogin',component:UserLoginComponent},
  {path:'ticketPage', component:TicketListComponent},
  {path:'bookmarks', component:BookmarkPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    SingleTicketComponent,
    UserLoginComponent,
    BookmarkPageComponent,
    AddTicketComponent

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
