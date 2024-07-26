import { to_cm, to_kg } from "./Conversions";

/**
 * Method 1 = Decimal
 * Method 2 = Imperial
 */
export function ValidAge(value, method){
    return value >= 16 && value <= 105;
}
export function ValidHeight(value, method){
    let v = value;
    if(method == 2){
        v = to_cm(value);
    }
    const meters = (v/100);
    return (meters >= 1.40 && meters <= 2.25);
}
export function ValidWeight(value, method){
    let v = value;
    if(method == 2){
        v = to_kg(value);
    }
    return (v >= 40.50 && v <= 300);
}

export const validation = {
    age: ValidAge,
    height: ValidHeight,
    weight: ValidWeight,
};