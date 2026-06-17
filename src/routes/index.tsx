import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Twitter,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Download,
  Palette,
  Monitor,
  Layers,
  Smartphone,
  Code2,
  Server,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

// Images are served from the public/images folder so you can replace them
// locally by dropping files with the same names into public/images/.
const heroBg = "/images/hero-bg.jpg";
const aboutImg = "/images/about.jpg";
const p1 = "/images/p1.jpg";
const p2 = "/images/p2.jpg";
const p3 = "/images/p3.jpg";
const p4 = "/images/p4.jpg";
const p5 = "/images/p5.jpg";
const p6 = "/images/p6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brenda Portfolio" },
      {
        name: "description",
        content:
          "Chipo Brenda Madzinga - Software Developer based in Harare, Zimbabwe. Frontend, backend & system development portfolio.",
      },
      { property: "og:title", content: "Brenda Portfolio" },
      {
        property: "og:description",
        content: "Portfolio of Chipo Brenda Madzinga, software developer specialising in React, Python & Django.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "What I Do" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="text-2xl font-semibold text-white tracking-wide"
        >
          Brenda
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.id);
              }}
              className="text-sm font-medium text-white/90 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 text-white/90">
          <a href="https://twitter.com/" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={16} /></a>
          <a href="https://facebook.com/" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
          <a href="https://github.com/" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={16} /></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Workspace"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} />
      <div className="relative z-10 px-6 max-w-3xl">
        <p className="text-white text-lg md:text-xl mb-4">Welcome</p>
        <h1 className="text-white text-5xl md:text-7xl font-semibold mb-6">
          I'm <span className="text-primary">Brenda</span>
        </h1>
        <p className="text-white/85 text-base md:text-lg mb-10">
          Software Developer based in Harare, Zimbabwe.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline-pill !text-white !border-primary hover:!bg-primary"
        >
          Hire Me
        </a>
      </div>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">
        {title}
        <span className="block mx-auto mt-3 h-[3px] w-12 bg-primary rounded-full" />
      </h2>
    </div>
  );
}

function About() {
  const stats = [
    { num: "2+", label: "Years Experience" },
    { num: "5+", label: "Projects Built" },
    { num: "4+", label: "Tech Stacks" },
    { num: "1", label: "Degree (BSc Hons)" },
  ];
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Know Me More" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutImg}
            alt="Chipo Brenda Madzinga portrait"
            className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
            loading="lazy"
            width={900}
            height={1100}
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm Chipo Brenda Madzinga, a <span className="text-primary">Software Developer</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I build reliable systems end-to-end — from clean, responsive frontends to robust
              backends. I'm proficient in HTML, CSS, React, Python and Django, and I enjoy turning
              real-world problems into well-engineered software.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Alongside development, I also do UI/UX design and web design — making sure the
              systems I deliver are both functional and pleasant to use.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
              <p><span className="font-semibold text-foreground">Name:</span> Chipo Brenda Madzinga</p>
              <p><span className="font-semibold text-foreground">Email:</span> madzingabrenda72@gmail.com</p>
              <p><span className="font-semibold text-foreground">Age:</span> 25</p>
              <p><span className="font-semibold text-foreground">From:</span> Harare, Zimbabwe</p>
            </div>
            <a href="#" className="btn-primary-pill">
              <Download size={16} className="mr-2" /> Download CV
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-lg bg-secondary">
              <h4 className="text-4xl font-bold text-primary mb-2">{s.num}</h4>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Monitor, title: "Web Design" },
    { icon: Code2, title: "Frontend Development" },
    { icon: Server, title: "Backend & System Development" },
    { icon: Layers, title: "UI/UX Design" },
    { icon: Palette, title: "E‑commerce Solutions" },
    { icon: Smartphone, title: "Responsive Web Apps" },
  ];
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "var(--section-bg)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="What I Do?" title="Services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-lg bg-background border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={26} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Delivering practical software with clean code and a thoughtful user experience —
                tailored to your goals, users and budget.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ date, title, place, desc }: { date: string; title: string; place: string; desc?: string }) {
  return (
    <div className="relative pl-8 pb-10 border-l border-border last:pb-0">
      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
        {date}
      </span>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{place}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {desc ?? "Collaborated with teams to design and ship reliable, user-friendly systems."}
      </p>
    </div>
  );
}

