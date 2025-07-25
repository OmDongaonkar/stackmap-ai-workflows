import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight, Workflow, Code, FileText, Zap, Shield, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground animate-fade-in">
              Stackmap
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" asChild className="hover-scale">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="hover-scale">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 animate-scale-in">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Developer Tools
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Map workflows.
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Generate docs.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                AI-powered platform for developers to visualize architectures, 
                create documentation, and improve team knowledge sharing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group hover-scale shadow-lg">
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-24">
            <Card className="group hover-scale animate-fade-in bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Visual Workflows</h3>
                <p className="text-sm text-muted-foreground">
                  Transform rough sketches into structured workflow diagrams with AI assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-scale animate-fade-in bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Smart Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Generate clean architecture diagrams from codebases and improve system understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-scale animate-fade-in bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Auto Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Generate comprehensive documentation from code and improve team onboarding.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-16 opacity-60">
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
              <Shield className="w-4 h-4" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Globe className="w-4 h-4" />
              <span>Global Teams</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Zap className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;