import { Users } from 'lucide-react'

function Responsabilidades() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Users className="text-purple-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          5. Actores y Responsabilidades Legales
        </h2>
      </div>

      <p>&nbsp;</p>

      <p className="text-slate-600 leading-relaxed mb-8">
        El incidente de GTD involucra a distintos actores con niveles de responsabilidad 
        diferenciados según el marco legal chileno abarcando ámbitos penales, civiles y administrativos.
      </p>
      
      <div className="text-slate-700 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">1. El Grupo Cibercriminal (Atacantes)</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Responsabilidad Penal:</strong> Son los autores materiales de los delitos en la Ley 21.459. Si son identificados, enfrentan penas de cárcel.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Responsabilidad Civil:</strong> Además de la persecución penal, están obligados a indemnizar económicamente los daños causados a la infraestructura de GTD y del Estado.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Desafío Legal:</strong> Dada la naturaleza transnacional de estos grupos, la persecución penal es extremadamente compleja y requiere cooperación internacional.
            </p>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2">2. GTD (El Proveedor IaaS)</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Responsabilidad Civil (Contractual):</strong> GTD tiene responsabilidad directa frente a sus clientes por el incumplimiento de los Acuerdos de Nivel de Servicio (SLA) respecto a la disponibilidad de sus sistemas.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Responsabilidad Administrativa (Ley de Datos Personales):</strong> Como "Encargado del Tratamiento" de los datos alojados en su nube, GTD debe responder si se demuestra negligencia grave en la custodia de la información.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Responsabilidad Penal (Ley 21.459 - Art. 21):</strong> Si se comprueba que GTD no contaba con un Modelo de Prevención de Delitos efectivo o que el ataque ocurrió por negligencia de sus directivos, la empresa podría enfrentar multas e inhabilitaciones.
            </p>


          </div>
        </div>


        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">3. Las Instituciones Clientes (El Estado/Privados)</h3>

          <p>&nbsp;</p>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200">
            <p>
              <strong className="text-slate-700">Responsabilidad Administrativa:</strong> Las instituciones del Estado son las "Responsables del Tratamiento" ante la ley. Tienen el deber de garantizar continuidad de sus servicios y responder por fallas en sus propios planes de contingencia.
            </p>

            <p>&nbsp;</p>

            <p>
              <strong className="text-slate-700">Responsabilidad Civil:</strong> El Estado podría enfrentar demandas por "falta de servicio" de parte de ciudadanos que sufrieron perjuicios económicos o de salud.
            </p>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Responsabilidades