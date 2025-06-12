
import { Award, Trophy, Star, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top Performer Award",
      description: "Recognized as top performer at InspironLabs for exceptional project delivery and code quality",
      year: "2023",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "Client Excellence Recognition",
      description: "Received outstanding feedback from clients for delivering projects ahead of schedule",
      year: "2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Project Success Rate",
      description: "Maintained 100% project success rate with zero critical bugs in production",
      year: "2022-2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Technical Innovation",
      description: "Implemented innovative solutions that improved application performance by 40%",
      year: "2024",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Achievements & <span className="text-purple-400">Recognition</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400">Milestones and accomplishments</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                <achievement.icon size={24} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                  <span className="text-purple-400 text-sm font-medium">{achievement.year}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Additional Accomplishments</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
