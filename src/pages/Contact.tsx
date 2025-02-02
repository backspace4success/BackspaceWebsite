import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions? We're here to help and would love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Our Location</h3>
                  <p className="text-black/70 mt-1">
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Phone</h3>
                  <p className="text-black/70 mt-1">+2 01090195327</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Email</h3>
                  <p className="text-black/70 mt-1">backspace4success@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Hours</h3>
                  <p className="text-black/70 mt-1">
                    Sunday - Thursday: 9:00 AM - 12:00 AM<br />
                    Saturday: 10:00 AM - 10:00 AM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-black mb-4">Follow Us</h2>
              <p className="text-black/70 mb-6">Stay updated with our latest news and updates.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/backspace4succes?notif_id=1709412383420877&notif_t=profile_plus_admin_invite&ref=notif" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Backspace4success?sub_confirmation=1" 
                   target="_blank" rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.9 2.9 0 0 0-2.041-2.046C19.327 3.5 12 3.5 12 3.5s-7.327 0-9.457.64A2.9 2.9 0 0 0 .502 6.186 30.218 30.218 0 0 0 0 12a30.218 30.218 0 0 0 .502 5.814 2.9 2.9 0 0 0 2.041 2.046c2.13.64 9.457.64 9.457.64s7.327 0 9.457-.64a2.9 2.9 0 0 0 2.041-2.046A30.218 30.218 0 0 0 24 12a30.218 30.218 0 0 0-.502-5.814zM9.75 15.514V8.486L15.75 12l-6 3.514z"/>
                  </svg>
                </a>

                <a href="https://wa.me/message/XRJUIWGWHUBLA1" 
                     className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                    <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.282c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.149-.198.298-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.472-.883-.788-1.48-1.762-1.655-2.06-.173-.298-.018-.459.13-.608.133-.132.297-.346.446-.52.149-.173.198-.298.298-.496.099-.198.05-.371-.025-.52-.074-.148-.669-1.606-.916-2.204-.242-.58-.49-.5-.669-.51h-.572c-.198 0-.52.074-.792.371-.272.298-1.04 1.017-1.04 2.48s1.065 2.88 1.213 3.078c.148.198 2.091 3.192 5.065 4.426 1.763.76 2.448.82 3.328.694.537-.08 1.758-.719 2.005-1.413.247-.694.247-1.287.173-1.413-.075-.124-.272-.198-.57-.347zM12.002 1.996C6.477 1.996 2 6.476 2 11.999c0 1.813.483 3.58 1.39 5.135L2 22l5.055-1.313c1.455.793 3.089 1.213 4.947 1.213 5.525 0 10.002-4.479 10.002-10.002S17.527 1.996 12.002 1.996zM12 20.004c-1.621 0-3.163-.415-4.521-1.205l-.323-.183-3.003.78.802-2.926-.21-.344C4.08 14.505 3.5 13.005 3.5 11.999c0-4.687 3.814-8.502 8.5-8.502s8.5 3.815 8.5 8.502-3.813 8.502-8.5 8.502z"/>
                    </svg>
                  </a>
                <a href="https://www.linkedin.com/company/101676727/admin/feed/posts/" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;