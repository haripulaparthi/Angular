import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './Home.component';
import { MasterPageComponent } from './MasterPage.component';
import { MainRouting } from '../Routing/MainRouting';
import { Logger,
          ConsoleLogger,
          FileLogger } from '../Utility/Utility.Logger';


@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRouting),
    BrowserModule, FormsModule
  ],
  providers: [
    { provide:"C",useClass: ConsoleLogger},
    { provide:"F",useClass: FileLogger}
  ],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
