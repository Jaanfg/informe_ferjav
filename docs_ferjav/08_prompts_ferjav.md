# Bitácora de Uso de IA

**Herramienta empleada:** Gemini

### Interacción 1: Marco Normativo

* **Prompt utilizado:** "Actúa como experto en ciberseguridad y legislación chilena. Analiza el caso de ransomware a GTD (Octubre 2023) y genera el marco normativo aplicable. Debes incluir y justificar al menos 4 normas: la Ley 21.459, Ley 19.628, ISO/IEC 27001 y NIST CSF."

* **Sección/Componente:** `02_marco_ferjav.md`

* **Qué se aceptó y qué se corrigió:** Se aceptó el análisis de la Ley 21.459 y 19.628 por ser precisas al contexto chileno. Se corrigió la descripción de NIST CSF para enfocarla más en la falla de la fase de "Protección" de la IaaS de GTD.

### Interacción 2: Tipificación de Delitos

* **Prompt utilizado:** "Clasifica las acciones del grupo cibercriminal (ataque de ransomware a la IaaS de GTD en 2023) con los artículos específicos de la Ley 21.459 sobre Delitos Informáticos de Chile. Identifica qué artículo aplica para el acceso a los servidores y cuál para el cifrado de las máquinas virtuales."

* **Sección/Componente:** `03_delitos_ferjav.md`

* **Qué se aceptó y qué se corrigió:** Se aceptó la relación entre el Art. 1 (Ataque a la integridad de datos) para el cifrado y el Art. 4 para el acceso ilícito. Se agregó manualmente la mención a la "receptación de datos" (Art. 8).

### Interacción 3: Configuración

* **Prompt utilizado:** "En mi proyecto de Vite con React, instalé Tailwind CSS, pero al ejecutar `npm run dev` las clases no hacen efecto y el texto se ve sin estilos. ¿Cómo configuro Vite y mis archivos CSS para solucionarlo?"

* **Sección/Componente:** Configuración inicial del proyecto (`vite.config.js` y `index.css`).

* **Qué se aceptó y qué se corrigió:** Se aceptó el diagnóstico de incompatibilidad de versiones. Se corrigió el enfoque aceptando la sugerencia de la IA de hacer un "downgrade" a Tailwind CSS v3, reconfigurando el archivo `tailwind.config.js` e `index.css`, lo cual solucionó el problema visual.

### Interacción 4: Generación de Componentes React

* **Prompt utilizado:** "Crea un componente React llamado `Resumen.jsx` que muestre un resumen del caso GTD en una tarjeta blanca con sombras. Usa clases de Tailwind CSS para el diseño e incluye un ícono de Lucide React en el título."

* **Sección/Componente:** Componente `Resumen.jsx`.

* **Qué se aceptó y qué se corrigió:** Se aceptó la estructura del JSX devuelta por la IA. Se ajustaron manualmente los márgenes (`mt-4`) y colores específicos (`text-slate-800`) para que hicieran juego visual con el componente principal `App.jsx`.

### Reflexión final

El uso de Gemini fue fundamental en la etapa de investigación legal, permitiendo conectar los hechos del ataque a GTD con los artículos específicos de las leyes chilenas actualizadas. Además, en el desarrollo de React y Tailwind, la IA sirvió principalmente como herramienta de diagnóstico de errores, demostrando que la comprensión del código sigue siendo responsabilidad del desarrollador para ejecutar soluciones y resolver conflictos de versiones.