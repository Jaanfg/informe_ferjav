import { CheckCircle } from 'lucide-react'

function Conclusiones() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-emerald-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          7. Conclusiones y Recomendaciones de Seguridad
        </h2>
      </div>

      <p className="text-slate-600 leading-relaxed mb-8">
        El caso del ransomware a GTD en 2023 marca un antes y un después en la ciberseguridad corporativa 
        y estatal en Chile. Demuestra que la infraestructura crítica no está libre de ataques y que las 
        consecuencias trascienden el daño económico.
      </p>
      
      <div className="text-slate-600 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Reflexión Final</h3>
          <div className="pl-4 border-l-2 border-slate-200">
            <p>
              El análisis legal evidencia que el foco no puede estar solo en la judicialización reactiva. 
              Las empresas y el Estado deben migrar de una postura reactiva a una proactiva, asumiendo que 
              los incidentes de seguridad van a ocurrir y que la capacidad de recuperación y el cumplimiento 
              de la Ley 19.628 son un gran factor diferenciador.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Recomendaciones de Seguridad</h3>
          <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">1. Arquitectura Zero Trust:</strong> Exigir autenticación estricta para cada usuario y dispositivo, segmentando las redes para evitar que un ransomware se propague.
            </p>
            <p>
              <strong className="text-slate-700">2. Planes de Continuidad y Recuperación:</strong> Las instituciones del Estado deben exigir a sus proveedores la ejecución periódica de simulacros de recuperación ante desastres.
            </p>
            <p>
              <strong className="text-slate-700">3. Respaldo Fijo:</strong> Mantener copias de seguridad desconectadas de la red principal y con tecnología que los haga inalterables para evitar que los atacantes cifren los respaldos.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Conclusiones