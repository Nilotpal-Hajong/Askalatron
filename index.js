function Header() {
  return (
    <header>
      <nav>
        <button>Menu ▾</button>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/deepnetra.html">DeepNetra</a></li>
          <li><a href="/shop.html">Shop</a></li>
          <li><a href="/marketplace.html">Marketplace</a></li>
          <li><a href="/docs/index.md">Docs</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/about.html">About</a></li>
        </ul>
      </nav>
      <h1>Askalaton</h1>
      <p>Cyber Exoskeletons for the Future of Personal Computing</p>
    </header>
  );
}

function Card({ title, content, link, linkText, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {content && <p>{content}</p>}
      {children}
      {link && (
        <a className="button" href={link}>
          {linkText}
        </a>
      )}
    </div>
  );
}

function Section() {
  return (
    <section>
      <Card
        title="🔥 Now In Development: DeepNetra"
        content="The spider-inspired aluminium frame for deep digital creators. Modular, LED-ready, and CNC-cut — optimized for ultimate builds."
        link="/deepnetra.html"
        linkText="Preview DeepNetra"
      />

      <div className="card">
        <h2>🕸️ Upcoming Products</h2>
        <ul>
          <li><strong>ChaturNetra:</strong> Dome-shaped quad-LED intelligence pod (Coming Soon)</li>
          <li><strong>AghoriFrame:</strong> Vertical totem-style CPU tower (Q3 2025)</li>
          <li><strong>Vanantakar:</strong> Foldable open-air PC rig for outdoor + remote work</li>
          <li><strong>Sparshan:</strong> Wall-mount cyber altar for focused creators</li>
        </ul>
      </div>

      <Card
        title="🧾 Open Files & Downloads"
        content="Explore DXF, SVG, and Arduino firmware for skeleton building and expansion."
        link="/docs/index.md"
        linkText="View Technical Resources"
      />

      <Card
        title="🤝 Connect"
        content="Want to collaborate, build, or distribute Askalaton frameworks?"
        link="mailto:youremail@example.com"
        linkText="Contact Us"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2025 Askalaton • Cyberframe Powered Creation</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
            
