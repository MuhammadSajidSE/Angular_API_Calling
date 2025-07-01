import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  GetCustomer() {
    const url = "https://localhost:7091/api/Customer";
    return this.http.get(url);
  }
  InsertCustomer(newcustomer: any) {

    const url = "https://localhost:7091/api/Customer";
    this.http.post(url, newcustomer).subscribe((response) => {
      console.log("Customer inserted successfully:", response);
    },
    );
  }
  searchByname(customername: any) {
    const url = `https://localhost:7091/api/Customer/SearchByName?name=${customername}`;
    var data = this.http.get(url);
    console.log(data);
    return data;
  }


  DeleteCustomer(customerid: any) {
    const url = `https://localhost:7091/api/Customer/DeleteCustomer?id=${customerid}`;
    var data = this.http.delete(url);
    console.log(data);
    return data;
  }


  completeUpdate(updateCustomer: any) {
    const url = "https://localhost:7091/api/Customer/UpdateCustomer";
    this.http.put(url, updateCustomer).subscribe((data) => {
      console.log(data);
    })
  }

partialUpdate(partialUpdateCustomer: any, id: number) {
  const url = `https://localhost:7091/api/Customer/PartialUpdate/${id}`;
  this.http.patch(url, partialUpdateCustomer).subscribe((data) => {
    console.log(data);
  });
}
}
