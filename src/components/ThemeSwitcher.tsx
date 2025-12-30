import { useState } from "react";

const themes = [
  {
    name: "Royal Blue",
    vars: {
      "--background": "225 70% 16%",
      "--card": "225 70% 20%",
      "--accent": "225 80% 50%",
      "--gold": "225 80% 50%",
      "--gold-light": "225 80% 70%",
      "--gold-dark": "225 80% 30%",
      "--navbar-bg": "225 70% 20%",
    },
  },
  {
    name: "Aqua Blue",
    vars: {
      "--background": "190 80% 20%",
      "--card": "190 80% 25%",
      "--accent": "190 100% 50%",
      "--gold": "190 100% 50%",
      "--gold-light": "190 100% 70%",
      "--gold-dark": "190 100% 30%",
      "--navbar-bg": "190 80% 25%",
    },
  },
  {
    name: "Dark Blue",
    vars: {
      "--background": "220 60% 10%",
      "--card": "220 60% 14%",
      "--accent": "220 60% 30%",
      "--gold": "220 60% 30%",
      "--gold-light": "220 60% 50%",
      "--gold-dark": "220 60% 20%",
      "--navbar-bg": "220 60% 14%",
    },
  },
];

export default function ThemeSwitcher() {
  const [selected, setSelected] = useState(0);

  const handleChange = (idx: number) => {
    setSelected(idx);
    const vars = themes[idx].vars;
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-black/80 rounded-lg shadow-lg p-3 flex gap-2 items-center">
      <span className="font-semibold text-sm mr-2">Theme:</span>
      {themes.map((theme, idx) => (
        <button
          key={theme.name}
          className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${selected === idx ? 'bg-gold text-white' : 'bg-white text-black border-gold'}`}
          onClick={() => handleChange(idx)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
