import { getFactor } from "./Factor";

export function getResult(a, w, h){
    return(( (10 * w) + (6.25 * h) - (10 * a) + 5 ) * getFactor(w)).toFixed(2);
}