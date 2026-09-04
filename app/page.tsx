import { ExternalLink } from 'lucide-react';

const sceneUrl =
  'https://publicscenes.seequent.com/f027cce3-030c-4a35-9c98-026f40fa17e0';

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#model" aria-label="Central Embedding home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Central Embedding</span>
        </a>

        <div className="header-meta" aria-label="Model status">
          <span className="status-dot" aria-hidden="true" />
          Public scene
        </div>

        <a className="open-link" href={sceneUrl} target="_blank" rel="noreferrer">
          Open full screen
          <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
        </a>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Leapfrog Central · 3D geological model</p>
          <h1 id="page-title">Explore the subsurface.</h1>
        </div>
        <p className="intro-copy">
          Orbit, zoom and inspect the model directly in your browser.
        </p>
      </section>

      <section className="model-section" id="model" aria-label="Interactive model">
        <div className="model-chrome">
          <div className="model-label">
            <span className="model-index">01</span>
            <span>Central model</span>
          </div>
          <p>Interactive scene</p>
        </div>

        <div className="model-frame">
          <div className="model-loading" aria-hidden="true">
            <span className="loading-line" />
            Loading geological model
          </div>
          <iframe
            src={sceneUrl}
            title="Interactive Leapfrog Central geological model"
            allow="fullscreen"
            allowFullScreen
            loading="eager"
          />
        </div>
      </section>

      <footer className="site-footer">
        <p>Interactive model hosted by Seequent.</p>
        <a href={sceneUrl} target="_blank" rel="noreferrer">
          View source scene
          <ExternalLink aria-hidden="true" size={14} />
        </a>
      </footer>
    </main>
  );
}
