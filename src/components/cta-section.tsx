import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов начать?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Скачай FileVirus бесплатно и начни создавать тысячи файлов за секунды — без установки, без регистрации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glow-btn bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 font-orbitron border-0"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glow-btn glow-btn-outline border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-lg px-8 py-4 bg-transparent font-orbitron transition-colors duration-300"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Документация
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glow-btn glow-btn-outline border-white/30 text-white/70 hover:bg-white/10 hover:text-white text-lg px-8 py-4 bg-transparent font-orbitron transition-colors duration-300"
            >
              <Icon name="Github" size={20} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}