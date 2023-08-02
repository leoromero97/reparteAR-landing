import { useState } from "react";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import { FAQs } from "@/constants/FAQ";
import { texts } from "@/constants/texts";

function SupportSection() {
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
      id="preguntas"
      className=
      'flex flex-col items-center w-full pt-20 pb-10 md:py-40'
    >
      <div className='flex flex-col max-w-8xl px-8 w-full gap-10 items-center md:items-start'>
        <span className='text-subtitle font-bold text-center md:text-h3 md:font-bold md:mb-6'>
          {texts.commons.frequentQuestions}
        </span>
        <div className="flex flex-col gap-5 w-full items-center md:hidden">
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
        <div className="hidden md:grid grid-cols-3 gap-x-20 gap-y-5">
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
        <div className="flex flex-col items-center gap-5 w-full md:pt-10">
          <span className='text-label font-normal md:font-semibold'>
            {texts.commons.doYouHaveAnyDoubtWriteUs}
          </span>
          <Button
            external
            to={externalLink}
            icon="WhatsApp"
            title={texts.actions.makeInquiry}
            className="w-full max-w-sm lg:w-fit"
          />
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
