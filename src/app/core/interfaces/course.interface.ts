import { Lesson } from "./lesson.interface";

export interface Course{
  id: string;
  name: string;
  category: string;
  lessons?: Lesson[];
  [key: string]: any;
}
