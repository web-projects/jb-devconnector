import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()}{' '}
      <a
        href="http://serenataweb.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        SerenataWeb
      </a>
    </footer>
  );
};
