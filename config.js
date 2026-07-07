// ==================== CONFIGURACIÓN DEL JUEGO ====================
// Editá este archivo para modificar parámetros del juego sin tocar el código.

const CONFIG = {
  teams: {
    defaultNames: ['Equipo Azul', 'Equipo Rojo'],
    maxNameLength: 20
  },
  timer: {
    options: [10, 30, 60, 90, 120],
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
