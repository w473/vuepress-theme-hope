---
title: FAQ
icon: question
category:
  - FAQ
---

## Getting Help

If you ran into some issues, please make sure you are in the lastest version and tried removing `node_modules` folder then a clean install.

If the issue persists, please [open a discussion](https://github.com/vuepress-theme-hope/vuepress-theme-hope/discussions/new) on GitHub, and paste the full log running `vuepress dev [docs-dir] --debug`, if your problem is related to display, please also provide related screenshots.

If the issue exists or there is somthing you don’t know how to solve, welcome to [open a dicussion](https://github.com/vuepress-theme-hope/vuepress-theme-hope/discussions/new). Questions are always welcome, no matter **they are simple or not**. You only need to make sure three points:

1. You have tried searching related docs through search box.

1. You are providing a detailed description in the discussion.

   - If you don’t know how to config something, please describe what you want, and what you search or what section are you expecting to see the guidelines (so that we can improve our docs)

   - If you are running into issues, provide related error log (by running `vuepress dev <docs dir> --debug`) and screenshots.

1. You are not asking question unrelated to VuePress or asking for a "tecnical support".

   If you have learning questions about vue, typescript, sass or you don't know how to write something you want, you probably need to ask them in places like vue forum, stackoverflow. We are not expecting to "be a doc provider" or "teach you how to write code".

   Also, for customization, we only support "how can you customize something (in which way)". "How to customize something" (what you should write in your own codes) is NOT SUPPORTED. Unless you are donating this project, please do not inisit asking help for that part.

If you are sure there is an issue somewhere, please [open an issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new/choose) on GitHub and point out the issue in full specific details.

<!-- ## Can not built with Vite

This is a known bug in `@vuepress/bundler-vite`, see [Issue 585 Comment](https://github.com/vuepress/vuepress-next/issues/585#issuecomment-1046064242).

::: tip

You can install both `vuepress-vite` and `vuepress-webpack` and use `vuepress-vite dev` `vuepress-webpack build` as a workaround now.

::: -->

## Slow in a cold boot with Vite

This is the expect behaviour. We are adding more features, which means we have 2× to 8× lines of code comparing with `@vuepress/theme-default` according to the functions you are using. So transpiling and sending the theme and plugins code to broswer is expected to increase from `0.8s - 2s` in `@vuepress/theme-default` to `3s - 8s` (range due to machine performance).

::: tip

You can not depend on fast speed and strong functions at the same time, bro.

:::

Also, the style system is greatly slowing down the speed.

- `@vuepress/theme-default` is placing all the styles together at `styles` folder and importing them entirly, so that `sass` will only need to compile once and vite only need to send 1 extra web request. That's why it's fast.

  But this will let style unbinded with components, and they will be injected anyway. So that when you overide a component or a layout, you have to overide old styles to build styles you want.

- `vuepress-theme-hope` is binding styles with components, but that means `sass` has to compile styles for each component, and vite need to send an extra request for each components. Due to `vuepress-theme-hope` has 2× to 6× components (depending on whether you enable blog featues or not) comparing with `@vupress/theme-default`, it will take extra time of `2.4s - 4s` for that.

  But, you can easily overide a component together with it's styles in this way.

So, due to the above reasons, `vuepress-theme-hope` will have an average of 4× code and 10× requests comparing with `@vuepress/theme-default`, so the time increasing from `2s` to `10s` is reasonable and expected.

::: tip

Don't worry, due to network cache, a hot reload when editing markdown files is still fast.

:::

## `xxx isn’t assign with a lang, and will return 'en-US' instead.`

If you see `xxx isn’t assign with a lang, and will return 'en-US' instead.` while the dev process is starting up, please check whether you set lang for every language.

If you only have one language, you still need to [set your root language](config/i18n.md#setting-root-lang).

## Some page settings are invalid

You can first review the documentation to see if the setting **does not support page config**.

**Support for page config** means that the theme allows the config of the page to override the global config of the same name (same function), but not all functions meet this setting.

::: tip

You should be aware that some features will not be loaded during the prepare stage when the global setting is disabled, so they cannot be enabled locally.

:::

## Code block does not look right in light mode

I guess this is your fault. Please delete the `$codeBgColor` in `.vuepress/styles/palette.scss`. The default value of `vuepress-theme-hope` is light blue, while `@vuepress/theme-default` is dark blue.