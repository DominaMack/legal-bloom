import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold font-heading text-foreground">
              Love <span className="text-gradient">Law</span>
              <span className="text-gradient-gold">™</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3">
              Legal lifestyle + daily motivation for the next generation of attorneys.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="https://shoplovelaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Shop</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Subscribe</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">More</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/enterprise" className="hover:text-foreground transition-colors">Enterprise</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">SMS Motivation</h4>
            <p className="text-sm text-muted-foreground">
              📲 Text <span className="text-accent font-semibold">LAW</span> to +1 717-366-6462
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Love Law™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
