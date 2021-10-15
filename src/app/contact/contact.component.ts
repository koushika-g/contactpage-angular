import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform : any;
  constructor( public fb: FormBuilder,public rs: ServicesService) { }
  record :any;

  ngOnInit(): void {

    this.contactform = this.fb.group({
      fullname : ['',Validators.required],
      email :['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+[a-zA-Z]+$")]],
      message :['',Validators.required]
    })
  }
  get fullname() {
    return this.contactform.controls['fullname'];
  }
  get email() {
    return this.contactform.controls['email'];
  }
  get message() {
    return this.contactform.controls['message'];
  }
  getalldetails(){
    console.log(this.contactform.value);
    this.rs.add(this.contactform.value).subscribe((data) => {

      console.log(data);

      this.record = data;

    });
  }

  
}
