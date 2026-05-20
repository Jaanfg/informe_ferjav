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

* **Qué se aceptó y qué se corrigió:** Se aceptó la estructura del JSX devuelta por la IA. Se ajustaron manualmente los márgenes (`mt-6`) y colores específicos (`text-slate-800`) para que hicieran juego visual con el componente principal `App.jsx`.

### Interacción 5: Ajustes de espaciado y formato

* **Prompt utilizado:** "Los textos en mis componentes jsx se ven muy amontonados. ¿Qué etiqueta o código puedo usar para separar cada bloque de texto y darle más espacio? Además, en Prompts.jsx los textos están pegados a los dos puntos después de la etiqueta `<strong>`. ¿Cómo lo arreglo?"

* **Sección/Componente:** Todos los componentes jsx (`Prompts.jsx`, `Conclusiones.jsx`, `Datos.jsx`, `Responsabilidades.jsx`, `Comparacion.jsx`, `Delitos.jsx`, `Marco.jsx`).

* **Qué se aceptó y qué se corrigió:** Se aceptó la solución entregada por la IA de aplicar la etiqueta de párrafo vacía con un espacio irrompible `<p>&nbsp;</p>` en múltiples secciones de los componentes para forzar un salto de línea y mejorar el diseño. Además, se aceptó el uso de la entidad HTML `&nbsp;` justo después de las etiquetas `</strong>` en el componente `Prompts.jsx` para separar el texto sin necesidad de saltar a la línea de abajo.

### Interacción 6: Diseño de Interfaz y Contraste Visual

* **Prompt utilizado:** "Quiero que el fondo de mi página (App.jsx) cambie a un color más oscuro pero sin que las tarjetas se oscurezcan. Quiero que las tarjetas sigan siendo blancas pero con bordes marcados y que sea compatible con Tailwind CSS v3."

* **Sección/Componente:** Archivo principal `App.jsx` y el contenedor principal (`<div>`) de los 8 componentes de la aplicación.

* **Qué se aceptó y qué se corrigió:** Se corrigió la sugerencia de la IA de usar un fondo oscuro y se optó por un gris claro(`bg-slate-200`) en `App.jsx` que se vea limpio. Para las tarjetas, se configuraron idénticamente los 8 componentes usando `bg-white border-2 border-slate-300 rounded-xl shadow-lg p-8 mt-6`, logrando un fondo blanco con bordes marcados y definidos.

### Reflexión final

El uso de Gemini fue fundamental en la etapa de investigación legal, permitiendo conectar los hechos del ataque a GTD con los artículos específicos de las leyes chilenas actualizadas. Además, en el desarrollo de React y Tailwind, la IA sirvió principalmente como herramienta de diagnóstico de errores, demostrando que la comprensión del código sigue siendo responsabilidad del desarrollador para ejecutar soluciones y resolver conflictos de versiones.