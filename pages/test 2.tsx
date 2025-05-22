import React from 'react';

export default function TestPage() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '24px',
      textAlign: 'center'
    }}>
      <h1>Test Page</h1>
      <p>If you can see this, Next.js is working correctly.</p>
      <div style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'blue',
        margin: '20px auto'
      }}>
        Test Box
      </div>
    </div>
  );
} 