import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Jeweler } from './jewery-products/Jeweler';
import { tap } from 'rxjs/operators';


const URL = "https://62b47dc2530b26da4cbfd392.mockapi.io/api/joyas/";

@Injectable({
  providedIn: 'root'
})
export class JewelersDataService {

  //refresh data

  private _refresh$ = new Subject<void>();


  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

      //consume api rest, devuelve un observable a la respuesta
  public getAll(): Observable<Jeweler[]> {
    return this.http.get<Jeweler[]>(URL);
  }

  public addNewJeweler(jeweler: Jeweler): Observable<Jeweler> {
    return this.http.post<Jeweler>(URL, jeweler).pipe(  //actualizar vista cuando se inserta, borra o actualiza un dato. 
      tap(() => (
        this._refresh$.next()
      ))
    ); 
  }

  public updateJeweler(id: number, jeweler: Jeweler): Observable<Jeweler> {
    return this.http.put<Jeweler>(URL+id, jeweler).pipe(
      tap(() => (
        this._refresh$.next()
      ))
    ); 
  }

  public deleteJeweler(id: number): Observable<Jeweler> {
    return this.http.delete<Jeweler>(URL+id).pipe(
      tap(() => (
        this._refresh$.next()
      ))
    ); 
  }

}
