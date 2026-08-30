"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDENT_INFO } from "@/lib/student-config";
import { useLanguage } from "@/lib/language-context";
import { Compass, FileText, GraduationCap, Lightbulb, X, Languages, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHintModal, setShowHintModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
        } border-b border-stone-300/70 bg-[#faf7f2]/95 dark:border-stone-800 dark:bg-[#1f1e1c]/95 backdrop-blur-md`}
      >
        {/* 🎓 Student Info Top Bar */}
        <div className="bg-stone-900 text-stone-100 text-xs py-1.5 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-amber-600 px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 text-white">
                <GraduationCap className="w-3.5 h-3.5" />
                {t.navbar.studentRole}
              </span>
              <span className="text-stone-300">{t.navbar.studentIdLabel}</span>
              <span className="font-bold text-amber-400 tracking-wider">{STUDENT_INFO.studentId}</span>
              <span className="text-stone-500 hidden sm:inline">|</span>
              <span className="font-semibold text-white">{STUDENT_INFO.fullNameThai}</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-stone-400 text-[11px]">
              <span>{STUDENT_INFO.majorThai}</span>
              <span>•</span>
              <span>{STUDENT_INFO.universityThai}</span>
            </div>
          </div>
        </div>

        {/* 🧭 Main Header & Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/form" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-amber-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-stone-900 dark:text-white">
                  Realbugz
                </span>
                <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 ml-1.5 hidden sm:inline">
                  Eldoria Expedition
                </span>
              </div>
            </Link>

            {/* Navigation & Controls */}
            <nav className="flex items-center gap-2 sm:gap-3">
              {/* Requirements Link */}
              <Link
                href="/requirements"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  pathname === "/requirements"
                    ? "bg-stone-900 text-white dark:bg-amber-600"
                    : "text-stone-700 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{t.navbar.requirementsLink}</span>
              </Link>

              {/* Form Link */}
              <Link
                href="/form"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  pathname === "/form"
                    ? "bg-stone-900 text-white dark:bg-amber-600"
                    : "text-stone-700 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>{t.navbar.formLink}</span>
              </Link>

              {/* 💡 Hint Button */}
              <button
                type="button"
                onClick={() => setShowHintModal(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 dark:hover:bg-amber-900/60 border border-amber-300/80 dark:border-amber-800 transition-colors"
                title="เปิดคำใบ้"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">{t.navbar.hintButton}</span>
              </button>

              {/* 🌐 Language Switcher Toggle */}
              <div className="flex items-center border border-stone-300 dark:border-stone-700 rounded-lg p-0.5 bg-stone-100 dark:bg-stone-800 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage("th")}
                  className={`px-2 py-1 rounded-md font-bold transition-all ${
                    language === "th"
                      ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800 dark:text-stone-400"
                  }`}
                  title="เปลี่ยนเป็นภาษาไทยล้วน"
                >
                  🇹🇭 ไทย
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 rounded-md font-bold transition-all ${
                    language === "en"
                      ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800 dark:text-stone-400"
                  }`}
                  title="Switch to Pure English"
                >
                  🇬🇧 EN
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* 💡 Hint Modal / Dialog */}
      {showHintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#faf7f2] dark:bg-stone-900 border border-amber-300 dark:border-amber-800 max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-4 relative">
            <button
              type="button"
              onClick={() => setShowHintModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-base border-b border-amber-200/80 dark:border-stone-800 pb-3">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <span>{t.navbar.hintTitle}</span>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-400">
              {t.navbar.hintDesc}
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-amber-50/80 dark:bg-stone-800/80 rounded-xl border border-amber-200 dark:border-stone-700 space-y-1">
                <span className="font-bold text-amber-900 dark:text-amber-300 block">
                  {t.navbar.hint1Title}
                </span>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  {t.navbar.hint1Text}
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/80 dark:bg-stone-800/80 rounded-xl border border-amber-200 dark:border-stone-700 space-y-1">
                <span className="font-bold text-amber-900 dark:text-amber-300 block">
                  {t.navbar.hint2Title}
                </span>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  {t.navbar.hint2Text}
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setShowHintModal(false)}
                className="px-4 py-2 bg-stone-900 text-white dark:bg-amber-600 rounded-lg text-xs font-bold hover:bg-stone-800 dark:hover:bg-amber-700 transition-colors"
              >
                {t.navbar.closeHint}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
