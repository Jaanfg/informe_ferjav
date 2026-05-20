import { Layers } from 'lucide-react'

function Comparacion() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Layers className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          4. Comparación de Marcos Regulatorios
        </h2>
      </div>

      <p>&nbsp;</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800">
              <th className="p-4 border-b-2 border-slate-200 font-bold text-sm uppercase tracking-wider">Eje de Comparación</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold text-sm uppercase tracking-wider">Ley 21.459 (Chile)</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold text-sm uppercase tracking-wider">ISO/IEC 27001</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold text-sm uppercase tracking-wider">GDPR (UE)</th>
              <th className="p-4 border-b-2 border-slate-200 font-bold text-sm uppercase tracking-wider text-blue-600">Aplicabilidad al Caso GTD</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 divide-y divide-slate-200">
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">1. Enfoque Principal</td>
              <td className="p-4 text-sm"><strong>Punitivo / Reactivo:</strong> Busca castigar a los responsables una vez que ya ocurrió.</td>
              <td className="p-4 text-sm"><strong>Preventivo:</strong> Busca establecer controles para evitar incidentes o minimizar su impacto.</td>
              <td className="p-4 text-sm"><strong>Protección de Derechos:</strong> Su foco es proteger la privacidad de los ciudadanos y sus datos personales.</td>
              <td className="p-4 text-sm bg-blue-50/40 font-medium text-slate-900">Permite penalizar a los atacantes, evidencia la falla de controles de GTD y protege los datos expuestos de los usuarios.</td>
            </tr>
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">2. Obligatoriedad legal</td>
              <td className="p-4 text-sm"><strong>Obligatorio:</strong> Aplica a toda entidad en territorio chileno.</td>
              <td className="p-4 text-sm"><strong>Voluntario:</strong> Estándar de la industria, exigido en licitaciones y contratos.</td>
              <td className="p-4 text-sm"><strong>Obligatorio:</strong> Exigible por ley para quien procese datos de ciudadanos europeos.</td>
              <td className="p-4 text-sm bg-blue-50/40 font-medium text-slate-900">GTD está bajo la ley chilena pero estándares internacionales como ISO y GDPR son exigidos por clientes corporativos estatales.</td>
            </tr>
            
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-800">3. Manejo de Incidentes</td>
              <td className="p-4 text-sm">No establece protocolos para la gestión interna solo clasifica el delito a denunciar.</td>
              <td className="p-4 text-sm">Exige tener un plan de Respuesta a Incidentes documentado y en mejora continua.</td>
              <td className="p-4 text-sm">Obliga legalmente a notificar a las autoridades sobre brechas de datos en un plazo máximo de 72 horas.</td>
              <td className="p-4 text-sm bg-blue-50/40 font-medium text-slate-900">GTD debió aplicar su plan al apagar la red lo que evidenció la falta de una ley de reporte rápido de brechas tipo GDPR en Chile.</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comparacion