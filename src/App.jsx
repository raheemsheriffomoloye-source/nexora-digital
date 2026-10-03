import { useEffect, useState } from "react";
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
  Plus,
  Pencil,
  Trash2,
  Upload,
  Save,
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

const DEFAULT_PROJECTS = [
  {
    id: "ujege-college",
    title: "Ujege College Digital School Platform",
    category: "School Technology",
    text: "A polished school website and digital experience concept for Ujege College, designed to present the school clearly and support digital engagement.",
    image: null,
    liveUrl: "https://ujege-college-preview.floot.app/",
    tags: ["School Website", "UI/UX", "Digital Platform"],
    featured: true,
  },
  {
    id: "gradestream",
    title: "GradeStream — School Results & CBT",
    category: "EdTech SaaS",
    text: "A full school technology platform covering result management, teacher/admin workflows, student access, CBT, printing, promotion and school records.",
    image: schoolErpImg,
    liveUrl: "https://grade-stream-dash.vercel.app/",
    tags: ["React", "Supabase", "Tailwind", "EdTech"],
    featured: true,
  },
  {
    id: "nexora-digital",
    title: "Nexora Digital Website",
    category: "Agency Website",
    text: "The Nexora Digital website — a responsive business platform built to present services, solutions, projects and direct contact channels.",
    image: businessWebsiteImg,
    liveUrl: "https://nexora-digital-umber.vercel.app/",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    featured: true,
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard System",
    category: "Web Application",
    text: "Dashboard interface patterns for managing users, records, reports, workflows and operational data.",
    image: adminDashboardImg,
    liveUrl: "",
    tags: ["Dashboards", "Admin", "UX"],
    featured: false,
  },
  {
    id: "tradepilot",
    title: "TradePilot POS & Inventory",
    category: "Business Software",
    text: "A business management concept for sales, inventory, staff roles and operational reporting, designed as a scalable SaaS product.",
    image: null,
    liveUrl: "",
    tags: ["POS", "Inventory", "SaaS"],
    featured: false,
  },
  {
    id: "nexora-verify",
    title: "Nexora Verify",
    category: "Property Technology",
    text: "A property verification concept focused on making property information, verification steps and digital records easier to organize.",
    image: null,
    liveUrl: "",
    tags: ["PropTech", "Verification", "Web App"],
    featured: false,
  },
];

