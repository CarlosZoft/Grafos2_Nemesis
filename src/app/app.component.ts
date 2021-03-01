import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grafos2-nemesis';
  tableForm = new FormGroup({
    rowValue: new FormControl(10),
    columnValue: new FormControl(10),
  });

  get rowValue() : Number { return this.tableForm.value.rowValue; }
  
  get columnValue() : Number { return this.tableForm.value.columnValue; }
}
