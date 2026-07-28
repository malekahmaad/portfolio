const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Backend Development",
    skills: ["FastAPI", "Node.js", "Flask", "REST APIs", "Express.js"],
  },
  {
    title: "Databases & Storage",
    skills: ["Firestore", "MongoDB", "FAISS (Vector Database)", "JSON / File-based Storage", "SQLite", "MySQL"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["Page Index", "Retrieval-Augmented Generation (RAG)", "Embeddings", "Model Evaluation", "Reinforcement Learning"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "HTML/CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "Firebase", "Hugging Face / OpenAI", "Valgrind", "pytest", "VS Code", "Eclipse", "CLion", "PyCharm"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Skills
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Technical skills organized by expertise area.
              </h3>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="grid md:grid-cols-3 gap-4 md:gap-8 py-6 border-b border-border/50 last:border-0 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <h4 className="text-sm font-medium text-muted-foreground">
                  {category.title}
                </h4>
                <div className="md:col-span-2 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
