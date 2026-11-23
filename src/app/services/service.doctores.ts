import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()

export class ServiceDoctores {
    constructor (
        private _http: HttpClient,
    ) {}

    async getDoctoresAsync(): Promise<Doctor[]> {
        let request = "api/doctores"
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Doctor[]>(url)
        )
    }

    async crearDoctorAsync(doctor: Doctor): Promise<void> {
        let request = "api/doctores/"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post<void>(url, doctor, {headers: header})
        )
    }

    async eliminarDoctorAsync(id: number): Promise<any> {
        let request = "api/doctores/" + id
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.delete<void>(url)
        )
    }

    async modificarDoctorAsync(iddoctor: number, idhospital: number): Promise<any> {
    let request = "api/doctores/updatedoctorhospital/" + iddoctor + "/" + idhospital;
    let url = environment.apiejemplos + request;

    return await firstValueFrom(this._http.put(url, {}));
    }

}