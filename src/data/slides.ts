export interface Slide {
  id: string;
  title: string;
}

export const slides: Slide[] = [
  { id: "cover", title: "الغلاف" },
  { id: "toc", title: "فهرس العرض" },
  { id: "intro", title: "مقدمة المشروع" },
  { id: "problem", title: "المشكلة" },
  { id: "idea", title: "فكرة المشروع" },
  { id: "tech", title: "التقنيات المستخدمة" },
  { id: "users", title: "المستخدمون" },
  { id: "usecase", title: "Use Case Diagram" },
  { id: "erd", title: "ERD Diagram" },
  { id: "system", title: "عرض النظام" },
  { id: "scenario", title: "سيناريو العمل" },
  { id: "research", title: "ملخص البحث العلمي" },
  { id: "thanks", title: "تم بحمد الله" },
];

export interface ScenarioStep {
  id: number;
  title: string;
  description: string;
  actor: "doctor" | "patient" | "lab" | "admin" | "system";
  icon: string;
}

export const scenarioSteps: ScenarioStep[] = [
  {
    id: 1,
    title: "تسجيل دخول الطبيب",
    description:
      "يقوم الطبيب بإدخال بياناته (البريد وكلمة المرور) ويتم التحقق منها بنجاح ثم الدخول إلى لوحة التحكم الخاصة به.",
    actor: "doctor",
    icon: "LogIn",
  },
  {
    id: 2,
    title: "إضافة مريض",
    description:
      "يقوم الطبيب بإضافة مريض جديد إلى قائمته من خلال إدخال بياناته أو إرسال دعوة للمريض.",
    actor: "doctor",
    icon: "UserPlus",
  },
  {
    id: 3,
    title: "قبول المريض",
    description:
      "يقوم المريض بقبول الدعوة المرسلة من الطبيب، مما يمنح الطبيب صلاحية الوصول إلى الملف الطبي الخاص به.",
    actor: "patient",
    icon: "UserCheck",
  },
  {
    id: 4,
    title: "حجز موعد",
    description:
      "يقوم الطبيب بتحديد موعد جلسة طبية للمريض من خلال اختيار التاريخ والوقت المناسب.",
    actor: "doctor",
    icon: "CalendarPlus",
  },
  {
    id: 5,
    title: "تأكيد الحجز والدفع",
    description:
      "يقوم المريض بقبول الموعد، ويُطلب منه إتمام عملية الدفع الإلكتروني كشرط أساسي قبل حضور الجلسة.",
    actor: "patient",
    icon: "CreditCard",
  },
  {
    id: 6,
    title: "تفعيل الجلسة",
    description:
      "يتم تفعيل الدخول إلى الجلسة قبل موعدها بـ 30 دقيقة، ويستطيع الطرفان الدخول إلى غرفة الفيديو.",
    actor: "system",
    icon: "Bell",
  },
  {
    id: 7,
    title: "الجلسة الطبية",
    description: "تتم الجلسة عبر الفيديو بين الطبيب والمريض بشكل مباشر.",
    actor: "system",
    icon: "Video",
  },
  {
    id: 8,
    title: "إنهاء الجلسة",
    description:
      "بعد انتهاء الجلسة، تظهر للطبيب نافذة لإدخال ملخص الجلسة والتوصيات الطبية.",
    actor: "doctor",
    icon: "FileText",
  },
  {
    id: 9,
    title: "طلب تحاليل",
    description: "يقوم الطبيب بإرسال طلب تحاليل طبية إلى كل من المريض والمختبر.",
    actor: "doctor",
    icon: "FlaskConical",
  },
  {
    id: 10,
    title: "المختبر",
    description:
      "يقوم المختبر بقبول الطلب، وبعد إجراء الفحص يقوم برفع النتائج إلى النظام.",
    actor: "lab",
    icon: "Microscope",
  },
  {
    id: 11,
    title: "وصول النتائج",
    description:
      "تصل نتائج التحاليل إلى كل من الطبيب والمريض، على شكل ملف يحتوي تفاصيل الفحص والمختبر.",
    actor: "system",
    icon: "FileCheck",
  },
  {
    id: 12,
    title: "وصفة طبية",
    description: "يقوم الطبيب بإرسال وصفة طبية إلكترونية للمريض.",
    actor: "doctor",
    icon: "Pill",
  },
  {
    id: 13,
    title: "عرض الوصفة",
    description:
      "يمكن للمريض عرض الوصفة إما كملف أو من خلال QR Code لاستخدامها في الصيدلية.",
    actor: "patient",
    icon: "QrCode",
  },
  {
    id: 14,
    title: "التواصل",
    description: "يتم التواصل بين الطبيب والمريض عبر نظام الرسائل داخل المنصة.",
    actor: "system",
    icon: "MessageCircle",
  },
  {
    id: 15,
    title: "الشكاوى",
    description: "يمكن للمريض إرسال شكوى إلى مدير النظام.",
    actor: "patient",
    icon: "AlertCircle",
  },
  {
    id: 16,
    title: "إدارة الشكوى",
    description:
      "يقوم المدير بمراجعة الشكوى واتخاذ قرار (قبول / رفض / تجاهل).",
    actor: "admin",
    icon: "ShieldCheck",
  },
  {
    id: 17,
    title: "الإعلانات",
    description:
      "يقوم مدير النظام بإرسال إعلان إما لجميع المستخدمين أو لفئة محددة.",
    actor: "admin",
    icon: "Megaphone",
  },
  {
    id: 18,
    title: "تسجيل الخروج",
    description: "يقوم المستخدم بتسجيل الخروج بشكل آمن من النظام.",
    actor: "system",
    icon: "LogOut",
  },
];
