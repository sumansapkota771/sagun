import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import InquiryForm from '@/components/InquiryForm';
import AnimatedSection from '@/components/AnimatedSection';
import { BookOpen, GraduationCap, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Services & Destinations | Sagun Education",
  description: "Explore our educational services and top study destinations: Japan, Finland, and the UK. Professional career roadmaps and visa processing.",
};

export default function Services() {
  return (
    <main>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <AnimatedSection>
            <h1>Services & Destinations</h1>
            <p>Bridging your academic ambition with world-class professional opportunities through comprehensive study abroad solutions in Japan, Finland, and the UK.</p>
          </AnimatedSection>
        </div>
      </header>

      {/* Services Section */}
      <section className="section section-light">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Our Services</h2>
            <p className="section-subtitle text-center">Providing personalized mentorship and strategic career roadmaps, we offer transparent guidance from Gajuri to the world stage to assist you at every step.</p>
          </AnimatedSection>
          
          <div className="card-grid">
            {/* 1st: Test Preparation */}
            <AnimatedSection delay={0.1}>
              <div className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent-crimson)', marginBottom: '15px' }}>
                    <BookOpen size={40} />
                  </div>
                  <h3>Test Preparation</h3>
                  <p className="card-text" style={{ marginTop: '12px', textAlign: 'justify' }}>
                    Gain a competitive edge with high-quality coaching tailored for global standards. We offer specialized programs for IELTS and PTE, along with intensive Japanese language courses including NAT and JLPT. Our results-oriented training is designed to help you master the linguistic skills necessary for academic and professional achievement abroad.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 2nd: Career Counseling */}
            <AnimatedSection delay={0.2}>
              <div className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent-crimson)', marginBottom: '15px' }}>
                    <GraduationCap size={40} />
                  </div>
                  <h3>Career Counseling</h3>
                  <p className="card-text" style={{ marginTop: '12px', textAlign: 'justify' }}>
                    Receive expert guidance to navigate your academic journey with confidence. We provide personalized advice to help you select the ideal course and professional path aligned with your unique aptitude and long-term goals. By building a strategic career roadmap, we ensure your educational choices today lead to global success tomorrow.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 3rd: Visa Processing */}
            <AnimatedSection delay={0.3}>
              <div className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent-crimson)', marginBottom: '15px' }}>
                    <FileCheck size={40} />
                  </div>
                  <h3>Visa Processing</h3>
                  <p className="card-text" style={{ marginTop: '12px', textAlign: 'justify' }}>
                    Experience a hassle-free transition to your international destination with our comprehensive visa application guidance. Our dedicated team provides meticulous documentation reviews and intensive interview preparation to ensure total transparency and accuracy throughout the process. We handle the complexities so you can focus on your future.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Destinations Detail Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Explore Destinations</h2>
          </AnimatedSection>

          {/* Japan */}
          <div id="japan" className="dest-section">
            <AnimatedSection className="dest-img-container" style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '300px' }}>
              <Image 
                src="/images/japan_card.png" 
                alt="Study in Japan Detail" 
                fill 
                className="dest-img-small"
                style={{ objectFit: 'cover' }}
              />
            </AnimatedSection>
            <AnimatedSection className="dest-content">
              <h3 className="dest-title">Study in Japan 🇯🇵</h3>
              <p className="dest-desc" style={{ textAlign: 'justify' }}>
                Studying in Japan represents a high-precision investment in your global professional future, blending a world-class academic environment with a high-demand job market. As a global leader in robotics, automotive engineering, and electronics, the country offers a structured and safe society where international students can master the Japanese language while gaining industry-specific skills at specialized vocational colleges (Senmon Gakkou). Beyond the classroom, Japan provides a clear pathway to long-term success through simplified residency transitions and a robust economy that actively seeks skilled international graduates.
              </p>
              <div className="benefits-grid">
                <h4>Key Parameters & Benefits</h4>
                <ul>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Work Permit:</strong> Legal authorization to work under the "Permission to Engage in Activity other than that Permitted under the Status of Residence".</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Term-Time Work:</strong> Up to 28 hours per week.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Holiday Work:</strong> Up to 40 hours per week (8 hours per day) during summer and winter breaks.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Competitive Wages:</strong> Hourly earnings that significantly offset tuition and living costs.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Scholarship Access:</strong> Availability of government (MEXT) and private financial aid.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Path to Residency:</strong> Simplified visa pathways for high-skilled international graduates.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Vocational Excellence:</strong> Practical training at Senmon Gakkou focused on immediate employability.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>High Job Placement:</strong> Direct access to career opportunities in major global tech hubs.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Safety:</strong> One of the lowest crime rates globally, ensuring a secure environment for solo and family life.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* UK */}
          <div id="uk" className="dest-section">
            <AnimatedSection className="dest-img-container" style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '300px' }}>
              <Image 
                src="/images/uk_card.png" 
                alt="Study in UK Detail" 
                fill 
                className="dest-img-small"
                style={{ objectFit: 'cover' }}
              />
            </AnimatedSection>
            <AnimatedSection className="dest-content">
              <h3 className="dest-title">Study in United Kingdom 🇬🇧</h3>
              <p className="dest-desc" style={{ textAlign: 'justify' }}>
                The United Kingdom offers a prestigious academic environment that serves as a historic gateway to global career opportunities, blending ancient academic tradition with modern professional standards. By choosing to study in the UK, students gain access to globally recognized universities and a curriculum designed to foster critical thinking and high-impact leadership skills. This destination is ideal for those seeking a world-class degree that carries significant weight in international markets, providing a strategic foundation for a long-term, successful career roadmap.
              </p>
              <div className="benefits-grid">
                <h4>Key Parameters & Benefits</h4>
                <ul>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Graduate Route Visa:</strong> Stay and build your career in the UK for at least two years after graduation.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Part-Time Work:</strong> Balance studies and gain local experience by working up to 20 hours per week during the term.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Full-Time Holiday Work:</strong> Freedom to work full-time during university breaks.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Shorter Degree Durations:</strong> Many Master’s programs are completed in just one year, saving on costs.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Global Recognition:</strong> A degree from a UK institution is a powerful credential respected globally.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Vast Career Prospects:</strong> Massive, diverse job market spanning financial, tech, and creative industries.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Academic Excellence:</strong> World-renowned for innovation, research, and high educational benchmarks.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Cultural Diversity:</strong> Grow personally while building a global network in a multicultural environment.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Finland */}
          <div id="finland" className="dest-section">
            <AnimatedSection className="dest-img-container" style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '300px' }}>
              <Image 
                src="/images/finland_card.png" 
                alt="Study in Finland Detail" 
                fill 
                className="dest-img-small"
                style={{ objectFit: 'cover' }}
              />
            </AnimatedSection>
            <AnimatedSection className="dest-content">
              <h3 className="dest-title">Study in Finland 🇫🇮</h3>
              <p className="dest-desc" style={{ textAlign: 'justify' }}>
                Finland is globally recognized for its inclusive atmosphere and world-class education system, consistently ranking as one of the safest and happiest countries in the world. By choosing to study in Finland, you enter a society that values high-quality education and offers a wide array of English-taught programs across technology, business, and healthcare. This destination is perfect for students seeking a supportive community, breathtaking natural landscapes, and a degree that opens doors to high-value international job prospects.
              </p>
              <div className="benefits-grid">
                <h4>Key Parameters & Benefits</h4>
                <ul>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Post-Study Work Visa:</strong> Apply for a permit for up to one year after graduation to find a job.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Part-Time Work:</strong> Flexibility to work and gain local experience while you study.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Safety and Security:</strong> Exceptionally low crime rates and advanced emergency systems.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>English-Taught Programs:</strong> Diverse range of courses taught entirely in English.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Affordable Quality:</strong> High-standard teaching at a more affordable total cost.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Scenic & Healthy Lifestyle:</strong> Famous for pristine forests, lakes, and the Northern Lights.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Global Career Recognition:</strong> Valued for practical learning and innovative problem-solving skills.</li>
                  <li><CheckCircle2 size={16} className="text-green-600 mr-2" /> <strong>Inclusive Environment:</strong> Warm welcome and strong support network from an international community.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" className="section section-light" style={{ paddingTop: '40px' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Ready to Start?</h2>
            <p className="section-subtitle text-center">Fill out the form below and our expert counselors will get back to you.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <InquiryForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
