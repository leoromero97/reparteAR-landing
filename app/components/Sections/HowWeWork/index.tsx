import { useState } from "react";
import clsx from "clsx";
import CategoryFilter from "@/components/StepFilter";
import { texts } from "@/constants/texts";
import { categoriesHowWeWork } from "@/constants/howWeWork";
import useMobileDetect from "@/hooks/useMobileDetected";

function HowWeWork() {
  const isMobile = useMobileDetect();
  const [idSelected, setIdSelected] = useState('firstShipment');
  const steps = categoriesHowWeWork.map((category) => { return { id: category.id, steps: category.steps } });

  const handleSelectedId = (idCategoryStep: string) => {
    setIdSelected(idCategoryStep);
  };

  return (
    <div className="flex flex-col max-w-7xl px-8 w-full gap-6 py-10">
      <span className={clsx(isMobile ? 'text-subtitle text-center' : 'text-h4 font-bold mb-6')}>
        {texts.services.howWeWork.title}
      </span>
      {isMobile ? (
        <div className="flex flex-col gap-6 items-center">
          <CategoryFilter onChange={handleSelectedId} mapCategoriesSteps={categoriesHowWeWork} />
          <div className="flex flex-col">
            {steps.map((categoryStep) => (
              <ul key={categoryStep.id} className="flex flex-col gap-4">
                {categoryStep.steps.map((steps) => {
                  if (categoryStep.id === idSelected)
                    return (
                      <div key={steps.id} className="flex gap-3 items-center">
                        <span className="h-8 w-8 p-1 text-center text-label font-bold bg-skyblue-600 text-skyblue-100 shrink-0 rounded-full flex flex-col items-center justify-center">
                          {steps.number}
                        </span>
                        <span className="text-label">
                          {steps.text}
                        </span>
                      </div>
                    );
                })
                }
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-7 justify-between">
          {categoriesHowWeWork.map((category) => (
            <div key={category.id} className="flex flex-col items-center py-10 px-6 gap-6 bg-white shadow-drop-3 rounded-xl w-u462">
              <span className="text-subtitle font-bold">{category.title}</span>
              <ul className="flex flex-col gap-4 w-full">
                {category.steps.map((stepDescription) => (
                  <li key={stepDescription.id} className="flex items-center gap-3">
                    <span className="h-8 w-8 p-1 text-center text-label font-bold bg-skyblue-600 text-skyblue-100 shrink-0 rounded-full flex flex-col items-center justify-center">
                      {stepDescription.number}
                    </span>
                    <span className="text-body">{stepDescription.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HowWeWork;