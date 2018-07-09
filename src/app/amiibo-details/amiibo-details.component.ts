import { Component, OnInit, Input } from '@angular/core';
import { Amiibo } from '../models/amiibo';

@Component({
  selector: 'amiibo-details',
  templateUrl: './amiibo-details.component.html',
  styleUrls: ['./amiibo-details.component.css']
})
export class AmiiboDetailsComponent implements OnInit {

  @Input()
  amiibo: Amiibo;

  constructor() { }

  ngOnInit() {
    console.log(this.amiibo);
  }

}
