import { User } from 'src/model/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {
  @Input()
  userData: User = new User;
  constructor() { }

  ngOnInit(): void {
  }

}
