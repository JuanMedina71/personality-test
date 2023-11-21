import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { personalidad } from 'src/app/interfaces/personaldad';

const ELEMENT_DATA: personalidad[] = [
  {nombre: 'jacc', result: 'ENTP', descripcion: 'tuenisix'},
  {nombre: 'juan medina', result: 'ENTP', descripcion: 'tuenisix'},
  {nombre: 'ernesto', result: 'DUMB', descripcion: 'tuenisix'},
  {nombre: 'juan perez', result: 'PENE', descripcion: 'tuenisix'},
  {nombre: 'jack', result: 'RICO', descripcion: 'tuenisix'},
];

@Component({
  selector: 'app-catalogoj',
  templateUrl: './catalogoj.component.html',
  styleUrls: ['./catalogoj.component.css']
})
export class CatalogojComponent {
  displayedColumns: string[] = ['nombre', 'result', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}