import { ButtonObj } from "./data-types";
const generateAlphabets = (startingKeycode: number, count: number): ButtonObj[] => {
    let r: ButtonObj[] = []
    let greeks = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega"]
    for (let i = 0; i < count; i++) {
        let letter = String.fromCharCode(startingKeycode + i)
        let newButton = {
            text: letter,
            value: letter,
            description: "Letter: " + letter
        }
        if (startingKeycode == 913) {
            newButton.value = greeks[i]
        }
        r.push(newButton)
    }
    return r;
}

const objToArr = (obj: Object): ButtonObj[] => {
    return Object.entries(obj).map(a => {
        return {
            text: a[1],
            value: `\\${a[0]}`,
            description: "Symbol: " + a[0]
        } as ButtonObj
    })
}

export const numbers = "1234567890".split('').map(a => {
    return {
        text: a,
        value: a,
        description: "Number: " + a
    } as ButtonObj
})

export const englishAlphabetsCapitals = generateAlphabets(65, 26); // 65 -> A. from A to next 26
export const englishAlphabetsSmalls = generateAlphabets(97, 26); // 97 -> a. to next 26
// export const greekAlphabetsCapitals = generateAlphabets(913, 25).filter(value => value.text != String.fromCharCode(930)); // 913 -> Α. to next 24

export const greekAlphabetsCapitals: ButtonObj[] = objToArr({
    "Gamma": "\u0393",
    "Delta": "\u0394",
    "Theta": "\u0398",
    "Lambda": "\u039B",
    "Xi": "\u039E",
    "Pi": "\u03A0",
    "Sigma": "\u03A3",
    "Upsilon": "\u03A5",
    "Phi": "\u03A6",
    "Psi": "\u03A8",
    "Omega": "\u03A9"
})
export const greekAlphabetsSmalls: ButtonObj[] = generateAlphabets(945, 24); // 945 -> α. to next 24
export const greekAlphabetsExtensions: ButtonObj[] = objToArr({
    "varepilon": "\u03B5",
    "vartheta": "\u03D1",
    "varpi": "\u03D6",
    "varrho": "\u03F1",
    "varsigma": "\u03C2",
    "varphi": "\u03C6",
})
export const setsAndLogic: ButtonObj[] = objToArr({
    "cup": "\u222A",
    "cap": "\u22C2",
    "subset": "\u2282",
    "subseteq": "\u2286",
    "supset": "\u2283",
    "supseteq": "\u2284",
    "in": "\u2208",
    "ni": "\u220B",
    "mathbb{R}": "\u211D",
    "mathbb{Z}": "\u2124",
    "mathbb{Q}": "\u211A",
    "mathbb{N}": "\u2115",
    "mathbb{C}": "\u2102",
    "varnothing": "\u2205",
    "aleph": "\u2135",
    "setminus": "\u2216",
    "equiv": "\u224D",
    "forall": "\u2200",
    "exists": "\u2203",
    "neg": "\u00AC",
    "vee": "\u2228",
    "wedge": "\u2227",
    "vdash": "\u22A2",
    "models": "\u22A8",
    "RightArrow": "\u21D2",
    "nRightArrow": "\u21CF"
})
export const all = {
    numbers,
    englishAlphabetsCapitals,
    englishAlphabetsSmalls,
    greekAlphabetsCapitals,
    greekAlphabetsSmalls,
    greekAlphabetsExtensions,
    setsAndLogic
}