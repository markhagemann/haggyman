import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialProps {}

const Social: React.SFC<SocialProps> = () => {
  return (
    <div className="border-t border-gradient-r-blue-custom py-3 mt-3">
      <ul className="flex justify-center list-reset text-xl">
        <li>
          <a className="no-underline border-0 p-2" href="https://github.com/markhagemann">
            <span>
              <FaGithub className="hover:text-blue-lighter" />
            </span>
          </a>
        </li>
        <li>
          <a className="no-underline border-0 p-2" href="https://twitter.com/markhagemann1">
            <span>
              <FaTwitter className="hover:text-blue-lighter" />
            </span>
          </a>
        </li>
        <li>
          <a className="no-underline border-0 p-2" href="https://instagram.com/marko___777">
            <span>
              <FaInstagram className="hover:text-blue-lighter" />
            </span>
          </a>
        </li>
        <li>
          <a className="no-underline border-0 p-2" href="https://www.linkedin.com/in/mark-hagemann-64a367158/">
            <span>
              <FaLinkedin className="hover:text-blue-lighter" />
            </span>
          </a>
        </li>
        <li>
          <a className="no-underline border-0 p-2" href="mailto:mhagemann09@gmail.com">
            <span>
              <FaEnvelope className="hover:text-blue-lighter" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
