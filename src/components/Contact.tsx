
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-400">Let's discuss your next project</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to discuss a project, or just want to say hi, 
              I'd love to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">mouli.karmakar@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+91 XXX XXX XXXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
            
            <div>
              <Input 
                placeholder="Subject" 
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
            </div>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
