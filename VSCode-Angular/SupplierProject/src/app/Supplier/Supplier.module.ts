import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'


import { SupplierComponent } from './Supplier.component';
import { SupplierRouting } from '../Routing/SupplierRouting';
import { HttpModule } from '@angular/http';
import { GridComponent } from '../UserControl/UserControl.Grid.component';

@NgModule({
  declarations: [
    SupplierComponent,
    GridComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRouting),
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
