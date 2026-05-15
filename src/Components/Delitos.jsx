import { ShieldAlert } from 'lucide-react'

function Delitos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-6">
      <div className="flex items-center gap-3 mb-6">
        <ShieldAlert className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          3. Tipificación de Delitos (Ley 21.459)
        </h2>
      </div>
      <div className="text-slate-600 flex flex-col gap-4">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Art. 4 (Acceso Ilícito):</strong> Sanciona el ingreso no autorizado a la red y servidores de la nube de GTD.
          </li>
          <li>
            <strong>Art. 1 (Ataque a la integridad de datos):</strong> Castiga laencriptación no autorizada de los archivos y bases de datos de los clientes.
          </li>
          <li>
            <strong>Art. 2 (Ataque a la integridad del sistema):</strong> Tipifica la paralización completa de los servicios IaaS y del Data Center.
          </li>
          <li>
            <strong>Art. 8 (Receptación de datos):</strong> Aplicable en caso de comprobarse la exfiltración y comercialización de datos robados en una doble extorsión.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Delitos