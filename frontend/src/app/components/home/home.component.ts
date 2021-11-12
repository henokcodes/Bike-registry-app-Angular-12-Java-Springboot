import { Observable, of } from 'rxjs';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Model 234 X',
    'Model 34fdb',
    'CRSGV234'
  ];
  isLoading = false;
  bikeform!: FormGroup;
  validMessage: string = "";
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required),
      contact: new FormControl()
    });

  }

    submitRegistration(){
      this.isLoading =true;
      if(this.bikeform.valid){
        this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
          data=> {
            this.bikeform.reset();
            this.validMessage = "Bike Registered Successfully!";
       
            return true;
          },
          error => {
            return error;
          }

        )
      } else {
        this.validMessage = "Fill out the form"
      }
      this.isLoading= false;
    }

}
