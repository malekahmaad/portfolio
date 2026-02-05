const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Label */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                About Me
              </h2>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Building efficient, scalable software solutions with a strong backend foundation and a growing focus on applied AI.
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a Software Engineer with strong foundations in designing and implementing
                  software engineering projects, with an emphasis on backend development, data structures,
                  and algorithmic thinking. I have hands-on experience building real-world applications using
                  Python, C++, and JavaScript, focusing on clean architecture, maintainability, and scalability.
                </p>
                <p>
                  I am highly motivated to learn and apply modern technologies across backend systems,
                  AI and machine learning tools, and cloud-based solutions. I enjoy exploring new frameworks,
                  improving existing systems, and translating technical concepts into practical, effective
                  software solutions.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <p className="text-3xl font-serif font-medium">10+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-medium">12+</p>
                  <p className="text-sm text-muted-foreground mt-1">Technologies</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-medium">BSc</p>
                  <p className="text-sm text-muted-foreground mt-1">Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
