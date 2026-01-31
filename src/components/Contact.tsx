import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Contact
              </h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Let's connect and discuss opportunities.
              </h3>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-sm font-medium text-muted-foreground mb-6">
              Get in touch
            </h4>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="mailto:majobs112002@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                majobs112002@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/malek-ahmad-163844283/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                LinkedIn
              </a>

              <a
                href="https://github.com/malekahmaad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                GitHub
              </a>

              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                📍 Jerusalem, Israel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
