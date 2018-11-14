import { Component } from '@angular/core';
import { Supplier } from "./Supplier.model";
import * as $ from "jquery";
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';

@Component({
  templateUrl: './Supplier.view.html'
})
export class SupplierComponent {
  page = "Supplier Page";
  SupplierObj:Supplier = new Supplier();
  SupplierObjs:Array<Supplier> = new Array<Supplier>();

  constructor(public _http:Http){
  }

  ToggleGrid(){
    $('#sgid').toggle();
  }

  ShowValidation(){
    this.SupplierObj.formGroup.controls['SupplierNameControl'].updateValueAndValidity();
  }

  Add(){
    this.SupplierObjs.push(this.SupplierObj);
    this.SupplierObj = new Supplier();
  }

  PostToServer(){
    //define its a post
    var supplierDTO:any = {};
    //hacky
    supplierDTO.id = this.SupplierObj.SupplierAmount + 10;
    supplierDTO.SupplierCode = this.SupplierObj.SupplierCode;
    supplierDTO.SupplierName = this.SupplierObj.SupplierName;
    supplierDTO.SupplierAmount = this.SupplierObj.SupplierAmount;

    var observable = this._http.post("http://localhost:3000/suppliers", supplierDTO);
    //attaching the success and error
    observable.subscribe(
      res => this.Success(res),
      res => this.Error(res)
    );
  }
  Success(res){
   // this.SupplierObjs = res.json();
   var observable = this._http.get("http://localhost:3000/suppliers");
    //attaching the success and error
    observable.subscribe(
      res => this.SuccessGet(res),
      res => this.ErrorGet(res)
    );
  }
  Error(err){
    console.debug(err.json());
  }
  SuccessGet(res){
     this.SupplierObjs = res.json(); // Bind the Grid
     this.SupplierObj = new Supplier(); // Clear the UI
   }
   ErrorGet(err){
     console.debug(err.json());
   }

   SelectSupplier(selected:Supplier)
   {
     this.SupplierObj= selected;
   }
}

 