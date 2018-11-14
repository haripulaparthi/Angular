import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { CustomerComponent } from './Customer.component';
import { CustomerRouting } from '../Routing/CustomerRouting';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRouting),
    CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
