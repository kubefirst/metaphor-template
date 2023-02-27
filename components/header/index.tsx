import React from 'react';
import Image from 'next/legacy/image';

const Header = () => {
  return (
    <div id="header">
      <div id="kubefirst-logo">
        <Image src="/static/kubefirst.png" alt="kubefirst logo" width={288} height={74} />
      </div>
    </div>
  );
};

export default Header;
