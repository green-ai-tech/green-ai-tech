"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Languages,
  Mail,
  Server,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Language = "en" | "zh";

const profile = {
  github: "https://github.com/green-ai-tech",
  email: "hello@green-ai-tech.dev",
};

const projects: Array<{
  name: string;
  icon: LucideIcon;
  description: Record<Language, string>;
  stack: string[];
  github: string;
  demo: string;
}> = [
  {
    name: "EduAgent",
    icon: GraduationCap,
    description: {
      en: "An AI learning assistant for document-grounded tutoring, personalized study flows, and explainable lesson planning.",
      zh: "面向教育场景的 AI 学习助手，支持基于文档的辅导、个性化学习流程和可解释的课程规划。",
    },
    stack: ["Python", "FastAPI", "LangChain", "RAG", "PostgreSQL"],
    github: "https://github.com/green-ai-tech/eduagent",
    demo: "https://green-ai-tech.github.io/eduagent",
  },
  {
    name: "StockAgent",
    icon: TrendingUp,
    description: {
      en: "A market research agent for signal collection, RAG-assisted analysis, and multi-agent financial intelligence workflows.",
      zh: "面向市场研究的智能体，覆盖信号采集、RAG 辅助分析和多智能体金融研究工作流。",
    },
    stack: ["Python", "LangGraph", "Docker", "Ollama", "RAG"],
    github: "https://github.com/green-ai-tech/stockagent",
    demo: "https://green-ai-tech.github.io/stockagent",
  },
];

const skills: Array<{ name: string; icon: LucideIcon }> = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI", icon: Server },
  { name: "LangChain", icon: Workflow },
  { name: "LangGraph", icon: Bot },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Cpu },
  { name: "Ollama", icon: Bot },
  { name: "RAG", icon: Workflow },
];

const content = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    languageToggle: "Switch to Chinese",
    languageLabel: "中",
    hero: {
      role: "AI Engineer / LLM Application Developer",
      intro:
        "Building EduAgent and StockAgent, focusing on RAG, Multi-Agent Systems and AI Applications.",
      projectsCta: "View Projects",
      contactCta: "Contact",
      stackTitle: "Agent Stack",
      status: "Online",
      stackItems: ["RAG Pipeline", "Multi-Agent Graph", "Vector Search"],
    },
    projects: {
      eyebrow: "Projects",
      title: "LLM applications built for real workflows",
      description:
        "Two focused AI products: one for education, one for financial research.",
      demo: "Demo",
    },
    skills: {
      eyebrow: "Skills",
      title: "AI engineering stack",
      description:
        "Backend, orchestration, local models, retrieval, and deployment tools.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Build AI applications with a product mindset.",
      description:
        "Open to LLM application development, RAG systems, and agentic workflow engineering.",
      email: "Email",
    },
  },
  zh: {
    nav: {
      projects: "项目",
      skills: "技能",
      contact: "联系",
    },
    languageToggle: "Switch to English",
    languageLabel: "EN",
    hero: {
      role: "AI 工程师 / LLM 应用开发者",
      intro: "正在构建 EduAgent 和 StockAgent，专注于 RAG、多智能体系统和 AI 应用落地。",
      projectsCta: "查看项目",
      contactCta: "联系我",
      stackTitle: "智能体栈",
      status: "在线",
      stackItems: ["RAG 流程", "多智能体图", "向量检索"],
    },
    projects: {
      eyebrow: "项目",
      title: "面向真实工作流的 LLM 应用",
      description: "两个聚焦明确的 AI 产品：一个面向教育，一个面向金融研究。",
      demo: "演示",
    },
    skills: {
      eyebrow: "技能",
      title: "AI 工程技术栈",
      description: "覆盖后端、编排、本地模型、检索增强和部署工具。",
    },
    contact: {
      eyebrow: "联系",
      title: "用产品化思维构建 AI 应用。",
      description: "开放合作方向：LLM 应用开发、RAG 系统和智能体工作流工程。",
      email: "邮箱",
    },
  },
} as const;

type SiteCopy = (typeof content)[Language];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "zh" : "en"));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-white">
      <SiteHeader
        copy={copy}
        language={language}
        onLanguageToggle={toggleLanguage}
      />
      <HeroSection copy={copy} />
      <ProjectSection copy={copy} language={language} />
      <SkillsSection copy={copy} />
      <ContactSection copy={copy} />
    </main>
  );
}

