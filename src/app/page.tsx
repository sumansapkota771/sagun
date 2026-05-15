import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="navy">Unlocking Global Futures</span><br/>
            <span className="crimson">Empowering Careers</span>
          </h1>
          <p>
            Bridging the gap between your ambition and top-tier opportunities in Japan, Finland, and the UK, direct from our expert center in Gajuri, Dhading.
          </p>
          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">Explore Destinations</Link>
            <Link href="/services#contact" className="btn btn-secondary">Get Consultation</Link>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Welcome to <span className="navy">Sagun</span> <span className="crimson">Education</span></h2>
          <p className="section-subtitle" style={{ textAlign: 'justify' }}>
            Based in the heart of Gajuri, Dhading, Sagun Education Pvt. Ltd. combines local trust with international standards to simplify your journey to Japan, Finland, and the UK. We don’t just provide guidance; we build transparent career roadmaps and pave personalized pathways to ensure your academic and professional success on the global stage. Your international future starts with a single, expert step right here in your community.
          </p>
        </div>
      </section>

      {/* Top Study Destinations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Top Study Destinations</h2>
          <div className="card-grid">
            {/* Japan */}
            <div className="card">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image 
                  src="/images/japan_card.png" 
                  alt="Study in Japan" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>Japan</h3>
                  <span className="card-badge jp-badge">JP</span>
                </div>
                <p className="card-text" style={{ textAlign: 'justify' }}>
                  Master the future through a perfect blend of advanced technology and timeless tradition, offering world-class language programs and career-focused vocational excellence.
                </p>
                <Link href="/services#japan" className="btn-dest btn-jp">Study in Japan</Link>
              </div>
            </div>

            {/* UK */}
            <div className="card">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image 
                  src="/images/uk_card.png" 
                  alt="Study in UK" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>United Kingdom</h3>
                  <span className="card-badge uk-badge">GB</span>
                </div>
                <p className="card-text" style={{ textAlign: 'justify' }}>
                  Step into a legacy of historic academic excellence at globally recognized universities, providing a prestigious gateway to vast international career prospects.
                </p>
                <Link href="/services#uk" className="btn-dest btn-uk">Study in UK</Link>
              </div>
            </div>

            {/* Finland */}
            <div className="card">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image 
                  src="/images/finland_card.png" 
                  alt="Study in Finland" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>Finland</h3>
                  <span className="card-badge fi-badge">FI</span>
                </div>
                <p className="card-text" style={{ textAlign: 'justify' }}>
                  Thrive within the world’s premier education system, where high living standards and incredible scholarship opportunities meet a serene, pristine natural environment.
                </p>
                <Link href="/services#finland" className="btn-dest btn-fi">Study in Finland</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Why Choose Us</h2>
          <div className="info-panel">
            <div className="info-item-large">
              <div className="info-text">
                <h3>Expert Mentorship</h3>
                <p style={{ textAlign: 'justify' }}>Certified counselors at Sagun Education provide personalized career roadmaps and expert guidance to turn your academic goals into professional reality.</p>
              </div>
            </div>
            
            <div className="info-item-large">
              <div className="info-text">
                <h3>Transparent Process</h3>
                <p style={{ textAlign: 'justify' }}>We provide clear, honest support for your visa and university applications, ensuring every step of your journey is handled with professional integrity and excellence.</p>
              </div>
            </div>

            <div className="info-item-large">
              <div className="info-text">
                <h3>Global Reach</h3>
                <p style={{ textAlign: 'justify' }}>As your local gateway in Gajuri, Dhading, we offer direct access to prestigious educational institutions across Japan, Finland, and the UK.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
