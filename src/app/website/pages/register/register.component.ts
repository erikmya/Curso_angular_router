import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OnExit } from './../../../guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnExit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onExit() {
    const rta = confirm('Logica desde comp');
    return rta;
  }

}
