import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

 
  public bikeReg: any;
  constructor(private bikeService : BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params['email']);
  }

  getBikeReg(email: string){
    this.bikeService.getBike(email).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.log(err),
      ()=> console.log('bikes loaded')
    );
  }

}
