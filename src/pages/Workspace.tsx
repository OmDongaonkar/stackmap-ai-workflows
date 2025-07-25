import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Map, Users, Globe, MoreVertical } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface MapItem {
  id: string;
  title: string;
  description: string;
  author: string;
  visibility: "public" | "private" | "shared";
  lastModified: string;
  collaborators: number;
}

const Workspace = () => {
  const [maps] = useState<MapItem[]>([
    {
      id: "1",
      title: "E-commerce Architecture",
      description: "Complete system map for online retail platform with microservices",
      author: "You",
      visibility: "private",
      lastModified: "2 hours ago",
      collaborators: 3
    },
    {
      id: "2", 
      title: "API Gateway Design",
      description: "Service mesh and API routing infrastructure map",
      author: "Sarah Chen",
      visibility: "shared",
      lastModified: "1 day ago",
      collaborators: 5
    },
    {
      id: "3",
      title: "Data Flow Visualization",
      description: "Real-time analytics pipeline and data processing workflow",
      author: "Mike Johnson",
      visibility: "public",
      lastModified: "3 days ago",
      collaborators: 12
    }
  ]);

  const getVisibilityColor = (visibility: string) => {
    switch (visibility) {
      case "public": return "bg-primary/10 text-primary border-primary/20";
      case "private": return "bg-muted text-muted-foreground";
      case "shared": return "bg-accent/50 text-accent-foreground border-accent/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case "public": return <Globe className="w-3 h-3" />;
      case "private": return <Map className="w-3 h-3" />;
      case "shared": return <Users className="w-3 h-3" />;
      default: return <Map className="w-3 h-3" />;
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
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/workspace">Workspace</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  Templates
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
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Workflows
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Workspace</h1>
                <p className="text-muted-foreground">
                  Explore and collaborate on system architecture maps
                </p>
              </div>
            </div>
          </div>

          {/* Maps Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {maps.map((map) => (
              <Card key={map.id} className="group hover:shadow-glow transition-all duration-200 cursor-pointer">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className={getVisibilityColor(map.visibility)}>
                        <span className="flex items-center gap-1">
                          {getVisibilityIcon(map.visibility)}
                          {map.visibility}
                        </span>
                      </Badge>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        {map.author === "You" && (
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{map.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {map.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {map.author}</span>
                      <span>Updated {map.lastModified}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{map.collaborators} collaborators</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State (if no maps) */}
          {maps.length === 0 && (
            <div className="text-center py-12">
              <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No maps available</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring maps created by you and your team
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Workspace;