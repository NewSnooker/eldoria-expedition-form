export type Language = "th" | "en";

export interface Translations {
  navbar: {
    studentRole: string;
    studentIdLabel: string;
    requirementsLink: string;
    formLink: string;
    hintButton: string;
    hintTitle: string;
    hintDesc: string;
    hint1Title: string;
    hint1Text: string;
    hint2Title: string;
    hint2Text: string;
    closeHint: string;
  };
  form: {
    backToRequirements: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    contactNumberLabel: string;
    contactNumberPlaceholder: string;
    dobLabel: string;
    dobHint: string;
    experienceLabel: string;
    experienceOptions: string[];
    roleLabel: string;
    roles: { value: string; label: string }[];
    regionLabel: string;
    regions: { value: string; label: string }[];
    salaryLabel: string;
    contactMethodLabel: string;
    contactMethods: { value: string; label: string }[];
    passportLabel: string;
    chooseFileButton: string;
    noFileChosen: string;
    fileSelected: string;
    removeFile: string;
    commentsLabel: string;
    commentsPlaceholder: string;
    termsLabel: string;
    termsInteractive: string;
    termsTooltip: string;
    submitButton: string;
    submitting: string;
    clearButton: string;
    submitSuccessTitle: string;
    submitSuccessDesc: string;
    clearSuccessTitle: string;
    clearSuccessDesc: string;
  };
  requirements: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    objectiveTitle: string;
    objectiveDesc: string;
    generalTitle: string;
    generalRules: string[];
    sectionsTitle: string;
    requiredBadge: string;
    optionalBadge: string;
    fields: {
      title: string;
      isRequired: boolean;
      items: string[];
    }[];
    startTestingButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  th: {
    navbar: {
      studentRole: "ผู้จัดทำ",
      studentIdLabel: "รหัสนักศึกษา:",
      requirementsLink: "ข้อกำหนด",
      formLink: "แบบฟอร์ม",
      hintButton: "คำใบ้ภารกิจ",
      hintTitle: "💡 แนวทางการค้นหา Bug สำหรับ Tester",
      hintDesc:
        "ระบบนี้มีจุดบกพร่องที่ซ่อนอยู่ 2 จุด ให้นักศึกษาใช้ทักษะการเป็น Tester ในการค้นหา:",
      hint1Title: "แนวทางที่ 1 (การตรวจสอบรูปแบบข้อมูล):",
      hint1Text:
        "ลองทดสอบป้อนข้อมูลที่ไม่ถูกต้องตามข้อกำหนด (Invalid Input / Negative Testing) ในช่องข้อมูลส่วนบุคคล เพื่อดูว่าระบบมีการดักจับและป้องกันข้อมูลที่ไม่ถูกต้องได้สมบูรณ์หรือไม่",
      hint2Title: "แนวทางที่ 2 (การตรวจสอบช่องบังคับกรอก):",
      hint2Text:
        "ลองตรวจสอบและเปรียบเทียบช่องที่ระบุว่าเป็นช่องบังคับ (Required Field) ในหน้าข้อกำหนด กับการทำงานจริงเมื่อกดส่งฟอร์มโดยไม่เลือกข้อมูล",
      closeHint: "ปิดหน้าต่าง",
    },
    form: {
      backToRequirements: "◀ กลับไปดูข้อกำหนดของแบบฟอร์ม",
      title: "ลงทะเบียนเข้าร่วมทีมสำรวจตามหาเมืองเอลดอเรีย",
      subtitle:
        "กรุณากรอกข้อมูลส่วนตัว ประสบการณ์ และแนบเอกสารเพื่อส่งให้ทีมงานพิจารณา",
      fullNameLabel: "ชื่อ-นามสกุล",
      fullNamePlaceholder: "เช่น สมชาย มุ่งมั่น หรือ Peter Ford",
      emailLabel: "อีเมล",
      emailPlaceholder: "เช่น test@example.com",
      contactNumberLabel: "เบอร์โทรศัพท์ติดต่อ",
      contactNumberPlaceholder: "เช่น +66 81 234 5678 หรือ +1234567890",
      dobLabel: "วันเดือนปีเกิด",
      dobHint: "ผู้สมัครต้องมีอายุระหว่าง 18 ถึง 70 ปีบริบูรณ์ ณ วันปัจจุบัน",
      experienceLabel: "ประสบการณ์ด้านโบราณคดี",
      experienceOptions: [
        "ไม่มีประสบการณ์",
        "มือสมัครเล่น (ไม่เกิน 1 ปี)",
        "ระดับปานกลาง (1–5 ปี)",
        "มืออาชีพผู้เชี่ยวชาญ (มากกว่า 5 ปี)",
      ],
      roleLabel: "บทบาทที่ต้องการในทีมสำรวจ",
      roles: [
        { value: "Researcher", label: "นักวิจัย" },
        { value: "Photographer", label: "ช่างภาพ" },
        { value: "Drone Operator", label: "ผู้ควบคุมโดรน" },
        { value: "Cartographer", label: "นักทำแผนที่" },
        { value: "Medic", label: "แพทย์สนาม" },
        { value: "Logistician", label: "ฝ่ายส่งกำลังบำรุง" },
      ],
      regionLabel: "ภูมิภาคที่ต้องการไปสำรวจ",
      regions: [
        { value: "South America", label: "อเมริกาใต้" },
        { value: "Africa", label: "แอฟริกา" },
        { value: "Asia", label: "เอเชีย" },
        { value: "Europe", label: "ยุโรป" },
        { value: "Australia", label: "ออสเตรเลีย" },
      ],
      salaryLabel: "เลือกเงินเดือนที่ต้องการต่อสัปดาห์ ($):",
      contactMethodLabel: "ช่องทางติดต่อที่สะดวก",
      contactMethods: [
        { value: "Email", label: "อีเมล" },
        { value: "Phone", label: "โทรศัพท์" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "SMS", label: "SMS" },
      ],
      passportLabel: "อัปโหลดหนังสือเดินทาง/บัตรประจำตัว (JPG, PNG, PDF)",
      chooseFileButton: "เลือกไฟล์",
      noFileChosen: "ยังไม่ได้เลือกไฟล์",
      fileSelected: "ไฟล์ที่เลือก:",
      removeFile: "ลบไฟล์",
      commentsLabel: "ข้อความหรือความคิดเห็นเพิ่มเติม",
      commentsPlaceholder: "ระบุข้อความเพิ่มเติม (ถ้ามี)...",
      termsLabel: "ฉันยอมรับ",
      termsInteractive: "ข้อตกลงและเงื่อนไขการเข้าร่วมโครงการ",
      termsTooltip:
        "ข้อมูลและเอกสารที่ท่านส่งจะถูกนำไปใช้เพื่อการคัดเลือกผู้เข้าร่วมทีมสำรวจเอลดอเรียเท่านั้น และจะไม่ถูกเปิดเผยต่อสาธารณะ",
      submitButton: "ส่งใบสมัครลงทะเบียน",
      submitting: "กำลังส่งข้อมูล...",
      clearButton: "ล้างข้อมูลในฟอร์ม",
      submitSuccessTitle: "ส่งข้อมูลสำเร็จ",
      submitSuccessDesc:
        "ระบบได้รับข้อมูลเรียบร้อยแล้ว คุณสามารถทดสอบส่งซ้ำหรือกดล้างข้อมูลเพื่อเริ่มใหม่",
      clearSuccessTitle: "ล้างข้อมูลในฟอร์มเรียบร้อยแล้ว",
      clearSuccessDesc: "ข้อมูลทุกช่องถูกรีเซ็ตกลับเป็นค่าเริ่มต้น",
    },
    requirements: {
      breadcrumb: "เอกสาร: ข้อกำหนดของแบบฟอร์ม (Form Requirements)",
      title: "ข้อกำหนดของแบบฟอร์มลงทะเบียน",
      subtitle:
        "เกณฑ์การทำงานของแบบฟอร์มลงทะเบียนเข้าร่วมทีมสำรวจเมืองโบราณเอลดอเรีย",
      objectiveTitle: "🎯 วัตถุประสงค์ (Objective)",
      objectiveDesc:
        "ให้นักศึกษาและผู้ทดสอบตรวจสอบแบบฟอร์มลงทะเบียนอย่างละเอียด ตรวจสอบความถูกต้องของแต่ละฟิลด์ตามเกณฑ์ที่กำหนด และค้นหาจุดผิดปกติหรือข้อบกพร่อง (Bugs) ในระบบ",
      generalTitle: "ข้อกำหนดทั่วไป (General Requirements)",
      generalRules: [
        "ทุกช่องที่จำเป็นต้องกรอก (Required fields) จะต้องมีเครื่องหมายดอกจันสีแดง (*) กำกับ",
        "แบบฟอร์มจะสามารถกดส่ง (Submit) สำเร็จได้ ก็ต่อเมื่อกรอกข้อมูลในช่องที่จำเป็นครบทุกช่องด้วยข้อมูลที่ถูกต้องตามเกณฑ์",
        "ในข้อความยอมรับข้อตกลง คำว่า 'ข้อตกลงและเงื่อนไข' จะต้องสามารถนำเมาส์ไปชี้ (Hover) เพื่อแสดง Tooltip อธิบายวัตถุประสงค์การใช้ข้อมูลได้",
        "เมื่อกดปุ่มส่งใบสมัคร หากข้อมูลถูกต้องครบถ้วน จะต้องแสดงข้อความแจ้งเตือนความสำเร็จ หากมีข้อมูลผิดพลาด จะต้องแสดงข้อความ Error เตือนที่ช่องนั้นๆ",
        "เมื่อกดปุ่ม Clear Form ระบบจะต้องล้างข้อมูลทุกช่องในฟอร์มกลับเป็นค่าเริ่มต้น และแสดงข้อความแจ้งเตือนความสำเร็จหลังล้างข้อมูล",
      ],
      sectionsTitle: "ข้อกำหนดรายช่องข้อมูล (Form Sections)",
      requiredBadge: "ช่องบังคับ",
      optionalBadge: "ไม่บังคับ",
      fields: [
        {
          title: "1. ชื่อ-นามสกุล (Full Name)",
          isRequired: true,
          items: [
            "ความยาวระหว่าง 2 ถึง 50 ตัวอักษร",
            "อนุญาตเฉพาะตัวอักษร, เว้นวรรค, ขีดกลาง (-), และ Apostrophe (')",
            "ไม่อนุญาตให้มีตัวเลขหรือสัญลักษณ์พิเศษอื่น",
            "ห้ามเว้นว่าง",
          ],
        },
        {
          title: "2. อีเมล (Email)",
          isRequired: true,
          items: [
            "ต้องมีรูปแบบอีเมลที่ถูกต้อง (เช่น test@example.com)",
            "ความยาวสูงสุดไม่เกิน 100 ตัวอักษร",
            "ห้ามเว้นว่าง",
          ],
        },
        {
          title: "3. เบอร์โทรศัพท์ติดต่อ (Contact Number)",
          isRequired: true,
          items: [
            "อนุญาตเฉพาะตัวเลข, เครื่องหมาย '+', '-' และเว้นวรรค (Space)",
            "ความยาวสูงสุดไม่เกิน 15 ตัวอักษร",
            "ห้ามเว้นว่าง",
          ],
        },
        {
          title: "4. วันเดือนปีเกิด (Date of Birth)",
          isRequired: true,
          items: [
            "รูปแบบวันที่: DD/MM/YYYY",
            "ผู้สมัครต้องมีอายุมากกว่า 18 ปี และน้อยกว่า 70 ปีบริบูรณ์ ณ วันปัจจุบัน",
            "ห้ามเว้นว่าง",
          ],
        },
        {
          title: "5. ประสบการณ์ด้านโบราณคดี (Archaeology Experience)",
          isRequired: true,
          items: [
            "แสดงผลเป็น Dropdown List",
            "มีค่าเริ่มต้นที่ถูกเลือกไว้คือ 'ไม่มีประสบการณ์'",
          ],
        },
        {
          title: "6. บทบาทที่ต้องการในทีมสำรวจ (Preferred Role)",
          isRequired: true,
          items: [
            "ตัวเลือกที่มี: นักวิจัย, ช่างภาพ, ผู้ควบคุมโดรน, นักทำแผนที่, แพทย์สนาม, ฝ่ายส่งกำลังบำรุง",
            "สามารถเลือกได้มากกว่าหนึ่งบทบาท (Multiple selections)",
            "ต้องเลือกอย่างน้อย 1 บทบาท",
          ],
        },
        {
          title: "7. ภูมิภาคที่ต้องการไปสำรวจ (Preferred Region)",
          isRequired: true,
          items: [
            "ตัวเลือกที่มี: อเมริกาใต้, แอฟริกา, เอเชีย, ยุโรป, ออสเตรเลีย",
            "เลือกได้เพียง 1 ภูมิภาคเท่านั้น",
          ],
        },
        {
          title: "8. เงินเดือนที่ต้องการต่อสัปดาห์ (Desired Salary)",
          isRequired: false,
          items: [
            "ค่าต่ำสุด: $0",
            "ค่าสูงสุด: $1,700",
            "ขั้นการเลื่อน (Step): $10",
            "ค่าเริ่มต้น: $700",
          ],
        },
        {
          title: "9. ช่องทางติดต่อที่สะดวก (Preferred Contact Method)",
          isRequired: false,
          items: [
            "ต้องแสดงผลเป็น Radio buttons",
            "ตัวเลือกที่มี: อีเมล, โทรศัพท์, WhatsApp, SMS",
            "เลือกได้เพียง 1 ช่องทางเท่านั้น",
          ],
        },
        {
          title: "10. อัปโหลดหนังสือเดินทาง/บัตรประจำตัว (Upload Passport/ID)",
          isRequired: true,
          items: [
            "นามสกุลไฟล์ที่ยอมรับ: JPG, PNG, PDF เท่านั้น",
            "ขนาดไฟล์สูงสุดไม่เกิน: 5 MB",
            "ห้ามเว้นว่าง",
          ],
        },
        {
          title: "11. ข้อความเพิ่มเติม (Additional Comments)",
          isRequired: false,
          items: [
            "ความยาวสูงสุดไม่เกิน 1,000 ตัวอักษร",
            "อนุญาตให้พิมพ์ได้ทุกตัวอักษร",
          ],
        },
        {
          title: "12. ยอมรับข้อตกลงและเงื่อนไข (Terms & Conditions)",
          isRequired: true,
          items: [
            "ต้องติ๊กถูกก่อนกด Submit ส่งฟอร์ม",
            "หากไม่ได้ติ๊ก ระบบต้องไม่อนุญาตให้ส่งฟอร์ม และแสดงข้อความแจ้งเตือน",
          ],
        },
      ],
      startTestingButton: "เริ่มทดสอบแบบฟอร์ม (Go to Form)",
    },
  },
  en: {
    navbar: {
      studentRole: "Author",
      studentIdLabel: "Student ID:",
      requirementsLink: "Requirements",
      formLink: "Task Form",
      hintButton: "Mission Hints",
      hintTitle: "💡 Testing Guidance for Bug Hunting",
      hintDesc:
        "This system contains 2 hidden bugs. Use your QA testing skills to find them:",
      hint1Title: "Guidance #1 (Input Data Validation):",
      hint1Text:
        "Try testing with invalid input types (Negative Testing) in the personal details fields to see if the system properly catches and filters unauthorized characters.",
      hint2Title: "Guidance #2 (Mandatory Field Checks):",
      hint2Text:
        "Examine the fields marked as 'Required' in the specification and compare them against the form's actual behavior when submitted with missing selections.",
      closeHint: "Close",
    },
    form: {
      backToRequirements: "◀ Back to the task description",
      title: "Register for the expedition in search of Eldoria",
      subtitle:
        "Fill out the registration form according to the specified requirements.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g., Peter Ford",
      emailLabel: "Email",
      emailPlaceholder: "e.g., test@email.com",
      contactNumberLabel: "Contact Number",
      contactNumberPlaceholder: "e.g., +1234567890",
      dobLabel: "Date of Birth",
      dobHint:
        "The user must be older than 18 and younger than 70 years as of the current date.",
      experienceLabel: "Archaeology Experience",
      experienceOptions: [
        "No experience",
        "Amateur (up to 1 year)",
        "Intermediate (1–5 years)",
        "Professional (more than 5 years)",
      ],
      roleLabel: "Preferred Role in the Expedition",
      roles: [
        { value: "Researcher", label: "Researcher" },
        { value: "Photographer", label: "Photographer" },
        { value: "Drone Operator", label: "Drone Operator" },
        { value: "Cartographer", label: "Cartographer" },
        { value: "Medic", label: "Medic" },
        { value: "Logistician", label: "Logistician" },
      ],
      regionLabel: "Preferred Expedition Region",
      regions: [
        { value: "South America", label: "South America" },
        { value: "Africa", label: "Africa" },
        { value: "Asia", label: "Asia" },
        { value: "Europe", label: "Europe" },
        { value: "Australia", label: "Australia" },
      ],
      salaryLabel: "Select your desired salary per week ($):",
      contactMethodLabel: "Preferred Contact Method",
      contactMethods: [
        { value: "Email", label: "Email" },
        { value: "Phone", label: "Phone" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "SMS", label: "SMS" },
      ],
      passportLabel: "Upload Passport/ID* (JPG, PNG, PDF)",
      chooseFileButton: "Choose File",
      noFileChosen: "No file chosen",
      fileSelected: "Selected file:",
      removeFile: "Remove file",
      commentsLabel: "Additional Comments",
      commentsPlaceholder: "Enter additional comments here...",
      termsLabel: "I Agree to",
      termsInteractive: "Terms and Conditions",
      termsTooltip:
        "The user's submitted data will be used exclusively for candidate evaluation and expedition planning.",
      submitButton: "Submit Registration",
      submitting: "Submitting...",
      clearButton: "Clear Form",
      submitSuccessTitle: "The form has been submitted!",
      submitSuccessDesc: "Your registration has been submitted successfully.",
      clearSuccessTitle: "Form cleared successfully",
      clearSuccessDesc: "All form fields have been reset to default values.",
    },
    requirements: {
      breadcrumb: "Document: Requirements for Form",
      title: "Requirements for Registration Form",
      subtitle:
        "Specification guidelines for the archaeological expedition participant registration form.",
      objectiveTitle: "🎯 Objective",
      objectiveDesc:
        "Your task is to thoroughly review the archaeological expedition participant registration form, validate each field according to the specified requirements, and identify all possible bugs.",
      generalTitle: "General Requirements",
      generalRules: [
        "All required fields must be marked with an asterisk (*).",
        "The form can only be submitted if all required fields are filled out with valid data.",
        "In the phrase 'I Agree to Terms and Conditions,' the words 'Terms and Conditions' are interactive; hovering over them displays a tooltip explaining data usage.",
        "Clicking the Submit Registration button should display a success message and automatically clear the form if all required fields were filled out with valid data. Otherwise, an error message should appear next to the field where the error occurred.",
        "Clicking the Clear Form button should display a success message after clearing the form data.",
      ],
      sectionsTitle: "Form Sections",
      requiredBadge: "Required",
      optionalBadge: "Optional",
      fields: [
        {
          title: "1. Full Name",
          isRequired: true,
          items: [
            "Allowed length from 2 to 50 characters.",
            "Latin and Cyrillic alphabet letters, spaces, hyphens, and apostrophes are allowed.",
            "Digits and special characters (except hyphens and apostrophes) are not permitted.",
            "Field cannot be empty.",
          ],
        },
        {
          title: "2. Email",
          isRequired: true,
          items: [
            "Must validate the correctness of email format (e.g., test@example.com).",
            "Maximum length: 100 characters.",
            "Field cannot be empty.",
          ],
        },
        {
          title: "3. Contact Number",
          isRequired: true,
          items: [
            "Only digits, '+', '-', and spaces are allowed.",
            "Maximum length: 15 characters.",
            "Field cannot be empty.",
          ],
        },
        {
          title: "4. Date of Birth",
          isRequired: true,
          items: [
            "Date format: DD/MM/YYYY.",
            "The user must be older than 18 and younger than 70 years as of the current date.",
            "Field cannot be empty.",
          ],
        },
        {
          title: "5. Archaeology Experience",
          isRequired: true,
          items: ["Dropdown list.", "'No experience' selected by default."],
        },
        {
          title: "6. Preferred Role in the Expedition",
          isRequired: true,
          items: [
            "Available options: Researcher, Photographer, Drone Operator, Cartographer, Medic, Logistician.",
            "Multiple selections allowed.",
            "Must select at least one role.",
          ],
        },
        {
          title: "7. Preferred Expedition Region",
          isRequired: true,
          items: [
            "Available options: South America, Africa, Asia, Europe, Australia.",
            "Only one option can be selected.",
          ],
        },
        {
          title: "8. Select your desired salary per week ($)",
          isRequired: false,
          items: [
            "Minimum value: $0",
            "Maximum value: $1700",
            "Increment step: $10",
            "Default value: $700",
          ],
        },
        {
          title: "9. Preferred Contact Method",
          isRequired: false,
          items: [
            "Radio buttons.",
            "Available options: Email, Phone, WhatsApp, SMS.",
            "Only one option can be selected.",
          ],
        },
        {
          title: "10. Upload Passport/ID",
          isRequired: true,
          items: [
            "Accepted formats: JPG, PNG, PDF.",
            "Maximum file size: 5 MB.",
            "Field cannot be empty.",
          ],
        },
        {
          title: "11. Additional Comments",
          isRequired: false,
          items: [
            "Maximum length: 1000 characters.",
            "All characters are permitted.",
          ],
        },
        {
          title: "12. I Agree to Terms and Conditions",
          isRequired: true,
          items: [
            "Must be checked before submitting the form.",
            "If unchecked, form submission should be prevented with an error message.",
          ],
        },
      ],
      startTestingButton: "Start Form Testing (Go to Form)",
    },
  },
};
