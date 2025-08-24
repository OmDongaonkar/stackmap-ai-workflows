import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Code2, 
  Database,
  Users,
  MoreVertical
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  type: "api" | "database" | "frontend" | "auth" | "external";
  details: string;
  notes?: string;
}

const ViewWorkflow = () => {
  const { id } = useParams();
  const [openSteps, setOpenSteps] = useState<string[]>(["1"]);

  const workflow = {
    id: "1",
    title: "Authentication Flow",
    description: "Complete user registration and login workflow with OAuth integration",
    status: "published",
    lastModified: "2 hours ago",
    steps: [
      {
        id: "1",
        title: "User Registration",
        description: "New user account creation process",
        type: "frontend" as const,
        details: "React form component with validation using react-hook-form and zod. Includes email verification flow.",
        notes: "Consider adding progressive profiling for better UX. Current validation rules: email format, password strength (8+ chars, special chars)."
      },
      {
        id: "2", 
        title: "Email Verification",
        description: "Send verification email and handle confirmation",
        type: "api" as const,
        details: "POST /api/auth/verify endpoint. Uses SendGrid for email delivery with custom templates.",
        notes: "Rate limiting: 3 emails per hour per user. Token expires in 24 hours."
      },
      {
        id: "3",
        title: "User Database Record",
        description: "Store user data and verification status",
        type: "database" as const,
        details: "PostgreSQL users table with encrypted PII. Includes audit log for security compliance.",
        notes: "GDPR compliance: user data retention policy of 7 years. Automated anonymization after account deletion."
      },
      {
        id: "4",
        title: "OAuth Integration",
        description: "Google and GitHub OAuth providers",
        type: "external" as const,
        details: "OAuth 2.0 flow with PKCE for security. Handles profile data sync and account linking.",
        notes: "Fallback to email/password if OAuth fails. Store minimal profile data to respect privacy."
      },
      {
        id: "5",
        title: "Session Management", 
        description: "JWT token generation and validation",
        type: "auth" as const,
        details: "HS256 signed JWTs with 15min access token and 7-day refresh token rotation.",
        notes: "Implement token blacklisting for logout. Consider moving to RS256 for microservices."
      }
    ] as WorkflowStep[]
  };

  const getStepIcon = (type: string) => {
    switch (type) {
      case "frontend": return <Code2 className="w-4 h-4" />;
      case "api": return <FileText className="w-4 h-4" />;
      case "database": return <Database className="w-4 h-4" />;
      case "auth": return <Users className="w-4 h-4" />;
      case "external": return <ChevronRight className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case "frontend": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "api": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "database": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "auth": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "external": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const toggleStep = (stepId: string) => {
    setOpenSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Link>
              </Button>
              <div className="h-4 w-px bg-border" />
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  {workflow.title}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Updated {workflow.lastModified}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {workflow.status}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit workflow</DropdownMenuItem>
                  <DropdownMenuItem>Export documentation</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Workflow Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Overview
              </CardTitle>
              <CardDescription>
                {workflow.description}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Workflow Steps */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Workflow Steps</h2>
            
            <div className="space-y-3">
              {workflow.steps.map((step, index) => (
                <Card key={step.id} className="transition-all duration-200">
                  <Collapsible 
                    open={openSteps.includes(step.id)}
                    onOpenChange={() => toggleStep(step.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                              {index + 1}
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className={getStepColor(step.type)}>
                                {getStepIcon(step.type)}
                                <span className="ml-1 capitalize">{step.type}</span>
                              </Badge>
                              <div>
                                <CardTitle className="text-base">{step.title}</CardTitle>
                                <CardDescription className="mt-1">
                                  {step.description}
                                </CardDescription>
                              </div>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            openSteps.includes(step.id) ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 space-y-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Implementation Details</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                        
                        {step.notes && (
                          <div>
                            <h4 className="font-medium text-foreground mb-2">Notes & Considerations</h4>
                            <div className="bg-muted/50 rounded-lg p-3">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.notes}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewWorkflow;