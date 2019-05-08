import { Injectable } from '@angular/core';
import { Hotel } from './hotel/hotel';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HotelService {
  private hotelsUrl = 'http://localhost:3000/hotels';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET hotels from the server */
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl)
      .pipe(
        tap(_ => this.log('fetched hotels')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hotel by id. */
  getHotel(id: number): Observable<Hotel> {
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.get<Hotel>(url).pipe(
      tap(_ => this.log(`fetched hotel id=${id}`)),
      catchError(this.handleError<Hotel>(`getHotel id=${id}`))
    );
  }


  /* GET hotels where input contains search term */
  searchHotels(
    city: string = '',
    country: string = '',
    price_category: string = '',
    rating: number
  ): Observable<any> {

    let cityParam = '';
    let countryParam = '';
    let priceCat = '';
    let ratingParam = '';

    if (city !== '') {
      cityParam = `city=${city}`;
    }
    if (country !== '') {
      countryParam = `country=${country}`;
    }

    if (price_category !== '') {
      priceCat = `price_category=${price_category}`;
    }

    if (rating > 0) {
      ratingParam = `rating=${rating}`;
      console.log(rating);
    }

    return this.http.get(`${this.hotelsUrl}/?${cityParam}&${countryParam}&${priceCat}&${ratingParam}`);
  }

  private log(message: string) {
    this.messageService.add(`HotelService: ${message}`);
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}




