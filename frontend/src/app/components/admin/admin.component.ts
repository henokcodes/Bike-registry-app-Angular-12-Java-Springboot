import { Bikes } from './../../models/bike.model';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ELEMENT_DATA : Bikes[] | undefined;
  public bikes: any;
public bike: any;
 

displayedColumns: string[] = ['Name', 'Email', 'Model', 'Price'];
// dataSource = new MatTableDataSource<Bikes>(this.ELEMENT_DATA);
  constructor(private bikeService:BikeService) { }
  ngOnInit(): void {
    // this.getBikes();
    // this.bikeService.getBikes().subscribe(report=>this.dataSource.data=report as Bikes[])
  this.getBikes();
  }

  getBikes(){

    this.bikeService.getBikes().subscribe(
      data=> {this.bikes = data},
      err => console.error(err),
      ()=> console.log('bikes loaded')
    )
  }
  

}
