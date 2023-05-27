import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import { FAQs } from "@/constants/FAQ";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";

function SupportSection() {
  const isMobile = useMobileDetect();
  const [showAnswer, setShowAnswer] = useState(false);
  const messageExternal = `Hola reparteAR! Tengo una consulta :)`;
  const externalLink = `https://wa.me/541164392829?text=${messageExternal}`;

  const handleOnChange = (id: string) => {
    if (id) {
      setShowAnswer(!showAnswer);
    }
  };

  return (
    <section
      id="soporte"
      className={clsx(
        'flex flex-col items-center w-full',
        isMobile ? 'pt-20 pb-10' : 'py-40',
      )}
    >
      <div className={clsx('flex flex-col max-w-8xl px-8 w-full gap-10', isMobile && 'items-center')}>
        <span className={clsx(isMobile ? 'text-subtitle font-bold text-center' : 'text-h3 font-bold mb-6')}>
          {texts.commons.frequentQuestions}
        </span>
        {isMobile ? (
          <div className="flex flex-col gap-5 w-full items-center">
            {FAQs.map(({ answer, id, question }) => (
              <Accordion
                key={id}
                id={id}
                answer={answer}
                question={question}
                onChange={() => handleOnChange(id)}
                className="max-w-md w-full"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-20 gap-y-5">
            {FAQs.map(({ answer, id, question }) => (
              <Accordion
                key={id}
                id={id}
                answer={answer}
                question={question}
                onChange={() => handleOnChange(id)}
              />
            ))}
          </div>
        )}
        <div className="flex flex-col items-center gap-5 w-full md:pt-10">
          <span className={clsx(isMobile ? 'text-label font-normal' : 'font-semibold')}>
            {texts.commons.doYouHaveAnyDoubtWriteUs}
          </span>
          <Button
            external
            to={externalLink}
            icon="WhatsApp"
            title={texts.actions.makeInquiry}
          />
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
