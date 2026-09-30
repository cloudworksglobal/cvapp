"use client";

import React, { useState, useEffect } from "react";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Rocket, 
  Sparkles, 
  Workflow, 
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Zap,
  ShieldCheck,
  MessageSquare,
  Terminal,
  Smartphone,
  Layers,
  Server,
  Calendar,
  ArrowRight,
  Bot,
  ShoppingBag,
  RefreshCw,
  Send
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [volume, setMoreVolume] = useState(2500);
  const [mounted, setMounted] = useState(false);

  // Dynamic Contact Form State
  const [selectedService, setSelectedService] = useState("");
  const [dynamicAnswer, setDynamicAnswer] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const estimatedHoursSaved = Math.round(volume * 0.18);
  const estimatedCostSavings = Math.round(estimatedHoursSaved * 55);

  const skills = [
    { name: "HubSpot RevOps & Custom CRM Architecture", level: "98%" },
    { name: "Shopify Plus, Liquid & Custom Checkouts", level: "95%" },
    { name: "Meta WhatsApp Cloud API & Webhook Gateways", level: "92%" },
    { name: "Custom REST/GraphQL APIs & Node.js Middleware", level: "94%" },
    { name: "Python ETL Scripts & Data Automation Pipelines", level: "90%" },
    { name: "AWS Serverless (Lambda, SQS, API Gateway)", level: "88%" },
    { name: "QA, Responsiveness & CRO Benchmarks (Lighthouse)", level: "92%" },
  ];

  const projects = [
    { 
      title: "ALAXS GLOBAL B2B Marketplace", 
      tech: "HubSpot CRM • Sage X3 ERP • AWS Lambda • SQS • Python", 
      category: "hubspot",
      metric: "-85% Latency | +41% MQL-to-SQL",
      description: "Asynchronous Lead-to-Cash integration bridging HubSpot CRM with Sage X3 ERP. Migrated from Zoho to HubSpot with zero data loss, scaling qualified database by 14,000+ contacts.",
      year: "2023", 
      link: "https://www.alaxs.global/" 
    },
    { 
      title: "310 Nutrition (USA)", 
      tech: "Shopify Plus • Klaviyo • HubSpot • Rebuy Engine • React", 
      category: "shopify",
      metric: "+22% AOV | -18% Mobile Bounce",
      description: "Custom PDP & Rebuy bundle integrations for a $40M+ annual revenue D2C store. Executed 50,000+ profile data hygiene and real-time behavioral CRM sync.",
      year: "2025", 
      link: "https://310nutrition.com/" 
    },
    { 
      title: "Sondeos Global - Conversational Engine", 
      tech: "WhatsApp Business Cloud API • Salesforce • HubSpot • Python", 
      category: "whatsapp",
      metric: "< 3 Min Speed-to-Lead | +10k Daily",
      description: "Event-driven messaging gateways processing 10,000+ daily interactions. Reduced first-touch response time to under 3 minutes with automated intent scoring.",
      year: "2025", 
      link: "https://cloudworksglobal.tech/" 
    },
    { 
      title: "7Hair Care", 
      tech: "Shopify Plus • Liquid • Cloudflare Edge • CRO", 
      category: "shopify",
      metric: "Sub-1.2s LCP | +22% Checkout CRO",
      description: "Shopify Plus theme optimization, Liquid code restructuring, and Cloudflare edge caching for maximum mobile responsiveness and checkout conversion.",
      year: "2024", 
      link: "https://7haircare.com/" 
    },
    { 
      title: "Bodega Michelle Rolland", 
      tech: "WooCommerce • Redis Caching • Custom Dynamic Pricing API", 
      category: "python",
      metric: "+45% B2B Order Value",
      description: "International e-commerce platform featuring dynamic multi-currency pricing APIs, custom object caching, and automated ERP billing.",
      year: "2021", 
      link: "https://www.bodegarolland.com/" 
    },
    { 
      title: "Somos Reyes", 
      tech: "Shopify • CRO Strategy • Mobile UX Testing • Lighthouse QA", 
      category: "qa",
      metric: "+31% Mobile Conversion",
      description: "Full-scale mobile UX overhaul and A/B test engineering, elevating Lighthouse performance scores to 85+ and scaling mobile revenue.",
      year: "2024", 
      link: "https://somos-reyes.com/" 
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://calendly.com/cwglobal/30min";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Alfredo Palmieri Paso
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Specializations</a>
            <a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">ROI Calculator</a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> GTM Automation Engineer & RevOps Systems Architect
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 max-w-4xl leading-tight">
          Architecting robust digital solutions & revenue engines.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-normal leading-relaxed">
          14+ years bridging commercial growth and cloud infrastructure. Specialized in Shopify Plus ecosystems, HubSpot RevOps architecture, Meta WhatsApp API gateways, Python data pipelines, and high-performance web applications.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#contact" className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Schedule Call (Calendly)
          </a>
          <a href="https://w.app/cloudworks" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-medium transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/10">
            <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Direct Chat
          </a>
        </div>
      </section>

      {/* Technical Specializations Grid */}
      <section id="expertise" className="relative z-10 max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-bold text-slate-100">Deep Technical Specializations</h2>
          <p className="text-slate-400 text-sm">Enterprise-grade architecture built for fault tolerance, high throughput, and direct commercial ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Shopify Plus & Liquid</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Custom theme architecture, Liquid optimization, Storefront API integrations, Rebuy bundle engines, dynamic PDP builds, and custom checkout extensions.
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-400 border-t border-slate-800 pt-3">
              Shopify Plus • Liquid • Rebuy • Storefront API
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <Workflow className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">HubSpot RevOps Architecture</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Custom CRM objects, lifecycle stage mapping, automated lead scoring, multi-pipeline lead routing, and bidirectional ERP syncs (Sage X3, Odoo, SAP).
              </p>
            </div>
            <div className="text-xs font-mono text-blue-400 border-t border-slate-800 pt-3">
              Custom Objects • Lead Scoring • ERP Synchronization
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <Server className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Custom APIs & Microservices</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                RESTful & GraphQL API gateways, Node.js/Express middleware, asynchronous JSON payload handling, OAuth 2.0 authentication, and idempotency guarantees.
              </p>
            </div>
            <div className="text-xs font-mono text-purple-400 border-t border-slate-800 pt-3">
              Node.js • Express • REST / GraphQL • Webhooks
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <MessageSquare className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Meta WhatsApp Cloud API</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Enterprise messaging gateways, interactive template triggers, AI-assisted lead qualification chatbots, and direct CRM record ingestion.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400 border-t border-slate-800 pt-3">
              WhatsApp API • Conversational AI • Webhook Gateways
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <Terminal className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Python Scripts & ETL Pipelines</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Data sanitization scripts, automated contact deduplication, multi-provider waterfall enrichment (Clay, ZoomInfo, Apollo), and cloud crons.
              </p>
            </div>
            <div className="text-xs font-mono text-amber-400 border-t border-slate-800 pt-3">
              Python • Pandas • Clay Waterfall • AWS Cron Jobs
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <Smartphone className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">QA, Responsiveness & CRO</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Rigorous cross-browser QA, mobile-first responsive execution, Core Web Vitals optimization, Lighthouse score tuning (85+), and A/B test engineering.
              </p>
            </div>
            <div className="text-xs font-mono text-pink-400 border-t border-slate-800 pt-3">
              Lighthouse 85+ • Mobile-First UX • CRO A/B Testing
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section id="roi-calculator" className="relative z-10 max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="p-8 md:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Zap className="w-4 h-4" /> Interactive Simulation
            </div>
            <h2 className="text-3xl font-bold text-slate-100">Automation ROI & Efficiency Simulator</h2>
            <p className="text-slate-400 text-sm">Adjust monthly lead/transaction volume to calculate direct labor hour reductions and operational savings through API automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                  <span>Monthly Leads / Transactions Processed:</span>
                  <span className="text-cyan-400 font-bold text-base">{mounted ? volume : 2500}</span>
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="20000" 
                  step="500" 
                  value={volume} 
                  onChange={(e) => setMoreVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• Based on AWS Lambda + SQS event-driven serverless workflow.</p>
                <p>• Baseline manual operational processing cost calculated at $55 USD/hour.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex flex-col justify-center space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 uppercase font-medium">Monthly Labor Hours Saved</span>
                <div className="text-3xl font-extrabold text-cyan-400 mt-1">
                  {mounted ? estimatedHoursSaved : 450} hrs/mo
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-medium">Estimated Annual Operational Savings</span>
                <div className="text-4xl font-extrabold text-emerald-400 mt-1">
                  $${mounted ? estimatedCostSavings : 24750} USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Case Studies & Production Track Record</h2>
            <p className="text-slate-400 text-sm mt-1">Quantifiable results delivered across high-scale enterprise operations.</p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "all" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab("hubspot")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "hubspot" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
            >
              HubSpot & RevOps
            </button>
            <button 
              onClick={() => setActiveTab("shopify")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "shopify" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
            >
              Shopify Plus
            </button>
            <button 
              onClick={() => setActiveTab("whatsapp")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "whatsapp" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
            >
              WhatsApp API
            </button>
            <button 
              onClick={() => setActiveTab("python")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "python" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
            >
              APIs & Python
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/80 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-md border border-cyan-800/50">
                  {project.metric}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="text-xs font-mono text-slate-500 border-t border-slate-800/80 pt-3">
                {project.tech}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DYNAMIC INTERACTIVE DISCOVERY CONTACT SECTION */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="max-w-2xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Calendar className="w-4 h-4" /> Dynamic Discovery & Scheduling
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">
              Let&#39;s Scope Your Technical Architecture
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Select your primary engineering objective below or open an instant direct message on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            {/* STEP 1: SERVICE SELECTION */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                Step 1: Select Your Primary Requirement
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => { setSelectedService("ecommerce"); setDynamicAnswer(""); }}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${selectedService === "ecommerce" ? "border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-lg shadow-cyan-500/10" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                >
                  <ShoppingBag className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-bold text-sm text-slate-100">High-Converting E-Commerce</div>
                    <div className="text-xs text-slate-400 mt-0.5">Shopify Plus, Liquid & Custom Themes</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedService("integration"); setDynamicAnswer(""); }}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${selectedService === "integration" ? "border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-lg shadow-cyan-500/10" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                >
                  <RefreshCw className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-bold text-sm text-slate-100">Enterprise Integrations</div>
                    <div className="text-xs text-slate-400 mt-0.5">HubSpot, Salesforce, ERP & Webhooks</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedService("ai_automation"); setDynamicAnswer(""); }}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${selectedService === "ai_automation" ? "border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-lg shadow-cyan-500/10" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                >
                  <Bot className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="font-bold text-sm text-slate-100">AI Agents & Automations</div>
                    <div className="text-xs text-slate-400 mt-0.5">Meta WhatsApp API, Python & Cloud Crons</div>
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 2: DYNAMIC CONDITIONAL QUESTIONS */}
            {selectedService && (
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4 transition-all duration-300">
                <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Step 2: Scoping Detail for {selectedService === "ecommerce" ? "E-Commerce Development" : selectedService === "integration" ? "Systems Integration" : "AI & Automations"}
                </label>

                {selectedService === "ecommerce" && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-200">What is your primary storefront goal?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Shopify Plus / Theme Architecture", "Site Speed & Core Web Vitals (Lighthouse 85+)", "Checkout CRO & Rebuy Bundles"].map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setDynamicAnswer(opt)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${dynamicAnswer === opt ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService === "integration" && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-200">Which core platforms need bidirectional sync?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["HubSpot CRM ↔ ERP (Sage X3 / Odoo / SAP)", "Salesforce ↔ Webhook Gateways", "Custom REST/GraphQL API Middleware"].map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setDynamicAnswer(opt)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${dynamicAnswer === opt ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService === "ai_automation" && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-200">Which automation layer do you wish to deploy?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Meta WhatsApp Cloud API Gateway", "Python ETL & Clay Waterfall Enrichment", "Custom Conversational AI Chatbots"].map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setDynamicAnswer(opt)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${dynamicAnswer === opt ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: CONTACT DETAILS & CALENDLY / WHATSAPP HANDOFF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Work Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Project Brief / Specific Context</label>
              <textarea 
                rows={3}
                placeholder="Briefly describe your current technical setup or business goals..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-800">
              <a 
                href="https://w.app/cloudworks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp Direct</span>
              </a>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-xl shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <span>Confirm & Select Time Slot (Calendly)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Alfredo Palmieri Paso. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
