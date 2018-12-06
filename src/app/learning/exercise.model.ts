export class Exercise {
  id: string;
  name: string;
  duration: number;
  score: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}
