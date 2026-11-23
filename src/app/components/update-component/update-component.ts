import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { ServiceDoctores } from '../../services/service.doctores';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent{
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaespecialidad") cajaespecialidad!: ElementRef
  @ViewChild("cajasalario") cajasalario!: ElementRef
  @ViewChild("cajaidhospi") cajaidhospi!: ElementRef
  mensaje!: string;

  constructor(
    private _service: ServiceDoctores,
    private _cdr: ChangeDetectorRef,
  ) {}


  async modificarDoctorAsync(doctor: Doctor): Promise<void> {
    let nombre = this.cajanombre.nativeElement.value
    let especialidad = this.cajaespecialidad.nativeElement.value
    let salario = parseInt(this.cajasalario.nativeElement.value)
    let idhospi = parseInt(this.cajaidhospi.nativeElement.value)
}
}
