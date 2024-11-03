import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary text--center">
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <HomepageHeader />
      <main className="container margin-top--xl">
        <h1>Welcome to the public documentation of the MDD program committee (OC).</h1>

        The OC is the guardian of the <a href="https://www.hva.nl/praktisch/algemeen/hva-breed/oo/oer/oer.html" target="_blank">TER</a> (OER in Dutch) and is there to provide feedback on the program and the quality of the education.
      </main>
      {/* <main><HomepageFeatures /></main> */}
    </Layout>
  );
}
