import { PageShell } from "@/components/layout/PageShell";
import { TestimonialsPage } from "@/components/testimonials/TestimonialsPage";
import { fetchTestimonials } from "@/lib/api";

export const metadata = {
  title: "Testimonials | Bymer Elastomers",
  description:
    "Read testimonials from customers and suppliers who partner with Bymer Elastomers for elastomer solutions.",
};

export const dynamic = "force-dynamic";

export default async function Testimonials() {
  const testimonials = await fetchTestimonials();

  return (
    <PageShell>
      <TestimonialsPage testimonials={testimonials} />
    </PageShell>
  );
}
