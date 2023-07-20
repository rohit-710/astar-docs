import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageIndex from "@site/src/components/HomepageIndex";
import "./index.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary hero--banner">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation of Astar and Shiden Network - The Future of Smart Contracts for Multichain - both WebAssembly (WASM) and EVM using XCM. Tutorials, user guides and tools for developers and builders."
    >
      <HomepageHeader />
      <main>
        <div className="homepage-container">
          <HomepageFeatures />
          <HomepageIndex />
        </div>
      </main>
    </Layout>
  );
}
