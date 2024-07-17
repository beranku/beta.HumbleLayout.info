import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PlanSlider from '@site/src/components/PlanSlider';
import SubscriptionSlider from '@site/src/components/SubscriptionSlider';

import Heading from '@theme/Heading';

import Hero from '@site/src/components/Hero';
import About from '@site/src/components/About';
import Features from '@site/src/components/Features';
import FloorPlans from '@site/src/components/FloorPlans';
import ComparisonTiny from '@site/src/components/ComparisonTiny';
import ComparisonTraditional from '@site/src/components/ComparisonTraditional';
import Testimonials from '@site/src/components/Testimonials';
import Sustainability from '@site/src/components/Sustainability';
import FAQ from '@site/src/components/FAQ';
import Contact from '@site/src/components/Contact';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <Hero />

      <main>
        <div class="container">
          <div class="row">
            <div class="col">
              <About />
            </div>
            <div class="col">
              <Features />
            </div>
          </div>
          <div class="container">
            <h2><Translate>Floor Plans</Translate></h2>
          </div>
          <div class="row">
            <div class="col col--6">
              <FloorPlans />
            </div>
            <div class="col col--6">
              <PlanSlider />
              <SubscriptionSlider />
            </div>
          </div>
          <div class="container">
            <h2><Translate>Comparisons</Translate></h2>
          </div>
          <div class="row">
            <div class="col">
              <ComparisonTiny />
            </div>
            <div class="col">
              <ComparisonTraditional />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <Testimonials />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FAQ />
            </div>
            <div class="col">
              <Sustainability />
              <Contact />
            </div>
          </div>
        </div>
        {/* <HomepageFeatures /> */}
      </main>

    </Layout>
  );
}
