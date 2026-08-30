import { z } from "zod";

// Regex (ย่อมาจาก Regular Expression หรือที่เรียกในภาษาไทยว่า นิพจน์ปกติ)
// คือ ชุดของสัญลักษณ์และอักษรพิเศษที่นำมาเรียงต่อกันเพื่อสร้างเป็นรูปแบบ (Pattern)
// สำหรับใช้ค้นหา, จับคู่, ตรวจสอบ หรือแทนที่ข้อความ (String) ที่มีลักษณะเฉพาะตามที่เราต้องการได้อย่างรวดเร็วและแม่นยำ
// โดยไม่ต้องเขียนโค้ดเงื่อนไขยาวๆการใช้งานหลักของ Regexค้นหาข้อความ:
// หาคำหรือตัวเลขที่มีรูปแบบซับซ้อนในข้อมูลจำนวนมาก เช่น ค้นหาเบอร์โทรศัพท์
// หรืออีเมลตรวจสอบความถูกต้อง (Validation): เช็กว่าข้อมูลที่ผู้ใช้กรอกเข้ามา เช่น รหัสผ่าน อีเมล หรือเลขบัตรประชาชน
// ตรงตามรูปแบบที่กำหนดหรือไม่แทนที่ข้อความ (Replacement): ค้นหาคำที่ต้องการแล้วเปลี่ยนเป็นคำใหม่อัตโนมัติตัวอย่างสัญลักษณ์พื้นฐาน
// \d หมายถึง ตัวเลขตั้งแต่ 0 ถึง 9 หนึ่งตัว
// \d{3} หมายถึง ตัวเลข 3 ตัวติดกัน[A-Z]
// หมายถึง ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ตั้งแต่ A ถึง Z หนึ่งตัว

export const expeditionFormSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "กรุณากรอกชื่อ-นามสกุล / Please enter full name" })
    .min(2, {
      message:
        "ชื่อ-นามสกุลต้องมีความยาวอย่างน้อย 2 ตัวอักษร / Name must be at least 2 characters",
    })
    .max(50, {
      message:
        "ชื่อ-นามสกุลต้องมีความยาวไม่เกิน 50 ตัวอักษร / Name must not exceed 50 characters",
    }),
  // .regex(/^[a-zA-Z\u0E00-\u0E7F\u0400-\u04FF\s\-']+$/)
  email: z
    .string()
    .min(1, { message: "กรุณากรอกอีเมล / Please enter email" })
    .email({
      message:
        "รูปแบบอีเมลไม่ถูกต้อง / Invalid email format (e.g., test@example.com)",
    })
    .max(100, {
      message:
        "อีเมลต้องมีความยาวไม่เกิน 100 ตัวอักษร / Email must not exceed 100 characters",
    }),

  contactNumber: z
    .string()
    .min(1, { message: "กรุณากรอกเบอร์โทรศัพท์ / Please enter contact number" })
    .max(15, {
      message:
        "เบอร์โทรศัพท์ต้องมีความยาวไม่เกิน 15 ตัวอักษร / Max 15 characters",
    })
    .regex(/^[0-9\+\-\s]+$/, {
      message:
        "อนุญาตเฉพาะตัวเลข, เครื่องหมาย +, - และเว้นวรรคเท่านั้น / Only digits, '+', '-', and spaces allowed",
    }),

  dob: z
    .string()
    .min(1, { message: "กรุณาระบุวันเดือนปีเกิด / Please enter date of birth" })
    .refine(
      (val) => {
        if (!val) return false;
        const birthDate = new Date(val);
        if (isNaN(birthDate.getTime())) return false;
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age >= 18 && age <= 70;
      },
      {
        message:
          "ผู้สมัครต้องมีอายุระหว่าง 18 ถึง 70 ปีบริบูรณ์ ณ วันปัจจุบัน / Age must be between 18 and 70 years",
      },
    ),

  experience: z.string().min(1, {
    message: "กรุณาเลือกระดับประสบการณ์ / Please select experience",
  }),

  // roles: z.array(z.string()).min(1, { message: "กรุณาเลือกบทบาทอย่างน้อย 1 บทบาท" })
  roles: z.array(z.string()).optional(),
  region: z
    .string({
      required_error: "กรุณาเลือกภูมิภาค 1 แห่ง / Please select a region",
    })
    .min(1, { message: "กรุณาเลือกภูมิภาค 1 แห่ง / Please select a region" }),

  desiredSalary: z
    .number()
    .min(0, { message: "เงินเดือนต้องไม่น้อยกว่า $0 / Min salary is $0" })
    .max(1700, { message: "เงินเดือนต้องไม่เกิน $1700 / Max salary is $1700" })
    .default(700),

  contactMethod: z.string().optional(),

  // ✅ ตรวจสอบไฟล์: รับเฉพาะ JPG, PNG, PDF ขนาด <= 5MB
  passportFileName: z
    .string()
    .min(1, {
      message:
        "กรุณาอัปโหลดไฟล์หนังสือเดินทาง หรือบัตรประจำตัว / Please upload passport/ID",
    })
    .refine(
      (name) => {
        if (!name) return false;
        const ext = name.split(".").pop()?.toLowerCase();
        return (
          ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "pdf"
        );
      },
      {
        message:
          "รับเฉพาะไฟล์นามสกุล JPG, PNG, PDF เท่านั้น / Accepted formats are JPG, PNG, PDF only",
      },
    ),

  passportFileSize: z
    .number()
    .optional()
    .refine((size) => !size || size <= 5 * 1024 * 1024, {
      message: "ขนาดไฟล์ต้องไม่เกิน 5 MB / File size must not exceed 5 MB",
    }),

  additionalComments: z
    .string()
    .max(1000, {
      message:
        "ข้อความเพิ่มเติมต้องมีความยาวไม่เกิน 1,000 ตัวอักษร / Max 1,000 characters",
    })
    .optional(),

  termsAccepted: z.boolean().refine((val) => val === true, {
    message:
      "คุณต้องยอมรับข้อตกลงและเงื่อนไขก่อนส่งใบสมัคร / You must agree to Terms and Conditions",
  }),
});

export type ExpeditionFormData = z.infer<typeof expeditionFormSchema>;
