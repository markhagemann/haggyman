import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Profile: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "myself-and-taito.jpg" }) {
          childImageSharp {
            fixed(width: 575) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className="mx-auto">
        <Img
          style={{ maxWidth: '175px', maxHeight: '175px' }}
          className="border-2 border-blue-transparent border-gradient-t-blue-dark"
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </div>
    )}
  />
);

export default Profile;
