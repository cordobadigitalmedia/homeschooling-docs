// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm('myylngqy')
  if (state.succeeded) {
    return (
      <h3 class="w-full flex-none font-semibold mb-2.5">
        Thank you for your feedback!
      </h3>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
            />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label class="block">
            <span class="text-gray-700">Your Feedback</span>
            <textarea
              class="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              id="message"
              name="message"
            ></textarea>
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            class="flex w-1/3 items-center justify-center rounded-full bg-purple-700 text-white"
          >
            Send Feedback
          </button>
        </div>
      </div>
    </form>
  )
}

function Contact() {
  return <ContactForm />
}
export default Contact
