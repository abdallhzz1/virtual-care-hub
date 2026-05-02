import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "منصة الرعاية الطبية الافتراضية — مشروع تخرج" },
      {
        name: "description",
        content:
          "عرض تفاعلي لمنصة الرعاية الطبية الافتراضية — مشروع تخرج جامعة الخليل، كلية تكنولوجيا المعلومات.",
      },
      { property: "og:title", content: "منصة الرعاية الطبية الافتراضية" },
      {
        property: "og:description",
        content: "عرض تفاعلي لمشروع تخرج: منصة طبية رقمية متكاملة بين الطبيب والمريض والمختبر.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Presentation />;
}
