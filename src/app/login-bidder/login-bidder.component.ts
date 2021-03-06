import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { BloginService } from './blogin.service';
import { BidderLogin } from './bidderLogin';

@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {

  email:any
  password:any
  message:any

  constructor(private bserve: BloginService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var bidderLog = new BidderLogin();
    bidderLog.email = this.email;
    bidderLog.password = this.password;
    this.bserve.login(bidderLog).subscribe(
      user=>{
        // alert(JSON.stringify(user))

        if(user.status=='SUCCESS')
        {
          let bidderName = user.name;
          let bidderEmail = user.email;
          sessionStorage.setItem('BidderName', bidderName);
          sessionStorage.setItem('BidderEmail', bidderEmail);
          this.router.navigate(['bidder-dashboard']);
        }
        else
        {
          this.message=user.message
          alert(this.message)
        }
      }
    )
  }

  ngOnInit(): void {
  }

}