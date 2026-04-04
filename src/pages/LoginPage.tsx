import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "@/assets/love-law-logo-black.png";
import logoWhite from "@/assets/love-law-logo-white.png";

const LoginPage = () => {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 pt-20 pb-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src={logoBlack} alt="Love Law™" className="h-16 mx-auto mb-4 dark:hidden" />
            <img src={logoWhite} alt="Love Law™" className="h-16 mx-auto mb-4 hidden dark:block" />
            <h1 className="text-2xl font-bold font-heading text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to your Love Law™ portal</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="you@example.com" className="pl-10 bg-background" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type={showPw ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10 bg-background" required />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border-border" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-secondary hover:underline">Forgot password?</a>
              </div>

              <Button variant="hero" className="w-full" type="submit">Sign In</Button>
              {/* <!-- AUTH PLACEHOLDER --> */}
            </form>
          </div>

          <div className="mt-6 space-y-3 text-center text-sm text-muted-foreground">
            <p>Don't have an account? <Link to="/enterprise" className="text-secondary hover:underline">Request Access</Link></p>
            <div className="flex justify-center gap-4">
              <Link to="/enterprise#demo" className="text-secondary hover:underline">Book a Demo</Link>
              <Link to="/enterprise#report" className="text-secondary hover:underline">View Sample Report</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
