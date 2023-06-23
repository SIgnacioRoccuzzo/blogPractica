import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: string;
  private arrPosts: Post[];


  constructor() {
    this.posts = '',
      this.arrPosts = [{
        titulo: "Primavera Sound 2022: 12 días de música para celebrar sus 20 años",
        texto: "La espera ha sido larga, han sido dos primaveras llenas de problemas que no han dejado organizar uno de los festivales más esperados de Europa, el Primavera Sound que, este año, ha podido finalmente celebrar su 20 edición, con 12 días de conciertos, eventos y música en toda Barcelona.",
        autor: "Sebastian Roccuzzo",
        imagen: "https://static.emol.cl/emol50/Fotos/2023/03/23/file_20230323111752.jpg",
        fecha: "17/05/2023",
        categoria: "Festivales",
      },
      {
        titulo: "La influencia de la música en nuestra vida",
        texto: "La música es un lenguaje universal que nos acompaña en diferentes momentos de nuestra vida. Desde nuestra infancia, cuando escuchamos canciones de cuna, hasta la adultez, cuando encontramos consuelo en melodías que nos ayudan a procesar nuestras emociones. La música tiene el poder de transportarnos a lugares lejanos, evocar recuerdos y despertar nuestra imaginación. Además, puede unir a las personas y crear conexiones emocionales profundas. La música puede influir en nuestro estado de ánimo de diversas formas. Una melodía alegre puede levantar nuestros ánimos, mientras que una canción triste puede hacernos reflexionar sobre la vida. También puede motivarnos y aumentar nuestra energía durante el ejercicio o ayudarnos a relajarnos después de un largo día.",
        autor: "Ana Rodríguez",
        imagen: "https://i1.wp.com/www.statoquotidiano.it/wp-content/uploads/2021/07/img_musicoterapia_intelliform.jpg?fit=1600%2C1030&ssl=1",
        fecha: "15/06/2023",
        categoria: "Rock"
      },
      {
        titulo: "La magia del jazz: historia y expresión musical",
        texto: "El jazz es un género musical que nació a principios del siglo XX en Estados Unidos y se ha convertido en una forma de expresión única y emocionante. Caracterizado por su improvisación, ritmo y swing, el jazz ha influido en la música y la cultura de todo el mundo. En este artículo, exploraremos la historia del jazz desde sus raíces en el blues y el ragtime hasta sus diversos estilos y subgéneros, como el bebop, el cool jazz y el jazz fusion. Descubriremos cómo el jazz ha evolucionado a lo largo de los años y ha sido interpretado por artistas legendarios como Louis Armstrong, Miles Davis y Ella Fitzgerald. Además, analizaremos la importancia del jazz como forma de expresión artística y su capacidad para transmitir emociones y contar historias.",
        autor: "Carlos Martínez",
        imagen: "https://www.radiofrance.fr/s3/cruiser-production/2017/07/c829c74e-82a2-4407-a136-40453d3106e0/870x489_jazz.jpg",
        fecha: "10/07/2023",
        categoria: "Jazz"
      }

      ];
  }

  getAll(): Post[] {

    return this.arrPosts;
  }

  getCategorias(): string[] {
    return [...new Set(this.arrPosts.map(posts => posts.categoria))]
  }
  getCategory(categoria: string): Post[] {
    return this.arrPosts.filter(posts => posts.categoria === categoria);
  }

  create(nuevoPost: Post): void {
    this.arrPosts.push(nuevoPost);
    console.log(this.arrPosts);
  }
  getByCategoria(categoria: string): Post[] {
    return this.arrPosts.filter(posts => posts.categoria === categoria)

  }
}
