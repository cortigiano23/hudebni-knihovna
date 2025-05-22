'use client';

import React from "react";
import TracksTable from "@/components/TracksTable";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <div style={{ 
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%"
      }}>
        <header className="site-header" style={{ 
          padding: "0 32px 0 6rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1>
            <span style={{ fontWeight: '700' }}>simon dvorsky</span>
            <span style={{ fontWeight: '400' }}> — my music catalog</span>
          </h1>
          <nav style={{
            display: "flex",
            gap: "2rem",
            marginRight: "80px"
          }}>
            <Link href="/" style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              borderBottom: "1px solid #ffffff",
              paddingBottom: "2px"
            }}>
              catalog
            </Link>
            <Link href="/about" style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              borderBottom: "1px solid transparent",
              paddingBottom: "2px"
            }} onMouseOver={(e) => {
              e.currentTarget.style.borderBottom = "1px solid #ffffff";
            }} onMouseOut={(e) => {
              e.currentTarget.style.borderBottom = "1px solid transparent";
            }}>
              about
            </Link>
            <Link href="/references" style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              borderBottom: "1px solid transparent",
              paddingBottom: "2px"
            }} onMouseOver={(e) => {
              e.currentTarget.style.borderBottom = "1px solid #ffffff";
            }} onMouseOut={(e) => {
              e.currentTarget.style.borderBottom = "1px solid transparent";
            }}>
              references
            </Link>
            <Link href="/contact" style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              borderBottom: "1px solid transparent",
              paddingBottom: "2px"
            }} onMouseOver={(e) => {
              e.currentTarget.style.borderBottom = "1px solid #ffffff";
            }} onMouseOut={(e) => {
              e.currentTarget.style.borderBottom = "1px solid transparent";
            }}>
              contact
            </Link>
          </nav>
        </header>
        <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <hr style={{ 
            width: '100%',
            border: 'none',
            borderTop: '1px solid #ffffff',
            margin: '0'
          }} />
        </div>
      </div>

      {/* Content section */}
      <div style={{ 
        display: "flex",
        gap: "32px",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px",
        flex: 1
      }}>
        <div style={{ 
          width: "600px",
          flexShrink: 0
        }}>
          <div style={{ 
            width: "100%",
            height: "350px",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            <Image
              src="/simon1.jpg?v=2"
              alt="Simon Dvorsky"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        </div>

        <div style={{ 
          width: "calc(100% - 630px - 4rem)",
          fontSize: "14px",
          lineHeight: 1.6,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "23px",
          borderRadius: "8px",
          height: "350px"
        }}>
          <p style={{ marginBottom: "16px" }}>
            Welcome! I`m Simon, a composer dedicated to creating original music for a wide variety of projects, including film scores, TV commercials, jingles, and more. 
            <br></br><br></br>
            My music is available for creators seeking the perfect soundtrack to elevate their work. Here you will find a diverse selection of my compositions, ready for download in high-quality formats (WAV, 24-bit, 44 or 48 kHz and MP3).
            <br></br><br></br>
            For licensing music for a specific project, please <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'underline' }}>contact</Link> me directly to discuss the details and secure the appropriate rights.
            <br></br><br></br>
            The music catalog on this site is updated regularly with new tracks and projects, so be sure to check back often for the latest additions.<br></br>
            Thank you and I hope you will enjoy the music!
          </p>
        </div>
      </div>

      {/* TracksTable section */}
      <TracksTable />

      <div style={{ marginTop: 'auto' }}>
        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(255, 255, 255, 1)',
          marginTop: '4rem'
        }}>
          <footer style={{
            padding: '2rem 32px 2rem 6rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <h1 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: 0,
                  cursor: 'pointer'
                }}>
                  my music catalog
                </h1>
              </Link>
              <div style={{
                fontSize: '0.875rem',
                color: '#ffffff',
                marginRight: '80px'
              }}>
                © Šimon Dvorský — <a href="mailto:simon.dvorsky@icloud.com" style={{ color: '#ffffff', textDecoration: 'none' }}>simon.dvorsky@icloud.com</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}