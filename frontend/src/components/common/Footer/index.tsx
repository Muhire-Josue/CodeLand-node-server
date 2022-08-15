import React from 'react';

import './Footer.scss';

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className="Footer">
      <h1>Logo</h1>
      <p className="text-white">Copyright &copy; {new Date().getFullYear()} Jonathan Rwabahizi</p>
    </footer>
  );
};

export default Footer;
