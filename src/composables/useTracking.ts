declare global {
  interface Window {
    cf?: (command: string, data: Record<string, string>) => void;
  }
}

export function trackClick(label: string, url: string) {
  window.cf?.('event', {name: 'click', label, url});
}
