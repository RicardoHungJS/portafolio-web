import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EmailInput } from '../../interfaces/emailInput.interface';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private readonly http: HttpClient) {}

  baseUri = environment.baseUri;

  emailUri = `${this.baseUri}mailer`;

  sendEmail(emailInput: EmailInput): Observable<string> {
    return this.http.post(this.emailUri, emailInput, {
      responseType: 'text',
    });
  }
}
