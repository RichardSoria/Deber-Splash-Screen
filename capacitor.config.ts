import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.camara.fotos',
  appName: 'Cámara y Galería de Fotos',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, 
      launchAutoHide: true, 
      backgroundColor: "#5f98ff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: false,
      splashImmersive: false,
      layoutName: "launch_screen",
    }
  }

};

export default config;
