const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BW</span>
            </div>
            <span className="font-semibold text-foreground">Bytewave Technology</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bytewave Technology. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
