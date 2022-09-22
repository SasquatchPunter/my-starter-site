import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((n) => (
          <li key={n.name}>{n.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default BlogPage;
