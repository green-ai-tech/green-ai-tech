"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Brain,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  GraduationCap,
  Layers3,
  Languages,
  Mail,
  MessageSquareReply,
  Mic,
  MonitorCog,
  PanelTop,
  Route,
  Server,
  Sparkles,
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
  { name: "PyTorch", icon: Brain },
  { name: "FastAPI", icon: Server },
  { name: "LangChain", icon: Workflow },
  { name: "LangGraph", icon: Bot },
  { name: "Transformers", icon: Layers3 },
  { name: "PostgreSQL", icon: Database },
  { name: "ChromaDB", icon: Database },
  { name: "Docker", icon: Cpu },
  { name: "Ollama", icon: Bot },
  { name: "RAG", icon: Workflow },
  { name: "OpenCV", icon: Eye },
  { name: "Streamlit", icon: PanelTop },
];

const learningPath: Array<{
  step: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}> = [
  {
    step: "01",
    title: {
      en: "Foundations",
      zh: "基础能力",
    },
    description: {
      en: "Python, NumPy, image processing, visualization, and PyTorch fundamentals.",
      zh: "Python、NumPy、图像处理、可视化和 PyTorch 基础。",
    },
  },
  {
    step: "02",
    title: {
      en: "Deep Learning",
      zh: "深度学习",
    },
    description: {
      en: "CNN, LeNet5, transfer learning, YOLO fine-tuning, and model training workflows.",
      zh: "CNN、LeNet5、迁移学习、YOLO 微调和模型训练工作流。",
    },
  },
  {
    step: "03",
    title: {
      en: "Transformer Systems",
      zh: "Transformer 系统",
    },
    description: {
      en: "Encoder-decoder architecture, self-attention, text classification, and translation.",
      zh: "Encoder-Decoder、自注意力、文本分类和中英翻译模型。",
    },
  },
  {
    step: "04",
    title: {
      en: "LLM Applications",
      zh: "大模型应用",
    },
    description: {
      en: "Prompt engineering, tool calling, structured output, RAG, memory, LangGraph, and MCP.",
      zh: "Prompt、工具调用、结构化输出、RAG、记忆、LangGraph 和 MCP。",
    },
  },
];

const learningModules: Array<{
  title: string;
  icon: LucideIcon;
  description: Record<Language, string>;
  points: Record<Language, string[]>;
}> = [
  {
    title: "Machine Vision",
    icon: Eye,
    description: {
      en: "A complete computer vision path from cameras and image processing to model training and deployment.",
      zh: "从摄像头、图像处理到模型训练与部署的完整机器视觉链路。",
    },
    points: {
      en: ["YOLO detection", "Sobel features", "LeNet5 MNIST", "Transfer learning"],
      zh: ["YOLO 目标检测", "Sobel 特征", "LeNet5 手写数字", "迁移学习"],
    },
  },
  {
    title: "Speech Recognition",
    icon: Mic,
    description: {
      en: "Audio feature extraction, language recognition, training scripts, and command datasets.",
      zh: "音频特征提取、语言识别、训练脚本和语音指令数据集。",
    },
    points: {
      en: ["Audio preprocessing", "CNN training", "Language ID", "Command recording"],
      zh: ["音频预处理", "CNN 训练", "语言识别", "指令录制"],
    },
  },
  {
    title: "Encoder-Decoder",
    icon: Layers3,
    description: {
      en: "Image autoencoding, transformer text classification, generation, and self-attention fundamentals.",
      zh: "图像自编码、Transformer 文本分类、内容生成和自注意力机制。",
    },
    points: {
      en: ["Autoencoder", "Word2Vec", "Multi-head attention", "Translation"],
      zh: ["自编码器", "Word2Vec", "多头注意力", "中英翻译"],
    },
  },
  {
    title: "LLM Agent",
    icon: Bot,
    description: {
      en: "Agent loops, ReAct reasoning, RAG, memory, streaming, LangGraph orchestration, and multi-agent handoff.",
      zh: "Agent 循环、ReAct 推理、RAG、记忆、流式输出、LangGraph 编排和多智能体交接。",
    },
    points: {
      en: ["Tool calling", "Structured output", "RAG", "MCP"],
      zh: ["工具调用", "结构化输出", "RAG", "MCP"],
    },
  },
];

