import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import selectors from '../store/selectors';
import { SCREENS } from '../constants';

const screens = {
  [SCREENS.HOME]: lazy(() => import('./Home')),
  [SCREENS.SETTINGS]: lazy(() => import('./Settings')),
};

function Screens() {
  const activeScreen = useSelector(selectors.getActiveScreen);

  const Screen = screens[activeScreen];

  return (
    <Suspense fallback={<div>loading screen..</div>}>
      <Screen />
    </Suspense>
  );
}

export default Screens;
