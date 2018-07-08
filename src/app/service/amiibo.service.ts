import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Amiibo, AmiiboResponse } from '../models/amiibo';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {
  API_URL = 'http://www.amiiboapi.com/api/amiibo/';

  constructor(private http: HttpClient) { }

  getAllAmiibo(): Observable<Amiibo> {
    return this.http.get<AmiiboResponse>(this.API_URL)
      .pipe(mergeMap((response: AmiiboResponse) => from<Amiibo>(response.amiibo)));
  }
}
