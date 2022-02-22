import { path } from "@vuepress/utils";
import {
  includeViteOptimizeDeps,
  addViteSsrNoExternal,
  getLocales,
  excludeViteOptimizeDeps,
} from "@mr-hope/vuepress-shared";
import { useSassPalettePlugin } from "vuepress-plugin-sass-palette";
import { photoSwipeLocales } from "./locales";

import type { Plugin, PluginConfig } from "@vuepress/core";
import type { PhotoSwipeOptions } from "../shared";

export const photoSwipePlugin: Plugin<PhotoSwipeOptions> = (options, app) => {
  includeViteOptimizeDeps(app, [
    "photoswipe",
    "photoswipe/dist/photoswipe-ui-default",
  ]);

  if (app.env.isDev)
    includeViteOptimizeDeps(app, "@mr-hope/vuepress-shared/lib/client");

  addViteSsrNoExternal(app, [
    "@mr-hope/vuepress-shared",
    "vuepress-plugin-photo-swipe",
  ]);
  excludeViteOptimizeDeps(app, "vuepress-plugin-photo-swipe");

  useSassPalettePlugin(app, { id: "hope" });

  return {
    name: "vuepress-plugin-photo-swipe",

    define: (): Record<string, unknown> => ({
      PHOTO_SWIPE_SELECTOR:
        options.selector || ".theme-default-content :not(a) > img",
      PHOTO_SWIPE_DELAY: options.delay || 500,
      PHOTO_SWIPE_LOCALES: getLocales(app, photoSwipeLocales, options.locales),
      PHOTO_SWIPE_OPTIONS: options.options || {},
    }),

    clientAppRootComponentFiles: path.resolve(
      __dirname,
      "../client/root-components/ImageViewer.js"
    ),
  };
};

export const photoSwipe = (
  options: PhotoSwipeOptions | false
): PluginConfig<PhotoSwipeOptions> => ["photo-swipe", options];