import { Component } from '@angular/core';
import { Listing } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {
  listing!:Listing | undefined;

  constructor(private router: Router ,
    private route:ActivatedRoute,
    private listingService:ListingsService
  ){}

  ngOnInit(): void {
  }

  onSubmit(event:any):void{
    this.listingService.createListing(event.name,event.description,event.price)
    .subscribe( () => {
      alert("Created successfully");
      this.router.navigateByUrl("/my-listings");
    }
    );
  }
}
