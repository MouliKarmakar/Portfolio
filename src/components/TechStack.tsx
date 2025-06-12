
import { Card } from "@/components/ui/card";

const TechStack = () => {
  const frontendTech = [
    { name: "Next.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "Redux", level: 85, color: "from-purple-500 to-pink-500" },
  ];

  const backendTech = [
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "Express", level: 88, color: "from-gray-600 to-gray-800" },
  ];

  const databaseTech = [
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
    { name: "SQL", level: 80, color: "from-blue-600 to-indigo-600" },
  ];

  const mobileTech = [
    { name: "React Native (Expo)", level: 82, color: "from-indigo-500 to-purple-500" },
  ];

  const TechCategory = ({ title, technologies }: { title: string; technologies: any[] }) => (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <h3 className="text-xl font-semibold text-white mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-medium">{tech.name}</span>
              <span className="text-purple-400 text-sm">{tech.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tech <span className="text-purple-400">Stack</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400">Technologies I work with</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TechCategory title="Frontend" technologies={frontendTech} />
        <TechCategory title="Backend" technologies={backendTech} />
        <TechCategory title="Database" technologies={databaseTech} />
        <TechCategory title="Mobile" technologies={mobileTech} />
      </div>
    </div>
  );
};

export default TechStack;
