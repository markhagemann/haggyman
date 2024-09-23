import { useRouter } from 'next/router';
import React from 'react';
import Button from './UI/Button';

function getMessageRows(): number {
  if (typeof window !== 'undefined' && window.innerHeight < 600) {
    return 2;
  }
  return 4;
}

const ContactForm: React.FC = () => {
  const router = useRouter();
  const labelClass = 'block tracking-wide text-blue-standard font-medium mb-2';
  const inputFocusClass =
    ' focus:outline-none focus:border focus:border-blue-dark';
  const inputClass = `appearance-none border border-blue-darkest block w-full bg-blue-darkest text-white py-3 px-4 ${inputFocusClass}`;

  const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // @ts-expect-error - part of netlify form implementation
      body: new URLSearchParams(formData).toString(),
    }).then(() => router.push('/thanks').catch(error => console.log(error)));

    event.preventDefault();
  };

  return (
    <form
      name="contact"
      method="post"
      onSubmit={handleSubmit}
      className="bg-blue-darker shadow-md rounded px-5 py-5 sm:px-8 sm:py-8 mb-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h2 className="mb-5 text-blue-light text-3xl font-medium">
        {' '}
        Contact me{' '}
      </h2>
      <p className="hidden sm:block text-grey-light">
        {' '}
        Leave some details and I&apos;ll get back to you soon.{' '}
      </p>
      <div className="flex flex-wrap -mx-3 sm:mt-8">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
          <label className={labelClass}>Name</label>
          <input
            className={inputClass}
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
          <label className={labelClass}>Email</label>
          <input
            className={inputClass}
            name="email"
            type="email"
            placeholder="janedoe@gmail.com"
            required
          />
        </div>
        <div className="w-full px-3 md:mb-0">
          <label className={labelClass}>Message</label>
          <textarea
            className={inputClass}
            name="message"
            placeholder="Your message here"
            rows={getMessageRows()}
            required
          />
        </div>
      </div>
      <Button type="submit" text="Send" fullWidth={true} />
    </form>
  );
};

export default ContactForm;
