import { Platform } from "react-native";
import ChromeIOS from "./src/ChromeIOS";
import CustomTabsAndroid from "./src/CustomTabsAndroid";

const CustomTabs = Platform.OS === "android" ? CustomTabsAndroid : ChromeIOS;

export { ANIMATIONS_SLIDE, ANIMATIONS_FADE } from "./src/TabOption";
export { TabOption } from "./src/TabOption";
export { CustomTabs };
