import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function IndexPage() {
  return (
    <Layout pageTitle="Gatsby">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        src="https://ichef.bbci.co.uk/images/ic/1232x1232/p09sz4sz.jpg"
        alt="Horrifice train crash"
      />
      <StaticImage
        src="../images/egypt-train-accident.jpg"
        alt="Another horrific train crash"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Welcome" />;

export default IndexPage;
