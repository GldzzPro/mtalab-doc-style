import React from 'react';
import { Documentation } from './components/Documentation';
import { Documentation as DocumentationType } from './types/documentation';

const sampleData: DocumentationType = [
  {
    sectionTitle: 'Getting Started',
    subsections: [
      {
        title: 'Installation',
        description: 'Follow these steps to install the package in your project.',
        code: 'npm install @example/package'
      },
      {
        title: 'Configuration',
        description: 'Configure your environment with these essential settings.'
      }
    ]
  },
  {
    sectionTitle: 'Basic Usage',
    subsections: [
      {
        title: 'Quick Start',
        description: 'Get up and running with this simple example.',
        code: "import { Example } from '@example/package';\n\nconst result = Example.run();"
      }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Documentation data={sampleData} />
    </div>
  );
}

export default App;