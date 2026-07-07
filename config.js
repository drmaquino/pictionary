// ==================== CONFIGURACIÓN DEL JUEGO ====================
// Editá este archivo para modificar parámetros del juego sin tocar el código.

const CONFIG = {
  teams: {
    min: 1,
    max: 4,
    default: 2,
    defaults: [
      { name: 'Equipo Azul', color: '#0984e3' },
      { name: 'Equipo Rojo', color: '#d63031' },
      { name: 'Equipo Verde', color: '#00b894' },
      { name: 'Equipo Naranja', color: '#e17055' }
    ],
    randomNames: [
      'Los Picassos', 'Los Garabatos', 'Trazos Locos', 'Los Crayones',
      'Manos de Tijera', 'Los Borrones', 'Arte Pop', 'Los Doodles',
      'Pinceladas', 'Los Manchones', 'Tinta Fresca', 'Los Grafitis',
      'Paleta Salvaje', 'Los Acuarelas', 'Carboncillo', 'Los Pixeles',
      'Trazo Fino', 'Los Bocetos', 'Pluma Libre', 'Los Rotuladores'
    ],
    maxNameLength: 20
  },
  timer: {
    options: [30, 60, 90, 120],
    default: 60,
    warningThreshold: 20,
    dangerThreshold: 10,
    tickSoundFromSeconds: 5
  },
  categories: [
    { id: 'todas', label: 'Todas' },
    { id: 'animales', label: 'Animales' },
    { id: 'objetos', label: 'Objetos' },
    { id: 'acciones', label: 'Acciones' },
    { id: 'peliculas', label: 'Peliculas' },
    { id: 'deportes', label: 'Deportes' },
    { id: 'comida', label: 'Comida' },
    { id: 'profesiones', label: 'Profesiones' }
  ],
  confetti: {
    count: 50,
    colors: ['#6c5ce7', '#0984e3', '#d63031', '#00b894', '#fdcb6e', '#e17055', '#00cec9']
  }
};
