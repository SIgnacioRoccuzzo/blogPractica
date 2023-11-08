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
        titulo: "Los secretos del estilo vintage",
        texto: "Descubre cómo adoptar el encanto retro con prendas y accesorios de épocas pasadas. Aprende a combinar colores y texturas para lograr el look perfecto.",
        autor: "Eva Modista",
        fecha: "Octubre 5, 2023",
        categoria: "vintage",
        imagen: "https://i.pinimg.com/736x/50/a9/09/50a90994c3aa625d3bc4447b26f1fbec.jpg"
      },
      {
        titulo: "Tendencias de moda otoño-invierno",
        texto: "Explora las últimas tendencias de la temporada y mantente a la moda durante los meses fríos. Descubre los colores y patrones que marcarán la diferencia.",
        autor: "Carlos Estilista",
        fecha: "Septiembre 15, 2023",
        categoria: "tendencias",
        imagen: "https://media.vogue.es/photos/630c7bc142c9939e82c4570e/2:3/w_2560%2Cc_limit/GettyImages-1316674697.jpg"
      },
      {
        titulo: "Consejos para un look de oficina impecable",
        texto: "Aprende a vestirte de manera profesional y elegante para el trabajo con nuestros consejos de estilo. Descubre los accesorios que harán resaltar tu atuendo.",
        autor: "Ana Fashionista",
        fecha: "Agosto 20, 2023",
        categoria: "oficina",
        imagen: "https://static.elcomercio.es/www/multimedia/202001/08/media/cortadas/alex-riviere-look-oficina-invierno-kvXD--732x900@El%20Comercio.jpg"
      },
      {
        titulo: "Elegancia en eventos formales",
        texto: "Descubre cómo destacar en eventos formales con trajes y vestidos elegantes. Consejos para lucir sofisticado en cualquier ocasión.",
        autor: "Sophia Elegance",
        fecha: "Julio 10, 2023",
        categoria: "eventos",
        imagen: "https://media.revistagq.com/photos/5d318ff1f96ef400080aa13b/1:1/w_1370,h_1370,c_limit/he_highsummer_0519_10.jpg"
      },
      {
        titulo: "Moda juvenil y vibrante",
        texto: "Explora la moda juvenil y llena de energía. Colores vivos, patrones atrevidos y prendas que reflejan tu personalidad única.",
        autor: "Lucas Trendy",
        fecha: "Junio 5, 2023",
        categoria: "juvenil",
        imagen: "https://i.pinimg.com/736x/b7/cf/35/b7cf35a1aca2d6411fc6655ddc3fe07a.jpg"
      },
      {
        titulo: "Estilo urbano en la gran ciudad",
        texto: "Adéntrate en el mundo del estilo urbano y descubre cómo adaptar la moda de la ciudad a tu guardarropa. Tips para destacar en la jungla de asfalto.",
        autor: "Mia Urbana",
        fecha: "Mayo 12, 2023",
        categoria: "urbano",
        imagen: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1677245743.jpg?resize=980:*"
      },
      {
        titulo: "Ropa sostenible y ecológica",
        texto: "Apuesta por la moda sostenible y ecológica. Descubre marcas y prendas que cuidan el planeta mientras te hacen lucir genial.",
        autor: "Carlos EcoFashion",
        fecha: "Abril 3, 2023",
        categoria: "sostenible",
        imagen: "https://iodreams.com/upload/noticias/3/annie-detalle.jpg"
      },
      {
        titulo: "Estilo playero y relajado",
        texto: "Prepárate para la playa con un estilo relajado y lleno de frescura. Ropa ligera, accesorios veraniegos y consejos para disfrutar del sol y el mar.",
        autor: "Sofia Beachwear",
        fecha: "Marzo 17, 2023",
        categoria: "playa",
        imagen: "https://images.hola.com/imagenes/seleccion/20200726172655/looks-playa-tendencia/0-850-468/look-playa-m.jpg?tx=w_500"
      },
      {
        titulo: "Look elegante cualquier ocasión",
        texto: "Descubre cómo destacar en eventos formales con trajes y vestidos elegantes. Consejos para lucir sofisticado en cualquier ocasión.",
        autor: "Sophia Elegance",
        fecha: "Febrero 9, 2023",
        categoria: "eventos",
        imagen: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1039575166.jpg"
      },
      {
        titulo: "Estilo contemporáneo para cada ocasión",
        texto: "Descubre cómo abrazar un estilo contemporáneo que se adapte a cualquier ocasión. Desde la oficina hasta una noche en la ciudad, te tenemos cubierto.",
        autor: "Laura Contempo",
        fecha: "Febrero 2, 2023",
        categoria: "contemporaneo",
        imagen: "https://www.lolitamoda.com/uploads/ckeditor/pictures/320/content_346a27fbb0b4cd6c36df49778971bc46.jpg"
      },
      {
        titulo: "Misterio y elegancia en la moda nocturna",
        texto: "Adéntrate en el mundo de la moda nocturna con prendas que reflejan misterio y elegancia. Te mostramos cómo destacar en eventos de noche.",
        autor: "Victor Nocturno",
        fecha: "Enero 8, 2023",
        categoria: "eventos",
        imagen: "https://i.pinimg.com/564x/8c/91/44/8c9144086e77636592560703b2f64d85.jpg"
      },
      {
        titulo: "Moda inspirada en la naturaleza",
        texto: "Explora la moda inspirada en la belleza natural. Descubre prendas con estampados y colores que rinden homenaje a la naturaleza.",
        autor: "Olivia Naturaleza",
        fecha: "Diciembre 12, 2022",
        categoria: "sostenible",
        imagen: "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/This-instagram-account-is-dedicated-to-show-parallels-between-fashion-and-nature-and-its-hard-not-to-fall-in-love-with-it-60506b60a95e4__700.jpg"
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

}
