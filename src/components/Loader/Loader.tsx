import './loader.scss';
import React from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

function Loader({ children }: Props) {
  return (
    <div className="loaderWrapper">
      <div className="loaderComponent">{children}</div>
    </div>
  );
}

export default Loader;
