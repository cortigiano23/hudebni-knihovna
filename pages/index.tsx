import React from "react";
import TracksTable from "@/components/TracksTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="site-header">
        <h1>simon dvorsky |  my music catalogue</h1>
        <hr className="header-line" />
      </header>

      {/* New content section */}
      <div style={{ 
        display: "flex",
        gap: "32px",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px"
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
          fontSize: "14px",
          lineHeight: 1.6,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "24px",
          borderRadius: "8px",
          height: "300px",
          overflow: "auto"
        }}>
          <p style={{ marginBottom: "16px" }}>
          Welcome to my music catalogue! I am a composer dedicated to creating original music for a wide variety of projects, including film scores, TV commercials, jingles, and more. 
          <br></br><br></br>
          My music is available for creators seeking the perfect soundtrack to elevate their work. Here you will find a diverse selection of my compositions, ready for download in high-quality formats. 
          <br></br><br></br>
          For licensing music for a specific project, please contact me directly via email or phone to discuss the details and secure the appropriate rights.
          Thank you!
                    </p>
          
        </div>
      </div>

      {/* Original TracksTable section */}
      <TracksTable />
    </main>
  );
}