import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from './avant-profile/userModel';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AvantDataService {
  private avantUrl = 'homework.avantlink.com/tasks';

  constructor(
    private _http: HttpClient,
    private _httpHeaders: HttpHeaders
  ) { }

  updateUserProfile (user: UserProfile): Observable<any> {
    return this._http.put(this.avantUrl, user, httpOptions).pipe(
      tap(_ => console.log(`updated user name=${user.firstName}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
