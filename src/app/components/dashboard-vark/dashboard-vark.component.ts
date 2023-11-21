import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-vark',
  templateUrl: './dashboard-vark.component.html',
  styleUrls: ['./dashboard-vark.component.css']
})
export class DashboardVarkComponent implements OnInit {
  @ViewChild('graficaVark') graficaVark!: ElementRef;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.obtenerDatosDesdeFirestore();
  }

  async obtenerDatosDesdeFirestore() {
    const testVCollection = collection(this.firestore, 'testV');

    try {
      const querySnapshot = await getDocs(testVCollection);
      const datos = querySnapshot.docs.map(doc => doc.data());

      // Aquí puedes manejar los datos recuperados de Firestore
      console.log(datos);

      // Llama a la función para procesar y mostrar la gráfica
      this.mostrarGrafica(datos);
    } catch (error) {
      console.error('Error al obtener datos desde Firestore:', error);
    }
  }

  mostrarGrafica(datos: any[]) {
    const resultCounts = this.contarResultados(datos);

    Chart.register(...registerables);

    const ctx = this.graficaVark.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(resultCounts),
        datasets: [{
          label: 'Resultados de VARK',
          data: Object.values(resultCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Resultados de Test Vark'
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  }

  contarResultados(datos: any[]): { [key: string]: number } {
    return datos.reduce((countMap, item) => {
      // Ajusta según la estructura real de tus datos
      const result = item.tipoPredominante || 'Sin resultado';
      countMap[result] = (countMap[result] || 0) + 1;
      return countMap;
    }, {} as { [key: string]: number });
  }
}
