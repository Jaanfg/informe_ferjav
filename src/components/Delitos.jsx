import { ShieldAlert } from 'lucide-react'

function Delitos() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <ShieldAlert className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          3. Tipificación de Delitos (Ley 21.459)
        </h2>
      </div>

      <p>&nbsp;</p>
      
      <div className="text-slate-700 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Art. 4 (Acceso Ilícito)</h3>
          <p>Sanciona el ingreso no autorizado a la red y servidores de la nube de GTD.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Art. 1 (Ataque a la integridad de datos)</h3>
          <p>Castiga la encriptación no autorizada de los archivos y bases de datos de los clientes.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Art. 2 (Ataque a la integridad del sistema)</h3>
          <p>Tipifica la paralización completa de los servicios IaaS y del Data Center.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">Art. 8 (Receptación de datos)</h3>
          <p>Aplicable en caso de comprobarse la exfiltración y comercialización de datos robados en una doble extorsión.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Delitos