import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { productsList } from 'src/app/products';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  productsList = productsList;
  public formValue: any;
  addProductForm = this._formBuilder.group({
    id: '',
    name: '',
    price: '',
    category: '',
    desc: '',
    path: ''
  })
  
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  onSubmit($event: any) {
    this.formValue = this.addProductForm.value;
    console.log(this.formValue);
    this.productsList.push(this.formValue);
    this.addProductForm.reset();
    window.alert("add product successfully!");
  }
}
