
# Configuración de Splash Screen e Íconos en Aplicación Ionic + Capacitor

Este proyecto documenta el proceso de implementación de Splash Screen e íconos personalizados en una aplicación desarrollada con Ionic y Capacitor.

## 📦 Instalación de dependencias necesarias

Se utilizó el siguiente comando para instalar la herramienta oficial que permite gestionar íconos y splash screens en Capacitor:

```bash
npm install @capacitor/assets --save-dev
```

## 📁 Creación de carpeta `assets`

Dentro del proyecto, se creó una carpeta `assets/` donde se colocaron:

- **icon.png** (1024x1024)
- **splash.png** (2732x2732)

Estas imágenes son necesarias para que la herramienta `@capacitor/assets` genere automáticamente los recursos correspondientes para cada plataforma.

## ⚙️ Generación de recursos

Se ejecutó el siguiente comando para generar los recursos a partir de las imágenes:

```bash
npx capacitor-assets generate
```

## ⚠️ Corrección manual de íconos

Debido a que los íconos no se mostraban correctamente en el dispositivo Android:

- Se accedió a Android Studio
- Se eliminaron las carpetas generadas dentro de `android/app/src/main/res/mipmap-*`
- Se utilizó la opción **New > Image Asset** para volver a generar correctamente los íconos y definir el color de fondo

## 🎨 Configuración del Splash Screen

Se configuró el plugin `SplashScreen` en el archivo `capacitor.config.ts` con las siguientes opciones:

```ts
plugins: {
  SplashScreen: {
    launchShowDuration: 0,
    launchAutoHide: true,
    backgroundColor: "#5f98ff",
    androidSplashResourceName: "splash",
    androidScaleType: "CENTER_CROP",
    splashFullScreen: false,
    splashImmersive: false,
    layoutName: "launch_screen"
  }
}
```

## 🔧 Lógica en Angular

En el archivo `app.component.ts`, se utilizó la API de Capacitor para mostrar el Splash Screen por un tiempo definido:

```ts
import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.showSplashScreen();
  }

  async showSplashScreen() {
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000,
    });
  }
}
```

## 📚 Documentación Consultada

- [Capacitor Splash Screen API](https://capacitorjs.com/docs/apis/splash-screen)
- [Capacitor Splash Screens and Icons Guide](https://capacitorjs.com/docs/guides/splash-screens-and-icons)
