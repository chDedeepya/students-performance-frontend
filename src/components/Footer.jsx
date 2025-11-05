import { Link } from "react-router-dom";
import { GraduationCap, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-foreground/95 text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-2 font-extrabold">
              <GraduationCap className="h-6 w-6" /> SmartLearn
            </Link>
            <p className="mt-3 text-sm text-background/80">
              A modern, AI-powered learning platform for B.Tech students and educators. Gamified, data-driven, and secure.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://in.linkedin.com/" aria-label="Twitter" className="rounded-full p-2 transition-opacity hover:opacity-80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://in.linkedin.com/" aria-label="LinkedIn" className="rounded-full p-2 transition-opacity hover:opacity-80">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/chDedeepya" aria-label="GitHub" className="rounded-full p-2 transition-opacity hover:opacity-80">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:support@smartlearn.app" aria-label="Email" className="rounded-full p-2 transition-opacity hover:opacity-80">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/roadmap" className="hover:underline">Roadmap</Link></li>
              <li><Link to="/changelog" className="hover:underline">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li><Link to="/docs" className="hover:underline">Documentation</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/support" className="hover:underline">Support</Link></li>
              <li><Link to="/community" className="hover:underline">Community</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:underline">Security</Link></li>
              <li><Link to="/status" className="hover:underline">Status</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold">Stay in the loop</h4>
            <p className="mt-3 text-sm text-background/80">
              Subscribe for updates, insights, and exclusive platform features.
            </p>
            <form className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-l-full border-none bg-background/10 text-background placeholder:text-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="rounded-r-full bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/70">
          © {new Date().getFullYear()} SmartLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