function SiteHeader({
  copy,
  language,
  onLanguageToggle,
}: {
  copy: SiteCopy;
  language: Language;
  onLanguageToggle: () => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050608]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3" aria-label="Green AI Tech home">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-300/10">
            <Cpu className="h-4 w-4 text-emerald-200" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-white">Green AI Tech</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-white/68 sm:flex">
          <a className="transition hover:text-white" href="#projects">
            {copy.nav.projects}
          </a>
          <a className="transition hover:text-white" href="#skills">
            {copy.nav.skills}
          </a>
          <a className="transition hover:text-white" href="#contact">
            {copy.nav.contact}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onLanguageToggle}
            aria-label={copy.languageToggle}
            aria-pressed={language === "zh"}
            title={copy.languageToggle}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-white/82 transition hover:border-emerald-300/40 hover:text-white"
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {copy.languageLabel}
          </button>
          <a
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-white/82 transition hover:border-emerald-300/40 hover:text-white"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection({ copy }: { copy: SiteCopy }) {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[78svh] items-center pt-24 pb-16 sm:min-h-[82svh] sm:pt-28"
    >
      <Image
        src="/images/ai-hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050608_0%,rgba(5,6,8,0.92)_30%,rgba(5,6,8,0.62)_58%,rgba(5,6,8,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(5,6,8,0)_0%,#050608_76%)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.02fr_0.78fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-3 py-1.5 text-sm text-emerald-100 shadow-[0_0_40px_rgba(52,211,153,0.12)]"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            {copy.hero.role}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          >
            Green AI Tech
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl"
          >
            {copy.hero.intro}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <PrimaryLink href="#projects">{copy.hero.projectsCta}</PrimaryLink>
            <SecondaryLink href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {copy.hero.contactCta}
            </SecondaryLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
          className="hidden self-end lg:block"
        >
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-white/58">{copy.hero.stackTitle}</span>
              <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-xs text-cyan-100">
                {copy.hero.status}
              </span>
            </div>
            <div className="space-y-3">
              {copy.hero.stackItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-white/8 bg-black/24 px-4 py-3"
                >
                  <span className="text-sm text-white/78">{item}</span>
                  <span className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-emerald-300"
                      style={{ width: `${86 - index * 11}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectSection({ copy, language }: { copy: SiteCopy; language: Language }) {
  return (
    <section id="projects" className="border-t border-white/10 bg-[#050608] py-20 sm:py-24">
      <SectionHeading
        eyebrow={copy.projects.eyebrow}
        title={copy.projects.title}
        description={copy.projects.description}
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, ease: "easeOut", delay: index * 0.08 }}
              className="group rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/30 backdrop-blur-xl transition hover:border-emerald-300/28 hover:bg-white/[0.075] sm:p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-black/30 text-emerald-200">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/32 transition group-hover:text-emerald-100" />
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 min-h-24 text-base leading-7 text-white/68">
                {project.description[language]}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-sm text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ProjectLink href={project.github} icon={GitBranch}>
                  GitHub
                </ProjectLink>
                <ProjectLink href={project.demo} icon={ArrowUpRight}>
                  {copy.projects.demo}
                </ProjectLink>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function SkillsSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="skills" className="bg-[#080a0d] py-20 sm:py-24">
      <SectionHeading
        eyebrow={copy.skills.eyebrow}
        title={copy.skills.title}
        description={copy.skills.description}
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 sm:px-6 lg:grid-cols-4 lg:px-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
              className="flex h-24 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 backdrop-blur-xl transition hover:border-cyan-200/28 hover:bg-white/[0.07]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-black/28 text-cyan-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-white/82 sm:text-base">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="contact" className="bg-[#050608] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium text-emerald-200">{copy.contact.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {copy.contact.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
              {copy.contact.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-80 lg:grid-cols-1">
            <ContactLink href={profile.github} icon={GitBranch} label="GitHub" />
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={copy.contact.email} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.58, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium text-emerald-200">{eyebrow}</p>
      <div className="mt-3 grid gap-4 lg:grid-cols-[0.78fr_0.55fr] lg:items-end">
        <h2 className="text-3xl font-semibold leading-[1.14] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-white/62">{description}</p>
      </div>
    </motion.div>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:bg-emerald-100"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </motion.a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-200/35 hover:bg-white/[0.09]"
    >
      {children}
    </motion.a>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/24 px-4 text-sm font-medium text-white/82 transition hover:border-emerald-300/35 hover:text-white"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </motion.a>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/24 px-4 text-sm font-semibold text-white transition hover:border-cyan-200/35 hover:bg-white/[0.07]"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </motion.a>
  );
}
