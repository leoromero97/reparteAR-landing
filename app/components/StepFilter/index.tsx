import { useState } from "react";
import Chip from "@/components/Chip";

import { ICategoryFilterProps } from "./types";

function CategoryFilter({ mapCategoriesSteps, onChange }: ICategoryFilterProps) {
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
    <div className="flex flex-wrap gap-6">
      {categories.map(({ id, title, isActive }) => {
        return <Chip key={id} text={title} isActive={isActive} onclick={() => handleOnChange(id)} />
      })}
    </div>
  );
}

export default CategoryFilter;