const practiceHighlights: Array<{
  title: Record<Language, string>;
  icon: LucideIcon;
  stack: string[];
  description: Record<Language, string>;
  flow: Record<Language, string>;
}> = [
  {
    title: {
      en: "Voice Control System",
      zh: "语音控制系统",
    },
    icon: MonitorCog,
    stack: ["PySide6", "CNN", "PyAudio", "pyautogui"],
    description: {
      en: "A desktop workflow that records commands, converts audio into Mel spectrograms, runs model inference, and controls the system.",
      zh: "桌面端语音控制工作流：录音、Mel 频谱图、模型推理，再执行系统操作。",
    },
    flow: {
      en: "Key press -> recording -> Mel spectrogram -> SimpleCNN -> screenshot / mouse / calculator",
      zh: "按键 -> 录音 -> Mel 频谱图 -> SimpleCNN -> 截屏 / 鼠标 / 计算器",
    },
  },
  {
    title: {
      en: "Vectorization Desktop App",
      zh: "向量化桌面应用",
    },
    icon: Database,
    stack: ["PySide6", "ChromaDB", "Ollama", "PCA"],
    description: {
      en: "A dark-mode desktop app for PDF/TXT/MD vectorization, background processing, progress tracking, and PCA visualization.",
      zh: "暗色桌面应用，支持 PDF/TXT/MD 向量化、后台线程处理、进度追踪和 PCA 可视化。",
    },
    flow: {
      en: "Files -> clean text -> chunks -> Ollama embeddings -> ChromaDB -> PCA",
      zh: "文件 -> 文本清洗 -> 分块 -> Ollama Embedding -> ChromaDB -> PCA",
    },
  },
  {
    title: {
      en: "Email Reply Agent",
      zh: "邮件回复智能体",
    },
    icon: MessageSquareReply,
    stack: ["LangGraph", "Tool Calling", "RAG", "Interrupt"],
    description: {
      en: "A LangGraph workflow that classifies email intent, searches documents or issues, drafts replies, and pauses for human review.",
      zh: "LangGraph 工作流：邮件意图分类、文档/工单搜索、草稿生成，并通过 interrupt 进入人工审核。",
    },
    flow: {
      en: "Email -> intent -> search / issue -> draft -> human review",
      zh: "邮件 -> 意图分类 -> 搜索 / 工单 -> 草稿 -> 人工审核",
    },
  },
];

