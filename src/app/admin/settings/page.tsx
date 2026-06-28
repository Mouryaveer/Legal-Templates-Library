"use client";

import { useState } from "react";
import { Settings, Save, Shield, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("Turn2Law Legal Templates");
  const [siteUrl, setSiteUrl] = useState("https://templates.turn2law.com");
  const [supportEmail, setSupportEmail] = useState("hello@turn2law.com");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings updated successfully!");
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Portal Settings</h1>
          <p className="text-xs text-[#888]">Configure application metadata, contact emails, and integrations</p>
        </div>

        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="h-10 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl font-semibold flex items-center gap-1.5 shrink-0"
        >
          <Save className="w-4 h-4" />
          {isSaving ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core configuration card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-[#111] pb-4 border-b border-[#F0EBE1] flex items-center gap-2">
              <Globe className="w-4.5 h-4.5 text-[#C89A4B]" />
              Website Metadata
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wider">Site Name</label>
                <Input
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="h-10 border-[#E8E4DC] rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wider">Site Canonical URL</label>
                <Input
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  className="h-10 border-[#E8E4DC] rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#555] uppercase tracking-wider">Notification / Support Email</label>
              <Input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="h-10 border-[#E8E4DC] rounded-xl"
              />
            </div>
          </div>

          {/* Integrations Card */}
          <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-[#111] pb-4 border-b border-[#F0EBE1] flex items-center gap-2">
              <Shield className="w-4.5 h-4.5 text-[#C89A4B]" />
              Security & Spam Control
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-[#FAFAF8]">
                <div>
                  <p className="text-sm font-semibold text-[#111]">Honeypot Spam Protection</p>
                  <p className="text-xs text-[#888]">Detect and reject automated bot form submissions</p>
                </div>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">Enabled</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#FAFAF8]">
                <div>
                  <p className="text-sm font-semibold text-[#111]">Rate Limiting</p>
                  <p className="text-xs text-[#888]">Limit maximum template downloads per IP address</p>
                </div>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">Enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support integration sidebar card */}
        <div className="bg-white border border-[#E8E4DC] p-6 rounded-2xl shadow-sm h-fit">
          <h3 className="text-sm font-bold text-[#111] mb-3">Integrate premium DocEngine</h3>
          <p className="text-xs text-[#666] leading-relaxed mb-6">
            Connecting this library to Turn2Law DocEngine unlocks automated document generation for visitors, charging premium usage fees.
          </p>
          <a
            href="https://turn2law.com/docengine"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-10 inline-flex items-center justify-center bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl text-xs font-semibold transition-colors duration-200"
          >
            Configure Premium Engine
          </a>
        </div>

      </div>
    </div>
  );
}
