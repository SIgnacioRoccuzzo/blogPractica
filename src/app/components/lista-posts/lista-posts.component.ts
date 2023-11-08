import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';




@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {


  postsServices = inject(PostServiceService)
  activatedRoute = inject(ActivatedRoute)

  posteos: Post[];
  categorias: string[];

  constructor() {
    this.categorias = [];
    this.posteos = [];

  }
  ngOnInit() {
    this.posteos = this.postsServices.getAll();
    this.categorias = this.postsServices.getCategorias()


  }

  onClickRemove(indice: number) {
    this.posteos.splice(indice, 1)
  }

  changeCat($event: any) {
    if ($event.target.value === 'todas') {
      this.posteos = this.postsServices.getAll();
    } else {
      this.posteos = this.postsServices.getCategory($event.target.value);
    }
    console.log($event)
  }


}