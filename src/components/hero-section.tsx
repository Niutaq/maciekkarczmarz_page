import { motion } from 'framer-motion';
import { useLanguage } from './language-provider';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 block">
          {t.hero.subtitle}
        </span>
        <h1 className="text-7xl md:text-9xl font-serif italic leading-[1.05] tracking-tighter">
          Maciej <br /> <span className="text-primary">Karczmarz</span>
        </h1>
        <p className="mt-12 max-w-xl mx-auto font-sans text-lg md:text-xl opacity-60 font-light leading-relaxed tracking-wide">
          {t.hero.description}
        </p>
      </motion.div>
    </section>
  );
};
