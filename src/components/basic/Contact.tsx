"use client"
import React, { useState } from 'react'
import Heading from '../shared/Heading'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }
  return (
    <div id='contact'>
      <Heading text='Let’s Work Together!'></Heading>
      <section>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:gap-4">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-subheading md:text-heading font-bold mb-2">Design Skills</h2>
              <p className="text-title md:text-paragraph text-small">
                Reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-small font-semibold text-title mb-2">EMAIL:</h3>
                <a
                  href="mailto:rahik.cse@gmail.com"
                  className="text-fuchsia-500 transition-colors text-base md:text-lg"
                >
                  rahik.cse@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-small font-semibold text-title mb-2">WHATSAPP:</h3>
                <a
                  href="https://wa.me/8801889249636"
                  className="text-fuchsia-500 transition-colors text-base md:text-lg"
                >
                  +8801889249636
                </a>
              </div>

              <div>
                <h3 className="text-small font-semibold text-title mb-2">SOCIAL LINK:</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Linkedine</span>
                  </a>

                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.21.692-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Dribble</span>
                  </a>

                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Behance</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card-background border border-common-border rounded-xl p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-title">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  placeholder='Enter your name'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full py-3 px-5 rounded-lg outline-none text-title border border-common-border  bg-slate-700/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-title">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full py-3 px-5 rounded-lg outline-none text-title border border-common-border  bg-slate-700/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-title">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full py-3 px-5 rounded-lg min-h-[200px] outline-none text-title border border-common-border  bg-slate-700/30"
                  required
                />
              </div>

              <button
                type="submit"
                className='py-2 w-full px-4 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300 shadow-purple-400 cursor-pointer'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