function Skill({ name, value }: { name: string; value: number }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm font-medium mb-1.5">
        <span>{name}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Resume" title="Summary" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">My Education</h3>
            <TimelineItem
              date="Graduated"
              title="BSc Honours in Software Engineering"
              place="Zimbabwe Open University (ZOU)"
              desc="Studied software engineering principles, system design, databases and full‑stack development."
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8">My Experience</h3>
            <TimelineItem
              date="2+ Years"
              title="Resident Innovator — System Development"
              place="Zimbabwe Centre for High Performance Computing (ZCHPC)"
              desc="Collaborated on building different systems including the ZCHPC ERP, web platforms and internal tools using Python, Django and React."
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
          <div className="grid md:grid-cols-2 gap-x-12 max-w-4xl mx-auto">
            <Skill name="Python" value={80} />
            <Skill name="React JS" value={70} />
            <Skill name="JavaScript" value={70} />
            <Skill name="HTML / CSS" value={75} />
            <Skill name="Django" value={75} />
            <Skill name="UI/UX Design" value={70} />
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn-primary-pill">
              <Download size={16} className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  { img: p1, title: "CALSWUZ Website (calswuz.org.zw)", cat: "Web" },
  { img: p2, title: "ZCHPC ERP System", cat: "Systems" },
  { img: p3, title: "Farm Connect — E‑commerce", cat: "Web" },
  { img: p4, title: "Online Clearance System (PHP)", cat: "Systems" },
  { img: p5, title: "CV / Resume Ranking System (Python & Django)", cat: "Systems" },
  { img: p6, title: "UI/UX Concepts", cat: "Design" },
];

function Portfolio() {
  const filters = ["All", "Web", "Systems", "Design"];
  const [active, setActive] = useState("All");
  const items = active === "All" ? projects : projects.filter((p) => p.cat === active);
  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: "var(--section-bg)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="My Work" title="Portfolio" />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors flex items-end p-6 opacity-0 group-hover:opacity-100">
                <div className="text-white">
                  <h5 className="text-lg font-semibold">{p.title}</h5>
                  <p className="text-sm text-primary">{p.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Client Speak" title="Testimonial" />
        <div className="max-w-2xl mx-auto text-center p-10 rounded-lg bg-secondary">
          <p className="text-muted-foreground leading-relaxed">
            Testimonials coming soon — I'm currently collecting feedback from collaborators and
            clients on recently delivered projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--section-bg)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Get in Touch" title="Contact" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Address</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>141 Chilimanzi Crescent,<br />Glen Norah A,<br />Harare, Zimbabwe</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+263786729830" className="hover:text-primary">+263 78 672 9830</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:madzingabrenda72@gmail.com" className="hover:text-primary">madzingabrenda72@gmail.com</a>
              </p>
            </div>
            <h3 className="text-xl font-semibold mt-10 mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/", label: "GitHub (Brenda Madzing)" },
                { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn (Brenda Madzinga)" },
                { Icon: Facebook, href: "https://facebook.com/", label: "Facebook (Chipo Brenda Madzinga)" },
                { Icon: Instagram, href: "https://instagram.com/", label: "Instagram (Chipo Brenda Madzinga)" },
                { Icon: Twitter, href: "https://twitter.com/", label: "Twitter (Brenda Madzinga)" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Send us a note</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
              />
              <button type="submit" className="btn-primary-pill">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground bg-background border-t border-border">
      © {new Date().getFullYear()} Chipo Brenda Madzinga. All rights reserved.
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
