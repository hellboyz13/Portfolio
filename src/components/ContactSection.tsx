'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const mailtoLink = `mailto:jeremyngkaiyong@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div id="contact" className="bento-card bento-card--accent h-full">
      {/* Header */}
      <div className="mb-4">
        <div className="section-label">Contact</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Get In Touch
        </h3>
      </div>

      {/* Terminal Header */}
      <div className="flex items-center gap-2 p-3 rounded-t-lg bg-[var(--bg-secondary)] border border-[var(--border)] border-b-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form p-4 rounded-b-lg bg-[var(--bg-secondary)] border border-[var(--border)] border-t-0">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-mono text-[var(--text-dim)] mb-1.5">
              <span className="text-[var(--accent)]">$</span> name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input input--terminal text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--text-dim)] mb-1.5">
              <span className="text-[var(--accent)]">$</span> subject
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="input input--terminal text-sm"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--text-dim)] mb-1.5">
              <span className="text-[var(--accent)]">$</span> message
            </label>
            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input input--terminal text-sm resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="btn btn-primary w-full text-sm"
          >
            {isSending ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>
      </form>

      {/* Alternative Contact */}
      <div className="mt-4 pt-4 border-t border-[var(--border)]">
        <div className="flex items-center justify-center gap-4 text-xs text-[var(--text-muted)]">
          <a
            href="tel:+6596316875"
            className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +65 9631 6875
          </a>
          <span className="text-[var(--text-dim)]">|</span>
          <a
            href="mailto:jeremyngkaiyong@gmail.com"
            className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
