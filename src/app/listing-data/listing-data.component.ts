import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '../model';
import { fakeMyListings } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing-data',
  templateUrl: './listing-data.component.html',
  styleUrl: './listing-data.component.css'
})
export class ListingDataComponent {
  @Input() buttonText = "";
  @Input() currentId = "";
  @Input() currentName = "";
  @Input() currentDescription = "";
  @Input() currentPrice:any;

  id:string | undefined = "";
  name:string | undefined = "";
  description:string | undefined = "";
  price:number | undefined;

  @Output() onSubmit = new EventEmitter(); 


  constructor(private router: Router ,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.currentId;
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClick():void{
    this.onSubmit.emit({
      id:this.id,
      name:this.name,
      description:this.description,
      price:Number(this.price)
    });
  }
}
