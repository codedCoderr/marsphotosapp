import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='pv4 ph3 ph5-m ph6-l mid-gray'>
        <b className='f4 db tc'>
          <b className='ttu'>codedCoder... </b>
          {new Date().getFullYear()}
          <br />
          <a
            aria-label='linkedin profile'
            className='link dim gray dib h2 w2 br-100 mr3 mt2 ba b--black-10'
            href='https://linkedin.com/in/codedcoder'
            alt='linkedin'>
            <svg
              className='dib h2 w2'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fillRule='evenodd'
              clipRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='1.414'>
              <path
                d='M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z'
                fillRule='nonzero'
              />
            </svg>
          </a>
          <a
            aria-label='github profile'
            className='link dim gray dib br-100 h2 w2 mr3 b--black-10'
            href='https://github.com/codedCoderr'
            alt='github'>
            <svg
              dataicon='github'
              viewBox='0 0 32 32'
              style={{ fill: 'currentcolor' }}>
              <path d='M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z' />
            </svg>{' '}
          </a>
        </b>
      </footer>
    </div>
  );
};

export default Footer;
