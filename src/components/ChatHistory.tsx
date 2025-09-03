import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { History, MessageSquare, Clock, Eye, Trash2 } from "lucide-react";

interface ChatHistoryItem {
  id: string;
  title: string;
  summary: string;
  createdAt: Date;
  messageCount: number;
  topics: string[];
  lastActivity: Date;
}

// Mock data - in real app this would come from API
const mockChatHistory: ChatHistoryItem[] = [
  {
    id: '1',
    title: 'Career Transition to Data Science',
    summary: 'Discussed transitioning from software engineering to data science, required skills, and learning resources.',
    createdAt: new Date('2024-12-10T10:30:00'),
    messageCount: 24,
    topics: ['Data Science', 'Career Change', 'Python', 'Machine Learning'],
    lastActivity: new Date('2024-12-10T11:45:00')
  },
  {
    id: '2',
    title: 'UX Design Fundamentals',
    summary: 'Explored UX design career path, portfolio requirements, and industry expectations for beginners.',
    createdAt: new Date('2024-12-08T14:20:00'),
    messageCount: 18,
    topics: ['UX Design', 'Portfolio', 'Design Thinking', 'User Research'],
    lastActivity: new Date('2024-12-08T15:10:00')
  },
  {
    id: '3',
    title: 'Technical Interview Preparation',
    summary: 'Guidance on preparing for technical interviews, coding challenges, and system design questions.',
    createdAt: new Date('2024-12-05T09:15:00'),
    messageCount: 31,
    topics: ['Interview Prep', 'Coding', 'System Design', 'Algorithms'],
    lastActivity: new Date('2024-12-05T10:30:00')
  },
  {
    id: '4',
    title: 'Remote Work Opportunities',
    summary: 'Discussed remote work trends, finding remote-friendly companies, and building a remote work profile.',
    createdAt: new Date('2024-12-03T16:45:00'),
    messageCount: 15,
    topics: ['Remote Work', 'Job Search', 'Professional Profile'],
    lastActivity: new Date('2024-12-03T17:20:00')
  },
  {
    id: '5',
    title: 'Skills Gap Analysis',
    summary: 'Analyzed current skills vs market demands and created a personalized learning roadmap.',
    createdAt: new Date('2024-12-01T11:00:00'),
    messageCount: 22,
    topics: ['Skill Development', 'Learning Path', 'Market Trends'],
    lastActivity: new Date('2024-12-01T12:15:00')
  }
];

export const ChatHistory = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeSinceLastActivity = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Recently';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-career-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-6 w-6 text-career-primary" />
            Chat History
          </CardTitle>
          <CardDescription>
            Review your previous conversations and insights from your AI career advisor
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Chat History List */}
      <div className="space-y-4">
        {mockChatHistory.map((chat) => (
          <Card key={chat.id} className="shadow-career-card hover:shadow-career transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  {/* Title and Metadata */}
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg text-foreground">{chat.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {getTimeSinceLastActivity(chat.lastActivity)}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chat.summary}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1">
                    {chat.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {chat.messageCount} messages
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(chat.createdAt)} at {formatTime(chat.createdAt)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (when no history) */}
      {mockChatHistory.length === 0 && (
        <Card className="shadow-career-card">
          <CardContent className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No chat history yet</h3>
            <p className="text-muted-foreground mb-6">
              Start a conversation with your AI career advisor to see your chat history here.
            </p>
            <Button variant="career">
              Start First Conversation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};