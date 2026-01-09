'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [flowerRotation, setFlowerRotation] = useState(0);
  const [asteriskRotation, setAsteriskRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerRotation((prev) => (prev + 1) % 360);
      setAsteriskRotation((prev) => (prev + 1) % 360);
    }, 22);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jeremyngkaiyong@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsContactOpen(false);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Sticky Top Nav */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#fafafa]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Profile photo */}
            <div className="group origin-center">
              <Image
                src="/profile.jpg"
                alt="Jeremy Ng"
                width={44}
                height={44}
                className="rounded-full object-cover cursor-pointer animate-grow-wiggle origin-center"
              />
            </div>

            {/* Get in touch button */}
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className={`px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-full hover:bg-[#333] transition-all duration-300 ${
                isContactOpen ? 'scale-105' : ''
              }`}
            >
              {isContactOpen ? 'Close' : 'Get in touch'}
            </button>
          </div>

          {/* Contact Form - slides down from sticky nav */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isContactOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl border border-[#e5e5e5] p-6 shadow-lg">
              <h3 className="text-lg font-medium text-[#1a1a1a] mb-4">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#737373] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-[#e5e5e5] focus:outline-none focus:border-[#22c55e] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-[#737373] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-[#e5e5e5] focus:outline-none focus:border-[#22c55e] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#737373] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-[#e5e5e5] focus:outline-none focus:border-[#22c55e] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-[#22c55e] text-white font-medium rounded-lg hover:bg-[#16a34a] transition-colors"
                >
                  Send Message
                </button>
              </form>

              {/* Alternative contact */}
              <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
                <p className="text-sm text-[#737373] text-center">
                  Or reach me directly at{' '}
                  <a href="tel:+6596316875" className="text-[#22c55e] hover:underline">
                    +65 9631 6875
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <header className="pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Hero text */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] leading-snug md:leading-snug lg:leading-snug tracking-tight">
            <span className="text-[#1a1a1a]">Hello, I </span>
            <span className="bg-[#dbeafe] text-[#1a1a1a] px-1">build and manage</span>
            <span className="text-[#1a1a1a]"> IT systems that embody </span>
            <br className="hidden md:block" />
            <span className="font-serif italic text-[#1a1a1a]">efficiency</span>
            <span className="text-[#1a1a1a]"> <svg className="inline-block w-5 h-5 md:w-6 md:h-6 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: `rotate(${asteriskRotation}deg)`, transformOrigin: 'center' }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> and feel </span>
            <span className="font-serif italic text-[#1a1a1a]">effortless</span>
            <span className="text-[#1a1a1a]"> <svg className="inline-block w-8 h-8 md:w-10 md:h-10 align-middle" viewBox="0 0 100 100" fill="currentColor" style={{ transform: `rotate(${flowerRotation}deg)`, transformOrigin: 'center' }}><text x="50" y="75" fontSize="80" textAnchor="middle">✿</text></svg></span>
          </h1>
        </div>
      </header>
    </>
  );
}
