import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';
import { validateContactForm, ContactFormData } from '../utils/validation';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-level error on edit
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      // Simulate real dispatch to configured endpoint or EmailJS / backend proxy
      await new Promise(resolve => setTimeout(resolve, 800));

      setSubmissionStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } catch (err) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
            <span>// 05 — INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
            Have a role or an interesting problem?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            I'm open to discussing developer roles, internships, collaborations, and challenging projects.
            Drop a message below or connect directly through any communication channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels & links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D111B] border border-slate-800 cyber-card space-y-6">
              <h3 className="text-base font-semibold text-white font-mono flex items-center gap-2">
                <span>// DIRECT_CHANNELS</span>
              </h3>

              {/* Email direct copy box */}
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Developer Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${developerProfile.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-[#55E6FF] hover:underline truncate"
                  >
                    {developerProfile.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 shrink-0"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[10px] font-mono">{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={developerProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-[#55E6FF]/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-[#55E6FF]" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={developerProfile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-[#9B7BFF]/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-[#9B7BFF]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#111827] to-[#0D111B] border border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-mono text-[#55E6FF]">
                  <span className="w-2 h-2 rounded-full bg-[#55E6FF] animate-pulse" />
                  <span className="font-semibold">RESPONSE_SLA: &lt; 24 HOURS</span>
                </div>
                <p className="text-slate-400 leading-normal">
                  Available for engineering interviews, technical discussions, and immediate start for full-time roles or internships.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D111B] border border-slate-800 cyber-card">
              {submissionStatus === 'success' ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Transmission Dispatched Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been logged. I'll get back to you at{' '}
                    <span className="text-[#55E6FF]">{developerProfile.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmissionStatus('idle')}
                    className="px-4 py-2 text-xs font-mono rounded-lg bg-[#111827] border border-slate-700 text-[#55E6FF] hover:bg-slate-800 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {submissionStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Failed to dispatch transmission. Please email directly via {developerProfile.email}.</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-[#55E6FF]'
                      }`}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-[11px] text-rose-400 font-mono mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@techcorp.com"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-[#55E6FF]'
                      }`}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-[11px] text-rose-400 font-mono mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field (optional) */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1">
                      Subject / Role Title <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack SWE Role / Internship Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#55E6FF] transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, team, technical challenge, or project scope..."
                      aria-required="true"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-[#55E6FF]'
                      }`}
                    />
                    {formErrors.message && (
                      <p id="message-error" className="text-[11px] text-rose-400 font-mono mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-[#07090F] bg-gradient-to-r from-[#55E6FF] to-[#9B7BFF] hover:opacity-95 disabled:opacity-50 transition-all shadow-[0_0_15px_rgba(85,230,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#07090F]" />
                        <span>Dispatching Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#07090F]" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
