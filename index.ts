import { NativeModules } from "react-native";

interface ICustomTabsManager {
  openURL(url: string, option: Record<string, unknown>): Promise<boolean>;
}

const CustomTabsManager = NativeModules.CustomTabsManager as ICustomTabsManager;

export type Animations = {
  startEnter: string;
  startExit: string;
  endEnter: string;
  endExit: string;
};

/**
 * Start and exit animations of Custom Tabs.
 * Slide in from left at start, Slide out to right at exit.
 */
export const ANIMATIONS_SLIDE: Animations = {
  startEnter: "slide_in_right",
  startExit: "slide_out_left",
  endEnter: "android:anim/slide_in_left",
  endExit: "android:anim/slide_out_right",
};

/**
 * Start and exit animations of Custom Tabs.
 * Fade in at start, Fade out at exit.
 */
export const ANIMATIONS_FADE: Animations = {
  startEnter: "android:anim/fade_in",
  startExit: "android:anim/fade_out",
  endEnter: "android:anim/fade_in",
  endExit: "android:anim/fade_out",
};

/**
 * Options to customize the look & feel of Custom Tabs.
 */
export type TabOption = {
  /**
   * the Toolbar color.
   * Supported formats are: #RRGGBB, #AARRGGBB, etc.
   *
   * {@link http://d.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String) Color.parseColor(String)}
   */
  toolbarColor?: string | null;

  /**
   * Enables the url bar to hide as the user scrolls down on the page.
   */
  enableUrlBarHiding?: boolean | null;

  /**
   * Sets whether the title should be shown in the custom tab.
   */
  showPageTitle?: boolean | null;

  /**
   * Whether to add a default shared items of the menu.
   */
  enableDefaultShare?: boolean | null;

  /**
   * Sets the exit and start animations.
   *
   * Each property needs to be an Android animation resource ID,
   * e.g. 'com.github.droibit.android.reactnative.customtabs.example:anim/slide_out_bottom'
   *
   * @see ANIMATIONS_FADE
   * @see ANIMATIONS_SLIDE
   */
  animations?: Animations | null;

  /**
   * Sets any custom headers that should be used.
   */
  headers?: Record<string, unknown> | null;

  /**
   * Workaround that Custom Tabs doesn't close on redirecting back to app scheme.
   */
  forceCloseOnRedirection?: boolean | null;
};

/**
 * Opens the URL on a Custom Tab. If Chrome is not installed, opens the URL in other browser.
 *
 * @param url the Uri to be opened.
 * @param option the Option to customize Custom Tabs of look & feel.
 */
export function openURL(url: string, option: TabOption = {}): Promise<boolean> {
  return CustomTabsManager.openURL(url, option);
}
