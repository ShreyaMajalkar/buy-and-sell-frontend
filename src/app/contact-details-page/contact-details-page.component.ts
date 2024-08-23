import { Component, OnInit } from '@angular/core';
import { Listing } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.css'
})
export class ContactDetailsPageComponent implements OnInit {
  email:string = "";
  message:string = "";
  listing:Listing | undefined;

  constructor(private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeMyListings.find(listing => listing.id === id);
    this.message = `Hi I am interested in your ${this.listing?.name.toLowerCase()}`
  }

  onSend(){
    alert("Message send");
    this.router.navigate(["/listings"]);
  }

}
