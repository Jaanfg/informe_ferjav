import { Scale } from 'lucide-react'

function Marco() {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6">
      
      <div className="flex items-center gap-3 mb-6">
        <Scale className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          2. Marco Normativo Applicable
        </h2>
      </div>

      <p>&nbsp;</p>
      
      <div className="text-slate-700 leading-relaxed">
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Ley 21.459 (Nacional)</h3>
          <p>Actualiza la legislación de delitos informáticos. Permite clasificar acciones como el ingreso no autorizado a servidores y el secuestro de información.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Ley 19.628 (Nacional)</h3>
          <p>Regula la protección de datos personales. Fundamental para determinar vulneraciones a la confidencialidad de los datos alojados en el Estado.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-1">ISO/IEC 27001 (Internacional)</h3>
          <p>Estándar para Sistemas de Gestión de Seguridad. Su certificación es exigencia del mercado para garantizar controles de confidencialidad y disponibilidad.</p>
        </div>

        {/* El último bloque no requiere margen inferior al ser el cierre del contenedor */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">NIST CSF (Internacional)</h3>
          <p>Marco de ciberseguridad para verificar las fases de Protección, Detección, Respuesta y Recuperación ante el incidente.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Marco