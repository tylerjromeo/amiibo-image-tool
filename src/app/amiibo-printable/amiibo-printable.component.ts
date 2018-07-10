import { Component, OnInit, Input } from '@angular/core';
import { Amiibo } from '../models/amiibo';

@Component({
  selector: 'amiibo-printable',
  templateUrl: './amiibo-printable.component.html',
  styleUrls: ['./amiibo-printable.component.css']
})
export class AmiiboPrintableComponent implements OnInit {

  @Input()
  amiibo: Amiibo;

  constructor() { }

  ngOnInit() {
  }

}
