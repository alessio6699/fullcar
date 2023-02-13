import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-conteinitori',
  templateUrl: './conteinitori.component.html',
  styleUrls: ['./conteinitori.component.css']
})
export class ConteinitoriComponent implements OnInit {

  selectedOption: string;
  options = ['Opzione 1', 'Opzione 2', 'Opzione 3'];


  ngOnInit(): void {
  }
  constructor() {
    this.selectedOption = this.options[0];
  }

}
