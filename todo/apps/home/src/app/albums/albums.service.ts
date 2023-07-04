import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {

  constructor(private readonly http: HttpClient) {}

  private _jsonURL = 'assets/albums.json'

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
