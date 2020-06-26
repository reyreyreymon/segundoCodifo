import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../../service/crud/crud.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any;
  producto_descripcion: string;
  producto_marca: string;
  producto_precio: number;

  editable:boolean = false;
  mensaje: string;//alta

  form;

  constructor(public crudService:CrudService, private _snackBar: MatSnackBar, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      producto_descripcion1: ['', Validators.required],
      producto_marca1: ['', Validators.required],
      producto_precio1: ['', [Validators.required]]
    });
  }

  submit(){
    console.log(this.form.value);
    this.crearProducto();
  }

  crearProducto(){
    let Record ={};
    Record['descripcion'] = this.producto_descripcion;
    Record['marca'] = this.producto_marca;
    Record['precio'] = this.producto_precio;

    if(this.producto_descripcion==="" || this.producto_marca ==="" || this.producto_precio === null){
      return;
    }

    this.crudService.crear_Nuevo_Producto(Record)
    .then(res =>{
      this.producto_descripcion = "";
      this.producto_marca = "";
      this.producto_precio = null;

      console.log(res);
      this._snackBar.open("Producto agredado", "Correctamente", {
          duration: 2000,
      });

    }).catch(error =>{

      this._snackBar.open("Error en agregar produto", error, {
        duration: 2000,
    });
      console.log(error);

    });
  }

  ngOnInit(): void {
    //Para mostrar los prodcutos, obtenemos el arreglo
    this.crudService.obtener_Productos()
    .subscribe(data => {
      this.productos = data.map(e => {
        return {
          id: e.payload.doc.id,
          editable:false,
          descripcion: e.payload.doc.data()['descripcion'],
          marca: e.payload.doc.data()['marca'],
          precio: e.payload.doc.data()['precio']
        };
      })
      console.log(this.productos);
    });
  }

  editarProducto(Record){
    Record.editable = true;
    Record.editdescripcion = Record.descripcion;
    Record.editmarca = Record.marca;
    Record.editprecio = Record.precio;
  }

  actualizarProducto(item){
    let Record ={};
    Record['descripcion'] = item.editdescripcion;
    Record['marca'] = item.editmarca;
    Record['precio'] = item.editprecio;
    //mandamos al servicio.
    this.crudService.actualizar_Producto(item.id,Record);
    //bloqueamos los input para que ya no sean editables.
    item.editable = false;
    this._snackBar.open("Producto actualizado", "Correctamente", {
      duration: 2000,
  });
  }

  borrarProducto(id){
    this.crudService.eliminar_Producto(id);
    this._snackBar.open("Producto eliminado de la base", "Correctamente", {
      duration: 2000,
  });
  }

}

