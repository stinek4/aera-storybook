/*
* Provides colors to be reused in all portals.
* First section from Aera design profile on Sharepoint "Branded elements" - should be used from now
* Second section from already used colors in portals.
* */
export const Colors = {
    aeraPrimaryGreen: "#00AF41",
    aeraPrimaryDarkGreen: "#007B3C",
    aeraPrimaryGrey: "#808285",
    aeraPrimaryLightGrey: "#F1F0F3",
    aeraPrimaryLightestGrey: "#FAFAFA",
    aeraSecondaryLightGreen: "#D6FBDB",
    aeraSecondaryDarkBlue: "#010023",
    aeraSecondaryLightBlue: "#94E0FF",
    aeraSecondaryLightestBlue: "#EFFAFC",
    aeraSecondaryYellow: "#FFD400",
    aeraBlack: "#1C1C1C",
    aeraDark: "#292e30",
    aeraWhite: "#FFFFFF",
    aeraInputBorder: "#dfdde2",

    primaryColor: "#00A33D",
    secondaryColor: "#04A13D",
    darkAera: "#027b3b",
    black: "#000000",
    white: "#FFFFFF",
    grey: "#CACACA",
    placeHolderGrey: "#8C8C8C",
    radioButtonPlaceholder: "#898989",
    errorText: "#CC0011",
    errorTextDark: "#BB1E10",
    inactive: "#D80023",
    heartbeat: "#E83D3D",
    light: "#F1F0F3",
    warning: "#FFD202",
    jumbotron: "#F8F8F9",
    transparent: "transparent",
    disabled: "#b2b2b2",
    checkboxBorder: "#c8ced3",
    divBorder: "#979797",
    blueLink: "#0052cc"   
}

export const ButtonColors = {
    backGround: {
        default: {
            primary: `${Colors.aeraPrimaryDarkGreen}`,
            secondary: `${Colors.aeraWhite}`,
            text: `${Colors.transparent}`,
            danger: `${Colors.errorText}`,
            warning: `${Colors.aeraSecondaryYellow}`, //For badge
        },
        hover:{
            primary: `${Colors.aeraPrimaryGreen}`,
            secondary: `${Colors.aeraSecondaryLightGreen}`,
            text: `${Colors.transparent}`,
            danger: `${Colors.errorTextDark}`,
        },
        active: {
            primary: `${Colors.aeraPrimaryGreen}`,
            secondary: `${Colors.aeraSecondaryLightGreen}`,
            text: `${Colors.aeraPrimaryLightGrey}`,
            danger: `${Colors.errorTextDark}`,
        },
        disabled: {
            primary: `rgba(0, 123, 60, 0.5)`,
            secondary: `${Colors.aeraWhite}`,
            text: `${Colors.transparent}`,
            danger: `rgba(204, 0, 17, 0.5)`,
        }
    },
    border: {
        default: {
            primary: `none`,
            secondary: `1px solid ${Colors.aeraPrimaryGreen}`,
            text: `none`,
            danger: `none`,
        },
        hover:{
            primary: `none`,
            secondary: `1px solid ${Colors.aeraPrimaryGreen}`,
            text: `none`,
            danger: `none`,

        },
        active: {
            primary: `none`,
            secondary: ` 1px solid${Colors.aeraPrimaryGreen}`,
            text: `none`,
            danger: `none`,

        },
        disabled: {
            primary: `none`,
            secondary: `1px solid ${Colors.aeraPrimaryGrey}`,
            text: `none`,
            danger: `none`,

        }
    },
    text: {
        default: {
            primary: `${Colors.aeraWhite}`,
            secondary: `${Colors.aeraPrimaryDarkGreen}`,
            text: `${Colors.aeraBlack}`,
            danger: `${Colors.aeraWhite}`,
        },
        active: {
            primary: `${Colors.aeraWhite}`,
            secondary: `${Colors.aeraPrimaryGrey}`,
            text: `${Colors.aeraBlack}`,
            danger: `rgb(0 0 0 / 0.87)`,
        },
        disabled: {
            primary: `${Colors.aeraWhite}`,
            secondary: `${Colors.aeraPrimaryGrey}`,
            text: `${Colors.aeraPrimaryGrey}`,
            danger: `${Colors.aeraWhite}`,
        }
    }
    }

export const BadgeColors = {
    backGround: {
        default: {
            primary: `${Colors.aeraPrimaryDarkGreen}`,
            secondary: `${Colors.aeraPrimaryLightGrey}`,
            text: `${Colors.transparent}`,
            danger: `${Colors.errorText}`,
            warning: `${Colors.aeraSecondaryYellow}`,
        }
    },
    border: {
        default: {
            primary: `none`,
            secondary: `none`,
            text: `none`,
            danger: `none`,
            warning: `none`,
        },
    },
    text: {
        default: {
            primary: `${Colors.aeraWhite}`,
            secondary: `${Colors.aeraBlack}`,
            text: `${Colors.aeraBlack}`,
            danger: `${Colors.aeraWhite}`,
        },
    }
    }
