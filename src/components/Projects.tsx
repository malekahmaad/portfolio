import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Codebase Assistant",
    problem: "Developers often spend significant time understanding unfamiliar codebases, locating relevant files, and answering questions about large repositories. There was a need for an intelligent assistant that could analyze GitHub repositories and provide accurate, context-aware answers about the code structure and implementation.",
    solution: "Built an AI-powered codebase assistant that analyzes GitHub repositories and enables users to ask natural language questions about the codebase. Developed a full-stack application with a FastAPI backend and React frontend, using OpenAI models and PageIndex for tree-based retrieval. Implemented repository processing, intelligent code retrieval, PDF report export, and Google Drive integration to improve code exploration and documentation workflows.",
    tech: ["Python", "FastAPI", "React", "OpenAI API", "PageIndex", "GitHub API", "Google Drive API", "REST APIs", "Git"],
    github: "https://github.com/malekahmaad/AI-Codebase-Assistant",
    githubPrivate: false,
    live: "",
  },
  {
    title: "AI-Powered Multilingual Document Search (RAG)",
    problem: "College staff needed a way to quickly find answers in large, multilingual document collections without manually reading or searching each file.",
    solution: "Developed a Retrieval-Augmented Generation (RAG) system using vector embeddings and semantic search to provide accurate, context-aware answers, supporting multiple languages and document types.",
    tech: ["Python","Flask", "React", "LangChain", "FAISS", "OpenAI / Hugging Face", "Git"],
    github: "https://github.com/malekahmaad/RAG-final-project",      
    githubPrivate: false, 
    live: ""
  },
  {
    title: "Trainers’ Management App – Jerusalem Chess Center",
    problem: "Chess center staff were managing teachers, student groups, and lessons using large, complex spreadsheets in Monday.com, making it difficult to track schedules and data efficiently.",
    solution: "Developed a React Native app with a Firestore backend to manage teachers, student groups, schools, and lessons. Implemented all backend functionality, enabling easy CRUD operations and improving workflow efficiency.",
    tech: ["React Native", "Firestore", "Node.js / Firebase Functions", "JavaScript", "Git"],
    github: "https://github.com/malekahmaad/ChessCenterDB",
    githubPrivate: false,
    live: "",
  }, 
  {
    title: "Reinforcement Learning AI for the SOS Game",
    problem: "As part of an AI course, the goal was to design an intelligent agent capable of learning optimal strategies for the SOS game without hard-coded rules.",
    solution: "Developed a self-learning AI agent using Monte Carlo Tree Search (MCTS) with the PUCT algorithm and deep learning. The agent learns game strategies through self-play, gradually improving its decision-making performance.",
    tech: ["Python", "TensorFlow / Keras", "Monte Carlo Tree Search (MCTS)", "PUCT algorithm", "Reinforcement Learning", "Git"],
    github: "https://github.com/malekahmaad/SOS-GAME",
    githubPrivate: false,
    live: "",
  },
  {
    title: "Hard Disk Scheduling Simulator",
    problem: "As the final project in an Operating Systems course, the challenge was to simulate how an OS manages disk jobs efficiently while handling scheduling, concurrency, and resource constraints.",
    solution: "Developed a C++ simulation of hard disk scheduling and job handling processes, implementing task management and scheduling logic to optimize resource allocation and system performance within a simulated operating system environment.",
    tech: ["C++", "Operating Systems Concepts", "Disk Scheduling Algorithms", "Concurrency & Task Management", "Git"],
    github: "https://github.com/malekahmaad/operating-system/tree/main/disk",
    githubPrivate: false,
    live: "",
  },
  {
    title: "Proxy Client and Proxy Server System (C)",
    problem: "As part of a networking course, the objective was to understand low-level network communication by building two separate systems: a proxy client that communicates directly with real internet servers, and a proxy server that retrieves web resources on behalf of clients instead of connecting to external servers directly.",
    solution: "Implemented two separate C-based networking projects. The proxy client communicates directly with external web servers using socket programming, while the proxy server acts as an intermediary that fetches web content from the internet and serves it to clients. Both projects focused on TCP/IP communication, request forwarding, and reliable data transfer within a client–server architecture.",
    tech: ["C", "Socket Programming", "TCP/IP Networking", "Client–Server Architecture", "HTTP Communication", "Git"],
    github: "https://github.com/malekahmaad/Computer-communication-applications",
    githubPrivate: false,
    live: "",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Projects
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Selected projects demonstrating problem-solving and software engineering skills.
              </h3>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground font-medium mb-1">Problem</p>
                    <p className="text-foreground/80">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium mb-1">Solution</p>
                    <p className="text-foreground/80">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className={`rounded-full text-xs hover:bg-secondary ${
                      project.githubPrivate ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    asChild={!project.githubPrivate}
                  >
                    {project.githubPrivate ? (
                      <span>
                        <Github className="w-3 h-3 mr-2" />
                        Private Repo
                      </span>
                    ) : (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </a>
                    )}
                  </Button>

                  {/* Live Demo Button */}
                  {project.live && project.live !== "" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs hover:bg-secondary"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
