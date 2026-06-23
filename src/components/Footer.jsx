function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 SK Technologies. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
