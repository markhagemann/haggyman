import React from 'react';
import Button from './UI/Button';

interface ContactFormProps {}

const ContactForm: React.SFC<ContactFormProps> = () => {
  const labelClass = 'block tracking-wide text-blue font-bold mb-2';
  const inputFocusClass = ' focus:outline-none focus:border focus:border-blue-dark';
  const inputClass = `appearance-none border border-blue-darkest-custom block w-full bg-blue-darkest-custom text-white py-3 px-4 leading-tight ${inputFocusClass}`;

  return (
    <form
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-blue-darker-custom shadow-md rounded px-5 sm:px-8 py-8 mb-4"
    >
      <input type="hidden" name="bot-field" />
      <h1 className="mb-5 text-blue-light"> Contact me </h1>
      <p className="text-grey-light"> Leave some details and I'll get back to you soon. </p>
      <div className="flex flex-wrap -mx-3 mt-8">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
          <label className={labelClass}>Name</label>
          <input className={inputClass} id="name" type="text" placeholder="Jane Doe" required />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
          <label className={labelClass}>Email</label>
          <input className={inputClass} id="name" type="email" placeholder="janedoe@gmail.com" required />
        </div>
        <div className="w-full px-3 md:mb-0">
          <label className={labelClass}>Message</label>
          <textarea className={inputClass} id="name" placeholder="Your message here" rows={4} required />
        </div>
      </div>
      <Button type="submit" text="Send" fullWidth={true} />
    </form>
  );
};

export default ContactForm;