const content = {
  en: {
    nav: {
      journey: "Journey",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    languageToggle: "Switch to Chinese",
    languageLabel: "中",
    hero: {
      role: "AI Engineer / LLM Application Developer",
      intro:
        "Building EduAgent and StockAgent from a hands-on AI learning journey across computer vision, speech, Transformers, RAG, and multi-agent systems.",
      projectsCta: "View Projects",
      journeyCta: "Learning Journey",
      contactCta: "Contact",
      stackTitle: "Agent Stack",
      status: "Online",
      stackItems: ["RAG Pipeline", "Multi-Agent Graph", "Vector Search"],
    },
    journey: {
      eyebrow: "Learning Journey",
      title: "From fundamentals to production-minded AI applications",
      description:
        "A continuously updated path of runnable code, clear notes, and practical thinking from math and deep learning basics to LLM agents.",
      motto: "Move slowly, move well. Stay curious, patient, and committed to building.",
    },
    modules: {
      eyebrow: "Modules",
      title: "A broad AI learning map with runnable outputs",
      description:
        "The learning repository covers notebooks, scripts, visualizations, and applied demos across model training and LLM application development.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Products and practice projects",
      description: "Focused products plus hands-on projects that turn notebooks into usable tools.",
      demo: "Demo",
      practiceEyebrow: "Practice Highlights",
      practiceTitle: "Engineering demos from the AI learning repo",
      practiceDescription:
        "Selected projects show the path from classic AI to agentic LLM workflows.",
    },
    skills: {
      eyebrow: "Skills",
      title: "AI engineering stack across model and product layers",
      description:
        "Python engineering, deep learning, local LLMs, retrieval, workflow orchestration, GUI tools, and web deployment.",
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
      journey: "路线",
      projects: "项目",
      skills: "技能",
      contact: "联系",
    },
    languageToggle: "Switch to English",
    languageLabel: "EN",
    hero: {
      role: "AI 工程师 / LLM 应用开发者",
      intro:
        "从机器视觉、语音识别、Transformer、RAG 到多智能体系统，持续构建 EduAgent、StockAgent 和可运行的 AI 应用。",
      projectsCta: "查看项目",
      journeyCta: "学习路线",
      contactCta: "联系我",
      stackTitle: "智能体栈",
      status: "在线",
      stackItems: ["RAG 流程", "多智能体图", "向量检索"],
    },
    journey: {
      eyebrow: "学习路线",
      title: "从基础能力到工程化 AI 应用",
      description:
        "一个持续更新的 AI 学习路径：可运行代码、清晰笔记、从原理到实践的完整思考。",
      motto: "慢慢来，比较快。保持好奇，保持耐心，保持对世界的热爱。",
    },
    modules: {
      eyebrow: "学习模块",
      title: "覆盖完整 AI 学习地图，并沉淀可运行产出",
      description:
        "学习仓库覆盖 Notebook、训练脚本、可视化结果和实战 Demo，连接模型训练与 LLM 应用开发。",
    },
    projects: {
      eyebrow: "项目",
      title: "产品项目与实战项目",
      description: "从 Notebook 到可用工具，把学习内容转化为真实可运行的产品原型。",
      demo: "演示",
      practiceEyebrow: "实战亮点",
      practiceTitle: "AI 学习仓库中的工程化 Demo",
      practiceDescription: "精选项目展示从传统 AI 到智能体工作流的实践路径。",
    },
    skills: {
      eyebrow: "技能",
      title: "覆盖模型层与产品层的 AI 工程技术栈",
      description: "覆盖 Python 工程、深度学习、本地大模型、检索增强、工作流编排、桌面工具和 Web 部署。",
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
  const [language, setLanguage] = useState<Language>("zh");
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
      <LearningJourneySection copy={copy} language={language} />
      <LearningModulesSection copy={copy} language={language} />
      <ProjectSection copy={copy} language={language} />
      <PracticeHighlightsSection copy={copy} language={language} />
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
          <a className="transition hover:text-white" href="#journey">
            {copy.nav.journey}
          </a>
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
            <SecondaryLink href="#journey">
              <Route className="h-4 w-4" aria-hidden="true" />
              {copy.hero.journeyCta}
            </SecondaryLink>
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

function LearningJourneySection({
  copy,
  language,
}: {
  copy: SiteCopy;
  language: Language;
}) {
  return (
    <section id="journey" className="border-t border-white/10 bg-[#050608] py-20 sm:py-24">
      <SectionHeading
        eyebrow={copy.journey.eyebrow}
        title={copy.journey.title}
        description={copy.journey.description}
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 sm:px-6 lg:grid-cols-[0.72fr_1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-lg border border-emerald-300/15 bg-emerald-300/[0.045] p-6 backdrop-blur-xl sm:p-7 lg:self-start"
        >
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-emerald-300/20 bg-black/24 text-emerald-100">
            <BookOpen className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">AI Learning Journey</h3>
          <p className="mt-4 text-base leading-7 text-white/68">{copy.journey.motto}</p>
          <div className="mt-7 grid gap-3 text-sm text-white/62">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3">
              <Sparkles className="h-4 w-4 text-emerald-200" aria-hidden="true" />
              <span>{language === "en" ? "Runnable code and notes" : "可运行代码与学习笔记"}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3">
              <Workflow className="h-4 w-4 text-cyan-100" aria-hidden="true" />
              <span>{language === "en" ? "From principles to applications" : "从原理理解到应用实践"}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-3">
          {learningPath.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.48, ease: "easeOut", delay: index * 0.05 }}
              className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:grid-cols-[4.5rem_1fr] sm:items-start"
            >
              <span className="inline-flex h-12 w-16 items-center justify-center rounded-lg border border-white/10 bg-black/28 font-mono text-sm text-emerald-100">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title[language]}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  {item.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningModulesSection({
  copy,
  language,
}: {
  copy: SiteCopy;
  language: Language;
}) {
  return (
    <section className="bg-[#080a0d] py-20 sm:py-24">
      <SectionHeading
        eyebrow={copy.modules.eyebrow}
        title={copy.modules.title}
        description={copy.modules.description}
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
        {learningModules.map((module, index) => {
          const Icon = module.icon;

          return (
            <motion.article
              key={module.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-cyan-200/28 hover:bg-white/[0.065]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-black/28 text-cyan-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{module.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">
                {module.description[language]}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {module.points[language].map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/66"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
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

function PracticeHighlightsSection({
  copy,
  language,
}: {
  copy: SiteCopy;
  language: Language;
}) {
  return (
    <section className="bg-[#050608] py-20 sm:py-24">
      <SectionHeading
        eyebrow={copy.projects.practiceEyebrow}
        title={copy.projects.practiceTitle}
        description={copy.projects.practiceDescription}
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
        {practiceHighlights.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title.en}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/24 backdrop-blur-xl transition hover:border-emerald-300/28 hover:bg-white/[0.075]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-black/28 text-emerald-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-white/10 bg-black/24 px-2.5 py-1 text-xs text-white/52">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{project.title[language]}</h3>
              <p className="mt-3 text-sm leading-6 text-white/64">
                {project.description[language]}
              </p>
              <div className="mt-5 rounded-lg border border-white/10 bg-black/24 p-3 font-mono text-xs leading-5 text-cyan-100/76">
                {project.flow[language]}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs text-white/68"
                  >
                    {item}
                  </span>
                ))}
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
