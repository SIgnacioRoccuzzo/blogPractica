import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interface/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  postsService = inject(PostServiceService)
  formulario: FormGroup;

  constructor() {


    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.minLength(10)
      ]),
      autor: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ])
    })
  }

  ngOnInit() {
    return this.formulario;
  }
  onSubmit() {
    this.postsService.create(this.formulario.value)
  }


}
