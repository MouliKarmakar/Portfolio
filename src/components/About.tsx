
import { Code, Heart, Coffee } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            With 2+ years of professional experience, I've had the privilege of working on diverse projects 
            that challenge me to grow and learn continuously.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in software development started with curiosity and has evolved into a career 
            where I get to solve complex problems and build applications that make a difference. 
            I believe in writing clean, maintainable code and staying updated with the latest technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center space-x-2 text-purple-400">
              <Code size={20} />
              <span>Clean Code Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Heart size={20} />
              <span>Problem Solver</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Coffee size={20} />
              <span>Continuous Learner</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2+</div>
              <div className="text-purple-400 mb-6">Years Experience</div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
