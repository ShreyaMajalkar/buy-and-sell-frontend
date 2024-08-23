import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../model';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{
  listing!:Listing | undefined;

  constructor(private router: Router ,
    private route:ActivatedRoute,
    private listingService:ListingsService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeMyListings.find(listing => listing.id === id);
  }

  onSubmit(event:any):void{
    this.listingService.editListing(event.id,event.name,event.description,event.price)
    .subscribe(() => {
      alert("Saved successfully");
      this.router.navigateByUrl("/my-listings");
    });
    
  }
}
