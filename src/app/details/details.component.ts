import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private myservice:MyserviceService,private router:Router,private ar:ActivatedRoute) { }
  addcustomer: any;
  message: any;
  data: any;
  CustomerId!: string | null;
  responseData:  resultData | undefined;
  result: any;
  ngOnInit(): void {
    this.addcustomer= new FormGroup(
      {
        FirstName:new FormControl(),
       LastName:new FormControl(),
        Country:new FormControl(),
      }
    );
    this.CustomerId=this.ar.snapshot.params['CustomerId'];
      this.myservice.viewcustomerServicebyId(this.CustomerId).subscribe((r:any)=>{this.responseData = r;
        this.addcustomer.controls['FirstName'].setValue(this.responseData?.firstName);
          this.addcustomer.controls['LastName'].setValue(this.responseData?.lastName);
          this.addcustomer.controls['Country'].setValue(this.responseData?.country);
          
      });
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
  
  backtoView()
      { 
        this.router.navigate(['view']);
      }
  }
  interface resultData{
    firstName:string;
    lastName:string;
    country:string;
  }
