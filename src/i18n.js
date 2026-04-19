import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            navbar : {AboutMe:"about me", Projects:"skills", Contact: "contact"},
        }
    }
})