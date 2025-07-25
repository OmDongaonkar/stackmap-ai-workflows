import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Code, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">
              Stackmap
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Map workflows.
              <br />
              Generate docs.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI-powered platform for developers to visualize architectures, 
              create documentation, and improve team knowledge sharing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="group">
              <Link to="/signup" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center gap-8 pt-8 opacity-60">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Workflow className="w-4 h-4" />
              <span>Workflows</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code className="w-4 h-4" />
              <span>Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Documentation</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;