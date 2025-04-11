import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      lineHeight: 1.6,
      color: '#3a3a3a',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f7f2',
      backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,10 L90,10 L90,90 L10,90 Z\" stroke=\"%23d9c9b1\" stroke-width=\"0.5\" fill=\"none\" opacity=\"0.3\"/></svg>')",
      backgroundSize: '20px 20px',
    }}>
      <h1 style={{
        color: '#8b5a2b',
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        borderBottom: '2px solid #d9c9b1',
        paddingBottom: '15px',
      }}>Kurt Storey Foundation</h1>
      
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '50px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        <Link href="/" style={{
          margin: '0 20px',
          color: '#8b5a2b',
          textDecoration: 'none',
          fontWeight: 600,
          position: 'relative',
          padding: '5px 0',
        }}>Home</Link>
        <Link href="/why" style={{
          margin: '0 20px',
          color: '#8b5a2b',
          textDecoration: 'none',
          fontWeight: 600,
          position: 'relative',
          padding: '5px 0',
        }}>Why Kurt?</Link>
        <Link href="/apply" style={{
          margin: '0 20px',
          color: '#8b5a2b',
          textDecoration: 'none',
          fontWeight: 600,
          position: 'relative',
          padding: '5px 0',
        }}>Apply</Link>
        <Link href="/catalog" style={{
          margin: '0 20px',
          color: '#8b5a2b',
          textDecoration: 'none',
          fontWeight: 600,
          position: 'relative',
          padding: '5px 0',
        }}>Catalog</Link>
      </nav>
      
      <div style={{
        backgroundColor: '#ffffff',
        padding: '35px',
        borderRadius: '10px',
        marginTop: '30px',
        textAlign: 'center',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        borderTop: '5px solid #8b5a2b',
      }}>
        <div style={{
          display: 'block',
          textAlign: 'center',
          margin: '20px auto',
          fontSize: '3rem',
        }}>🎵</div>
        <h2 style={{
          color: '#5e8b2b',
          marginBottom: '20px',
          fontSize: '1.8rem',
        }}>404 - Page Not Found</h2>
        
        <p style={{
          marginBottom: '20px',
          fontSize: '1.1rem',
        }}>The page you are looking for doesn&apos;t exist or has been moved.</p>
        
        <p style={{
          marginBottom: '20px',
          fontSize: '1.1rem',
        }}>You might want to check out these pages instead:</p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '30px',
        }}>
          <Link href="/" style={{
            padding: '12px 24px',
            backgroundColor: '#f9f7f2',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#8b5a2b',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            border: '1px solid #d9c9b1',
          }}>Home</Link>
          <Link href="/why" style={{
            padding: '12px 24px',
            backgroundColor: '#f9f7f2',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#8b5a2b',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            border: '1px solid #d9c9b1',
          }}>Why Kurt?</Link>
          <Link href="/apply" style={{
            padding: '12px 24px',
            backgroundColor: '#f9f7f2',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#8b5a2b',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            border: '1px solid #d9c9b1',
          }}>Apply</Link>
          <Link href="/catalog" style={{
            padding: '12px 24px',
            backgroundColor: '#f9f7f2',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#8b5a2b',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            border: '1px solid #d9c9b1',
          }}>Catalog</Link>
        </div>
        
        <Link href="/" style={{
          backgroundColor: '#8b5a2b',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '30px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}>Return to Home</Link>
      </div>
    </div>
  );
}
