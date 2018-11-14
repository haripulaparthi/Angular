import {HomeComponent} from '../Home/Home.component'

export const MainRouting =[
    {path: 'Home', component: HomeComponent},
    {path: 'Supplier', loadChildren: '../Supplier/Supplier.module#SupplierModule'},
    {path: 'Customer', loadChildren: '../Customer/Customer.module#CustomerModule'},
    {path: '', component: HomeComponent}
]