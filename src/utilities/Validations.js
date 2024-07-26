export function ValidAge(value, method){
    return true;
}
export function ValidHeight(value, method){
    return true;
}
export function ValidWeight(value, method){
    return true;
}

export const validation = {
    age: ValidAge,
    height: ValidHeight,
    weight: ValidWeight,
};