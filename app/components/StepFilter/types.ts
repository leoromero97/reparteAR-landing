export interface ICategoryFilterProps {
  mapCategoriesSteps?: ICategoryStep[];
  onChange?: (id: string) => void;
}

export interface ICategoryStep {
  id: string;
  title: string;
  steps: {
    id: string;
    number: string;
    text: string;
  }[];
}
