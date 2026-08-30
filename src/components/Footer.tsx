import Link from "next/link";
import { STUDENT_INFO } from "@/lib/student-config";
import { Compass, GraduationCap, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/70 mt-16 text-stone-600 dark:text-stone-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Col 1: Project Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-white dark:text-stone-900">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-stone-900 dark:text-white">
                Realbugz — Eldoria Expedition Form
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              ระบบจำลองการลงทะเบียนสำหรับการทดสอบซอฟต์แวร์ (Software Testing Simulator)
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
              <span>ข้อมูลจำลองเพื่อการศึกษาเท่านั้น</span>
            </div>
          </div>

          {/* Col 2: Student Profile Card */}
          <div className="bg-stone-50 dark:bg-stone-800/50 p-3.5 rounded-lg border border-stone-200 dark:border-stone-700 space-y-1 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-stone-800 dark:text-stone-200">
              <GraduationCap className="w-3.5 h-3.5 text-stone-600" />
              <span>ข้อมูลผู้จัดทำ (Student Profile)</span>
            </div>
            <p><strong className="text-stone-900 dark:text-white">รหัสนักศึกษา:</strong> {STUDENT_INFO.studentId}</p>
            <p><strong className="text-stone-900 dark:text-white">ชื่อ-สกุล:</strong> {STUDENT_INFO.fullNameThai}</p>
            <p className="text-[11px] text-stone-500">{STUDENT_INFO.majorThai} • {STUDENT_INFO.universityThai}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
          <p>© 2569 {STUDENT_INFO.fullNameThai} ({STUDENT_INFO.studentId})</p>
          <div className="flex items-center gap-3">
            <Link href="/form" className="hover:underline">แบบฟอร์ม</Link>
            <span>•</span>
            <Link href="/requirements" className="hover:underline">ข้อกำหนด</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
