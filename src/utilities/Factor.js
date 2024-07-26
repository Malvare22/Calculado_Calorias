import { to_LB } from "./Conversions";

export function getFactor(weight, method){
    let w = weight;
    if(method == 1){
        w = to_LB(weight);
    }

    if(w <= 165) return 1.6;
    if(165 <= w && w <= 200) return 1.4;
    if(201 <= w && w <= 220) return 1.2;
    return 1;
}