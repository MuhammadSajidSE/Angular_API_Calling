import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers: [CustomerServiceService]
})
export class CustomerComponent {
  public customerlist: any;
  public id: any;
  public name: any;
  public address: any;
  public city: any;
  public phoneno: any;
  public age: any;
  public nic: any;
  constructor(private customerservice: CustomerServiceService) {

  }
  Getdata() {
    this.customerservice.GetCustomer().subscribe((data) => {
      this.customerlist = data;
      console.log(this.customerlist);
    })
  }
  insertdata(customerid: any, customername: any, customeraddress: any, customercity: any, customerphoneno: any, customerage: any, customernic: any) {
    this.id = customerid;
    this.name = customername;
    this.address = customeraddress;
    this.city = customercity;
    this.phoneno = customerphoneno;
    this.age = customerage;
    this.nic = customernic;
    const customer = {
      id: 0,
      name: customername,
      address: customeraddress,
      city: customercity,
      phone: customerphoneno,
      age: customerage,
      nic: customernic
    }
    this.customerservice.InsertCustomer(customer);
  }

  clearData(idEl: any, nameEl: any, addressEl: any, cityEl: any, phoneEl: any, ageEl: any, nicEl: any) {
    idEl.value = '';
    nameEl.value = '';
    addressEl.value = '';
    cityEl.value = '';
    phoneEl.value = '';
    ageEl.value = '';
    nicEl.value = '';
  }

  searchbyname(names: any) {
    console.log(names);
    this.customerservice.searchByname(names).subscribe((data) => {
      this.customerlist = [data];
    })
  }

  DeleteCustomer(customerid: any) {
    console.log(customerid);
    this.customerservice.DeleteCustomer(customerid).subscribe((data) => {
      console.log(data);
    })
  }

  UpdateData(customerid: any, customername: any, customeraddress: any, customercity: any, customerphoneno: any, customerage: any, customernic: any) {
    this.id = customerid;
    this.name = customername;
    this.address = customeraddress;
    this.city = customercity;
    this.phoneno = customerphoneno;
    this.age = customerage;
    this.nic = customernic;
    const customer = {
      id: customerid,
      name: customername,
      address: customeraddress,
      city: customercity,
      phone: customerphoneno,
      age: customerage,
      nic: customernic
    }
    this.customerservice.completeUpdate(customer);
  }

  PartialUpdateData(customerid: any, customername: any, customeraddress: any, customercity: any, customerphoneno: any, customerage: any, customernic: any) {
    this.id = customerid;
    this.name = customername;
    this.address = customeraddress;
    this.city = customercity;
    this.phoneno = customerphoneno;
    this.age = customerage;
    this.nic = customernic;
    var partialUpdatcustomer: { op: string; path: string; value: string }[] = [];
    const customer: {
      id: any;
      name: any;
      address: any;
      city: any;
      phone: any;
      age: any;
      nic: any;
    } = {
      id: customerid,
      name: customername,
      address: customeraddress,
      city: customercity,
      phone: customerphoneno,
      age: customerage,
      nic: customernic
    };

(Object.keys(customer) as (keyof typeof customer)[]).forEach((key) => {
  if (key === 'id') return; 

  const value = customer[key];
  
  if (value !== undefined && value !== null && value.toString().trim() !== "") {
    partialUpdatcustomer.push({
      op: "replace",
      path: `/${key}`,
      value: `${value}`
    });
  }
});

    this.customerservice.partialUpdate(partialUpdatcustomer,customerid);
  }
}
