import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vark',
  templateUrl: './vark.component.html',
  styleUrls: ['./vark.component.css'],
})
export class VarkComponent {
  form: FormGroup;
  selectedCounts: Record<string, number> = {};
  answers: Record<string, string[]> = {};
  tipoPredominante: string = '';
  resultadoTest: string = '';
  descripcionResultado: string = '';
  nombre: string = ''; // Variable para almacenar el nombre

  // Opciones para cada categoría VARK
  opcionesV = ['b1', 'b2', 'd3', 'c4', 'd5', 'b6', 'd7', 'b8', 'a9', 'b10', 'c11', 'd12', 'd13', 'c14', 'd15', 'd16'];
  opcionesA = ['a1', 'a2', 'a3', 'd4', 'c5', 'd6', 'b7', 'd8', 'b9', 'a10', 'a11', 'c12', 'c13', 'd14', 'c15', 'c16'];
  opcionesR = ['c1', 'c2', 'c3', 'a4', 'b5', 'c6', 'c7', 'a8', 'c9', 'd10', 'b11', 'b12', 'b13', 'b14', 'b15', 'a16'];
  opcionesK = ['d1', 'd2', 'b3', 'b4', 'a5', 'a6', 'a7', 'c8', 'd9', 'c10', 'd11', 'a12', 'a13', 'a14', 'a15', 'b16'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      a1: [false],
      b1: [false],
      c1: [false],
      d1: [false],
      a2: [false],
      b2: [false],
      c2: [false],
      d2: [false],
      a3: [false],
      b3: [false],
      c3: [false],
      d3: [false],
      a4: [false],
      b4: [false],
      c4: [false],
      d4: [false],
      a5: [false],
      b5: [false],
      c5: [false],
      d5: [false],
      a6: [false],
      b6: [false],
      c6: [false],
      d6: [false],
      a7: [false],
      b7: [false],
      c7: [false],
      d7: [false],
      a8: [false],
      b8: [false],
      c8: [false],
      d8: [false],
      a9: [false],
      b9: [false],
      c9: [false],
      d9: [false],
      a10: [false],
      b10: [false],
      c10: [false],
      d10: [false],
      a11: [false],
      b11: [false],
      c11: [false],
      d11: [false],
      a12: [false],
      b12: [false],
      c12: [false],
      d12: [false],
      a13: [false],
      b13: [false],
      c13: [false],
      d13: [false],
      a14: [false],
      b14: [false],
      c14: [false],
      d14: [false],
      a15: [false],
      b15: [false],
      c15: [false],
      d15: [false],
      a16: [false],
      b16: [false],
      c16: [false],
      d16: [false],
    });

    this.initializeSelectedCounts();
  }

  initializeSelectedCounts() {
    const preguntas = ['pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6', 'pregunta7', 'pregunta8',
      'pregunta9', 'pregunta10', 'pregunta11', 'pregunta12', 'pregunta13', 'pregunta14', 'pregunta15', 'pregunta16'];
    preguntas.forEach((pregunta) => (this.selectedCounts[pregunta] = 0));
  }

  updateSelectedCount(questionName: string, controlName: string) {
    const control = this.form.get(controlName);

    if (control?.value) {
      const selectedCount = this.selectedCounts[questionName] || 0;

      if (selectedCount < 2) {
        // Incrementa el contador general para esta pregunta si aún no se han seleccionado dos opciones
        this.selectedCounts[questionName] = selectedCount + 1;
      } else {
        // Desmarca el checkbox y muestra una alerta si ya se seleccionaron dos opciones
        control.setValue(false);
        this.showAlert();
      }
    } else {
      // Decrementa el contador general para esta pregunta si se deselecciona una opción
      this.selectedCounts[questionName] = Math.max((this.selectedCounts[questionName] || 0) - 1, 0);
    }
  }

  showAlert() {
    Swal.fire({
      icon: 'warning',
      title: '¡Advertencia!',
      text: 'No se pueden seleccionar más de 2 opciones por pregunta.',
      confirmButtonText: 'Entendido',
    });
  }

  getSelectedAnswers(): Record<string, string[]> {
    const selectedAnswers: Record<string, string[]> = {};

    for (const controlName in this.form.controls) {
      if (this.form.controls.hasOwnProperty(controlName)) {
        const control = this.form.get(controlName);
        if (control?.value) {
          const questionName = controlName.substring(0, controlName.length - 1);
          if (!selectedAnswers[questionName]) {
            selectedAnswers[questionName] = [];
          }
          selectedAnswers[questionName].push(controlName);
        }
      }
    }

    return selectedAnswers;
  }

  onFinishTest() {
    this.answers = this.getSelectedAnswers();

    // Verificar si se han seleccionado respuestas
    const totalSelectedAnswers = Object.keys(this.answers).reduce(
      (total, pregunta) => total + this.answers[pregunta].length,
      0
    );

    if (this.nombre.trim() === '') {
      // Mostrar un mensaje de error si el nombre está vacío
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes ingresar tu nombre.',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    if (totalSelectedAnswers === 0) {
      // Mostrar un mensaje de error si no se han seleccionado respuestas
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes seleccionar al menos una respuesta antes de enviar el formulario.',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    // Contadores para cada categoría VARK
    let contadorV = 0;
    let contadorA = 0;
    let contadorR = 0;
    let contadorK = 0;

    // Verifica cada respuesta y aumenta el contador correspondiente
    for (const pregunta in this.answers) {
      if (this.answers.hasOwnProperty(pregunta)) {
        const respuestas = this.answers[pregunta];

        respuestas.forEach((respuesta) => {
          if (this.opcionesV.includes(respuesta)) {
            contadorV++;
          } else if (this.opcionesA.includes(respuesta)) {
            contadorA++;
          } else if (this.opcionesR.includes(respuesta)) {
            contadorR++;
          } else if (this.opcionesK.includes(respuesta)) {
            contadorK++;
          }
        });
      }
    }

    // Determinar el tipo predominante
    if (contadorV >= contadorA && contadorV >= contadorR && contadorV >= contadorK) {
      this.tipoPredominante = 'Visual';
      this.descripcionResultado = 'Las personas con preferencia visual aprenden mejor a través de imágenes, gráficos y mapas mentales. Responden bien a la información visual.';
    } else if (contadorA >= contadorV && contadorA >= contadorR && contadorA >= contadorK) {
      this.tipoPredominante = 'Auditivo';
      this.descripcionResultado = 'Aquellos con preferencia auditiva aprenden mejor a través del sonido y la audición. Prefieren explicaciones verbales, discusiones y el uso de la voz.';
    } else if (contadorR >= contadorV && contadorR >= contadorA && contadorR >= contadorK) {
      this.tipoPredominante = 'Lectura y Escritura';
      this.descripcionResultado = ' Las personas con preferencia de lectura/escritura aprenden mejor a través de la lectura y la escritura. Les gusta tomar notas, leer textos y escribir resúmenes.';
    } else {
      this.tipoPredominante = 'Kinestésico';
      this.descripcionResultado = 'Aprendizaje kinestésico, donde las personas aprenden mejor mediante la experiencia práctica y la acción física. Prefieren aprender haciendo y participando en actividades prácticas.';
    }

    // Muestra los contadores y el tipo predominante
    const message = `Hola ${this.nombre}\n\ntu tipo predominante es: ${this.tipoPredominante} \n\nDescripción: ${this.descripcionResultado}`;
    this.resultadoTest = this.tipoPredominante;
    // Resto del código para mostrar el mensaje de éxito y reiniciar el formulario
    Swal.fire({
      icon: 'success',
      title: 'Test completado',
      text: 'Tus respuestas han sido registradas.\n' + message,
      confirmButtonText: 'OK',
    }).then(() => {
      this.answers = {};
      this.form.reset();
      this.initializeSelectedCounts(); // Restablece los contadores al reiniciar el formulario
      this.tipoPredominante = ''; // Restablece el tipo predominante al reiniciar el formulario
      this.nombre = '';
    });

    console.log(this.answers)
  }
}
