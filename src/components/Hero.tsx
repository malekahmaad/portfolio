import { Download, FolderOpen, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ CV files (put them in: public/cv/...)
  const cvs = [
    { label: "Software Engineering (General)", href: "/cv/Malek_Ahmad_Software_Engineer_Resume.pdf" },
    { label: "Backend Engineer", href: "/cv/Malek_Ahmad_Backend_Engineer_Resume.pdf" },
    { label: "C / C++ & Python", href: "/cv/Malek_Ahmad_CPP_Python_Resume.pdf" },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-secondary to-muted rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-muted to-secondary rounded-full blur-2xl opacity-40" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] opacity-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Software
                <br />
                <span className="text-muted-foreground">Engineer</span>
              </h1>
            </div>

            <div className="max-w-md opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-serif font-medium mb-3">Malek Ahmad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer with strong backend development skills and a growing focus on AI and
                machine learning. Experienced in building real-world systems using Python, C/C++, JavaScript and React,
                with an emphasis on clean design and scalable solutions.
              </p>
            </div>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button onClick={scrollToProjects} className="group rounded-full px-8 py-6 text-base font-medium">
                <FolderOpen className="w-4 h-4 mr-2" />
                View Projects
              </Button>

              {/* ✅ View CV dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-secondary"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View CV
                    <ChevronDown className="w-4 h-4 ml-2 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-64">
                  {cvs.map((cv) => (
                    <DropdownMenuItem key={cv.href} asChild>
                      <a href={cv.href} target="_blank" rel="noopener noreferrer">
                        {cv.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ✅ Download CV dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-secondary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                    <ChevronDown className="w-4 h-4 ml-2 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-64">
                  {cvs.map((cv) => (
                    <DropdownMenuItem key={cv.href} asChild>
                      <a href={cv.href} download>
                        {cv.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-medium">majobs112002@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-medium">Jerusalem</p>
              </div>
            </div>
          </div>

          {/* Right Image Area - Magazine Cover Style */}
          <div className="order-1 lg:order-2 relative opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="absolute -bottom-3 -left-3 w-full h-full bg-card rounded-sm border border-border/50"
                style={{ transform: "rotate(-3deg)" }}
              />

              <div className="relative bg-card rounded-sm overflow-hidden shadow-xl">
                <div
                  className="absolute top-0 right-0 w-24 h-20 bg-foreground/80"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />
                <div
                  className="absolute top-0 right-0 w-32 h-28"
                  style={{ clipPath: "polygon(100% 0, 30% 0, 100% 80%)", background: "hsl(15, 60%, 75%)" }}
                />
                <div
                  className="absolute bottom-0 right-12 w-24 h-28"
                  style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 20%)", background: "hsl(160, 30%, 80%)" }}
                />

                <div className="aspect-[3/4] p-6 pt-16">
                  <div className="relative w-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    {/* ✅ If image is in public/images/... use leading slash */}
                    <img src="/images/portfolio3.jpg" alt="Malek portrait" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/3 flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
