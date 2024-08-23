import { Injectable } from '@angular/core';
import { Listing } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    "content-type":"application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient : HttpClient) { }

  getListings(): Observable<Listing[]>  {
    return this.httpClient.get<Listing[]>("/api/listings");

  }

  getListingById(id: string | null): Observable<Listing> {
    return this.httpClient.get<Listing>(`/api/listings/${id}`);
  }

  getUserListings(): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>("/api/userListings");
  }

  deleteListing(id: string): Observable<Listing[]> {
    return this.httpClient.delete<Listing[]>(`/api/listing/${id}`);
  }

  createListing(name:string,description:string,price:number): Observable<Listing>{
    return this.httpClient.post<Listing>("/api/listings",{
      name,description,price
    },httpOptions
  );
  }

  editListing(id:string,name:string,description:string,price:number): Observable<Listing>{
    return this.httpClient.post<Listing>(`/api/editListings/${id}`,{
      name,description,price
    },httpOptions
  );
  }
}
