import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categorias: string[] = [];
  posteos: Post[] = [];
  postsServices = inject(PostServiceService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

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

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;
    if (selectedCategory === 'todas') {
      this.router.navigate(['/posts']);
    } else {
      this.router.navigate(['/category', selectedCategory]);
    }
  }
}
