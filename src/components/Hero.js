import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

const query = graphql`
  query {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(query);

  return (
    <header className="hero">
      {showPerson && (
        <Image
          fluid={person.childImageSharp.fluid}
          className="hero-person"
        ></Image>
      )}
    </header>
  );
};

export default Hero;
