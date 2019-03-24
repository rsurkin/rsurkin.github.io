import React from 'react';
import {Provider} from 'react-redux';
import GameView from './GameView';
import store from './store';
import configFontAwesome from './config/FontAwesome';

configFontAwesome();

// вообще, стор лучше уровнем выше заинить, если у меня будет еще что то
export default () => (
  <Provider store={store}>
    <GameView />
  </Provider>
)