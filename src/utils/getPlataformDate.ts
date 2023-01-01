import { addDays } from "date-fns";
export const getPlataformDate = (date: Date): Date => {
    return addDays(date, 1);
}