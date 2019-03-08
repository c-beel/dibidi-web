import React from 'react';
import './App.css';

export function PageTitle(props) {
  return (
    <header className="Page-title">
      { props.children }
    </header>
  );
}
