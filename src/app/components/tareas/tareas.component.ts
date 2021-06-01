import { Tarea } from './../../models/tarea';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() {
   }

  ngOnInit(): void {
  }

  agregarTarea(){
    //Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    // se añade tarea al array
    this.listTareas.push(tarea);
    // el valor de tarea se inicializa en cero
    this.nombreTarea = ''
  }
  
  eliminarTarea(index: number){
    this.listTareas.splice(index, 1)
  }

  actualizarTarea(index: number, tarea: Tarea){
    this.listTareas[index].estado = !tarea.estado
  }
}
