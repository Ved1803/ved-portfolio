import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in Ruby on Rails with strong frontend skills in JavaScript and modern frameworks'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Experience with PostgreSQL upgrades, query optimization, and data migration strategies'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS deployments, CI/CD pipelines, and infrastructure automation'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communicator with experience mentoring junior developers and leading projects'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building Digital Solutions with Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Software Engineer who specializes in Ruby on Rails development 
            and building efficient, scalable web applications with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As an Associate Software Engineer atWebkorps Services India Private Limited, I focus on Ruby on Rails 
                development with expertise in MVC architecture, database management, and API development. 
                My experience includes building cutting-edge applications, implementing CRUD operations, 
                and optimizing system performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code architecture and continuous learning. My technical skills 
                span from backend development with Rails to frontend integration, database optimization, 
                and deployment strategies. I actively participate in Agile development processes and 
                contribute to team collaboration and project success.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Core Values</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Clean, readable, and maintainable code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  User-centered design and development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Continuous learning and improvement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Collaborative team environment
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;