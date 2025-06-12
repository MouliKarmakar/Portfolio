import Typewriter from "typewriter-effect";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = ({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mouli Karmakar
            </span>
          </h1>

          <div className="text-2xl md:text-4xl text-gray-300 h-16 flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "React Specialist",
                  "Mobile App Developer with Expo",
                  "Node.js Expert",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate full-stack developer with 2+ years of experience crafting
          digital solutions. I specialize in building scalable web applications
          and mobile apps using modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/assects/Resume_8th_june.pdf"
            download={"Mouli_Karmakar_Resume.pdf"}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/MouliKarmakar"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mouli-karmakar-19631226b/"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:moulikarmakar7596@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
