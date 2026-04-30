import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

import logo from "./assets/nexora-logo.jpg";
import schoolErpImg from "./assets/projects/school-erp.png";
import adminDashboardImg from "./assets/projects/admin-dashboard.png";
import businessWebsiteImg from "./assets/projects/business-website.png";
import customSystemImg from "./assets/projects/custom-system.png";

import "./index.css";

const whatsappLink = "https://wa.me/2349044989809";
const emailLink = "mailto:nexoradigitalng@gmail.com";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "Solutions", "Projects", "About", "Contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Nexora Digital logo"
            className="h-16 w-16 rounded-2xl bg-white object-contain p-1 ring-1 ring-white/10 sm:h-20 sm:w-20 md:h-28 md:w-28"
          />
          <div>
            <p className="text-base font-bold tracking-wide text-white md:text-xl">
              Nexora Digital
            </p>
            <p className="text-xs text-slate-400 md:text-sm">
              Websites • Apps • Systems
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 md:inline-flex"
        >
          Start a Project
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 sm:pt-44 md:pt-52">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles size={16} />
            Websites • Web Apps • School Portals • Dashboards
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Build Modern Websites, Apps & Digital Systems
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Nexora Digital helps businesses, schools, and organizations build professional websites,
            custom web applications, dashboards, portals, and automation systems that improve
            operations and strengthen digital presence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Start a Project <ArrowRight size={18} />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Solutions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1020] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <p className="text-xs text-slate-400">Nexora Dashboard</p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-5">
                  <p className="text-sm text-blue-100">Project Overview</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Digital System Ready</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Websites", "24/7 Online"],
                    ["Apps", "Custom Built"],
                    ["Portals", "Secure Access"],
                    ["Dashboards", "Smart Control"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Build Progress</p>
                    <p className="text-xs text-blue-300">92%</p>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 bottom-10 hidden rounded-2xl border border-white/10 bg-[#0b1020]/90 p-4 shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400" />
              <div>
                <p className="text-sm font-bold text-white">Secure Systems</p>
                <p className="text-xs text-slate-400">Built for real users</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Globe,
    title: "Website Development",
    text: "Professional business websites, school websites, landing pages, portfolios, and corporate sites built to create strong online presence.",
  },
  {
    icon: Code2,
    title: "Web App Development",
    text: "Custom web applications, portals, admin dashboards, booking systems, internal tools, and business platforms.",
  },
  {
    icon: GraduationCap,
    title: "School Technology Solutions",
    text: "School websites, student portals, teacher dashboards, result management systems, and digital school platforms.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    text: "Digital systems that reduce manual work, improve record keeping, organize workflow, and save time.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Clean user interfaces, product layouts, wireframes, prototypes, and user-friendly digital experiences.",
  },
  {
    icon: Layers3,
    title: "Branding & Digital Assets",
    text: "Logos, flyers, banners, social media designs, and digital brand materials for businesses and institutions.",
  },
];

