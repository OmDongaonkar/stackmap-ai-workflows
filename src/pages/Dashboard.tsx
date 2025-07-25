import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Workflow, Clock, MoreVertical, Map } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface Project {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  status: "draft" | "published" | "archived";
}

const Dashboard = () => {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      title: "Authentication Flow",
      description: "User registration and login workflow with OAuth integration",
      lastModified: "2 hours ago",
      status: "published"
    },
    {
      id: "2", 
      title: "Payment Processing",
      description: "Stripe integration for subscription management",
      lastModified: "1 day ago",
      status: "draft"
    },
    {
      id: "3",
      title: "Data Pipeline",
      description: "ETL process for user analytics and reporting",
      lastModified: "3 days ago",
      status: "published"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-primary/10 text-primary border-primary/20";
      case "draft": return "bg-muted text-muted-foreground";
      case "archived": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-xl font-semibold text-foreground">
                Stackmap
              </Link>
              <nav className="flex items-center gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/dashboard">Workflows</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  Templates
                </Button>
                <Button variant="ghost" size="sm">
                  Settings
                </Button>
              </nav>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full bg-primary/10">
                  JD
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Workflows</h1>
              <p className="text-muted-foreground">
                Manage your documentation and architecture workflows
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link to="/workspace">
                  <Map className="w-4 h-4 mr-2" />
                  See Map
                </Link>
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Workflow
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-glow transition-all duration-200 cursor-pointer">
                <Link to={`/workflow/${project.id}`}>
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-primary" />
                        <Badge variant="secondary" className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>Updated {project.lastModified}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* Empty State (if no projects) */}
          {projects.length === 0 && (
            <div className="text-center py-12">
              <Workflow className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No workflows yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first workflow to start mapping your architecture
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Workflow
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;