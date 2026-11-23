import { HttpClient } from "@angular/common/http";
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
}