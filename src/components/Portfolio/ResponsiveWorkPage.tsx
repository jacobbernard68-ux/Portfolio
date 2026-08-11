'use client';

import { useEffect, useSyncExternalStore } from 'react';
import PortfolioWorkFanPage from './WorkFanPage';
import PortfolioWorkPage from './WorkPage';
import {
  getWorkLayoutPreference,
  setWorkLayoutPreference,
  subscribeToWorkLayoutPreference,
} from './workLayoutPreference';

// Height determines whether the fan has enough vertical room. The width clause
// only preserves the established mobile layout on tall, narrow devices.
const fanViewportQuery = '(min-width: 48rem) and (min-height: 45rem)';
const desktopFanControlsQuery = '(min-width: 64rem)';

const subscribeTo = (query: string) => (onChange: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

const getSnapshotFor = (query: string) => () =>
  window.matchMedia(query).matches;

export default function ResponsiveWorkPage() {
  const fanAvailable = useSyncExternalStore(
    subscribeTo(fanViewportQuery),
    getSnapshotFor(fanViewportQuery),
    () => false,
  );
  const desktopFanControls = useSyncExternalStore(
    subscribeTo(desktopFanControlsQuery),
    getSnapshotFor(desktopFanControlsQuery),
    () => false,
  );
  const fanWasRequested = useSyncExternalStore(
    () => () => undefined,
    () => new URLSearchParams(window.location.search).get('layout') === 'fan',
    () => false,
  );
  const classicWasRequested = useSyncExternalStore(
    () => () => undefined,
    () =>
      new URLSearchParams(window.location.search).get('layout') === 'classic',
    () => false,
  );
  const savedLayout = useSyncExternalStore(
    subscribeToWorkLayoutPreference,
    getWorkLayoutPreference,
    () => null,
  );

  const requestedLayout = fanWasRequested
    ? 'fan'
    : classicWasRequested
      ? 'classic'
      : savedLayout;
  // A remembered fan preference must still respect the fan's established
  // height requirement. Keep the preference so it can resume after resizing.
  const fanCanRender = fanAvailable;
  const showFan =
    requestedLayout === 'classic'
      ? false
      : requestedLayout === 'fan'
        ? fanCanRender
        : fanAvailable;

  useEffect(() => {
    if (fanWasRequested && savedLayout !== 'fan') {
      setWorkLayoutPreference('fan');
    } else if (classicWasRequested && savedLayout !== 'classic') {
      setWorkLayoutPreference('classic');
    }
  }, [classicWasRequested, fanWasRequested, savedLayout]);

  return showFan ? (
    <PortfolioWorkFanPage />
  ) : (
    <PortfolioWorkPage showFanOption={desktopFanControls && fanAvailable} />
  );
}
