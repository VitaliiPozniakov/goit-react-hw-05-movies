import React from 'react';
import { Spinner, Overlay } from './Loader.styled';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Circles } from  'react-loader-spinner'

const Loader = () => {
  return (
    /* <>
<Circles color="#00BFFF" height={80} width={80}/>
</> */
    <Overlay role="alert">
      <Spinner />
    </Overlay>
  );
};

export default Loader;
