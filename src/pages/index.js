import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import InputSlider from '@site/src/components/InputSlider';
import SubscriptionSlider from '@site/src/components/SubscriptionSlider';

import Heading from '@theme/Heading';

import Hero from '@site/src/components/Hero';
import Introduction from '@site/src/components/Introduction';
import FloorPlans from '@site/src/components/FloorPlans';
import Comparisons from '@site/src/components/Comparisons';
import Testimonials from '@site/src/components/Testimonials';
import Sustainability from '@site/src/components/Sustainability';
import FAQ from '@site/src/components/FAQ';
import Contact from '@site/src/components/Contact';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Docusaurus Tutorial - 5min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      {/* <HomepageHeader /> */}
      <Hero />

      <main>
        
        {/* <HomepageFeatures /> */}
        <InputSlider />
        <SubscriptionSlider />
        <Introduction />
        <FloorPlans />
        <Comparisons />
        <Testimonials />
        <Sustainability />
        <FAQ />
        <Contact />

      </main>

    </Layout>
  );
}
