import { FileText } from 'lucide-react'

function Resumen() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          1. Resumen del Caso GTD
        </h2>
      </div>
      <div className="text-slate-700 space-y-4 leading-relaxed">
        <p className="mb-4">
          <strong>Fecha del incidente:</strong> 23 de octubre de 2023.<br/>
          <strong>Actores involucrados:</strong> GTD, grupo cibercriminal (presuntamente BlackBasta) y clientes de GTD (Poder Judicial, Fonasa, etc.).
        </p>
        <p className="mb-4">
          El 23 de octubre de 2023, la empresa chilena de telecomunicaciones GTD fue víctima de un ciberataque de tipo ransomware. El ataque vulneró las defensas de la compañía y comprometió su plataforma de Infraestructura como Servicio (IaaS). Para evitar que el malware siguiera propagándose, GTD desconectó totalmente sus servicios de nube y data center de internet.
        </p>
        <p>
          El impacto fue catastrófico a nivel nacional. La caída de los servicios de nube dejó inoperativas las plataformas web y sistemas internos de muchísimas instituciones durante más de una semana, paralizando trámites vitales y exponiendo fallas en los planes de continuidad operativa.
        </p>
      </div>
    </div>
  )
}

export default Resumen