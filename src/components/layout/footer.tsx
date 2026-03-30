export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-8">
        <span className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Antoni Davia
        </span>
        <a
          href="mailto:daviayllantoni@gmail.com"
          className="font-mono text-xs text-text-muted transition-colors hover:text-text"
        >
          daviayllantoni@gmail.com
        </a>
      </div>
    </footer>
  );
}
