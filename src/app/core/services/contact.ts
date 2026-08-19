import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environment";
import { Observable } from "rxjs";

const API_URL=`${environment.API_URL}/api/contact`

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    success: boolean
}

@Injectable({providedIn: 'root'})
export class ContactService {
    http = inject(HttpClient)

    sendMessage(data: ContactMessage): Observable<ContactResponse> {
        return this.http.post<ContactResponse>(API_URL, data)
    }
}