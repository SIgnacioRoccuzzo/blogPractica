import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  postsServices = inject(PostServiceService);
  activatedRoute = inject(ActivatedRoute);

  posteos: Post[] = [];
  categorias: string[] = [];

  constructor() { }

  ngOnInit() {
    this.loadCategories();
    this.activatedRoute.params.subscribe(params => {
      const categoria = params['categoria'];
      if (categoria) {
        this.loadPostsByCategory(categoria);
      } else {
        this.loadPosts();
      }
    });
  }

  loadPosts() {
    this.posteos = this.postsServices.getAll();
  }

  loadCategories() {
    this.categorias = this.postsServices.getCategorias();
  }

  loadPostsByCategory(categoria: string) {
    this.posteos = this.postsServices.getCategory(categoria);
  }

  onClickRemove(indice: number) {
    this.posteos.splice(indice, 1);
  }

  changeCat(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;
    if (selectedCategory === 'todas') {
      this.loadPosts();
    } else {
      this.loadPostsByCategory(selectedCategory);
    }
  }
}
