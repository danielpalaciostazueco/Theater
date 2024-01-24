import ObrasModel from '../models/obra.models.js'
import mongoose from 'mongoose'
import { DB_STRING_EDIT } from './config.js'

const obras = [
  {
    name: 'Esperando a Godot',
    description: 'Una obra teatral absurda que sigue a dos personajes, Vladimir y Estragon, mientras esperan en un lugar desolado a alguien llamado Godot, explorando temas de la existencia, la alienación y la esperanza.',
    authors: [
      'Samuel Beckett'
    ],
    duration: 2,
    actors: [
      'Alexander Montgomery',
      'Isabella Ramirez',
      'Benjamin Worthington',
      'Olivia Hawthorne',
      'Nathaniel Harrington'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN2.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/una-escena-de-esperando-a-godot.jpg'
    ],
    dates: [
      1709499600,
      1710021600,
      1710802800
    ],
    slug: 'godot',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot.jpg'
  },

  {

    name: 'El Fantasma de la Ópera',
    description: 'Una icónica obra de teatro musical que narra la historia de un misterioso y desfigurado hombre conocido como el Fantasma, que vive en los pasadizos de la Ópera de París y se obsesiona con una joven y talentosa soprano, Christine.',
    authors: [
      'Andrew Lloyd Webber'
    ],
    duration: 2.5,
    actors: [
      'Sophia Anderson',
      'Daniel Blackwood',
      'Elena Rodriguez',
      'Nicholas Smith',
      'Isabella Johnson'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera_FN.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/Fantasma-operea_FN2.jpg'

    ],
    dates: [
      1704659400,
      1705093200,
      1705950000

    ],
    slug: 'fantasma',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera.jpg'
  },
  {

    name: 'Esto No Es Un Show',
    description: 'Un audaz espectáculo que desafía las convenciones, combinando elementos de teatro, danza y performance art. La trama sigue a un grupo ecléctico de artistas mientras exploran temas de identidad, realidad y percepción a través de actuaciones vanguardistas.',
    authors: [
      'Valentina Moreno',
      'Carlos Ruiz'
    ],
    duration: 1.75,
    actors: [
      'Miguel Ángel Jiménez',
      'Laura González',
      'José Martín',
      'Carmen Sánchez',
      'Diego Torres'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder2.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder3.jpg'

    ],
    dates: [
      1714604400,
      1715810400,
      1716238800
    ],
    slug: 'show',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/Galder.jpeg'
  },
  {

    name: 'Hamlet',
    description: 'Una de las tragedias más emblemáticas de William Shakespeare, centrada en la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre. La obra explora temas complejos como la locura, la traición, la venganza y la moralidad.',
    authors: [
      'William Shakespeare'
    ],
    duration: 3,
    actors: [
      'Alexander Knight',
      'Sarah Miller',
      'David Johnson',
      'Emily White',
      'Richard Brown'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN2.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN.jpg'
    ],
    dates: [

      1717266600,
      1717700400,
      1718056800

    ],
    slug: 'hamlet',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet.jpg'
  },
  {

    name: 'El Rey León',
    description: 'Un musical espectacular basado en la famosa película animada de Disney. La historia sigue las aventuras de Simba, un joven león que debe enfrentar numerosos desafíos para reclamar su lugar como el legítimo rey de la sabana. El musical es conocido por su impresionante uso de disfraces, marionetas y efectos visuales para recrear el ambiente de África.',
    authors: [
      'Irene Mecchi',
      'Jonathan Roberts',
      'Linda Woolverton'
    ],
    duration: 2.5,
    actors: [
      'Michael James',
      'Elizabeth Green',
      'Thomas Hill',
      'Rachel Adams',
      'William Parker'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG3.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeonImg1.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG2.avif'
    ],
    dates: [
      1719867600,
      1720638000,
      1721505600

    ],
    slug: 'leon',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeon.webp'
  },
  {

    name: 'Bodas de sangre',
    description: 'Una comedia romántica contemporánea que sigue la historia de varias parejas que se preparan para sus respectivas bodas. La obra teje una trama llena de enredos amorosos, malentendidos cómicos y momentos de reflexión sobre las relaciones y el matrimonio.',
    authors: [
      'Ana García',
      'Luis Hernández'
    ],
    duration: 2,
    actors: [
      'Elena Sánchez',
      'Carlos Pérez',
      'María López',
      'José Torres',
      'Laura Jiménez'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF2.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF.jpg'

    ],
    dates: [

      1722632400,
      1723492800,
      1724274000
    ],
    slug: 'bodas',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre.jpg'
  },
  {
    name: 'B-Vocal',
    description: 'Un aclamado grupo vocal que destaca por su habilidad para fusionar a cappella y comedia en sus actuaciones. B-Vocal cautiva al público con su mezcla única de música, humor y la sorprendente habilidad de crear sonidos instrumentales con sus voces, explorando diversos géneros musicales desde el pop hasta el clásico.',
    authors: [
      'Alberto Marca',
      'Carlos Marco'
    ],
    duration: 1.5,
    actors: [
      'Augusto González',
      'Fernando Ardévol',
      'Juan Luis García'
    ],
    images: [
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_NF.jpg',
      'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b.jpg'
    ],
    dates: [

      1725224400,
      1725402600,
      1726009200
    ],
    slug: 'vocal',
    cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_LG.jpg'
  }
]
const rellenar = async () => {
  await ObrasModel.deleteMany()
  await ObrasModel.insertMany(obras)
  console.log('Base de datos rellenada')
  process.exit(0)
}

mongoose.connect(DB_STRING_EDIT).catch((err) => {
  console.error('Error al conectar con la base de datos, se volverá a intentar en 5 segundos' + err)
}
).then(() => console.log('Conexión exitosa con la base de datos'))
  .then(() => rellenar())
