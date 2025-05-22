import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function References() {
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
            <span style={{ fontWeight: '400' }}> — references</span>
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
              borderBottom: "1px solid #ffffff",
              paddingBottom: "2px"
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
        gap: "32px",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px",
        flex: 1
      }}>
        {/* First set */}
        <div style={{ 
          display: "flex",
          gap: "32px"
        }}>
          <div style={{ 
            width: "600px",
            flexShrink: 0
          }}>
            <div style={{ 
              width: "100%",
              height: "300px",
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <div style={{ 
              fontSize: "14px",
              lineHeight: 1.6,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "23px",
              borderRadius: "8px",
              height: "300px"
            }}>
              <p style={{ marginBottom: "16px" }}>
                <br></br>
                This site showcases a selection of the most interesting projects I have worked on over the years. <br></br><br></br>
                My experience includes composing music for films, television, commercials, jingles, music production for my own band U-Prag, and collaborations with other artists.<br></br><br></br>
                My music has been featured in projects for clients such as Toyota, Vitra, Czech TV, FIO banka, Milka, Mitsubishi, KIA, Hyundai, and many others. <br></br>
              
              </p>
            </div>
          </div>
        </div>

        {/* Second set */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            U-Prag — Perspective (music video)
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",     // <--- change this to 400px for the video to be 400px high
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RTz3DYyJP6c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  U-Prag Music Video<br></br>
                  YEAR: 2021
                  <br></br><br></br>
                  Direction, art direction: Pavel Fuksa
                  <br></br>
                  Illustration: Barbora Idesova
                  <br></br>
                  Animation: Matous Vyhnanek
                  <br></br>
                  Executive Producer: Ivana Blumentrittova
                  <br></br><br></br>
                  "Music video for a song Perspective from our U-Prag album – Some Kind of Music"
                </p>
              </div>
              <div style={{ 
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem"
              }}>
                <Link href="/" className="download-button" style={{ display: 'inline-block' }}>
                  Back to catalog
                </Link>
              </div>
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