import Tarjeta from '../components/Tarjeta.jsx';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>🎯 Demo de Tarjetas con Todas las Props</h1>
      <p>Aquí tienes 6 tarjetas diferentes que muestran todas las combinaciones posibles:</p>
      
      {/* Contenedor para layout horizontal */}
      <div className="tarjetas-container">
        
        {/* Tarjeta 1: COMPLETA - Con imagen, botón y fondo personalizado */}
        <Tarjeta 
          titulo="React Masterclass"
          descripcion="Curso completo de React desde cero hasta nivel avanzado con proyectos reales"
          imagen="/images/react-logo.png"
          textoBoton="Inscribirse ahora"
          color="#61dafb"
          colorFondo="#f0f8ff"
        />
        
        {/* Tarjeta 2: SIN IMAGEN - Solo contenido con botón y fondo */}
        <Tarjeta 
          titulo="JavaScript Avanzado"
          descripcion="Domina conceptos avanzados de JavaScript: closures, promises, async/await"
          textoBoton="Empezar curso"
          color="#f7df1e"
          colorFondo="#fffbf0"
        />
        
        {/* Tarjeta 3: SIN BOTÓN - Con imagen y fondo personalizado */}
        <Tarjeta 
          titulo="Galería de Proyectos"
          descripcion="Explora los proyectos más creativos y innovadores de nuestra comunidad"
          imagen="/images/gallery.jpg"
          color="#9c27b0"
          colorFondo="#faf0ff"
        />
        
      </div>

      {/* Segunda fila de tarjetas */}
      <div className="tarjetas-container">
        
        {/* Tarjeta 4: MINIMALISTA - Solo texto, fondo blanco por defecto */}
        <Tarjeta 
          titulo="¿Sabías que...?"
          descripcion="React fue creado por Facebook en 2013 y ahora es usado por millones de desarrolladores"
          color="#e91e63"
        />
        
        {/* Tarjeta 5: CON IMAGEN - Sin botón, fondo degradado */}
        <Tarjeta 
          titulo="Diseño UI/UX"
          descripcion="Principios fundamentales de diseño para crear interfaces atractivas"
          imagen="/images/design.jpg"
          color="#ff5722"
          colorFondo="linear-gradient(135deg, #fff3e0 0%, #ffccbc 100%)"
        />
        
        {/* Tarjeta 6: SOLO BOTÓN - Sin imagen, con fondo vibrante */}
        <Tarjeta 
          titulo="Comunidad Activa"
          descripcion="Únete a más de 10,000 desarrolladores que aprenden y crecen juntos"
          textoBoton="Unirse gratis"
          color="#4caf50"
          colorFondo="#e8f5e8"
        />
        
      </div>

      <div className="explicacion">
        <h2>🎯 ¿Qué ves aquí?</h2>
        <ul>
          <li><strong>Tarjeta 1:</strong> Completa (imagen + botón + fondo personalizado)</li>
          <li><strong>Tarjeta 2:</strong> Sin imagen (solo contenido + botón + fondo)</li>
          <li><strong>Tarjeta 3:</strong> Sin botón (imagen + contenido + fondo)</li>
          <li><strong>Tarjeta 4:</strong> Minimalista (solo contenido, fondo blanco por defecto)</li>
          <li><strong>Tarjeta 5:</strong> Con imagen y fondo degradado (sin botón)</li>
          <li><strong>Tarjeta 6:</strong> Solo botón (sin imagen, con fondo vibrante)</li>
        </ul>
        
        <div className="nota-importante">
          <h3>🔥 Nota importante:</h3>
          <p>Todas las tarjetas están en contenedores <code>.tarjetas-container</code> para que se muestren horizontalmente. En pantallas pequeñas se reorganizan automáticamente en columnas.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
