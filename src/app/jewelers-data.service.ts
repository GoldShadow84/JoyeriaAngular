import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jeweler } from './jewery-products/Jeweler';

const URL = "https://62b47dc2530b26da4cbfd392.mockapi.io/api/joyas/";

@Injectable({
  providedIn: 'root'
})
export class JewelersDataService {

  constructor(private http: HttpClient) { }

      //consume api rest, devuelve un observable a la respuesta
  public getAll(): Observable<Jeweler[]> {


    return this.http.get<Jeweler[]>(URL);
  }

  public addNewJeweler(jeweler: Jeweler): Observable<Jeweler> {
    return this.http.post<Jeweler>(URL, jeweler);
  }

  public updateJeweler(id: number, jeweler: Jeweler): Observable<Jeweler> {
    return this.http.put<Jeweler>(URL+id, jeweler);
  }

  public deleteJeweler(id: number): Observable<Jeweler> {
    return this.http.delete<Jeweler>(URL+id);
  }

}
