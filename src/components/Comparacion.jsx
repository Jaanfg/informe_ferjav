import { Layers } from 'lucide-react'

function Comparacion() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Layers className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          4. Comparación de Marcos (ISO 27001 vs NIST CSF)
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800">
              <th className="p-4 border-b-2 border-slate-200 font-bold">Característica</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold">ISO/IEC 27001</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold">NIST CSF</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 divide-y divide-slate-200">
            
            <tr className="hover:bg-slate-50 transition-colors">
              {/* Primera columna en slate-800 simulando los <h3> */}
              <td className="p-4 font-bold text-slate-800">Enfoque Principal</td>
              <td className="p-4">Sistema de Gestión de Seguridad de la Información.</td>
              <td className="p-4">Fases prácticas: Identificar, Proteger, Detectar, Responder y Recuperar.</td>
            </tr>
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Certificación</td>
              <td className="p-4 text-green-600 font-medium">Sí, es certificable internacionalmente.</td>
              <td className="p-4">No certificable, es un marco de adopción voluntaria.</td>
            </tr>
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Nivel de Detalle</td>
              <td className="p-4">Muy riguroso y normativo. Exige mucha documentación.</td>
              <td className="p-4">Flexible. Funciona como un perfil de ciberseguridad adaptable.</td>
            </tr>
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Uso Común</td>
              <td className="p-4">Cumplimiento legal y exigencias de clientes/proveedores.</td>
              <td className="p-4">Evaluar rápidamente la madurez de seguridad y comunicar riesgos.</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comparacion