function ServicesPreview() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          What We Build
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          Digital Solutions Built for Real Business Needs
        </h2>
        <p className="mt-5 text-slate-300">
          From simple websites to advanced web applications, we design and develop digital systems
          that are clean, responsive, scalable, and easy to use.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedSolution() {
  const features = [
    "Teacher login and score upload",
    "Student dashboard for result access",
    "Admin dashboard for school management",
    "Automatic grading and result generation",
    "Class, subject, and student management",
    "Announcements and school notices",
    "Mobile-friendly access on phone, tablet, and laptop",
  ];

  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 py-20">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Featured Solution
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              School Result & Management System
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              A modern school platform designed to help schools manage students, teachers, classes,
              subjects, scores, results, announcements, and online access from one secure system.
            </p>

            <div className="mt-8 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={19} />
                  <p className="text-slate-300">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#050816] transition hover:bg-slate-200"
              >
                Request Demo <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Features
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#050816] p-5">
            <div className="rounded-3xl bg-[#0b1020] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">School Portal</p>
                  <h3 className="text-xl font-bold text-white">Management Overview</h3>
                </div>
                <Zap className="text-purple-300" />
              </div>

              <div className="grid gap-4">
                {[
                  ["Teachers", "Score upload portal"],
                  ["Students", "Online result access"],
                  ["Admin", "Full school control"],
                  ["Results", "Automatic computation"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    ["Modern & Responsive", "Built to work smoothly across phones, tablets, and laptops."],
    ["Built Around Real Workflows", "Focused on how people actually use systems daily."],
    ["Scalable Solutions", "Systems that can grow as your business or institution expands."],
    ["Clean User Experience", "Interfaces that are simple, clear, and easy to understand."],
    ["Support After Delivery", "Guidance, setup support, and improvement options after launch."],
    ["Business-Focused Approach", "Digital tools that save time and create practical value."],
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            We Build Practical Digital Systems, Not Just Beautiful Screens
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Every solution is designed to solve real problems, simplify operations, and support
            growth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 className="mb-4 text-blue-400" />
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const projects = [
    {
      title: "School Result & Management System",
      category: "School Technology",
      text: "Result processing, score entry, student access, and school administration.",
      image: schoolErpImg,
    },
    {
      title: "Admin Dashboard System",
      category: "Web Application",
      text: "Clean dashboard interfaces for managing users, records, reports, and workflows.",
      image: adminDashboardImg,
    },
    {
      title: "Business Website Development",
      category: "Website Development",
      text: "Responsive websites for businesses, schools, brands, and organizations.",
      image: businessWebsiteImg,
    },
    {
      title: "Custom Digital Systems",
      category: "Custom Software",
      text: "Tailored software solutions for institutions that need more than ordinary websites.",
      image: customSystemImg,
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Selected Projects
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Digital Products & Solutions We Build
          </h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
          Start your project <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 transition hover:border-purple-400/40 hover:bg-white/[0.07]"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3">
              <span className="mt-5 inline-block rounded-full border border-white/10 bg-[#050816]/70 px-4 py-2 text-xs font-semibold text-blue-100">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.text}</p>

              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                View Solution <ArrowRight size={16} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Discovery", "We understand your goals, business needs, workflow, and the problem you want to solve."],
    ["Planning", "We define the structure, features, pages, user flow, and best approach for the project."],
    ["Design & Development", "We build a clean, responsive, and functional digital solution using modern tools."],
    ["Launch & Support", "We deploy the project, guide you through usage, and provide support for improvements."],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Our Process
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          How We Turn Ideas Into Working Digital Solutions
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map(([title, text], index) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Do you build websites only?", "No. We build websites, web applications, dashboards, school portals, business systems, and automation tools."],
    ["Can you build a school result portal?", "Yes. We build school result and management systems with teacher login, student dashboard, admin dashboard, score entry, and result generation."],
    ["Do your websites work on phones?", "Yes. Our websites and applications are built to work on phones, tablets, and laptops."],
    ["Do you offer support after delivery?", "Yes. Support, updates, maintenance, and future upgrades can be discussed based on the project."],
    ["Can you build a custom system for my business?", "Yes. We can build custom systems based on your workflow, operations, and business needs."],
    ["How do I start a project?", "You can contact us through WhatsApp, phone call, or email to discuss your project requirements."],
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
          Questions
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10 grid gap-4">
        {faqs.map(([question, answer], index) => (
          <button
            key={question}
            onClick={() => setActive(active === index ? -1 : index)}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:bg-white/[0.07]"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-bold text-white">{question}</h3>
              <span className="text-xl text-blue-300">{active === index ? "−" : "+"}</span>
            </div>
            {active === index && <p className="mt-4 leading-7 text-slate-400">{answer}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-center md:p-14">
        <h2 className="text-3xl font-black text-white md:text-5xl">
          Ready to Build Something Great?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
          Let’s help you create a website, app, portal, or digital system that works for your
          business, school, or organization.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#050816] transition hover:bg-slate-200"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a
            href={emailLink}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Mail size={18} /> Send an Email
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-blue-50 md:flex-row">
          <span className="inline-flex items-center gap-2">
            <Phone size={16} /> 09044989809
          </span>
          <span className="hidden md:block">•</span>
          <span>nexoradigitalng@gmail.com</span>
          <span className="hidden md:block">•</span>
          <span>Ibadan, Nigeria</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt="Nexora Digital logo"
              className="h-24 w-24 rounded-3xl bg-white object-contain p-2 md:h-36 md:w-36"
            />
            <div>
              <p className="text-xl font-bold text-white md:text-2xl">Nexora Digital</p>
              <p className="text-sm text-slate-400 md:text-base">
                Websites, Apps & Digital Systems That Work.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-2 text-sm text-slate-400">
          <p>Phone: 09044989809</p>
          <p>WhatsApp: 09044989809</p>
          <p>Email: nexoradigitalng@gmail.com</p>
          <p>Location: Ibadan, Nigeria</p>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">
        © 2026 Nexora Digital. All rights reserved.
      </p>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-2xl shadow-green-500/20 transition hover:bg-green-400"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <FeaturedSolution />
      <WhyChooseUs />
      <ProjectsPreview />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}