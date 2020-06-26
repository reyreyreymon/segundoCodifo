import { MessService } from './../../service/mensaje/mess.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form;
  constructor(private formBuilder: FormBuilder, private mensajeService: MessService){
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid){
      console.log(this.form.value);
      this.mensajeService.enviarMensaje(this.form.value).subscribe(() => {
        console.log("Correo enviado");
    });
    console.log("Sali");
    } else {
      alert('Llena todos los campos');
    }
  }

}
