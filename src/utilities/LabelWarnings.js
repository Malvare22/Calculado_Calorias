import { to_IN, to_LB } from "./Conversions";

export const ageWarning = 'La edad debe estar en un rango de 16 a 105 años';

export const heightWarning = 'La altura debe estar en un rango de 1.40mts a 2.25mts, o ' + Math.floor(to_IN(140)) + 'in a ' + Math.floor(to_IN(225)) + 'in';

export const weightWarning = 'El peso debe estar en un rango de 40.50 kg a 300 kg, o ' + Math.floor(to_LB(40.50)) + 'lb a ' + Math.floor(to_LB(300)) + 'lb';

export const messageWarning = {
    age: ageWarning,
    height: heightWarning,
    weight: weightWarning,
};