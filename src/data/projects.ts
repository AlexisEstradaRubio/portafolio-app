import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'layout-refactor',
    title: 'Refactorización de Layout — Winner',
    problem: 'Re-renders innecesarios afectaban el rendimiento percibido.',
    solution: 'useMemo, useCallback, React.memo y un hook useLayoutConfig.',
    result: 'Menos re-renders y código más mantenible.',
  },
  {
    id: 'iframe-webview',
    title: 'Comunicación iframe / WebView nativo',
    problem: 'Sincronizar navegación entre iframe y WebView nativo.',
    solution: 'Utility passPostMessageToParent con tipado TypeScript.',
    result: 'Comunicación estable en ambos entornos.',
  },
  {
    id: 'websocket-debug',
    title: 'Depuración de WebSocket en tiempo real',
    problem: 'Errores InvalidStateError por emitir antes de conectar.',
    solution: 'Patrón de guarda con useEffect validando el estado.',
    result: 'Error eliminado en producción.',
  },
]