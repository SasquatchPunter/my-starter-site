import { useStaticQuery, graphql } from "gatsby";

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return { title: data.site.siteMetadata.title };
}

export default useSiteMetadata;
