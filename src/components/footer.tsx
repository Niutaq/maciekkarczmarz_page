import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="px-6 py-12 border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Maciej Karczmarz</p>
      </div>
    </footer>
  );
}