function loadProjects() {
  try {
    const saved = localStorage.getItem("nexora_portfolio_projects");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch {}
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  try {
    localStorage.setItem("nexora_portfolio_projects", JSON.stringify(projects));
    return true;
  } catch {
    return false;
  }
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1600;
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ProjectImage({ project, className = "" }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={\`h-full w-full object-cover transition duration-500 group-hover:scale-105 \${className}\`}
      />
    );
  }

  return (
    <div className={\`flex h-full min-h-56 w-full items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.22),transparent_45%),linear-gradient(135deg,#111827,#070b16)] \${className}\`}>
      <div className="text-center px-6">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
          <Upload className="text-blue-300" size={24} />
        </div>
        <p className="text-sm font-semibold text-white">Project image coming soon</p>
        <p className="mt-1 text-xs text-slate-500">Add a screenshot from Portfolio Admin</p>
      </div>
    </div>
  );
}

function ProjectsPreview() {
  const [projects, setProjects] = useState(() => loadProjects());

  useEffect(() => {
    const sync = () => setProjects(loadProjects());
    window.addEventListener("storage", sync);
    window.addEventListener("portfolio-projects-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("portfolio-projects-updated", sync);
    };
  }, []);

  const visibleProjects = projects.filter((project) => project.featured);

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
          <p className="mt-4 max-w-2xl text-slate-400">
            Real projects, working previews and selected product concepts. More screenshots can be added as each project evolves.
          </p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
          Start your project <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 transition hover:border-purple-400/40 hover:bg-white/[0.07]"
          >
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1020]">
              <ProjectImage project={project} />
            </div>

            <div className="p-3">
              <span className="mt-5 inline-block rounded-full border border-white/10 bg-[#050816]/70 px-4 py-2 text-xs font-semibold text-blue-100">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.text}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(project.tags || []).map((tag) => (
                  <span key={tag} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
                >
                  View live project <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <div className="mt-12 rounded-3xl border border-dashed border-white/15 p-10 text-center text-slate-400">
          No featured projects yet. Add or mark projects as featured in Portfolio Admin.
        </div>
      )}
    </section>
  );
}

function PortfolioAdmin() {
  const [projects, setProjects] = useState(() => loadProjects());
  const [editing, setEditing] = useState(null);
  const [saved, setSaved] = useState(false);

  const persist = (next) => {
    setProjects(next);
    saveProjects(next);
    window.dispatchEvent(new Event("portfolio-projects-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const updateProject = (id, patch) => {
    persist(projects.map((project) => project.id === id ? { ...project, ...patch } : project));
  };

  const addProject = () => {
    const project = {
      id: \`project-\${Date.now()}\`,
      title: "New Project",
      category: "Web Project",
      text: "Add a short description of what was built and the problem it solves.",
      image: null,
      liveUrl: "",
      tags: ["Web Development"],
      featured: true,
    };
    const next = [...projects, project];
    persist(next);
    setEditing(project.id);
  };

  const deleteProject = (id) => {
    if (!window.confirm("Delete this project from the portfolio?")) return;
    persist(projects.filter((project) => project.id !== id));
    if (editing === id) setEditing(null);
  };

  const uploadProjectImage = async (id, file) => {
    if (!file) return;
    try {
      const image = await resizeImage(file);
      updateProject(id, { image });
    } catch {
      window.alert("Could not process that image. Please try another file.");
    }
  };

  const resetDefaults = () => {
    if (!window.confirm("Reset the portfolio to the default project list?")) return;
    persist(DEFAULT_PROJECTS);
  };

  return (
    <section id="portfolio-admin" className="mx-auto max-w-7xl px-5 pb-20 pt-10">
      <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/[0.06] p-6 md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">Portfolio Admin</p>
            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">Manage project cards & screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Add screenshots later without editing the website code. Images are compressed in the browser and stored locally on this device in this first version.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={addProject} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
              <Plus size={17} /> Add project
            </button>
            <button onClick={resetDefaults} className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/10">
              Reset defaults
            </button>
          </div>
        </div>

        {saved && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">
            <Save size={14} /> Saved on this device
          </div>
        )}

        <div className="mt-8 grid gap-5">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/70">
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="aspect-video bg-[#0b1020] md:aspect-auto">
                  <ProjectImage project={project} />
                </div>

                <div className="p-5">
                  {editing === project.id ? (
                    <div className="grid gap-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="text-xs font-semibold text-slate-400">
                          Project name
                          <input value={project.title} onChange={(e) => updateProject(project.id, { title: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none focus:border-blue-400" />
                        </label>
                        <label className="text-xs font-semibold text-slate-400">
                          Category
                          <input value={project.category} onChange={(e) => updateProject(project.id, { category: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none focus:border-blue-400" />
                        </label>
                      </div>

                      <label className="text-xs font-semibold text-slate-400">
                        Description
                        <textarea value={project.text} onChange={(e) => updateProject(project.id, { text: e.target.value })} rows={3} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none focus:border-blue-400" />
                      </label>

                      <label className="text-xs font-semibold text-slate-400">
                        Live project URL
                        <input value={project.liveUrl || ""} onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })} placeholder="https://..." className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none focus:border-blue-400" />
                      </label>

                      <div className="flex flex-wrap items-center gap-3">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#050816] hover:bg-slate-200">
                          <Upload size={16} />
                          {project.image ? "Replace screenshot" : "Add screenshot"}
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => uploadProjectImage(project.id, e.target.files?.[0])} />
                        </label>
                        {project.image && (
                          <button onClick={() => updateProject(project.id, { image: null })} className="rounded-full border border-red-400/20 px-4 py-2.5 text-sm font-semibold text-red-300 hover:bg-red-400/10">
                            Remove image
                          </button>
                        )}
                        <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                          <input type="checkbox" checked={!!project.featured} onChange={(e) => updateProject(project.id, { featured: e.target.checked })} />
                          Show in featured projects
                        </label>
                        <button onClick={() => setEditing(null)} className="ml-auto rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/10">
                          Done
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          {project.featured && <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-300">Featured</span>}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">{project.category}</p>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{project.text}</p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
                          <Upload size={15} />
                          {project.image ? "Replace" : "Upload"}
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => uploadProjectImage(project.id, e.target.files?.[0])} />
                        </label>
                        <button onClick={() => setEditing(project.id)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
                          <Pencil size={15} /> Edit
                        </button>
                        <button onClick={() => deleteProject(project.id)} className="inline-flex items-center gap-2 rounded-full border border-red-400/20 px-4 py-2.5 text-sm font-semibold text-red-300 hover:bg-red-400/10">
                          <Trash2 size={15} /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Note: this editor currently saves to browser storage, so it is intended for your own device. It is not a secure multi-user admin system and uploaded images do not automatically sync to other devices.
        </p>
      </div>
    </section>
  );
}

function AdminGate() {
  const [show, setShow] = useState(() => window.location.pathname === "/robosapien");

  useEffect(() => {
    const onHash = () => setShow(window.location.pathname === "/robosapien");
    window.addEventListener("popstate", onHash);
    return () => window.removeEventListener("popstate", onHash);
  }, []);

  if (!show) return null;
  return <PortfolioAdmin />;
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

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <a href="/robosapien" className="text-slate-600 transition hover:text-blue-400">Portfolio Admin</a>
        <span>© 2026 Nexora Digital. All rights reserved.</span>
      </div>
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
      <AdminGate />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}