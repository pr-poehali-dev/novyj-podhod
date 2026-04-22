import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 22, 2026",
    creator: "Creator: kiop_gg",
    sections: [
      {
        heading: "1. Overview",
        text: "FileVirus respects your privacy. This policy explains what data (if any) is collected when you use the software or visit this website.",
      },
      {
        heading: "2. Data We Do Not Collect",
        text: "FileVirus does not collect, store, or transmit any personal data. The application works entirely offline on your local machine. No registration, account, or internet connection is required to use the software.",
      },
      {
        heading: "3. Website Analytics",
        text: "This website may use basic anonymous analytics (e.g. page views) to understand traffic. No personally identifiable information is collected.",
      },
      {
        heading: "4. Cookies",
        text: "This website does not use tracking cookies. Any cookies present are strictly necessary for the website to function correctly.",
      },
      {
        heading: "5. Third-Party Services",
        text: "This website does not share any data with third parties. No advertising networks or data brokers are used.",
      },
      {
        heading: "6. Children's Privacy",
        text: "FileVirus is not directed at children under 13. We do not knowingly collect information from minors.",
      },
      {
        heading: "7. Changes to This Policy",
        text: "This Privacy Policy may be updated from time to time. The 'Last updated' date at the top of the page will reflect any changes.",
      },
      {
        heading: "8. Contact",
        text: "If you have any questions about this Privacy Policy, contact the creator: kiop_gg.",
      },
    ],
  },
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 22 апреля 2026 г.",
    creator: "Создатель: kiop_gg",
    sections: [
      {
        heading: "1. Общие сведения",
        text: "FileVirus уважает вашу конфиденциальность. В этой политике объясняется, какие данные (если таковые имеются) собираются при использовании программы или посещении сайта.",
      },
      {
        heading: "2. Данные, которые мы не собираем",
        text: "FileVirus не собирает, не хранит и не передаёт персональные данные. Приложение работает полностью в офлайн-режиме на вашем устройстве. Для использования программы не требуется регистрация, учётная запись или подключение к интернету.",
      },
      {
        heading: "3. Аналитика сайта",
        text: "Этот сайт может использовать базовую анонимную аналитику (например, счётчик посещений) для понимания трафика. Персональные данные при этом не собираются.",
      },
      {
        heading: "4. Файлы cookie",
        text: "Этот сайт не использует отслеживающие cookie. Любые файлы cookie, если они присутствуют, необходимы исключительно для корректной работы сайта.",
      },
      {
        heading: "5. Сторонние сервисы",
        text: "Сайт не передаёт никакие данные третьим сторонам. Рекламные сети и брокеры данных не используются.",
      },
      {
        heading: "6. Конфиденциальность детей",
        text: "FileVirus не предназначен для детей младше 13 лет. Мы намеренно не собираем информацию о несовершеннолетних.",
      },
      {
        heading: "7. Изменения политики",
        text: "Настоящая Политика конфиденциальности может обновляться. Дата последнего обновления в верхней части страницы отражает все внесённые изменения.",
      },
      {
        heading: "8. Контакты",
        text: "Если у вас есть вопросы по данной политике, обратитесь к создателю: kiop_gg.",
      },
    ],
  },
}

export default function Privacy() {
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
