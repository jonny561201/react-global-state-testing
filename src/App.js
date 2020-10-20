import React from 'react';
import Store from './state/Store';
import './App.css';
import Container from './Container';

export default function App() {
  return (
    <Store>
      <Container/>
    </Store>
  );
}