import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/surivice/userservice.service';

@Component({
  selector: 'app-regstration',
  templateUrl: './regstration.component.html',
  styleUrls: ['./regstration.component.css']
})
export class RegstrationComponent implements OnInit {

  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
  }

public user={
  name:'',
  email:'',
  password:''
}

submitForm()
{
  this.service.createUser(this.user).subscribe(
    (data)=>{
        alert("success");
    },
    (error)=>{
      alert("something gets wrong");
    });
}

}
