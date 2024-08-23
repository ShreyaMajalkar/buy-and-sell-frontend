import { Component, OnInit } from '@angular/core';
import { Listing } from '../model';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit {
  listings:Listing[] = [];

  constructor(private router:Router,private listingsService:ListingsService){

  }

  ngOnInit(): void {
    this.listingsService.getUserListings()
    .subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(id :any): void{
    this.listingsService.deleteListing(id)
    .subscribe(listings => this.listings = listings);

    // alert("Deleted successfully");
    // this.router.navigate(["/listings"]);
  }

}
