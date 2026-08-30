/**
 * 🎓 ข้อมูลนักศึกษาผู้จัดทำระบบ (Student Configuration)
 * ให้นักศึกษากรอก รหัส-ชื่อ-สกุล และสาขาวิชา ของตนเองที่นี่
 * ข้อมูลจะถูกนำไปแสดงผลบนแถบ Navbar, Banner และ Footer ของเว็บไซต์โดยอัตโนมัติ
 */

export interface StudentInfo {
  studentId: string;
  fullNameThai: string;
  majorThai: string;
  facultyThai: string;
  universityThai: string;
  courseName: string;
  academicYear: string;
  avatarEmoji: string;
}

export const STUDENT_INFO: StudentInfo = {
  studentId: "68040233114", // 👈 ใส่รหัสนักศึกษาของคุณที่นี่
  fullNameThai: "นายภานุวัฒน์ มะธิโต (นักศึกษา)", // 👈 ใส่ชื่อ-นามสกุลภาษาไทยของคุณที่นี่
  majorThai: "สาขาวิชาเทคโนโลยีสารสนเทศ",
  facultyThai: "คณะวิทยาศาสตร์",
  universityThai: "มหาวิทยาลัยราชภัฏอุดรธานี",
  courseName:
    "วิชาการทดสอบและประเมินคุณภาพซอฟต์แวร์ (Software Testing and Quality Assurance)",
  academicYear: "ภาคเรียนที่ 1/2569",
  avatarEmoji: "👨‍💻",
};
