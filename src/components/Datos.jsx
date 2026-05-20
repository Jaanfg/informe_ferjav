import { Database } from 'lucide-react'

function Datos() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-indigo-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          6. Tratamiento de Datos Personales (Ley 19.628)
        </h2>
      </div>

      <p>&nbsp;</p>

      <p className="text-slate-600 leading-relaxed mb-8">
        La caída de los servicios de GTD tuvo un impacto directo en el acceso y manejo de información 
        personal de millones de chilenos, regulado por la Ley 19.628 sobre Protección de la Vida Privada.
      </p>

      
      <div className="text-slate-700 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">1. Tipos de Datos Comprometidos</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Datos Personales:</strong> Nombres, Rut, direcciones y correos electrónicos de usuarios de plataformas afectadas como Mercado Público.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Datos Sensibles:</strong> La imposibilidad de acceder a historiales médicos o emitir bonos en Fonasa expone datos que revelan el estado de salud físico o mental de la población. La ley prohíbe su tratamiento sin consentimiento y exige medidas de seguridad reforzadas.
          </p>
         <p>

          <p>&nbsp;</p>
          
          Como establece el Artículo 10 de la Ley 19.628: "No pueden ser objeto de tratamiento los datos sensibles, salvo cuando la ley lo autorice, exista consentimiento del titular o sean datos necesarios para la determinación u otorgamiento de beneficios de salud".    
            </p>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">2. Afectación de los Derechos ARCO</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Acceso:</strong> Durante más de una semana, los ciudadanos se vieron impedidos de ejercer su derecho básico de acceder a su propia información de salud o judicial. Esto vulnera el Artículo 12, que dicta textualmente: "Toda persona tiene derecho a exigir a quien sea responsable de un banco, que se dedique en forma pública o privada al tratamiento de datos personales, información sobre los datos relativos a su persona".
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Rectificación, Cancelación y Oposición:</strong> El ejercicio de estos derechos fue imposible mientras duró la contingencia.
            </p>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">3. Responsable vs. Encargado del Tratamiento</h3>

            <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">El Responsable:</strong> Las instituciones públicas deciden sobre la finalidad y el uso de los datos.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">El Encargado:</strong> GTD actúa como encargado, prestando el servicio de almacenamiento. Las instituciones públicas deben responder ante la ciudadanía y demostrar que exigieron los estándares de seguridad adecuados a su proveedor.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Datos