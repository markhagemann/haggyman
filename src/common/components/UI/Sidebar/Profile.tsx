import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Profile = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 175) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ maxWidth: '175px' }} className="mx-auto">
        <Img className="border-2 border-blue-transparent border-gradient-t-blue-custom" fixed={data.placeholderImage.childImageSharp.fixed} />
      </div>
    )}
  />
);

export default Profile;
