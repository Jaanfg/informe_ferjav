import { Terminal } from 'lucide-react'

function Prompts() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="text-slate-700" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          8. Bitácora de Uso de IA
        </h2>
      </div>

      <p className="text-slate-600 leading-relaxed mb-8">
        <strong className="text-slate-700">Herramienta empleada:</strong> Gemini
      </p>
      
      <div className="text-slate-600 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Interacción 1: Marco Normativo</h3>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong> "Actúa como experto en ciberseguridad y legislación chilena. Analiza el caso de ransomware a GTD (Octubre 2023) y genera el marco normativo aplicable. Debes incluir y justificar al menos 4 normas: la Ley 21.459, Ley 19.628, ISO/IEC 27001 y NIST CSF."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong>{' '}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">
                02_marco_ferjav.md
              </code>
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong> Se aceptó el análisis de la Ley 21.459 y 19.628 por ser precisas al contexto chileno. Se corrigió la descripción de NIST CSF para enfocarla más en la falla de la fase de "Protección" de la IaaS de GTD.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Interacción 2: Tipificación de Delitos</h3>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong> "Clasifica las acciones del grupo cibercriminal (ataque de ransomware a la IaaS de GTD en 2023) con los artículos específicos de la Ley 21.459 sobre Delitos Informáticos de Chile. Identifica qué artículo aplica para el acceso a los servidores y cuál para el cifrado de las máquinas virtuales."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong>{' '}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">
                03_delitos_ferjav.md
              </code>
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong> Se aceptó la relación entre el Art. 1 (Ataque a la integridad de datos) para el cifrado y el Art. 4 para el acceso ilícito. Se agregó manualmente la mención a la "receptación de datos" (Art. 8).
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Interacción 3: Configuración</h3>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong> "En mi proyecto de Vite con React, instalé Tailwind CSS, pero al ejecutar <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">npm run dev</code> las clases no hacen efecto y el texto se ve sin estilos. ¿Cómo configuro Vite y mis archivos CSS para solucionarlo?"
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> Configuración inicial del proyecto (<code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">vite.config.js</code> y <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">index.css</code>).
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong> Se aceptó el diagnóstico de incompatibilidad de versiones. Se corrigió el enfoque aceptando la sugerencia de la IA de hacer un "downgrade" a Tailwind CSS v3, reconfigurando el archivo <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">tailwind.config.js</code> e <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">index.css</code>, lo cual solucionó el problema visual.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Interacción 4: Generación de Componentes React</h3>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Prompt utilizado:</strong> "Crea un componente React llamado <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">Resumen.jsx</code> que muestre un resumen del caso GTD en una tarjeta blanca con sombras. Usa clases de Tailwind CSS para el diseño e incluye un ícono de Lucide React en el título."
            </p>
            <p>
              <strong className="text-slate-700">Sección/Componente:</strong> Componente{' '}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">
                Resumen.jsx
              </code>.
            </p>
            <p>
              <strong className="text-slate-700">Qué se aceptó y qué se corrigió:</strong> Se aceptó la estructura del JSX devuelta por la IA. Se ajustaron manualmente los márgenes (<code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">mt-4</code>) y colores específicos (<code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">text-slate-800</code>) para que hicieran juego visual con el componente principal <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">App.jsx</code>.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Reflexión final</h3>
          <div className="pl-4 border-l-2 border-slate-200">
            <p>
              El uso de Gemini fue fundamental en la etapa de investigación legal, permitiendo conectar los hechos del ataque a GTD con los artículos específicos de las leyes chilenas actualizadas. Además, en el desarrollo de React y Tailwind, la IA sirvió principalmente como herramienta de diagnóstico de errores, demostrando que la comprensión del código sigue siendo responsabilidad del desarrollador para ejecutar soluciones y resolver conflictos de versiones.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Prompts