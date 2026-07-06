// ==================== BANCO DE PALABRAS ====================
// Editá este archivo para agregar, quitar o modificar palabras.
// Cada categoría es un array de strings. Podés agregar categorías nuevas también.
// Si agregás una categoría nueva, recordá agregarla como botón en index.html.

const WORDS = {
  animales: [
    'Perro', 'Gato', 'Elefante', 'Jirafa', 'Serpiente', 'Mariposa', 'Delfin', 'Aguila',
    'Tortuga', 'Caballo', 'Leon', 'Mono', 'Pinguino', 'Tiburon', 'Oso', 'Conejo',
    'Loro', 'Pulpo', 'Cangrejo', 'Cocodrilo', 'Ballena', 'Rana', 'Hormiga', 'Araña',
    'Caracol', 'Murcielago', 'Cebra', 'Hipopotamo', 'Rinoceronte', 'Camello',
    'Flamenco', 'Gorila', 'Pez espada', 'Medusa', 'Camaleon', 'Iguana',
    'Hamster', 'Oveja', 'Vaca', 'Cerdo'
  ],
  objetos: [
    'Paraguas', 'Escalera', 'Guitarra', 'Telescopio', 'Licuadora', 'Semaforo',
    'Bicicleta', 'Helicóptero', 'Silla', 'Tijeras', 'Martillo', 'Lámpara',
    'Reloj', 'Espejo', 'Llave', 'Cámara', 'Mochila', 'Globo', 'Vela',
    'Anillo', 'Corona', 'Brújula', 'Ancla', 'Cohete', 'Patineta',
    'Auriculares', 'Control remoto', 'Calculadora', 'Candado', 'Linterna',
    'Dado', 'Rueda', 'Cometa', 'Trampolín', 'Hamaca', 'Termómetro',
    'Matafuegos', 'Microscopio', 'Balanza', 'Destornillador'
  ],
  acciones: [
    'Nadar', 'Cocinar', 'Bailar', 'Escalar', 'Pintar', 'Pescar', 'Volar',
    'Surfear', 'Dormir', 'Estornudar', 'Aplaudir', 'Saltar la cuerda',
    'Hacer malabares', 'Tocar el piano', 'Remar', 'Patinar', 'Bucear',
    'Esquiar', 'Boxear', 'Meditar', 'Trotar', 'Barrer', 'Planchar',
    'Cortar el pasto', 'Hacer yoga', 'Manejar', 'Leer', 'Escribir',
    'Cantar', 'Silbar', 'Llorar', 'Reir', 'Bostezar', 'Abrazar',
    'Trepar un árbol', 'Saltar en charcos', 'Soplar velas', 'Tomar mate',
    'Andar en monopatín', 'Hacer una fogata'
  ],
  peliculas: [
    'Titanic', 'Star Wars', 'Harry Potter', 'Toy Story', 'El Rey León',
    'Frozen', 'Jurassic Park', 'Batman', 'Spider-Man', 'Shrek',
    'Buscando a Nemo', 'Los Increíbles', 'Piratas del Caribe', 'Matrix',
    'Indiana Jones', 'Ratatouille', 'Monsters Inc', 'Aladdin', 'Cenicienta',
    'Rapunzel', 'Coco', 'Up', 'Wall-E', 'Mi Villano Favorito',
    'Kung Fu Panda', 'Madagascar', 'La Era de Hielo', 'Cars',
    'Intensamente', 'Moana', 'Encanto', 'Luca', 'Soul', 'Valiente',
    'Avengers', 'ET', 'Volver al Futuro', 'Los cazafantasmas',
    'Jumanji', 'Karate Kid'
  ],
  deportes: [
    'Fútbol', 'Tenis', 'Básquet', 'Natación', 'Golf', 'Boxeo', 'Surf',
    'Esgrima', 'Gimnasia', 'Snowboard', 'Voleibol', 'Rugby', 'Béisbol',
    'Hockey', 'Ciclismo', 'Skate', 'Lucha libre', 'Tiro con arco',
    'Kayak', 'Escalada', 'Polo', 'Ping pong', 'Handball', 'Atletismo',
    'Remo', 'Paracaidismo', 'Karting', 'Salto en largo', 'Lanzamiento de bala',
    'Nado sincronizado', 'Waterpolo', 'Artes marciales', 'Taekwondo',
    'Judo', 'Patinaje artistico sobre ruedas', 'Patinaje artistico sobre hielo',
    'Maratón', 'BMX', 'Equitación'
  ],
  comida: [
    'Pizza', 'Hamburguesa', 'Sushi', 'Helado', 'Panqueque', 'Empanada',
    'Asado', 'Torta', 'Pochoclo', 'Sándwich', 'Taco', 'Fideos',
    'Ensalada', 'Sopa', 'Medialunas', 'Alfajor', 'Dulce de leche',
    'Banana split', 'Hot dog', 'Papas fritas', 'Omelette', 'Flan',
    'Churros', 'Donas', 'Waffles', 'Milanesa', 'Ravioles', 'Ñoquis',
    'Paella', 'Guiso', 'Brownie', 'Galletitas', 'Tostada', 'Licuado',
    'Mate', 'Chocolate caliente', 'Canelones', 'Locro', 'Choclo',
    'Brochette'
  ],
  profesiones: [
    'Bombero', 'Astronauta', 'Chef', 'Doctor', 'Piloto', 'Detective',
    'Pirata', 'Mago', 'Payaso', 'Fotógrafo', 'Carpintero', 'Electricista',
    'Plomero', 'Veterinario', 'Dentista', 'Profesor', 'Policía', 'Cartero',
    'Músico', 'Actor', 'Pintor', 'Escultor', 'Bailarín', 'Pintor',
    'Peluquero', 'Panadero', 'Jardinero', 'Mecánico', 'Arqueólogo',
    'Bibliotecario', 'Locutor', 'Periodista', 'Granjero', 'Pescador',
    'Minero', 'Buzo', 'Guardavidas', 'Malabarista', 'Ninja', 'Mozo'
  ]
};
