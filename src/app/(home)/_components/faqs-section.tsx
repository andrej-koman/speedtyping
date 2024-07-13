import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FaqsSection() {
  const t = useTranslations("Faq");
  const items = [
    {
      question: t("costQuestion"),
      answer: t("costAnswer"),
    },
    {
      question: t("languagesQuestion"),
      answer: t("languagesAnswer"),
    },
    {
      question: t("specsQuestion"),
      answer: t("specsAnswer"),
    },
    {
      question: t("supportQuestion"),
      answer: t("supportAnswer"),
    },
  ];

  return (
    <div className="flex w-full justify-center bg-[linear-gradient(to_bottom,#0c0a09_0%,#2e060d_50%,#0c0a09_100%)]">
      <div className="px-4 py-[72px] sm:pb-24 xl:w-[75rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-5xl font-bold tracking-tighter">
            {t("title")}
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mt-12 w-full max-w-[720px]"
          >
            {items.map(({ question, answer }) => {
              return (
                <AccordionItem value={question} key={question}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
