"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, Compass } from "lucide-react";

export default function FormRequirements() {
  const { t, language } = useLanguage();
  const reqT = t.requirements;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pt-28 space-y-8 text-stone-800 dark:text-stone-200">
      {/* Top Breadcrumb & Link */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-300 dark:border-stone-800">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {reqT.breadcrumb}
        </span>
        <Link
          href="/form"
          className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline"
        >
          <span>{language === "th" ? "ไปที่แบบฟอร์มลงทะเบียน" : "Go to Registration Form"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Title */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white tracking-tight">
          {reqT.title}
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          {reqT.subtitle}
        </p>
      </div>

      {/* Objective */}
      <div className="space-y-2 bg-[#f4ece1]/80 dark:bg-stone-800/40 p-4 rounded-xl border border-amber-200/80 dark:border-stone-700 text-xs sm:text-sm">
        <h2 className="font-bold text-stone-900 dark:text-white">{reqT.objectiveTitle}</h2>
        <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
          {reqT.objectiveDesc}
        </p>
      </div>

      {/* Section: General Rules */}
      <div className="space-y-4 pt-2">
        <h2 className="text-lg font-bold text-stone-900 dark:text-white border-b border-stone-300 dark:border-stone-800 pb-2">
          {reqT.generalTitle}
        </h2>

        <ol className="list-decimal list-outside pl-5 space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          {reqT.generalRules.map((rule, idx) => (
            <li key={idx}>
              {rule}
            </li>
          ))}
        </ol>
      </div>

      {/* Section: Field-by-Field Requirements */}
      <div className="space-y-5 pt-4">
        <h2 className="text-lg font-bold text-stone-900 dark:text-white border-b border-stone-300 dark:border-stone-800 pb-2">
          {reqT.sectionsTitle}
        </h2>

        <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          {reqT.fields.map((field, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-stone-300/80 dark:border-stone-800 bg-white dark:bg-[#1f1e1c] space-y-1.5 shadow-sm"
            >
              <h3 className="font-bold text-stone-900 dark:text-white flex items-center justify-between">
                <span>{field.title}</span>
                {field.isRequired ? (
                  <span className="text-xs text-red-600 font-semibold bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded">
                    {reqT.requiredBadge} *
                  </span>
                ) : (
                  <span className="text-xs text-stone-500 font-semibold bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {reqT.optionalBadge}
                  </span>
                )}
              </h3>
              <ul className="list-disc list-inside pl-2 space-y-1 text-stone-600 dark:text-stone-400">
                {field.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-stone-300 dark:border-stone-800 flex items-center justify-between">
        <span className="text-xs text-stone-500">Realbugz Testing Simulator</span>
        <Link
          href="/form"
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white dark:bg-amber-600 dark:hover:bg-amber-700 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
        >
          <Compass className="w-4 h-4" />
          <span>{reqT.startTestingButton}</span>
        </Link>
      </div>
    </div>
  );
}
