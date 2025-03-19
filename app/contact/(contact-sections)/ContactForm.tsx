"use client"

import { useState } from "react"
import { useFormState } from "react-dom"

type FormState = {
  error?: string
  success?: boolean
  message?: string
}

export default function ContactForm({
  submitContactForm,
}: {
  submitContactForm: (formData: FormData) => Promise<FormState>
}) {
  // Ensure useFormState receives the correct function signature
  const formReducer = async (_state: FormState, formData: FormData) => {
    return submitContactForm(formData) // Call the actual function
  }

  const [state, formAction] = useFormState(formReducer, {} as FormState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form
        action={async (formData) => {
          setIsSubmitting(true)
          await formAction(formData)
          setIsSubmitting(false)
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {state.error && <div className="text-red-500 text-sm">{state.error}</div>}
        {state.success && <div className="text-green-500 text-sm">{state.message}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
