'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your server here
      console.log('Form submitted:', formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <div>
        <label htmlFor="package" className="block text-gray-700 font-medium mb-2">Preferred Package</label>
        <select
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="">Select a package</option>
          <option value="paradise">Kashmir Paradise Tour</option>
          <option value="winter">Winter Wonderland</option>
          <option value="family">Kashmir Family Adventure</option>
          <option value="custom">Custom Package</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tell us about your requirements..."
          required
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-[#00A3C4] hover:bg-[#0090b0] text-white py-3 px-8 rounded-md transition-colors duration-300 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed w-full md:w-auto"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? 'Sending...' : 'Enquire Now'}
        </button>

        {formStatus.isSubmitted && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
            Thank you for your message! We'll get back to you shortly.
          </div>
        )}

        {formStatus.isError && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            There was an error sending your message. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}
