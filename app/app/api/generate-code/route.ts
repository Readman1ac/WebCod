import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, requirements, settings } = body;
    const files = generateProjectFiles(plan, requirements, settings);
    return NextResponse.json({ files });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json({ error: "Failed to generate code" }, { status: 500 });
  }
}

const styleConfig = {
  modern: {
    borderRadius: '0.75rem',
    shadow: '0 10px 40px rgba(0,0,0,0.1)',
    fontWeight: '700',
    fontFamily: 'Inter, system-ui, sans-serif',
    buttonStyle: 'rounded-lg font-bold',
  },
  classic: {
    borderRadius: '0.25rem',
    shadow: '0 2px 8px rgba(0,0,0,0.15)',
    fontWeight: '600',
    fontFamily: 'Georgia, serif',
    buttonStyle: 'rounded font-semibold',
  },
  bold: {
    borderRadius: '0',
    shadow: '0 8px 24px rgba(0,0,0,0.2)',
    fontWeight: '800',
    fontFamily: 'Oswald, sans-serif',
    buttonStyle: 'square font-black uppercase',
  },
  minimal: {
    borderRadius: '0.5rem',
    shadow: 'none',
    fontWeight: '400',
    fontFamily: 'Helvetica Neue, sans-serif',
    buttonStyle: 'rounded-sm font-light',
  },
  creative: {
    borderRadius: '1.5rem',
    shadow: '0 12px 48px rgba(0,0,0,0.15)',
    fontWeight: '600',
    fontFamily: 'Playfair Display, serif',
    buttonStyle: 'rounded-full font-medium',
  },
};

function generateProjectFiles(plan: string, requirements: string, settings: any) {
  const projectName = settings?.projectName || "My Project";
  const palette = settings?.colors?.palette || ['#3b82f6', '#1e40af', '#ffffff', '#f8fafc'];
  const style = settings?.style || 'modern';
  const config = styleConfig[style as keyof typeof styleConfig] || styleConfig.modern;
  
  return [
    { path: "index.html", content: generateIndexHtml(projectName, palette, config) },
    { path: "about.html", content: generateAboutHtml(projectName, palette, config) },
    { path: "contact.html", content: generateContactHtml(projectName, palette, config) },
    { path: "styles.css", content: generateStylesCss(palette, config) },
    { path: "script.js", content: generateScriptJs() },
    { path: "README.md", content: generateReadme(projectName) },
  ];
}

