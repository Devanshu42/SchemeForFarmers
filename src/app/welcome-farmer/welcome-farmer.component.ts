import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-farmer',
  templateUrl: './welcome-farmer.component.html',
  styleUrls: ['./welcome-farmer.component.css']
})
export class WelcomeFarmerComponent implements OnInit {
farmerName:String;
  constructor() { }

  ngOnInit(): void {
    this.farmerName=sessionStorage.getItem('FarmerName');
  }

}
