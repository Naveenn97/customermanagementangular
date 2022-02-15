import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url="https://localhost:7272/api/WEBAPI";

  constructor(private httpclient:HttpClient) { }
  viewcustomer()
  {
    return this.httpclient.get(this.url);
  }
  addcustomer(cus:any)
  {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/register",cus,{headers});
  }
  deletecustomer(CustomerId:any)
  {
    return this.httpclient.delete(this.url+"/"+CustomerId);
  }
  updatecustomer(c:any)
{
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
return this.httpclient.put(this.url,c,{headers});
}

getrecordonID(CustomerId:any)
{
  return this.httpclient.get(this.url+"/getrecord?CustomerId="+CustomerId);
}
viewcustomerServicebyId(CustomerId:any)
   {
    return this.httpclient.get(this.url+"/getrecord?CustomerId="+CustomerId);
   }
}
