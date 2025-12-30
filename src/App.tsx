import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Hero } from './features/Hero';
import { About } from './features/About';
import { Experience } from './features/Experience';
import { Skills } from './features/Skills';
import { Contact } from './features/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;