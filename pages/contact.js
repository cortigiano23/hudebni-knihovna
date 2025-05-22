import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
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
            <span style={{ fontWeight: '400' }}> — contact</span>
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
              borderBottom: "1px solid #ffffff",
              paddingBottom: "2px"
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
            height: "300px",
            overflow: "auto"
          }}>
            <p style={{ marginBottom: "16px" }}>
              <br></br>
              Feel free to contact me or if you want to use anything from the catalog or if you need custom music for your project<br></br><br></br>
              Šimon Dvorský
              <br></br><br></br>
              <a href="mailto:simon.dvorsky@icloud.com" style={{ color: '#ffffff', textDecoration: 'none' }}>simon.dvorsky@icloud.com</a>
              <br></br>
              +420 604 202 216
              <br></br><br></br>
              Thank you and I hope you will enjoy the music!
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