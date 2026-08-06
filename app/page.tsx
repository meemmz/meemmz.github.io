import Link from 'next/link';
import CursorBlob from './components/CursorBlob';
import Marquee from './components/Marquee';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <CursorBlob />

      <nav>
        <div className="logo">MZ<span>.</span></div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header>
        <p className="eyebrow">UX/UI · Multimedia Design</p>
        <h1>Maryam<br /><span className="line2">Zaman<span className="accent">.</span></span></h1>
        <p className="tagline">Designing bold, human, slightly weird digital experiences — interfaces, motion, and everything in between.</p>
        <div className="cta">
          <a href="#work" className="btn btn-primary">See the Work</a>
          <a href="#contact" className="btn btn-outline">Say Hi</a>
        </div>
      </header>

      <Marquee>
        <span>UI DESIGN</span><span>◆</span><span>MOTION GRAPHICS</span><span>◆</span><span>BRANDING</span><span>◆</span><span>UX RESEARCH</span><span>◆</span><span>ART DIRECTION</span><span>◆</span>
      </Marquee>

      <section id="about">
        <h2>About Me</h2>
        <p className="section-sub">The short version, more soon</p>
        <div className="about-grid">
          <div>
            <p>Placeholder bio — swap this out with your own story. Talk about your design philosophy, how you got into UX/UI and multimedia, and what makes your work distinct.</p>
            <p>This is a template ready for your real content: photos, case studies, bio, socials — just drop it in.</p>
          </div>
          <div>
            <p style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.8rem' }}>Tools & Skills</p>
            <div className="pills">
              <span className="pill">Figma</span>
              <span className="pill">After Effects</span>
              <span className="pill">Photoshop</span>
              <span className="pill">Illustrator</span>
              <span className="pill">Webflow</span>
              <span className="pill">Premiere Pro</span>
              <span className="pill">Prototyping</span>
              <span className="pill">Branding</span>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <h2>Selected Work</h2>
        <p className="section-sub">Swap these out with your real projects</p>
        <div className="work-grid">
          <ScrollReveal>
            <div className="work-card">
              <div className="thumb">Project Thumb</div>
              <span className="category">UI Design</span>
              <h3>Project One</h3>
              <p>Placeholder description — what it was, your role, the outcome.</p>
              <Link href="/projects/project-one/" className="link">View Case Study →</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="work-card">
              <div className="thumb">Project Thumb</div>
              <span className="category">Motion</span>
              <h3>Project Two</h3>
              <p>Placeholder description — what it was, your role, the outcome.</p>
              <a href="#" className="link">View Case Study →</a>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="work-card">
              <div className="thumb">Project Thumb</div>
              <span className="category">Branding</span>
              <h3>Project Three</h3>
              <p>Placeholder description — what it was, your role, the outcome.</p>
              <a href="#" className="link">View Case Study →</a>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="work-card">
              <div className="thumb">Project Thumb</div>
              <span className="category">UX Research</span>
              <h3>Project Four</h3>
              <p>Placeholder description — what it was, your role, the outcome.</p>
              <a href="#" className="link">View Case Study →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact">
        <div className="contact-box">
          <h2>Let&apos;s Make Something</h2>
          <p>Got a project, a collab, or just want to talk design? Reach out.</p>
          <div className="social">
            <a href="mailto:mrymzamaan@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="https://github.com/meemmz" className="btn btn-outline">GitHub</a>
            <a href="#" className="btn btn-outline">Instagram</a>
            <a href="#" className="btn btn-outline">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        &copy; 2026 Maryam Zaman — Template, content coming soon.
      </footer>
    </>
  );
}
