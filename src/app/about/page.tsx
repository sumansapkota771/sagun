import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { Target, Eye, Users2, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | Sagun Education",
  description: "Learn about Sagun Education Pvt. Ltd., our mission, vision, and our team of expert counselors in Gajuri, Dhading.",
};

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <AnimatedSection>
            <h1>About Us</h1>
            <p>Professional Career Roadmaps & Transparent Global Education Solutions.</p>
          </AnimatedSection>
        </div>
      </header>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <AnimatedSection>
              <h2 className="section-title">Company Overview</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'justify' }}>
                Based in the heart of Gajuri, Dhading, <strong>Sagun Education Pvt. Ltd.</strong> stands as a trusted local pillar, dedicated to simplifying the complexities of international study. By combining local heart with rigorous international standards, we ensure that every student receives a personalized career roadmap tailored to their unique strengths. Whether you are aspiring to study in Japan, UK, or Finland, our expert guidance ensures your academic and professional success on the global stage.
              </p>
            </AnimatedSection>
          </div>

          <div className="mission-vision-grid">
            <AnimatedSection delay={0.1} className="mv-card">
              <div style={{ color: 'var(--primary-navy)', marginBottom: '15px' }}>
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p className="card-text" style={{ marginTop: '16px', textAlign: 'justify' }}>
                To empower students by providing high-fidelity academic counseling and strategic career roadmaps that turn global ambitions into professional reality. We are committed to a transparent, student-first approach that ensures every journey to Japan, Finland, or the UK is built on a foundation of excellence and integrity.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mv-card">
              <div style={{ color: 'var(--primary-navy)', marginBottom: '15px' }}>
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p className="card-text" style={{ marginTop: '16px', textAlign: 'justify' }}>
                To be the most trusted gateway for international education in Nepal, recognized for bridging the gap between local potential and global opportunity. We strive to engineer a future where every student from our community has the tools, guidance, and confidence to thrive as a leader on the world stage.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-light">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Meet Our Team</h2>
            <p className="section-subtitle text-center">Your Global Gateway, Powered by Professionals. Bridging the gap between local ambition and international achievement.</p>
          </AnimatedSection>
          
          <div className="card-grid" style={{ marginTop: '40px' }}>
            <AnimatedSection delay={0.1} className="team-member">
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px' }}>
                <Image 
                  src="/images/team_member.png" 
                  alt="Founder/Leader" 
                  fill 
                  className="team-img"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <h4 className="team-name">Founder / Leader</h4>
              <p className="team-role">Strategic Leadership</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="team-member">
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px' }}>
                <Image 
                  src="/images/team_member.png" 
                  alt="Senior Counselor" 
                  fill 
                  className="team-img"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <h4 className="team-name">Senior Counselor</h4>
              <p className="team-role">Japan & Finland Specialist</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="team-member">
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px' }}>
                <Image 
                  src="/images/team_member.png" 
                  alt="Senior Counselor" 
                  fill 
                  className="team-img"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <h4 className="team-name">Senior Counselor</h4>
              <p className="team-role">United Kingdom Specialist</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="team-member">
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px' }}>
                <Image 
                  src="/images/team_member.png" 
                  alt="Visa Processing Officer" 
                  fill 
                  className="team-img"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <h4 className="team-name">Visa Processing Officer</h4>
              <p className="team-role">Technical Documentation</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Office Setup */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Our Center Setup</h2>
            <p className="section-subtitle text-center">To ensure every student’s path is built on a solid foundation, our center features a specialized setup:</p>
          </AnimatedSection>
          
          <div className="setup-grid">
            <AnimatedSection delay={0.1} className="setup-item">
              <h4>Precision Counseling Suites</h4>
              <p style={{ textAlign: 'justify' }}>Private, professional spaces where our experts map out your academic strategy and long-term career roadmaps.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="setup-item">
              <h4>High-Performance Learning Hubs</h4>
              <p style={{ textAlign: 'justify' }}>Advanced classrooms specifically equipped for intensive language mastery and international test preparation.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="setup-item">
              <h4>The Global Logistics Desk</h4>
              <p style={{ textAlign: 'justify' }}>A dedicated student support desk that manages complex international documentation with absolute transparency and technical accuracy.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="setup-item">
              <h4>Strategic Pre-Departure Zones</h4>
              <p style={{ textAlign: 'justify' }}>Areas designed for comprehensive briefings to ensure you feel confident and fully prepared before you fly.</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.5} className="construction-notice">
            <p>Our physical office is currently undergoing a high-precision upgrade to better serve you. Stay tuned for the new look!</p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
