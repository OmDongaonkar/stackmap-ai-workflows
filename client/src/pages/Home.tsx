import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import TypingEffect from "@/components/TypingEffect";
import { ArrowRight, Workflow, Code, FileText, Zap, Shield, Globe, AlertTriangle, CheckCircle, Edit, Settings, Bot, Layout, List, Clipboard, Users, Target, Share, Check, X } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium text-foreground animate-fade-in">
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
              <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
                <TypingEffect 
                  phrases={["Generate docs.", "Understand codebase.", "Easy onboarding."]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={1500}
                />
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Map workflows.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
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
                <h3 className="text-lg font-medium text-foreground">Visual Workflows</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Transform rough sketches into structured workflow diagrams with AI assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-scale animate-fade-in bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Smart Architecture</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Generate clean architecture diagrams from codebases and improve system understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-scale animate-fade-in bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Auto Documentation</h3>
                <p className="text-sm text-muted-foreground font-light">
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

        {/* Problem/Solution Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-destructive">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">The Problem</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Teams struggle with messy, inconsistent workflow documentation that's hard to understand. 
                Critical processes get lost in scattered notes, making onboarding painful and knowledge transfer ineffective.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-green-500">
                <CheckCircle className="w-6 h-6" />
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
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Three simple steps to transform your workflow chaos into clear documentation</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Edit className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Step 1: Design</h3>
                  <p className="text-muted-foreground">Create your rough workflow using our intuitive canvas. Sketch out your ideas freely without worrying about structure.</p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Step 2: Structure</h3>
                  <p className="text-muted-foreground">Our software automatically organizes your rough ideas into professional, structured workflow formats.</p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Step 3: Document</h3>
                  <p className="text-muted-foreground">AI generates comprehensive documentation with step-by-step processes that your team can actually follow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to create world-class workflow documentation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Structured Workflows</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Professional formats that turn chaos into clarity for your team processes.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">AI Documentation</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Intelligent generation of comprehensive docs that actually make sense.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <List className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Step-by-Step Notes</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Detailed process breakdowns that leave no room for confusion.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clipboard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Designed Templates</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Pre-built formats for common workflows to get you started faster.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Perfect For</h2>
              <p className="text-lg text-muted-foreground">Essential scenarios where clear documentation makes all the difference</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Team Onboarding</h3>
                    <p className="text-muted-foreground">
                      Help new hires understand processes quickly with clear, structured documentation instead of tribal knowledge.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Target className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Process Standardization</h3>
                    <p className="text-muted-foreground">
                      Create consistent workflows across teams so everyone follows the same proven methods.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Share className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Knowledge Transfer</h3>
                    <p className="text-muted-foreground">
                      Document tribal knowledge before key team members leave, preserving institutional wisdom.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your team's needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Freemium</h3>
                  <p className="text-3xl font-bold text-foreground">$0</p>
                  <p className="text-muted-foreground">Perfect for trying out the platform</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Basic workflow creation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Simple documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Up to 3 workflows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">GitHub integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Advanced AI features</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover-scale bg-card/50 backdrop-blur-sm border-border/50 border-primary/50">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <Badge className="mb-2">Popular</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Premium</h3>
                  <p className="text-3xl font-bold text-foreground">$15<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                  <p className="text-muted-foreground">For teams serious about documentation</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Unlimited workflows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Advanced documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>GitHub integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Advanced AI features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/signup">Start Premium</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Start Documenting Your Workflow</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Transform chaotic processes into clear, actionable documentation that your team will actually use. 
                Join thousands of teams who've eliminated workflow confusion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group hover-scale shadow-lg">
                <Link to="/signup" className="flex items-center gap-2" data-testid="button-final-cta">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • Start with freemium plan • Upgrade anytime
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;