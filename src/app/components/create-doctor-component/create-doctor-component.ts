import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDoctores } from '../../services/service.doctores';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-create-doctor-component',
  standalone: false,
  styleUrl: './create-doctor-component.css',
  templateUrl: './create-doctor-component.html',
})
export class CreateDoctorComponent {
  @ViewChild("cajaiddoctor") cajaiddoctor!: ElementRef
  @ViewChild("cajaapellido") cajaapellido!: ElementRef
  @ViewChild("cajaespecialidad") cajaespecialidad!: ElementRef
  @ViewChild("cajasalario") cajasalario!: ElementRef
  @ViewChild("cajaidhospital") cajaidhospital!: ElementRef
  mensaje!: string


  constructor (
    private _service: ServiceDoctores,
    private _cdr: ChangeDetectorRef
  ) {}


  async insertarDoctor(): Promise<void> {
    let iddoc = parseInt(this.cajaiddoctor.nativeElement.value)
    let apellido = this.cajaapellido.nativeElement.value
    let especialidad = this.cajaespecialidad.nativeElement.value
    let salario = parseInt(this.cajasalario.nativeElement.value)
    let idhospi = parseInt(this.cajaidhospital.nativeElement.value)

    let doctor = new Doctor(iddoc, apellido, especialidad, salario, idhospi)
    await this._service.crearDoctorAsync(doctor);
    this.mensaje = "Doctor creado con exito"
    this._cdr.detectChanges()
    
  }
}
