import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  forms!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    // ... código previo para inicializar el formulario ...
    this.forms = this.fb.group({
      nombreCompleto: this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+(?: [A-Z][a-z]+)*$')]]
      }),
      extrovertido: this.fb.group({
        emprendedor: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        actuaLuegoPiensa: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        piensaVozAlta: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        muchaEnergia: ['', [Validators.required , this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        variasCosasVez: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        hablaMasEscucha: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        facilConocer: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        distraerseFacilidad: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        gustaGente: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]]
      }),
      introvertido: this.fb.group({
        reservado: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        piensaLuegoActua: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        piensaVozBaja: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        energiaTranquila: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        concentrarseUnaCosa: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        escuchaMasHabla: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        vidaMuyPrivada: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        granCapacidadConcentracion: ['', [Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        aGustoSolas: ['', [Validators.required, this.validarValor, Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]]
      }),
      sensorial: this.fb.group({
        ExpPropiaS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        RealistaS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        DestrezasAprendS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        InstruccionesDetalladasS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        DetallesHechosS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        SolucionesPracticasS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ConcentraHechosEspS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        RitmoUniformeS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        AquiAhoraS: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      }),
      intuitivo: this.fb.group({
        InstintosI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ImaginativoI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        DestrezasNuevasI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        DescubrirPorSiMismoI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        PercibeNuevaDiferenteI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        AdmiraIdeasCreativasI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        TieneIdeasVisionI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        RafagasEnergiaI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ImplicacionesFuturasI: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      }),
      racional: this.fb.group({
        DefectosR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ConLogicaR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        FrioR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ObjetivamenteR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        NoPersonalR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        MetasR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        HonestoR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ValHonestidadR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ArgDiversionR: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      }),
      emocional: this.fb.group({
        CualidadesE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ConSensacionesE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        CalidoE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ValoresE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        PersonalE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ReconocimientoE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        DiplomaticoE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ValArmoniaE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        EvitaDiscE: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      }),
      calificador: this.fb.group({
        TrabajarPrimeroC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        TerminarProyectosC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        AgendasCalificadorC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        TomarDecisionesC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        PuntualidadC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        AtenersePlanesC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        CosasDecC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        SerioConvencionalC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        JustificaReglasC: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      }),
      perceptivo: this.fb.group({
        JugarPrimeroP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        EmpezarProyectosP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        LibertadEspontaneidadP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        PosponeDecisionesP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        ImpuntualidadP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        FlexibilidadP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        OpcionesAbiertasP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        RelajadoConvencionalP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
        CuestionaReglasP: ['',[Validators.required, this.validarValor(), Validators.min(0), Validators.max(10), Validators.pattern('^(10|[0-9])$')]],
      })
    });

    this.forms.setValidators(this.validarSumaMaxima());
  }

  validarValor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = parseInt(control.value, 10);
  
      if (isNaN(value) || value === 5) {
        return { valorInvalido: true };
      }
  
      return null;
    };
  }
  
  // Onsubmit(){
  //   if(this.forms.valid){
  //     Swal.fire('exito', 'Todo correcto', 'success')
  //   }else{
  //     Swal.fire('error', 'Recuerda que tienes que llenar todos los campos, no puedes usar el valor 5 y que el minimo y maximo son 0 y 10 respectivamente', 'error')
  //   }
  // }
  validarSumaMaxima(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const extrovertFormGroup = formGroup.get('extrovertido') as FormGroup;
      const introvertFormGroup = formGroup.get('introvertido') as FormGroup;
      const sensorialFormGroup = formGroup.get('sensorial') as FormGroup;
      const intuitivoFormGroup = formGroup.get('intuitivo') as FormGroup;
      const racionalFormGroup = formGroup.get('racional') as FormGroup;
      const emocionalFormGroup = formGroup.get('emocional') as FormGroup;
      const calificadorFormGroup = formGroup.get('calificador') as FormGroup;
      const perceptivoFormGroup = formGroup.get('perceptivo') as FormGroup;

      if (!extrovertFormGroup || !introvertFormGroup || !sensorialFormGroup || !intuitivoFormGroup 
        || !racionalFormGroup || !emocionalFormGroup || !calificadorFormGroup || !perceptivoFormGroup) {
        return null;
      }
  
      const extrovertValues = Object.values(extrovertFormGroup.value).map((val: any) => parseInt(val, 10) || 0);
      const introvertValues = Object.values(introvertFormGroup.value).map((val: any) => parseInt(val, 10) || 0);
      const sensorialValues = Object.values(sensorialFormGroup.value).map((val: any) => parseInt(val, 10) || 0);
      const intuitivoValues = Object.values(intuitivoFormGroup.value).map((val: any) => parseInt(val, 10) || 0);
      const racionalValues  = Object.values(racionalFormGroup.value).map((val: any)=> parseInt(val, 10) || 0);
      const emocionalValues = Object.values(emocionalFormGroup.value).map((val: any)=> parseInt(val, 10) || 0);
      const calificadorValues = Object.values(calificadorFormGroup.value).map((val: any)=> parseInt(val, 10) || 0);
      const perceptivoValues = Object.values(perceptivoFormGroup.value).map((val:any)=> parseInt(val, 10) || 0);

      for (let i = 0; i < extrovertValues.length; i++) {
        if (extrovertValues[i] + introvertValues[i] !== 10) {
          return { sumaInvalidaExtIntro: true };
        }
      }
  
      for (let i = 0; i < sensorialValues.length; i++) {
        if (sensorialValues[i] + intuitivoValues[i] !== 10) {
          return { sumaInvalidaSenInt: true };
        }
      }

      for (let i = 0; i < racionalValues.length; i++) {
        if (racionalValues[i] + emocionalValues[i] !== 10) {
          return { sumaInvalidaSenInt: true };
        }
      }

      for (let i = 0; i < calificadorValues.length; i++) {
        if (calificadorValues[i] + perceptivoValues[i] !== 10) {
          return { sumaInvalidaExtIntro: true };
        }
      }
  
      return null;
    };
  }

  calcularResultado() {
    const extrovertValues = this.getGroupValues('extrovertido');
    const introvertValues = this.getGroupValues('introvertido'); 
    const sensorialValues = this.getGroupValues('sensorial'); 
    const intuitivoValues = this.getGroupValues('intuitivo'); 
    const racionalValues  = this.getGroupValues('racional');
    const emocionalValues = this.getGroupValues('emocional')
    const calificadorValues = this.getGroupValues('calificador')
    const perceptivoValues = this.getGroupValues('perceptivo')
    // Agregar otras variables para los grupos adicionales si es necesario

    const extrovertSum = this.sumValues(extrovertValues);
    const introvertSum = this.sumValues(introvertValues);
    const sensorialSum = this.sumValues(sensorialValues);
    const intuitivoSum = this.sumValues(intuitivoValues);
    const racionalSum = this.sumValues(racionalValues);
    const emocionalSum = this.sumValues(emocionalValues);
    const calificadorSum = this.sumValues(calificadorValues);
    const perceptivoSum = this.sumValues(perceptivoValues)

    // Calcular sumas de otros grupos si es necesario
    
    if(this.forms.valid){
      let result = '';
    
    if (extrovertSum > introvertSum) {
      result += 'E';
    } else {
      result += 'I';
    }

    if (sensorialSum > intuitivoSum) {
      result += 'S';
    } else {
      result += 'N';
    }

    if (racionalSum > emocionalSum) {
      result += 'T';
    } else {
      result += 'F';
    }

    if (calificadorSum > perceptivoSum) {
      result += 'J';
    } else {
      result += 'P';
    }
    Swal.fire('Resultado', `Tu tipo es: ${result}`, 'success');
    }else{
      Swal.fire('error', 'Recuerda que tienes que llenar todos los campos, no puedes usar el valor 5 y que el minimo y maximo son 0 y 10 respectivamente', 'error')
    }
    
  }

  private getGroupValues(groupName: string): number[] {
    const group = this.forms.get(groupName) as FormGroup;
    return Object.values(group.value).map((val: any) => parseInt(val, 10) || 0);
  }

  private sumValues(values: number[]): number {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
}