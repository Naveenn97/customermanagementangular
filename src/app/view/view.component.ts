import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  result: any;
  newId: any;
  data: any;
  addcustomer: any;

  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
   

    this.addcustomer=new FormGroup(
      {
        FirstName:new FormControl(),
        LastName:new FormControl(),
        Country:new FormControl(),
        CreatedDate:new FormControl()
      }
    );
    this.myservice.viewcustomer().subscribe(r=>{this.result=r;});
  }

  get FirstName()
  {
    return this.addcustomer.get('FirstName');
  }
  get LastName()
  {
    return this.addcustomer.get('LastName');
  }
  get Country()
  {
    return this.addcustomer.get('Country');
  }
  
  get CreatedDate()
  {
    return this.addcustomer.get('CreatedDate');
  }


deletecus(Id:any)
{
  this.myservice.deletecustomer(Id).subscribe((r:any)=>{this.result=r; window.location.reload();});
}
updatecus(CustomerId:any)
{
  this.newId=CustomerId
  alert(CustomerId);
  this.router.navigate(['/update',CustomerId]);
}
onSubmit()
{

this.data=this.addcustomer.value;
this.myservice.addcustomer(this.data).subscribe(res=>{this.result=res;
  this.router.navigate(['/view']);
  window.location.reload();
}
)};
viewcus(CustomerId :any)
{
  this.newId=CustomerId;
  this.router.navigate(['/details',CustomerId]);
}
}
