"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { contactInfo, branchLocations } from "@/constants/contact";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch with our team." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dark-text mb-6">Main Office</h3>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-text">Address</h4>
                  <p className="text-gray text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-text mb-6">Contact Details</h3>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Mobile</h4>
                    <p className="text-gray text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Email</h4>
                    <p className="text-gray text-sm">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Office Hours</h4>
                    <p className="text-gray text-sm">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-text mb-6">Operational Branches</h3>
              <div className="space-y-4">
                {branchLocations.map((b) => (
                  <div key={b.name} className="bg-white p-5 border-l-4 border-primary">
                    <h4 className="font-semibold text-dark-text">{b.name}</h4>
                    <div className="flex items-start gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-gray text-sm">{b.location}</p>
                    </div>
                    <div className="flex items-start gap-2 mt-1">
                      <Phone className="w-4 h-4 text-gray shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-gray text-sm">{b.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8"
            >
              <h3 className="text-xl font-bold text-dark-text mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray mb-1">Your Name</label>
                  <input type="text" required className="w-full border border-gray/20 px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-1">Email</label>
                  <input type="email" required className="w-full border border-gray/20 px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-1">Subject</label>
                  <input type="text" required className="w-full border border-gray/20 px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-1">Message</label>
                  <textarea rows={5} required className="w-full border border-gray/20 px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  <Send className="w-4 h-4" strokeWidth={2} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
