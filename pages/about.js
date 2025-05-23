import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function About() {
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
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1>
            <span style={{ fontWeight: '700' }}>simon dvorsky</span>
            <span style={{ fontWeight: '400' }}> — about</span>
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
              borderBottom: "1px solid transparent",
              paddingBottom: "2px"
            }} onMouseOver={(e) => {
              e.currentTarget.style.borderBottom = "1px solid #ffffff";
            }} onMouseOut={(e) => {
              e.currentTarget.style.borderBottom = "1px solid transparent";
            }}>
              catalog
            </Link>
            <Link href="/about" style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              borderBottom: "1px solid #ffffff",
              paddingBottom: "2px"
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
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px",
        flex: 1
      }}>
        {/* Image */}
        <div style={{ 
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{ 
            width: "800px",
            flexShrink: 0
          }}>
            <div style={{ 
              width: "100%",
              height: "600px",
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              <Image
                src="/simon3.JPG"
                alt="Simon Dvorsky"
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>

        {/* About section */}
        <div style={{ 
          maxWidth: "800px",
          textAlign: "left"
        }}>
          <h2 style={{ 
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "2rem",
            textAlign: "left"
          }}>
            About
          </h2>
          <p style={{ 
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "4rem",
            textAlign: "left"
          }}>
            I started playing piano as a little kid and then began making my own music in my teenage years back in the '90s.
            In 2002, my band <a href='https://www.u-prag.cz' style={{ color: '#ffffff', textDecoration: 'underline' }}>U-Prag</a> was formed, and I started composing music for the band and other projects. 
            <br></br><br></br>I created this catalog for my professional partners, who now have a unique opportunity to access a complete catalog of music composed by me and can use selected pieces for their own needs and projects. The catalog is also updated on a regular basis, and I upload the latest fresh music here, so the whole music library is gradually growing.<br></br><br></br>
            The catalog features a wide variety of music I have made over the last years, including fully mastered songs, background music, jingles, atmospheres, 10-30-second commercial spots, musical ideas, and much more – covering almost any need or creative project.
          </p>

          <h2 style={{ 
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "2rem",
            textAlign: "left"
          }}>
            How it works – licensing
          </h2>
          <p style={{ 
            fontSize: "1rem",
            lineHeight: 1.6,
            textAlign: "left"
          }}>
            Feel free to browse the catalog and download anything you find interesting. You are welcome to use it in your project, but I ask that you contact me for licensing approval for each project, if we have not agreed on the licensing terms before.
            <br></br><br></br>For non-commercial or TV use, the license is free in most cases. If you need music for commercial purposes, a licensing fee is required, but I usually base this fee on the budget available for the given project. Exclusive licensing is also possible for pieces that have not yet been licensed.
            <br></br><br></br>I am represented by OSA (the Czech collective management organization for music copyright) under my own name and must be credited as the author for any use of my music.
          </p>

          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "2rem",
              fontWeight: "600",
              marginTop: "4rem",
              marginBottom: "2rem",
              textAlign: "left"
            }}>
              Technical
            </h2>
            <p style={{ 
              fontSize: "1rem",
              lineHeight: 1.6,
              textAlign: "left"
            }}>
              Most of the songs are available in both MP3 and WAV formats (24-bit, 44 or 48 kHz), but if you need any specific format, or multitracks for selected songs, do not hesitate to let me know. 
              <br></br>Also if you don't find a suitable song in the catalog, don't hesitate to contact me and I can prepare music tailored to your specific project.
            </p>

            <div style={{ 
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem"
            }}>
              <Link href="/" className="download-button" style={{ display: 'inline-block' }}>
                Back to catalog
              </Link>
            </div>
          </div>
        </div>
      </div>

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