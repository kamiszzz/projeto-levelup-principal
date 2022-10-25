import { User } from './../../../../model/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

/*   @Input()
  userData!: User; */

  @Input() userData: User = new User;
  
  constructor(){ }

  ngOnInit(): void {

  }

}
