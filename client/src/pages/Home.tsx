import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import TypingEffect from "@/components/TypingEffect";
import { ArrowRight, Workflow, Code, FileText, Zap, Shield, Globe, AlertTriangle, CheckCircle, Edit, Settings, Bot, Layout, List, Clipboard, Users, Target, Share, Check, X } from "lucide-react";

const Home = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 glass-card sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient animate-fade-in-left">
              Stackmap
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" asChild className="hover-lift transition-all duration-300 hover:text-primary">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="hover-lift animate-pulse-glow bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 parallax" data-speed="0.5">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float"></div>
        </div>
        
        <div className="px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="text-center space-y-8 animate-on-scroll">
              <div className="space-y-6">
                <Badge variant="secondary" className="mb-6 glass-card hover-lift shimmer-effect border-primary/20">
                  <Zap className="w-3 h-3 mr-1 animate-pulse" />
                  AI-Powered Developer Tools
                </Badge>
                <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-foreground relative">
                  <div className="mb-4">
                    <TypingEffect 
                      phrases={["Generate docs.", "Understand codebase.", "Easy onboarding."]}
                      typingSpeed={80}
                      deletingSpeed={40}
                      pauseTime={1500}
                    />
                  </div>
                  <div className="text-gradient animate-float">
                    Map workflows.
                  </div>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light opacity-90">
                  AI-powered platform for developers to visualize architectures, 
                  create documentation, and improve team knowledge sharing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button size="lg" asChild className="group hover-lift bg-gradient-to-r from-primary via-primary to-accent text-lg px-8 py-6 animate-pulse-glow relative overflow-hidden">
                  <Link to="/signup" className="flex items-center gap-3" data-testid="button-hero-signup">
                    <span className="relative z-10">Get Started Free</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover-lift glass-card border-primary/30 text-lg px-8 py-6 hover:border-primary/50 transition-all duration-300">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-32">
              <Card className="group hover-lift glass-card animate-on-scroll stagger-1 gradient-glow relative overflow-hidden">
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                    <Workflow className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">Visual Workflows</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform rough sketches into structured workflow diagrams with AI assistance.
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>

              <Card className="group hover-lift glass-card animate-on-scroll stagger-2 gradient-glow relative overflow-hidden">
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:-rotate-12">
                    <Code className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">Smart Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generate clean architecture diagrams from codebases and improve system understanding.
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>

              <Card className="group hover-lift glass-card animate-on-scroll stagger-3 gradient-glow relative overflow-hidden">
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                    <FileText className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">Auto Documentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generate comprehensive documentation from code and improve team onboarding.
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mt-16 opacity-60">
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
                <Shield className="w-4 h-4" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
                <Globe className="w-4 h-4" />
                <span>Global Teams</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
                <Zap className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Problem/Solution Section */}
          <section className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 text-destructive">
                  <AlertTriangle className="w-6 h-6 animate-pulse" />
                  <h2 className="text-2xl font-semibold">The Problem</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Teams struggle with messy, inconsistent workflow documentation that's hard to understand. 
                  Critical processes get lost in scattered notes, making onboarding painful and knowledge transfer ineffective.
                </p>
              </div>
              <div className="space-y-6 animate-on-scroll stagger-1">
                <div className="flex items-center gap-3 text-green-500">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                  <h2 className="text-2xl font-semibold">Our Solution</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform rough ideas into clear, structured formats that anyone can follow. 
                  Our platform converts chaotic workflow sketches into professional documentation automatically.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="bg-muted/30 py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground">Three simple steps to transform your workflow chaos into clear documentation</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4 animate-on-scroll stagger-1 group cursor-pointer">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover-lift">
                    <Edit className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Step 1: Design</h3>
                    <p className="text-muted-foreground">Create your rough workflow using our intuitive canvas. Sketch out your ideas freely without worrying about structure.</p>
                  </div>
                </div>
                <div className="text-center space-y-4 animate-on-scroll stagger-2 group cursor-pointer">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover-lift">
                    <Settings className="w-10 h-10 text-accent group-hover:animate-spin" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Step 2: Structure</h3>
                    <p className="text-muted-foreground">Our software automatically organizes your rough ideas into professional, structured workflow formats.</p>
                  </div>
                </div>
                <div className="text-center space-y-4 animate-on-scroll stagger-3 group cursor-pointer">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover-lift">
                    <FileText className="w-10 h-10 text-green-500 group-hover:animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Step 3: Document</h3>
                    <p className="text-muted-foreground">AI generates comprehensive documentation with step-by-step processes that your team can actually follow.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
              <div className="space-y-4 animate-on-scroll">
                <h2 className="text-4xl font-bold text-gradient">Start Documenting Your Workflow</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Transform chaotic processes into clear, actionable documentation that your team will actually use. 
                  Join thousands of teams who've eliminated workflow confusion.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-1">
                <Button size="lg" asChild className="group hover-lift bg-gradient-to-r from-primary to-accent text-lg px-10 py-6 animate-pulse-glow relative overflow-hidden">
                  <Link to="/signup" className="flex items-center gap-3" data-testid="button-final-cta">
                    <span className="relative z-10">Get Started Free</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover-lift glass-card border-primary/30 text-lg px-10 py-6 hover:border-primary/50">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground animate-on-scroll stagger-2">
                No credit card required • Start with freemium plan • Upgrade anytime
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;