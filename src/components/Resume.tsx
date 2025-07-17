import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer - Ruby On Rails',
      company: 'Webkorps Services India Private Limited',
      period: '08/2022 - Present',
      location: 'Indore, India',
      description: 'Full-stack development focusing on Ruby on Rails applications with MVC architecture expertise and comprehensive web development skills.',
      achievements: [
        'Orchestrated the development of cutting-edge internet applications in Ruby on Rails resulting in a 20% reduction in manual data entry errors and a 15% boost in data accuracy',
        'Skilled in developing, maintaining, and debugging Rails applications throughout the software lifecycle',
        'Proficient in implementing Rails Migrations and utilizing Active Record for efficient database operations',
        'Directed the integration of Action Mailer to automate email notifications in Rails apps, boosting user interaction rates by 30% and enhancing overall customer experience',
        'Implemented advanced CRUD operations and MVC architecture using Rails for optimizing application structure',
        'Proficient in configuring applications for deployment on Heroku, ensuring scalable application and optimal performance in cloud environments',
        'Active participation in Agile processes and daily scrum meetings within teams for smooth project progress',
        'Successfully integrated different frameworks and tools with Ruby on Rails applications',
        'Developed custom GraphQL queries and integrated Grape API for efficient data retrieval and API development'
      ]
    }
  ];

  const education = [
    {
      degree: 'BTech',
      school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      period: '2018 - 2022',
      honors: 'India',
      relevantCourses: ['Software Engineering', 'Database Systems', 'Web Development', 'Computer Programming']
    }
  ];

  const achievements = [
    'Orchestrated MVC Architecture Expertise for cutting-edge Ruby on Rails applications',
    'Achieved 20% reduction in manual data entry errors through efficient Rails development',
    'Boosted user interaction rates by 30% through Action Mailer integration',
    'Successfully implemented CRUD operations and database optimization techniques',
    'Proficient in deploying scalable applications on Heroku with optimal cloud performance'
  ];

  const downloadResume = () => {
    // In a real application, this would download the actual resume PDF
    window.open('#resume-pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Resume</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A detailed overview of my professional journey, achievements, and contributions 
            to the software development industry.
          </p>
          <a href="/Ved-Tiwari-Resume.pdf" download>
            <Button 
              variant="hero" 
              size="lg"
              className="mb-8"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume PDF
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Work Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-full bg-border"></div>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <Badge variant="secondary" className="text-xs">{edu.honors}</Badge>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Key Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Interested in working together?</h3>
                <p className="text-sm text-muted-foreground mb-4">Let's discuss how I can contribute to your team.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
