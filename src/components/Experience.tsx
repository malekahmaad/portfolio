import { GraduationCap, Award, Briefcase } from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "Tutor",
    organization: "Azrieli College Of Engineering",
    period: "Nov.2022 - Jul.2025",
    description: [
      "Tutored 4–5 students per year in programming, algorithms, mathematics, and physics courses.",
      "Taught first- and second-year undergraduate students in core computer science subjects.",
      "Prepared teaching materials, practice exercises, and exam-style questions.",
      "Assisted students in solving complex problems and understanding theoretical concepts.",
      "Strengthened communication and leadership skills through one-on-one mentoring."
    ],
  },
];

const education = [
  {
    type: "education",
    title: "BSc in Software Engineering",
    organization: "Azrieli College Of Engineering",
    period: "2021 - 2025",
    description: [
      "Graduated with a GPA of 90.83, with strong performance in core software engineering subjects.",
      "Relevant coursework includes Artificial Intelligence, Operating Systems, Computer Networks, Distributed Systems, Web Development, Image Processing, and Data Structures.",
      "Final year project focused on an AI-based document retrieval system."
    ],
  },
];

const certifications = [
  {
    title: "Tutoring certificate",
    issuer: "Perach / Tutorial Project",
    year: "2025",
    file: "/certificates/tutor_2025.png",
    type: "image",
  },
  {
    title: "Place-IL program",
    issuer: "Place-IL",
    year: "2024/2025",
  },
  {
    title: "Tutoring certificate",
    issuer: "Perach / Tutorial Project",
    year: "2024",
    file: "/certificates/tutor_2024.png",
    type: "image",
  },
  {
    title: "CS50's Introduction to AI with Python",
    issuer: "Harvard University / edX",
    year: "2024",
    file: "/certificates/cs50_AI_certificate.pdf",
    type: "pdf",
  },
  {
    title: "CS50's Introduction to programming with Python",
    issuer: "Harvard University / edX",
    year: "2023",
    file: "/certificates/cs50_python.pdf",
    type: "pdf",
  },
  {
    title: "Tutoring certificate",
    issuer: "Perach / Tutorial Project",
    year: "2023",
    file: "/certificates/tutor_2023.png",
    type: "image",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Experience
                </h2>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                  Teaching & professional experience.
                </h3>
              </div>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="grid md:grid-cols-3 gap-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm font-medium">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.organization}</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-card rounded-2xl p-6 card-shadow">
                  <h4 className="text-lg font-serif font-medium mb-4">{exp.title}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div id="education" className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Education
                </h2>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                  Academic background.
                </h3>
              </div>
            </div>

            {education.map((edu, index) => (
              <div
                key={edu.title}
                className="grid md:grid-cols-3 gap-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm font-medium">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.organization}</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-card rounded-2xl p-6 card-shadow">
                  <h4 className="text-lg font-serif font-medium mb-4">{edu.title}</h4>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Certifications
                </h2>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                  Professional credentials.
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-muted-foreground mt-1" />
              </div>
              <div className="md:col-span-2 space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="bg-card rounded-2xl p-6 card-shadow opacity-0 animate-fade-in flex gap-4 items-start"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Certificate Preview */}
                    {cert.type === "image" && (
                      <a href={cert.file} target="_blank" rel="noopener noreferrer">
                        <img
                          src={cert.file}
                          alt={`${cert.title} certificate`}
                          className="w-20 h-16 object-cover rounded-md border border-border/50 hover:opacity-90 transition"
                        />
                      </a>
                    )}

                    {cert.type === "pdf" && (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-16 flex items-center justify-center rounded-md border border-border/50 bg-secondary hover:bg-secondary/70 transition text-xs text-muted-foreground"
                      >
                        View PDF
                      </a>
                    )}

                    {/* Certificate Text */}
                    <div>
                      <h4 className="font-medium">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
