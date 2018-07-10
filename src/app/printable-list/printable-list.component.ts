import { Component, OnInit, Input } from '@angular/core';
import { Amiibo } from '../models/amiibo';

@Component({
  selector: 'amiibo-printable-list',
  templateUrl: './printable-list.component.html',
  styleUrls: ['./printable-list.component.css']
})
export class PrintableListComponent implements OnInit {

  @Input()
  amiibos: Amiibo[];

  constructor() { }

  ngOnInit() {
  }

}
