import React from 'react';
import { Circles } from 'react-loader-spinner';
import { WrapperLoading } from './Loader.stuled';

export default function Loader() {
  return (
    <WrapperLoading>
      <Circles
        height="120"
        width="120"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapperLoading>
  );
}
