import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public cities:Array<any>;
  private exampleDetail:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elementum mauris in sagittis. Integer eu consectetur tortor. Etiam in mauris eros.";
  constructor() { 
    this.cities = [
      {name : "Ankara", rating: "4/5", detail: this.exampleDetail},
      {name : "İstanbul", rating: "4/5", detail: this.exampleDetail},
      {name : "Muğla", rating: "5/5", detail: this.exampleDetail},
      {name : "izmir", rating: "4/5", detail: this.exampleDetail},
      {name : "Eskişehir", rating: "4/5", detail: this.exampleDetail},
      {name : "Kayseri", rating: "4/5", detail: this.exampleDetail}
    ]
  }

  ngOnInit(): void {

  }

}
