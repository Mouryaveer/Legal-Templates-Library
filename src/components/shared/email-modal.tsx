"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  templateTitle?: string;
  onSuccess?: (email: string) => void;
}

export function EmailModal({ isOpen, onClose, templateTitle, onSuccess }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "download" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      // Store in localStorage to skip modal next time
      localStorage.setItem("t2l_email", email);
      onSuccess?.(email);

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail("");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-[#F5F3EF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-[#888]" />
            </button>

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#111] mb-2">Download Starting!</h3>
                    <p className="text-sm text-[#666]">Your template is being prepared...</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0 }}>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center mb-6">
                      <Mail className="w-7 h-7 text-[#C89A4B]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#111] mb-2">
                      Get Your Free Template
                    </h3>
                    <p className="text-sm text-[#666] mb-6 leading-relaxed">
                      {templateTitle
                        ? `Enter your email to download "${templateTitle}" instantly.`
                        : "Enter your email to download this template instantly."}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          className="h-12 px-4 text-base border-[#E8E4DC] focus:border-[#C89A4B] focus:ring-[#C89A4B]/20 rounded-xl"
                          disabled={isLoading}
                          autoFocus
                        />
                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 mt-1.5 ml-1"
                          >
                            {error}
                          </motion.p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl text-base font-medium transition-all duration-300"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <span className="flex items-center gap-2">
                            Download Template
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>

                    <p className="text-xs text-[#AAA] text-center mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-[#C89A4B] via-[#D4AD6A] to-[#C89A4B]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
