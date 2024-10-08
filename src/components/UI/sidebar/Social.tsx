import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const linkClass = 'no-underline border-0';
const iconClass = 'text-sky-700 text-xl hover:text-sky-500';

const Social: React.FC = () => {
  return (
    <div className="mt-3">
      <ul className="flex justify-center space-x-4">
        <li>
          <a className={linkClass} href="https://github.com/markhagemann">
            <span>
              <FaGithub className={iconClass} />
            </span>
          </a>
        </li>
        <li>
          <a className={linkClass} href="https://instagram.com/marko___777">
            <span>
              <FaInstagram className={iconClass} />
            </span>
          </a>
        </li>
        <li>
          <a
            className={linkClass}
            href="https://www.linkedin.com/in/mark-hagemann-64a367158/"
          >
            <span>
              <FaLinkedin className={iconClass} />
            </span>
          </a>
        </li>
        <li>
          <a className={linkClass} href="mailto:mhagemann09@gmail.com">
            <span>
              <FaEnvelope className={iconClass} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
