import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path:"", redirectTo: "landingpage", pathMatch:"full"
  },
  {
     path:"landingpage/mainpage", component: MainPageComponent
   }
   ,
   {
    path:"landingpage", component: LandingpageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LandingpageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule,
    NgbModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
