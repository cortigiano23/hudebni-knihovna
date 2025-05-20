import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div style={{
      width: '100%',
      borderTop: '1px solid rgba(255, 255, 255, 1)',
      marginTop: '4rem'
    }}>
      <footer style={{
        padding: '2rem 2rem 2rem 6rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0
          }}>
            my music catalogue
          </h1>
          
          <nav style={{
            display: 'flex',
            gap: '2rem',
            marginRight: '80px'
          }}>
            <Link href="/about" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}>
              about
            </Link>
            <Link href="/license" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}>
              license conditions
            </Link>
            <Link href="/references" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}>
              references
            </Link>
            <Link href="/contact" style={{
              color: '#999',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}>
              contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
} 