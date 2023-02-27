import React from 'react';

import Items from '../items/index';

import { selectIsLocal } from 'redux/selectors/metaphor.selector';
import { useAppSelector } from 'redux/store';

const Main = () => {
  const isLocal = useAppSelector(selectIsLocal());

  return (
    <div className={isLocal ? 'local-main' : 'main'}>
      <Items />
    </div>
  );
};

export default Main;
