import { Component, OnInit } from '@angular/core';
import { AmiiboService } from './service/amiibo.service';
import { Amiibo } from './models/amiibo';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private amiiboApi: AmiiboService) { }

  ngOnInit(): void {
    this.amiiboApi.getAllAmiibo()
    .pipe(take(10))
    .subscribe((amiibo: Amiibo) => console.log(amiibo.name));
  }
}
