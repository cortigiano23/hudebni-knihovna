import React from "react";
import TracksTable from "../components/TracksTable";

export default function TracksPage() {
  return (
    <>
      <div style={{
        backgroundColor: "green",
        padding: "20px",
        marginBottom: "20px"
      }}>
        TEST ELEMENT - IF YOU SEE THIS, THE PAGE IS RENDERING
      </div>

      <h1 style={{ 
        fontSize: "24px", 
        fontWeight: "bold", 
        marginBottom: "24px",
        backgroundColor: "purple",
        padding: "10px",
        color: "white"
      }}>
        Hudební katalog
      </h1>
      
      <div style={{ 
        display: "flex", 
        gap: "32px", 
        marginBottom: "32px",
        backgroundColor: "orange",
        padding: "20px"
      }}>
        <div style={{ 
          width: "400px", 
          height: "400px", 
          backgroundColor: "yellow",
          borderRadius: "8px",
          overflow: "hidden",
          border: "5px solid black"
        }}>
          <img 
            src="/simon1.jpg"
            alt="Simon Dvorsky"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              border: "5px solid white"
            }}
          />
        </div>
        <div style={{ 
          flex: 1,
          fontSize: "16px",
          lineHeight: 1.6,
          backgroundColor: "pink",
          padding: "20px",
          color: "black"
        }}>
          <p style={{ marginBottom: "16px" }}>
            I am a Czech music composer/producer born in Prague in 1980, who has been composing music for both commercials as well as non-commercial projects. I have been making music for movies, ads, TV... and I also write and produce music for bands and musicians including my own band U-Prag settled pretty well on the Czech electronic music scene since 2002.
          </p>
          <p>
            This site is meant to present various music I have made during the past years as a composer. I am proud to show you my work for clients such as Hyundai, Toyota, KIA, Mitsubishi, Vitra, FIO banka, Milka, and many others as well as music made just for listening or dancing and also scores for movies, TV and various other visuals. Hope you will enjoy it!
          </p>
        </div>
      </div>

      <TracksTable />
    </>
  );
}