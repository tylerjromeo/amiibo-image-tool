import { Component, OnInit } from '@angular/core';
import { AmiiboService } from './service/amiibo.service';
import { Amiibo } from './models/amiibo';
import { Observable } from 'rxjs';

@Component({
  selector: 'amiibo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  amiibos$: Observable<Amiibo[]> = this.amiiboApi.getAllAmiibo();
  constructor(private amiiboApi: AmiiboService) { }
}
