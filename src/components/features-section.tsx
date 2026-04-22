import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Массовая генерация файлов",
    description: "Создаёт тысячи файлов любого типа за секунды — .txt, .bat, .ini, .cfg и другие форматы для меню Windows.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "100% безопасно",
    description: "Программа не наносит вреда системе — только создаёт файлы. Никаких вирусов, никакого вреда для ПК.",
    icon: "lock",
    badge: "Безопасно",
  },
  {
    title: "Поддержка Windows",
    description: "Полная совместимость с Windows 10 и Windows 11. Запускается без установки прямо из папки.",
    icon: "globe",
    badge: "Windows",
  },
  {
    title: "Гибкие настройки",
    description: "Выбери количество файлов, их имена, расширения и структуру папок — всё настраивается под твою задачу.",
    icon: "brain",
    badge: "Гибко",
  },
  {
    title: "Шаблоны структур",
    description: "Готовые шаблоны для создания структуры меню, каталогов и файловых деревьев — экономь время на рутине.",
    icon: "link",
    badge: "Шаблоны",
  },
  {
    title: "Простой интерфейс",
    description: "Интуитивный интерфейс без лишних кнопок — разберётся даже новичок без технических знаний.",
    icon: "target",
    badge: "Просто",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности нового поколения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Почувствуйте будущее с технологиями, которые переопределяют возможное
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}