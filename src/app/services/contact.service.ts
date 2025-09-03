import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../app.config';


export interface ContactPayload { name: string; email: string; message: string }


@Injectable({ providedIn: 'root' })
export class ContactService {
private endpoint = APP_CONFIG.contactEndpoint;


constructor(private http: HttpClient) {}


sendMessage(payload: ContactPayload): Observable<any> {
// Ersetze dies mit deiner echten API oder einem Mock-Endpoint
return this.http.post(this.endpoint, payload);
}
}