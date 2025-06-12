
import { Code, GitBranch, Database, Smartphone, Globe, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Tools = () => {
  const toolCategories = [
    {
      title: "Development",
      icon: Code,
      tools: ["VS Code", "WebStorm", "Sublime Text"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      tools: ["Git", "GitHub", "GitLab"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Database Tools",
      icon: Database,
      tools: ["MongoDB Compass", "MySQL Workbench", "Postman"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      tools: ["Expo CLI", "React Native Debugger", "Android Studio"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & UI",
      icon: Globe,
      tools: ["Figma", "Adobe XD", "Tailwind CSS"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "DevOps & Deployment",
      icon: Terminal,
      tools: ["Docker", "Vercel", "Netlify", "AWS"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools & <span className="text-purple-400">Technologies</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400">Tools that power my development workflow</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((category, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.tools.map((tool, toolIndex) => (
                <li key={toolIndex} className="text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  {tool}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;
