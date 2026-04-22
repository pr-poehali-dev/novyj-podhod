import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const content = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: April 22, 2026",
    creator: "Creator: kiop_gg",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        text: "By downloading or using FileVirus, you agree to these Terms of Use. If you do not agree, please do not use the software.",
      },
      {
        heading: "2. Description of the Software",
        text: "FileVirus is a Windows utility that generates large numbers of files for menu and directory structures. It does not harm, modify, or delete any system files.",
      },
      {
        heading: "3. Permitted Use",
        text: "You may use FileVirus for personal, educational, and commercial purposes. You may not reverse-engineer, redistribute, or sell the software without written permission from the creator.",
      },
      {
        heading: "4. Prohibited Use",
        text: "You must not use FileVirus for illegal activities, to disrupt other systems, or to violate any applicable laws or regulations.",
      },
      {
        heading: "5. No Warranty",
        text: "FileVirus is provided 'as is' without any warranty. The creator is not responsible for any damage or data loss resulting from the use of the software.",
      },
      {
        heading: "6. Intellectual Property",
        text: "All rights to FileVirus belong to kiop_gg. Unauthorized copying or distribution is prohibited.",
      },
      {
        heading: "7. Changes to Terms",
        text: "The creator reserves the right to update these terms at any time. Continued use of the software constitutes acceptance of the updated terms.",
      },
      {
        heading: "8. Contact",
        text: "For questions regarding these terms, contact the creator: kiop_gg.",
      },
    ],
  },
  ru: {
    title: "Правила использования",
    updated: "Последнее обновление: 22 апреля 2026 г.",
    creator: "Создатель: kiop_gg",
    sections: [
      {
        heading: "1. Принятие условий",
        text: "Скачивая или используя FileVirus, вы соглашаетесь с настоящими Правилами использования. Если вы не согласны — пожалуйста, не используйте программу.",
      },
      {
        heading: "2. Описание программы",
        text: "FileVirus — утилита для Windows, которая создаёт большое количество файлов для структур меню и каталогов. Программа не наносит вреда, не изменяет и не удаляет системные файлы.",
      },
      {
        heading: "3. Разрешённое использование",
        text: "Вы можете использовать FileVirus в личных, образовательных и коммерческих целях. Запрещено дизассемблировать, распространять или продавать программу без письменного разрешения создателя.",
      },
      {
        heading: "4. Запрещённое использование",
        text: "Запрещено использовать FileVirus в незаконных целях, для нарушения работы других систем или нарушения действующего законодательства.",
      },
      {
        heading: "5. Отказ от гарантий",
        text: "FileVirus предоставляется «как есть» без каких-либо гарантий. Создатель не несёт ответственности за ущерб или потерю данных в результате использования программы.",
      },
      {
        heading: "6. Интеллектуальная собственность",
        text: "Все права на FileVirus принадлежат kiop_gg. Несанкционированное копирование или распространение запрещено.",
      },
      {
        heading: "7. Изменение правил",
        text: "Создатель оставляет за собой право обновлять настоящие правила в любое время. Продолжение использования программы означает принятие обновлённых условий.",
      },
      {
        heading: "8. Контакты",
        text: "По вопросам, связанным с настоящими правилами, обращайтесь к создателю: kiop_gg.",
      },
    ],
  },
}

export default function Terms() {
  const [lang, setLang] = useState<"en" | "ru">("ru")
  const t = content[lang]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <Link to="/">
            <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10 pl-0">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Button>
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded text-sm font-orbitron transition-colors ${lang === "ru" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded text-sm font-orbitron transition-colors ${lang === "en" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="border-b border-red-500/30 pb-6 mb-10">
          <h1 className="text-4xl font-bold font-orbitron text-white mb-3">
            File<span className="text-red-500">Virus</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-2">{t.title}</h2>
          <p className="text-gray-400 text-sm font-space-mono">{t.updated}</p>
          <p className="text-red-400 text-sm font-space-mono mt-1">{t.creator}</p>
        </div>

        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-red-400 font-orbitron mb-2">{section.heading}</h3>
              <p className="text-gray-300 font-space-mono leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
