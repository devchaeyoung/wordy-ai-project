import { Favorite } from "@prisma/client";

export interface Word {
  id: number;
  meaning: string;
  category: string;
  correct?: string | null;
  customBookId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  favorite?: Favorite;
}
