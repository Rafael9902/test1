import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GalleryService {

  constructor(private readonly http: HttpClient) {}

  private _jsonURL = 'assets/photos.json'

  public getJSON(): Observable<any[]> {
    return this.http.get<any[]>(this._jsonURL);
  }

}
