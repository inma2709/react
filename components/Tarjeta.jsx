import './Tarjeta.css';

function Tarjeta({ titulo, descripcion, imagen, textoBoton, color, colorFondo }) {
  return (
    <div 
      className="tarjeta" 
      style={{ 
        borderLeftColor: color,
        backgroundColor: colorFondo || '#ffffff'
      }}
    >
      {imagen && (
        <div className="tarjeta-imagen">
          <img src={imagen} alt={titulo} />
        </div>
      )}
      
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        
        {textoBoton && (
          <button className="tarjeta-boton" style={{ backgroundColor: color }}>
            {textoBoton}
          </button>
        )}
      </div>
    </div>
  );
}

export default Tarjeta;
