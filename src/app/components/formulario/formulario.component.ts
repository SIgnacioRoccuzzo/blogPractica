import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  postsService = inject(PostServiceService);
  formulario: FormGroup;
  categorias = [
    'Vintage',
    'Ropa formal',
    'Ropa de Oficina',
    'Eventos',
    'Ropa Juvenil',
    'Ropa Urbana',
    'Playa',
    'Contemporáneo'
  ];

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      texto: new FormControl(null, Validators.minLength(10)),
      autor: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      imagen: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.formulario.valid) {
      this.postsService.create(this.formulario.value);
      console.log(this.formulario.value);
      this.formulario.reset();
    }
  }
}
