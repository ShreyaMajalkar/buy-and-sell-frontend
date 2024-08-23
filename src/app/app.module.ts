import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { ListingDataComponent } from './listing-data/listing-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    ContactDetailsPageComponent,
    NavBarComponent,
    MyListingsPageComponent,
    EditListingPageComponent,
    NewListingPageComponent,
    ListingDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
