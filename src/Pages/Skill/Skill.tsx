import React from "react";
import "./Skill.css";
import { store } from "../../stores/store";
import { observer } from "mobx-react-lite";

type SkillMeterItem = { label: string; level: number };
type SkillGroup = {
  title: string;
  subtitle: string;
  badge?: string;
  meters: SkillMeterItem[];
  tags: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Front-end & UI",
    subtitle: "[REPLACE] Краткий питч: что вы делаете в интерфейсах",
    badge: "UI",
    meters: [
      { label: "React · TypeScript", level: 92 },
      { label: "CSS / анимации / a11y", level: 88 },
      { label: "Производительность (Web Vitals)", level: 85 },
    ],
    tags: ["Next.js", "Vite", "Tailwind", "Framer Motion", "Storybook"],
  },
  {
    title: "Языки и рантайм",
    subtitle: "[REPLACE] Опыт с JS/TS и окружением",
    badge: "JS",
    meters: [
      { label: "TypeScript", level: 90 },
      { label: "JavaScript (ESNext)", level: 93 },
      { label: "Node.js", level: 78 },
    ],
    tags: ["Bun", "Web APIs", "Workers"],
  },
  {
    title: "Бэкенд и данные",
    subtitle: "[REPLACE] API, БД, интеграции",
    badge: "API",
    meters: [
      { label: "REST / GraphQL", level: 82 },
      { label: "Базы данных", level: 76 },
      { label: "Кэш / очереди", level: 70 },
    ],
    tags: ["PostgreSQL", "Redis", "Docker", "Prisma"],
  },
  {
    title: "Инструменты и качество",
    subtitle: "[REPLACE] Как вы поставляете код в прод",
    badge: "DX",
    meters: [
      { label: "Git / code review", level: 90 },
      { label: "Тесты (unit / e2e)", level: 78 },
      { label: "CI/CD", level: 80 },
    ],
    tags: ["GitHub Actions", "Vitest", "Playwright", "ESLint"],
  },
  {
    title: "Экосистема и софт-скиллы",
    subtitle: "[REPLACE] Языки, хобби, что выделяет вас",
    badge: "YOU",
    meters: [
      { label: "Английский (тех.)", level: 72 },
      { label: "Коммуникация / менторство", level: 85 },
      { label: "Пет-проекты / open source", level: 88 },
    ],
    tags: ["Figma", "Unity", "Blender", "Gamedev"],
  },
];

const HERO_STATS = [
  { label: "[REPLACE] Опыт", value: "4+ yrs" },
  { label: "[REPLACE] Фокус", value: "Web / UI" },
  { label: "[REPLACE] Статус", value: "Open" },
];

function SkillMeterBar({ item }: { item: SkillMeterItem }) {
  return (
    <div className="skill-meter">
      <div className="skill-meter__head">
        <span className="skill-meter__label">{item.label}</span>
        <span className="skill-meter__value">{item.level}%</span>
      </div>
      <div
        className="skill-meter__track"
        role="progressbar"
        aria-valuenow={item.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="skill-meter__fill"
          style={{ width: `${item.level}%` }}
        />
      </div>
    </div>
  );
}

export const Skill = observer(() => {
  const themeClass = store.theme ? "skill-studio--light" : "skill-studio--dark";

  return (
    <div className={`skill-studio ${themeClass}`}>
      <header className="skill-hero">
        <p className="skill-hero__eyebrow">
          <span className="skill-hero__pulse" aria-hidden="true" />
          DEV_PROFILE · SKILLS_MATRIX
        </p>
        <h2 className="skill-hero__title">
          [REPLACE] Заголовок: кто вы как разработчик
        </h2>
        <p className="skill-hero__lead">
          [REPLACE] Два предложения: стек, сильные стороны, чем гордитесь.
          Текст полностью замените под себя.
        </p>
        <div className="skill-hero__cmd" aria-label="Terminal line (decorative)">
          <span className="skill-hero__prompt">$</span>
          <code className="skill-hero__typing">
            npm run ship --prod &amp;&amp; echo &quot;done&quot;
          </code>
        </div>
        <ul className="skill-hero__stats">
          {HERO_STATS.map((s) => (
            <li key={s.label} className="skill-hero__stat">
              <span className="skill-hero__stat-value">{s.value}</span>
              <span className="skill-hero__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="skill-bento">
        {SKILL_GROUPS.map((group, i) => (
          <article
            key={group.title}
            className={
              i === 0
                ? "skill-card skill-card--featured"
                : "skill-card"
            }
          >
            <div className="skill-card__head">
              {group.badge ? (
                <span className="skill-card__badge">{group.badge}</span>
              ) : null}
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__subtitle">{group.subtitle}</p>
            </div>
            <div className="skill-card__meters">
              {group.meters.map((m) => (
                <SkillMeterBar key={m.label} item={m} />
              ))}
            </div>
            <div className="skill-card__tags" aria-label="Tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});
