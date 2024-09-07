# Personal Finance Dashboard

## Descripción

El **Personal Finance Dashboard** es una aplicación web que permite a los usuarios rastrear sus ingresos y gastos de manera visual e intuitiva. La aplicación incluye gráficos interactivos, un formulario para agregar transacciones, y un resumen financiero general. El objetivo es proporcionar una herramienta sencilla y efectiva para gestionar finanzas personales.

## Características

- **Ingreso de Transacciones**: Los usuarios pueden agregar ingresos y gastos con detalles como fecha, categoría, y monto.
- **Visualización de Datos**: Gráficos interactivos que muestran la evolución de ingresos y gastos a lo largo del tiempo.
- **Resumen Financiero**: Visualización del balance general de las finanzas.
- **Almacenamiento Local**: Las transacciones se guardan en el almacenamiento local del navegador.
- **Interfaz Intuitiva**: Diseño simple y fácil de usar, pensado para usuarios que desean un control básico de sus finanzas.

## Tecnologías Utilizadas

- **React**: Librería para construir la interfaz de usuario.
- **Chart.js y react-chartjs-2**: Librerías para la creación de gráficos interactivos.
- **LocalStorage**: Para almacenar datos en el navegador.

## Instalación y Uso

### Requisitos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos para instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/ProtoSG/personalFinanceDashboard.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd personalFinanceDashboard
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

5. Abre el navegador y ve a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Funcionalidades Principales

### Agregar Transacciones

En la página principal, puedes agregar transacciones mediante un formulario que solicita:
- Tipo (Ingreso o Gasto)
- Categoría (Alimentos, Transporte, Ocio, etc.)
- Monto

### Visualización de Gráficos

La aplicación muestra gráficos de líneas y circulares que permiten ver cómo varían los ingresos y gastos a lo largo del tiempo. Estos gráficos son interactivos y se actualizan automáticamente cuando se añaden nuevas transacciones.

### Resumen Financiero

Un balance general muestra el saldo actual de las finanzas personales, destacando los ingresos y gastos totales.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar la aplicación, abre un *issue* o crea un *pull request*.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](./LICENSE).
