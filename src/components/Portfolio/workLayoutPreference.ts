export type WorkLayoutPreference = 'fan' | 'classic';

const cookieName = 'work-layout';
const preferenceEvent = 'work-layout-preference-change';

export function getWorkLayoutPreference(): WorkLayoutPreference | null {
  if (typeof document === 'undefined') return null;

  const value = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${cookieName}=`))
    ?.split('=')[1];

  return value === 'fan' || value === 'classic' ? value : null;
}

export function setWorkLayoutPreference(layout: WorkLayoutPreference) {
  document.cookie = `${cookieName}=${layout}; Path=/; Max-Age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(preferenceEvent, { detail: layout }));
}

export function subscribeToWorkLayoutPreference(onChange: () => void) {
  window.addEventListener(preferenceEvent, onChange);
  return () => window.removeEventListener(preferenceEvent, onChange);
}
