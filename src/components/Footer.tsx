import { Link } from "react-router-dom";
import logoBlack from "@/assets/love-law-logo-black.png";
import logoWhite from "@/assets/love-law-logo-white.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logoBlack} alt="Love Law™" className="h-10 mb-3 dark:hidden" />
            <img src={logoWhite} alt="Love Law™" className="h-10 mb-3 hidden dark:block" />
            <p className="text-sm text-muted-foreground mt-3">
              Legal lifestyle + daily motivation for the next generation of attorneys.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">Platform</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/sms" className="hover:text-foreground transition-colors">SMS Motivation</Link>
              <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
              <Link to="/gift-cards" className="hover:text-foreground transition-colors">Gift Cards</Link>
              <Link to="/enterprise" className="hover:text-foreground transition-colors">Enterprise</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/research" className="hover:text-foreground transition-colors">Research</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/login" className="hover:text-foreground transition-colors">Login</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 font-heading">SMS Motivation</h4>
            <p className="text-sm text-muted-foreground">
              📲 Text <span className="text-accent font-semibold">LAW</span> to +1 717-366-6462
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Msg & data rates may apply. Text STOP to cancel. Text HELP for help.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Love Law™. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/sms-terms" className="hover:text-foreground transition-colors">SMS Terms</Link>
            <Link to="/do-not-sell" className="hover:text-foreground transition-colors">Do Not Sell</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
