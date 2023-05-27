import { useState } from "react";
import clsx from "clsx";
import Chip from "@/components/Chip";

import { ICategoryFilterProps } from "./types";

function CategoryFilter({ className, mapCategoriesSteps, onChange }: ICategoryFilterProps) {
  const [categoryIdSteps, setCategoryIdSteps] = useState<string>('firstShipment');
  const categories = mapCategoriesSteps.map((category) => {
    return {
      id: category.id,
      title: category.title,
      isActive: categoryIdSteps === category.id
    }
  })

  const handleOnChange = (id: string) => {
    setCategoryIdSteps(id);
    onChange?.(id);
  };

  return (
    <div className={clsx('flex flex-wrap gap-6', className)}>
      {categories.map(({ id, title, isActive }) => {
        return <Chip key={id} text={title} isActive={isActive} onclick={() => handleOnChange(id)} />
      })}
    </div>
  );
}

export default CategoryFilter;
