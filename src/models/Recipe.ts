enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  title: string;
  portions?: number;
  preparationTime?: number | 0;
  ingredients?: Ingredient[];
  directions?: string;
  album: string;
}
