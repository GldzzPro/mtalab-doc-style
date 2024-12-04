import React from 'react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <code className="text-gray-900 font-mono text-sm">{code}</code>
    </pre>
  );
}