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

  amiibos$: Observable<Amiibo[]> = this.amiiboApi.getAmiiboByIds([
    "00000000-00000002",
    "00000100-00190002",
    "00000000-03710102",
    "01000000-034d0902",
    "00020000-03720102",
    "00050000-03730102",
    "01000000-03540902",
    "01050000-03580902",
    "01060000-03590902",
    "01070000-035a0902",
    "01080000-035b0902",
    "36000000-02590002",
    "00030000-00020002",
    "00050000-00140002",
    "00060000-00150002",
    "01010000-000e0002",
    "05810000-001c0002",
    "07800000-002d0002",
    "21030000-002a0002",
    "19060000-00240002"
  ]);
  constructor(private amiiboApi: AmiiboService) { }
}
