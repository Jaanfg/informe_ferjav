import { Terminal } from 'lucide-react'

function Prompts() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="text-slate-700" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          8. Bitácora de Uso de IA
        </h2>
      </div>

      <p>&nbsp;</p>

      <p className="text-slate-700 leading-relaxed mb-8">
        <strong className="text-slate-700">Herramienta empleada:</strong> Gemini.
      </p>

      
      <div className="text-slate-700 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 1: Marco Normativo</h3>

      <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700 block mb-1">Prompt utilizado:</strong>&nbsp;"Actúa como experto en ciberseguridad y legislación chilena. Analiza el caso de ransomware a GTD (Octubre 2023) y genera el marco normativo aplicable. Debes incluir y justificar al menos 4 normas: la Ley 21.459, Ley 19.628, ISO/IEC 27001 y NIST CSF."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> 02_marco_ferjav.md
            </p>
            <p>
              <strong className="text-slate-700 block mb-1">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se aceptó el análisis de la Ley 21.459 y 19.628 por ser precisas al contexto chileno. Se corrigió la descripción de NIST CSF para enfocarla más en la falla de la fase de "Protección" de la IaaS de GTD.
            </p>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 2: Tipificación de Delitos</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700 block mb-1">Prompt utilizado:</strong>&nbsp;"Clasifica las acciones del grupo cibercriminal (ataque de ransomware a la IaaS de GTD en 2023) con los artículos específicos de la Ley 21.459 sobre Delitos Informáticos de Chile. Identifica qué artículo aplica para el acceso a los servidores y cuál para el cifrado de las máquinas virtuales."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> 03_delitos_ferjav.md
            </p>
            <p>
              <strong className="text-slate-700 block mb-1">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se aceptó la relación entre el Art. 1 (Ataque a la integridad de datos) para el cifrado y el Art. 4 para el acceso ilícito. Se agregó manualmente la mención a la "receptación de datos" (Art. 8).
            </p>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 3: Configuración</h3>

            <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700 block mb-1">Prompt utilizado:</strong>&nbsp;"En mi proyecto de Vite con React, instalé Tailwind CSS, pero al ejecutar npm run dev las clases no hacen efecto y el texto se ve sin estilos. ¿Cómo configuro Vite y mis archivos CSS para solucionarlo?"
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> Configuración inicial del proyecto (vite.config.js y index.css).
            </p>
            <p>
              <strong className="text-slate-700 block mb-1">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se aceptó el diagnóstico de incompatibilidad de versiones. Se corrigió el enfoque aceptando la sugerencia de la IA de hacer un "downgrade" a Tailwind CSS v3, reconfigurando el archivo tailwind.config.js e index.css, lo cual solucionó el problema visual.
            </p>
          </div>
        </div>


        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 4: Generación de Componentes React</h3>

            <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700 block mb-1">Prompt utilizado:</strong>&nbsp;"Crea un componente React llamado Resumen.jsx que muestre un resumen del caso GTD en una tarjeta blanca con sombras. Usa clases de Tailwind CSS para el diseño e incluye un ícono de Lucide React en el título."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> Componente Resumen.jsx.
            </p>
            <p>
              <strong className="text-slate-700 block mb-1">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se aceptó la estructura del jsx devuelta por la IA. Se ajustaron manualmente los márgenes y colores específicos para que hicieran juego visual con el componente principal.
            </p>
          </div>
        </div>

        <p>&nbsp;</p>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 5: Ajustes de espaciado y formato</h3>
          
          <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong>&nbsp;"Los textos en mis componentes jsx se ven muy amontonados. ¿Qué etiqueta o código puedo usar para separar cada bloque de texto y darle más espacio? Además, en Prompts.jsx los textos están pegados a los dos puntos después de la etiqueta (&lt;strong&gt;). ¿Cómo lo arreglo?"
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong>&nbsp;Todos los componentes jsx (Prompts.jsx, Conclusiones.jsx, Datos.jsx, Responsabilidades.jsx, Comparacion.jsx, Delitos.jsx, Marco.jsx).
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se aceptó la solución entregada por la IA de aplicar la etiqueta de párrafo vacía con un espacio irrompible en múltiples secciones de los componentes. Además, se aceptó el uso de una entidad HTML después de las etiquetas "strong" en el componente Prompts.jsx para separar el texto sin necesidad de saltar a la línea de abajo.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Interacción 6: Diseño de Interfaz y Contraste Visual</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong>&nbsp;"Quiero que el fondo de mi página (App.jsx) cambie a un color más oscuro pero sin que las tarjetas se oscurezcan o transparenten. Quiero que las tarjetas sigan siendo blancas pero con bordes marcados usando clases compatibles con Tailwind CSS v3."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong>&nbsp;Archivo principal App.jsx y el contenedor principal (&lt;div&gt;) de los 8 componentes de la aplicación.
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong>&nbsp;Se corrigió la sugerencia inicial de la IA de usar un fondo oscuro y se optó por un gris claro en App.jsx. Para las tarjetas, se se configuraron de idénticamente los 8 componentes para lograr un fondo blanco con bordes marcados y definidos.
            </p>
          </div>
        </div>

        <p>&nbsp;</p>


        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Reflexión final</h3>


          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              El uso de Gemini fue fundamental en la etapa de investigación legal, permitiendo conectar los hechos del ataque a GTD con los artículos específicos de las leyes chilenas actualizadas.
            </p>
            <p>
              Además, en el desarrollo de React y Tailwind, la IA sirvió principalmente como herramienta de diagnóstico de errores, demostrando que la comprensión del código sigue siendo responsabilidad del desarrollador para ejecutar soluciones y resolver conflictos de versiones.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Prompts