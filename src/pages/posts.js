import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
// ...GatsbyImageSharpFluid

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default PostsPage;
