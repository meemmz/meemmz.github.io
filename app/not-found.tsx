import Link from 'next/link';
import CursorBlob from './components/CursorBlob';
import Marquee from './components/Marquee';

export default function NotFound() {
  return (
    <>
      <CursorBlob />

      <nav>
        <div className="logo">MZ<span>.</span></div>
        <ul>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>

      <header>
        <p className="eyebrow">Error 404</p>
        <h1>This Page<br /><span className="line2">Doesn&apos;t Exist<span className="accent">.</span></span></h1>
        <p className="tagline">You followed a broken link, or this page wandered off somewhere funky. Either way, it&apos;s not here.</p>
        <div className="cta">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/#work" className="btn btn-outline">See the Work</Link>
        </div>
      </header>

      <Marquee>
        <span>PAGE NOT FOUND</span><span>◆</span><span>ERROR 404</span><span>◆</span><span>YOU SEEM LOST</span><span>◆</span><span>LET&apos;S GO HOME</span><span>◆</span>
      </Marquee>

      <section>
        <div className="contact-box">
          <h2>Take Me Home</h2>
          <p>No hard feelings — let&apos;s get you back to somewhere real.</p>
          <div className="social">
            <Link href="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>

      <footer>
        &copy; 2026 Maryam Zaman — Template, content coming soon.
      </footer>
    </>
  );
}
