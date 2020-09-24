import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const CategoryTemplate = ({ data, pageContext }) => {
  const category = pageContext.category;
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={category} />
    </Layout>
  );
};

export const query = graphql`
  query GetPostsByCategory($category: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM, Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
