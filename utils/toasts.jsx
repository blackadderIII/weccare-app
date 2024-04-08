import { showMessage } from "react-native-flash-message";
import { color } from "./color";

export const successToast = (message) => {
    showMessage({
        message: message,
        backgroundColor: color.main
    })
    return
}

export const warnToast = (message) => {
    showMessage({
        message: message,
        backgroundColor: color.warn,
        icon: 'info'
    })
    return
}

export const errorToast = (message) => {
    showMessage({
        message: message,
        backgroundColor: color.red
    })
    return
}