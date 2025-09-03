import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Target, Lightbulb, TrendingUp, Star, BookOpen } from "lucide-react";

interface UserProfile {
  name: string;
  age: number;
  education: string;
  interests: string[];
  currentSkills: string[];
}

interface CareerSuggestion {
  title: string;
  match: number;
  description: string;
  requiredSkills: string[];
  growthRate: string;
}

interface SkillRecommendation {
  skill: string;
  importance: 'High' | 'Medium' | 'Low';
  category: string;
}

// Mock data - in real app this would come from API
const mockProfile: UserProfile = {
  name: "Priya Sharma",
  age: 20,
  education: "Computer Science, 3rd Year",
  interests: ["Technology", "Problem Solving", "Design", "Data Analysis"],
  currentSkills: ["Python", "React", "SQL", "Communication"]
};

const mockCareerSuggestions: CareerSuggestion[] = [
  {
    title: "Data Scientist",
    match: 92,
    description: "Analyze complex data to help businesses make informed decisions",
    requiredSkills: ["Python", "Machine Learning", "Statistics", "SQL"],
    growthRate: "22% annually"
  },
  {
    title: "UX/UI Designer",
    match: 87,
    description: "Design user-friendly interfaces and improve user experiences",
    requiredSkills: ["Figma", "User Research", "Prototyping", "Design Thinking"],
    growthRate: "13% annually"
  },
  {
    title: "Software Engineer",
    match: 85,
    description: "Build applications and systems that solve real-world problems",
    requiredSkills: ["JavaScript", "React", "Node.js", "System Design"],
    growthRate: "25% annually"
  }
];

const mockSkillRecommendations: SkillRecommendation[] = [
  { skill: "Machine Learning", importance: 'High', category: "Technical" },
  { skill: "Data Visualization", importance: 'High', category: "Technical" },
  { skill: "Statistical Analysis", importance: 'Medium', category: "Technical" },
  { skill: "Project Management", importance: 'Medium', category: "Soft Skills" },
  { skill: "Public Speaking", importance: 'Low', category: "Soft Skills" }
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-hero rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {mockProfile.name}!</h1>
        <p className="text-white/90">Ready to take the next step in your career journey?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <Card className="lg:col-span-1 shadow-career-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-career-primary" />
              Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">{mockProfile.name}</p>
              <p className="text-sm text-muted-foreground">{mockProfile.education}</p>
              <p className="text-sm text-muted-foreground">Age: {mockProfile.age}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Interests</h4>
              <div className="flex flex-wrap gap-1">
                {mockProfile.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Current Skills</h4>
              <div className="flex flex-wrap gap-1">
                {mockProfile.currentSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        {/* Career Suggestions */}
        <Card className="lg:col-span-2 shadow-career-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-career-secondary" />
              AI-Recommended Career Paths
            </CardTitle>
            <CardDescription>
              Based on your profile, interests, and current market trends
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockCareerSuggestions.map((career, index) => (
              <div key={career.title} className="p-4 border rounded-lg bg-gradient-card">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg">{career.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Match</span>
                    <Badge className="text-xs bg-success text-success-foreground border-0">
                      {career.match}%
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{career.description}</p>
                
                <div className="mb-3">
                  <Progress value={career.match} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-career-secondary" />
                    <span className="text-muted-foreground">Growth: {career.growthRate}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                </div>

                <div className="mt-3">
                  <p className="text-xs text-muted-foreground mb-1">Required Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {career.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Skills Recommendations */}
      <Card className="shadow-career-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-career-accent" />
            Recommended Skills to Develop
          </CardTitle>
          <CardDescription>
            Skills that will boost your career prospects in your chosen field
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSkillRecommendations.map((skill) => (
              <div key={skill.skill} className="p-4 border rounded-lg bg-gradient-card">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{skill.skill}</h4>
                  <Badge 
                    variant={skill.importance === 'High' ? 'destructive' : skill.importance === 'Medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {skill.importance}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{skill.category}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Learn
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};