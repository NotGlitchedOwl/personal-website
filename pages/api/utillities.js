export function retriveClass(purpose , classs, global) {
    if (global) {
        return classs[0][purpose]
    } else if (!global) {
        return classs[1][purpose]
    }
}
export function themeJson(json , theme , file) {
    const THEME = JSON.parse(JSON.stringify(json))
    const THEME_DARK = THEME[0][file]["dark"]["classes"]
    const THEME_LIGHT = THEME[0][file]["light"]["classes"]
     let THEME_KEYS_LIGHT = Object.keys(THEME_LIGHT)
    let THEME_KEYS_DARK = Object.keys(THEME_DARK)
    let themeCss = {

    }

    if (theme == "light") {
        for(let i = 0; i < THEME_KEYS_LIGHT.length ; i++) {
            let tempDark = THEME_KEYS_LIGHT[i]
            themeCss[tempDark] = THEME_LIGHT[THEME_KEYS_LIGHT[i]]
        }
        
    } else if (theme == "dark") {
        for(let i = 0; i < THEME_KEYS_DARK.length ; i++) {
            themeCss[THEME_KEYS_DARK[i]] = THEME_DARK[THEME_KEYS_DARK[i]]
        }
    }
    return themeCss
}

export function classPlacement(cssFile , purpose , theme , global) {
    return cssFile[retriveClass(purpose , theme , global)] ? cssFile[retriveClass(purpose , theme , global)] : cssFile[retriveClass(purpose , theme , global)] 
}