function generateIndexHtml(projectName: string, palette: string[], config: any) {
  const primaryColor = palette[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName}</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Georgia&family=Oswald:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <nav class="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">${projectName}</a>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <header class="hero">
    <div class="container">
      <h1>Welcome to ${projectName}</h1>
      <p class="hero-subtitle">We create amazing digital experiences</p>
      <div class="hero-buttons">
        <a href="contact.html" class="btn btn-primary">Get Started</a>
        <a href="about.html" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
  </header>

  <main>
    <section class="features">
      <div class="container">
        <h2 class="section-title">Our Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast load times and smooth interactions</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Beautiful, contemporary aesthetics that stand out</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Perfect on any device, from mobile to desktop</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to get started?</h2>
        <p>Contact us today and let's create something amazing together</p>
        <a href="contact.html" class="btn btn-light">Contact Us</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>${projectName}</h4>
          <p>Creating digital excellence</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@example.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 ${projectName}. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

function generateAboutHtml(projectName: string, palette: string[], config: any) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About - ${projectName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">${projectName}</a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html" class="active">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <button class="nav-toggle"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <header class="page-header">
    <div class="container">
      <h1>About Us</h1>
      <p>Learn more about our story and mission</p>
    </div>
  </header>

  <main>
    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div>
            <h2>Our Story</h2>
            <p>Founded with a passion for creating exceptional digital experiences, ${projectName} has been at the forefront of innovation.</p>
            <p>We believe in the power of great design and technology to transform businesses and connect people.</p>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>To deliver outstanding digital solutions that exceed expectations and drive real results for our clients.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">JD</div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-card">
            <div class="team-avatar">JS</div>
            <h3>Jane Smith</h3>
            <p>Creative Director</p>
          </div>
          <div class="team-card">
            <div class="team-avatar">MJ</div>
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div><h4>${projectName}</h4><p>Creating digital excellence</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h4>Contact</h4><p>hello@example.com</p></div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 ${projectName}. All rights reserved.</p></div>
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
}

function generateContactHtml(projectName: string, palette: string[], config: any) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact - ${projectName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">${projectName}</a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html" class="active">Contact</a></li>
      </ul>
      <button class="nav-toggle"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <header class="page-header">
    <div class="container">
      <h1>Contact Us</h1>
      <p>Get in touch with our team</p>
    </div>
  </header>

  <main>
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div>
            <h2>Send us a message</h2>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div class="contact-info">
            <h2>Contact Information</h2>
            <div class="info-item">
              <strong>Email</strong>
              <p>hello@example.com</p>
            </div>
            <div class="info-item">
              <strong>Phone</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div class="info-item">
              <strong>Address</strong>
              <p>123 Street Name, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div><h4>${projectName}</h4><p>Creating digital excellence</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h4>Contact</h4><p>hello@example.com</p></div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 ${projectName}. All rights reserved.</p></div>
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
}

function generateStylesCss(palette: string[], config: any) {
  const [primary, primaryDark, bg, bgAlt] = palette;
  
  return `:root {
  --primary: ${primary};
  --primary-dark: ${primaryDark};
  --text: #1a1a2e;
  --text-light: #4a4a68;
  --bg: ${bg || '#ffffff'};
  --bg-alt: ${bgAlt || '#f8f9fa'};
  --border: #e2e8f0;
  --radius: ${config.borderRadius};
  --shadow: ${config.shadow};
  --font-weight: ${config.fontWeight};
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: ${config.fontFamily};
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.navbar {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: var(--font-weight);
  color: var(--primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.active { color: var(--primary); }

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 5px 0;
}

.hero {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: var(--font-weight);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  box-shadow: ${config.shadow === 'none' ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
}

.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
.btn-secondary { background: white; color: var(--primary); }
.btn-secondary:hover { background: var(--bg-alt); }
.btn-light { background: white; color: var(--text); }

.section-title {
  font-size: 2.25rem;
  font-weight: var(--font-weight);
  text-align: center;
  margin-bottom: 3rem;
}

.features { padding: 5rem 0; background: var(--bg-alt); }

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}

.feature-card:hover { transform: translateY(-5px); }
.feature-icon { font-size: 3rem; margin-bottom: 1rem; }
.feature-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: var(--font-weight); }
.feature-card p { color: var(--text-light); }

.cta {
  padding: 5rem 0;
  text-align: center;
  background: var(--primary);
  color: white;
}

.cta h2 { font-size: 2rem; margin-bottom: 1rem; font-weight: var(--font-weight); }
.cta p { opacity: 0.9; margin-bottom: 2rem; }

.page-header {
  background: var(--bg-alt);
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; font-weight: var(--font-weight); }
.page-header p { color: var(--text-light); font-size: 1.125rem; }

.about-content { padding: 5rem 0; }

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.about-grid h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--primary);
  font-weight: var(--font-weight);
}

.about-grid p { color: var(--text-light); margin-bottom: 1rem; }

.team { padding: 5rem 0; background: var(--bg-alt); }

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow);
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: var(--font-weight);
  margin: 0 auto 1rem;
}

.team-card h3 { font-size: 1.125rem; margin-bottom: 0.25rem; font-weight: var(--font-weight); }
.team-card p { color: var(--text-light); font-size: 0.875rem; }

.contact-section { padding: 5rem 0; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-form { display: flex; flex-direction: column; gap: 1.5rem; }

.form-group label { display: block; font-weight: 500; margin-bottom: 0.5rem; }

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.contact-info h2 { font-size: 1.75rem; margin-bottom: 1.5rem; color: var(--primary); font-weight: var(--font-weight); }
.info-item { margin-bottom: 1.5rem; }
.info-item strong { display: block; margin-bottom: 0.25rem; color: var(--text); font-weight: var(--font-weight); }
.info-item p { color: var(--text-light); }

.footer {
  background: var(--text);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer h4 { font-size: 1.125rem; margin-bottom: 1rem; font-weight: var(--font-weight); }
.footer ul { list-style: none; }
.footer a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
.footer a:hover { color: white; }
.footer p { color: rgba(255,255,255,0.7); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255,255,255,0.5);
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-toggle { display: block; }
  .hero h1 { font-size: 2rem; }
  .hero-buttons { flex-direction: column; align-items: center; }
  .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
}`;
}

function generateScriptJs() {
  return `const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

console.log('Site loaded successfully!');`;
}

function generateReadme(projectName: string) {
  return `# ${projectName}

Generated by Local AI Studio

## Files

- index.html - Home page
- about.html - About page
- contact.html - Contact page
- styles.css - Stylesheet
- script.js - JavaScript

## Usage

Open index.html in a browser to view your project.
`;
}
