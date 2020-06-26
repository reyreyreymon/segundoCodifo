import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessService {

  constructor(private http: HttpClient) { }
  enviarMensaje(body) {
    return this.http.post('http://localhost:3000/formulario', body);
    }
}
