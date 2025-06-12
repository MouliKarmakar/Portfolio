
import { Building, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work <span className="text-purple-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400">My professional journey</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4">
                <Building size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                <p className="text-purple-400 font-semibold">InspironLabs</p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end space-y-2">
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>2022 - Present (2+ years)</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  Developed and maintained full-stack web applications using React, Node.js, and MongoDB
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  Built responsive mobile applications using React Native and Expo framework
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  Collaborated with cross-functional teams to deliver high-quality software solutions
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  Optimized application performance and implemented best practices for scalability
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  Mentored junior developers and conducted code reviews to maintain code quality
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "React Native", "Redux", "TypeScript"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
