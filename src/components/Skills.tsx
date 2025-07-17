import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Cloud, 
  GitBranch, 
  Shield, 
  Zap,
  Server,
  Monitor,
  Cpu,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Ruby', level: 90, years: '3+ years' },
        { name: 'Python', level: 50, years: 'basic' },
        { name: 'JavaScript', level: 85, years: '1+ years' }
      ]
    },
    {
      title: 'Web Development',
      icon: Monitor,
      skills: [
        { name: 'Ruby on Rails', level: 95, years: '3+ years' },
        { name: 'HTML', level: 90, years: '3+ years' },
        { name: 'CSS', level: 85, years: '3+ years' },
        { name: 'MVC Architecture', level: 88, years: '3+ years' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85, years: '3+ years' },
        { name: 'MySQL', level: 80, years: '3+ years' },
        { name: 'MongoDB', level: 70, years: 'Basic' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Cloud,
      skills: [
        { name: 'Git/GitHub/GitLab', level: 85, years: '3+ years' },
        { name: 'Docker', level: 70, years: 'basic' },
        { name: 'GraphQL', level: 80, years: '3+ years' },
        { name: 'Redis', level: 78, years: '3+ years' }
      ]
    }
  ];

  const tools = [
    'RSpec', 'Capybara', 'Bitbucket', 'AWS CodeCommit', 'Trello', 'Jira', 
    'Agile', 'SDLC', 'Swagger', 'CI/CD', 'Kubernetes', 'Heroku'
  ];

  const certifications = [
    {
      title: 'MVC Architecture Expert',
      issuer: 'Ruby on Rails Development',
      year: '2022',
      icon: Code
    },
    {
      title: 'CRUD Operations Specialist',
      issuer: 'Database Management',
      year: '2022',
      icon: Database
    },
    {
      title: 'GraphQL API Development',
      issuer: 'Modern API Technologies',
      year: '2022',
      icon: Globe
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Proficiency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications 
            acquired through years of hands-on development experience.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{skill.years}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Tools & Technologies</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 bg-primary/10 rounded">
                    <cert.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;