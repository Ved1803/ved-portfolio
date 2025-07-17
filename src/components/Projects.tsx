import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Database, Shield, Zap, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Peraton',
      description: 'Developed a comprehensive pet management application with PDF generation features for printing pet information on dashboards for different MET sites.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'PDF Generation', 'MVC Architecture'],
      challenges: [
        'Developed custom Rake tasks for updating and deactivating Met site data',
        'Enhanced system efficiency through seamless integration',
        'Implemented minimal disruption operations for smooth workflow'
      ],
      icon: Database,
      github: 'https://github.com/vedtiwari/petmate',
      live: '#'
    },
    {
      title: 'Timesheet Management System',
      description: 'Built a comprehensive timesheet management system from inception to deployment, focusing on backend API creation and optimization.',
      technologies: ['Ruby on Rails', 'REST APIs', 'PostgreSQL', 'Backend Optimization'],
      challenges: [
        'Designed and developed complete backend functionality',
        'Created robust REST API endpoints for frontend integration',
        'Ensured cohesive and seamless user experience'
      ],
      icon: Shield,
      github: 'https://github.com/vedtiwari/timesheet-management',
      live: '#'
    },
    {
      title: 'FOND',
      description: 'Developed a sophisticated PDF generation system with granular admin and delegation features for enhanced user experience.',
      technologies: ['Ruby on Rails', 'Grape API', 'PDF Libraries', 'Admin Controls'],
      challenges: [
        'Utilized Grape API for development and implementation',
        'Implemented team/group recognition features',
        'Enhanced user experience through intuitive admin controls'
      ],
      icon: Zap,
      github: 'https://github.com/vedtiwari/pdf-system',
      live: '#'
    },
    {
      title: 'Prompt AI Enhancement',
      description: 'Worked as a full-stack developer focusing on backend development with frontend integration to support new features.',
      technologies: ['Ruby on Rails', 'Devise', 'JWT', 'Full-Stack Development'],
      challenges: [
        'Built application from scratch with secure authentication using Devise',
        'Implemented JWT for enhanced security and user authentication',
        'Made frontend changes to support new backend features'
      ],
      icon: Users,
      github: 'https://github.com/vedtiwari/prompt-ai',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in building scalable, 
            user-focused web applications with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift bg-card/50 backdrop-blur-sm border-border/50 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Key Challenges Solved</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.live, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/VedTiwari', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;