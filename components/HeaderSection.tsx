import React from 'react';
import Image from 'next/image';

export default function HeaderSection() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '2rem', 
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: '#000000'
    }}>
      <div style={{ 
        width: '400px', 
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}>
        <Image
          src="/simon1.jpg?v=2"
          alt="Simon Dvorsky"
          width={400}
          height={400}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      <div style={{ 
        flex: 1, 
        color: '#ffffff',
        padding: '1rem'
      }}>
        <p style={{ 
          marginBottom: '1rem', 
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          I am a Czech music composer/producer born in Prague in 1980, who has been composing music for both commercials as well as non-commercial projects. I have been making music for movies, ads, TV... and I also write and produce music for bands and musicians including my own band U-Prag settled pretty well on the Czech electronic music scene since 2002.
        </p>
        <p style={{ 
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          This site is meant to present various music I have made during the past years as a composer. I am proud to show you my work for clients such as Hyundai, Toyota, KIA, Mitsubishi, Vitra, FIO banka, Milka, and many others as well as music made just for listening or dancing and also scores for movies, TV and various other visuals. Hope you will enjoy it!
        </p>
      </div>
    </div>
  );
} 