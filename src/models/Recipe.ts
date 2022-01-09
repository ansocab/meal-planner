enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  title: string;
  portions?: number | 2;
  preparationTime?: number | 0;
  ingredients?: Ingredient[];
  directions?: string;
  album: string;
}
