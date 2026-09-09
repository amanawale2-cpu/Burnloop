import { InfoIcon } from "lucide-react";

export function SafetyNotice() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 px-5 py-4">
          <InfoIcon className="mt-0.5 size-4.5 shrink-0 text-amber-700" />
          <p className="font-body text-sm leading-relaxed text-amber-900/90">
            <strong className="font-semibold">Important:</strong> BurnLoop is
            for general wellness and lifestyle support only. It does not
            provide medical advice, diagnosis, or treatment. For medical
            questions or changes to a treatment plan, consult a qualified
            clinician.
          </p>
        </div>
      </div>
    </section>
  );
}
