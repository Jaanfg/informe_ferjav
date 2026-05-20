import { Shield, BookOpen } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col antialiased">
      <header className="bg-slate-900 text-white py-10 px-6 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Evaluación 2 Unidad 2
            </h1>
            <p className="text-slate-300 mt-1">
              T13034 Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-blue-400" size={28} />
            <h2 className="text-2xl font-bold">
              Análisis Legal: Ransomware a GTD
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            Este sitio presenta un desglose legal y técnico del incidente de ciberseguridad ocurrido en octubre de 2023. Se explora el marco normativo, los delitos tipificados bajo la Ley 21.459 y el impacto en la privacidad de los datos de los ciudadanos.
          </p>
        </div>
        <Resumen />
        <Marco />
        <Delitos />
        <Comparacion />
        <Responsabilidades />
        <Datos />
        <Conclusiones />
        <Prompts />
      </main>
      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Estudiante: Javier Fernández Garrido</span>
          <span>Docente: Rubén Schnettler L. - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App