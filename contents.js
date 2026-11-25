// Versión: 9th_Design v5.43 - Centralized Content & Menu Data with Smoke Control
window.MENU_CONFIG = {
  // Configuración general del establecimiento
  restaurante: "9th_Design",
  moneda: "€",
  totalPlatos: 15,

  // Listado maestro de platos gastronómicos y modelos 3D asociados
  platos: [
    {
      id: "01",
      nombre: "Ensalada César",
      precio: "18",
      archivoGLB: "Plato_01.glb",
      humo: true, // Plato frío: sin humo
      descripcion: "Delicada selección de lechugas tiernas combinadas con pechuga asada a baja temperatura, lascas de Parmigiano Reggiano curado 24 meses, crujientes dados de pan artesanal y un aliño tradicional emulsionado suavemente con toques de anchoa del Cantábrico y limón fresco. Un clásico atemporal elaborado con técnicas de alta cocina para garantizar una textura envolvente en cada bocado."
    },
    {
      id: "02",
      nombre: "Pizza Diávola",
      precio: "18",
      archivoGLB: "Plato_02.glb",
      humo: true, // Plato caliente: con humo
      descripcion: "Masa madre de fermentación lenta horneada a la piedra, base de tomate San Marzano DOP, mozzarella fior di latte fundente y una cuidada selección de salame piccante calabrés, terminado con finas láminas de guindilla fresca y un hilo de aceite aromatizado con orégano silvestre."
    },
    {
      id: "03",
      nombre: "Cheeseburger",
      precio: "18",
      archivoGLB: "Plato_03.glb",
      humo: true, // Plato caliente: con humo
      descripcion: "Carne 100% de vaca madurada picada al momento, fundida con doble loncha de queso cheddar inglés curado, cebolla caramelizada lentamente, pepinillos encurtidos artesanos y salsa especial de la casa en pan brioche artesanal ligeramente tostado con mantequilla."
    },
    {
      id: "04",
      nombre: "Burrata italiana",
      precio: "18",
      archivoGLB: "Plato_04.glb",
      humo: true,
      descripcion: "Corazón cremoso de burrata de Puglia acompañada de tomates cherry confitados en aceite virgen extra, pesto verde genovés elaborado al mortero, piñones tostados crujientes y una reducción aterciopelada de vinagre balsámico tradicional de Módena."
    },
    {
      id: "05",
      nombre: "Pizza de la casa",
      precio: "18",
      archivoGLB: "Plato_05.glb",
      humo: true,
      descripcion: "Nuestra receta insignia con crema de trufa negra, setas silvestres salteadas al vino blanco, queso scamorza ahumado y prosciutto di Parma añadido al final del horneado para preservar todos sus matices aromáticos y textura sedosa."
    },
    {
      id: "06",
      nombre: "Ensalada Caprese",
      precio: "18",
      archivoGLB: "Plato_06.glb",
      humo: true, // Plato frío: sin humo
      descripcion: "Láminas intercaladas de tomate corazón de buey de huerta y mozzarella de búfala campana, aderezadas con hojas frescas de albahaca morada, escamas de sal marina ahumada y aceite monovarietal de aceituna arbequina de primera extracción."
    },
    {
      id: "07",
      nombre: "Pizza especial",
      precio: "18",
      archivoGLB: "Plato_07.glb",
      humo: true,
      descripcion: "Combinación gourmet de higos frescos de temporada, queso gorgonzola dulce, nueces pacanas tostadas y un ligero glaseado de miel de flores silvestres sobre una base blanca y crujiente de fermentación de 48 horas."
    },
    {
      id: "08",
      nombre: "Ensalada César",
      precio: "18",
      archivoGLB: "Plato_08.glb",
      humo: true, // Plato frío: sin humo
      descripcion: "Delicada selección de lechugas tiernas combinadas con pechuga asada a baja temperatura, lascas de Parmigiano Reggiano curado 24 meses, crujientes dados de pan artesanal y un aliño tradicional emulsionado suavemente con toques de anchoa del Cantábrico y limón fresco."
    },
    {
      id: "09",
      nombre: "Pizza Diávola",
      precio: "18",
      archivoGLB: "Plato_09.glb",
      humo: true,
      descripcion: "Masa madre de fermentación lenta horneada a la piedra, base de tomate San Marzano DOP, mozzarella fior di latte fundente y una cuidada selección de salame piccante calabrés, terminado con finas láminas de guindilla fresca y un hilo de aceite aromatizado con orégano silvestre."
    },
    {
      id: "10",
      nombre: "Cheeseburger",
      precio: "18",
      archivoGLB: "Plato_10.glb",
      humo: true,
      descripcion: "Carne 100% de vaca madurada picada al momento, fundida con doble loncha de queso cheddar inglés curado, cebolla caramelizada lentamente, pepinillos encurtidos artesanos y salsa especial de la casa en pan brioche artesanal ligeramente tostado con mantequilla."
    },
    {
      id: "11",
      nombre: "Burrata italiana",
      precio: "18",
      archivoGLB: "Plato_11.glb",
      humo: true,
      descripcion: "Corazón cremoso de burrata de Puglia acompañada de tomates cherry confitados en aceite virgen extra, pesto verde genovés elaborado al mortero, piñones tostados crujientes y una reducción aterciopelada de vinagre balsámico tradicional de Módena."
    },
    {
      id: "12",
      nombre: "Pizza de la casa",
      precio: "18",
      archivoGLB: "Plato_12.glb",
      humo: true,
      descripcion: "Nuestra receta insignia con crema de trufa negra, setas silvestres salteadas al vino blanco, queso scamorza ahumado y prosciutto di Parma añadido al final del horneado para preservar todos sus matices aromáticos y textura sedosa."
    },
    {
      id: "13",
      nombre: "Ensalada Caprese",
      precio: "18",
      archivoGLB: "Plato_13.glb",
      humo: true, // Plato frío: sin humo
      descripcion: "Láminas intercaladas de tomate corazón de buey de huerta y mozzarella de búfala campana, aderezadas con hojas frescas de albahaca morada, escamas de sal marina ahumada y aceite monovarietal de aceituna arbequina de primera extracción."
    },
    {
      id: "14",
      nombre: "Pizza especial",
      precio: "18",
      archivoGLB: "Plato_14.glb",
      humo: true,
      descripcion: "Combinación gourmet de higos frescos de temporada, queso gorgonzola dulce, nueces pacanas tostadas y un ligero glaseado de miel de flores silvestres sobre una base blanca y crujiente de fermentación de 48 horas."
    },
    {
      id: "15",
      nombre: "Pizza de la casa",
      precio: "18",
      archivoGLB: "Plato_15.glb",
      humo: true,
      descripcion: "Nuestra receta insignia con crema de trufa negra, setas silvestres salteadas al vino blanco, queso scamorza ahumado y prosciutto di Parma añadido al final del horneado para preservar todos sus matices aromáticos y textura sedosa."
    }
  ]
};
