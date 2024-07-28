import { to_CM, to_IN, to_KG, to_LB } from "./Conversions";

/**
 * Method 1 = Decimal
 * Method 2 = Imperial
 */
export function ValidAge(value, method){
    return value >= 16 && value <= 105;
}
export function ValidHeight(value, method){
    let v = value;
    v = v/100;
    let a = 1.40, b = 2.25;
    if(method == 2){
        a= to_IN(a);
        b = to_IN(b);
    }
    return (v >= a && v <= b);
}
export function ValidWeight(value, method){
    let a = 40.50, b = 300;
    if(method == 2){
        a= to_LB(a);
        b = to_LB(b);
    }
    return (value >= a && value <= b);
}

export const validation = {
    age: ValidAge,
    height: ValidHeight,
    weight: ValidWeight,
};