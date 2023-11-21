// resultados.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { ConnectionDBService } from 'src/app/connection-db.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  formulario: FormGroup;
  resultados: any[] = [];

  constructor(private connectionDBService: ConnectionDBService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['']
    });
  }

  buscarDatosPorNombre() {
    const nombre = this.formulario.value.nombre;

    // Utiliza el servicio para obtener datos por nombre
    this.connectionDBService.getDatosPorNombre(nombre).subscribe((datos) => {
      this.resultados = datos;
    });
  }


  generarPDF(resultado: any) {
    const pdf = new jsPDF.default();
    const margin = 10;
    let yPos = margin;
  
    const addText = (text: string, lineHeight: number, align: 'left' | 'center' | 'right' = 'left') => {
      let xPos = margin;
  
      if (align === 'center') {
        const textWidth = pdf.getTextDimensions(text).w;
        xPos = (pdf.internal.pageSize.width - textWidth) / 2;
      } else if (align === 'right') {
        const textWidth = pdf.getTextDimensions(text).w;
        xPos = pdf.internal.pageSize.width - margin - textWidth;
      }
  
      pdf.text(text, xPos, yPos);
      yPos += lineHeight;
    };
  
    // Ajusta el tamaño de la fuente y el estilo según tus necesidades
    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'bold');
  
    // Agrega el título centrado en mayúsculas y negritas
    addText('FICHA TÉCNICA', 20, 'center');
  
    // Restaura el estilo de fuente normal
    pdf.setFont('helvetica', 'normal');
  
    // Salto de línea
    yPos += 10;
  
    addText(`Nombre: ${resultado.nombre}`, 10);
    addText(`Resultado: ${resultado.result}`, 10);
  
    // Añade la etiqueta "Descripción:" una vez
    addText(`Descripción:`, 10);
  
    // Divide la descripción en líneas más cortas si es necesario
    const descripcionLines = pdf.splitTextToSize(resultado.descripcion, pdf.internal.pageSize.width - 2 * margin);
    descripcionLines.forEach((line: string) => addText(line, 10));
  
    // Guarda el archivo PDF
    pdf.save('resultado.pdf');
  }
}
