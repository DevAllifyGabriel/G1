import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url: string = 'https://617b5105d842cf001711be2e.mockapi.io/features';
  private mostRead: string =
    'https://617b5105d842cf001711be2e.mockapi.io/mostRead';
  private news: string = 'https://617b5105d842cf001711be2e.mockapi.io/features';

  private details: string =
    'https://617b5105d842cf001711be2e.mockapi.io/details';

  get: any;

  constructor(private http: HttpClient) {}

  get apisFeatures(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }

  get apiAll(): Observable<any> {
    return this.http.get<any>(this.mostRead).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }

  get apiNews(): Observable<any> {
    return this.http.get<any>(this.news).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }

  get apiDetails(): Observable<any> {
    return this.http.get<any>(this.details).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }
}
