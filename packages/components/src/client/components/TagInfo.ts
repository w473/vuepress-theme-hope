import { useLocaleConfig } from "@mr-hope/vuepress-shared/lib/client";
import { defineComponent, h } from "vue";
import { TagIcon } from "./icons";
import TagItem from "./TagItem";
import { articleInfoLocales } from "../define";

import type { PropType, VNode } from "vue";
import type { ArticleTag } from "../../shared";

export default defineComponent({
  name: "TagInfo",

  props: {
    tag: {
      type: Array as PropType<ArticleTag[]>,
      default: () => [],
    },

    hint: {
      type: Boolean,
      default: true,
    },

    color: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const pageInfoLocale = useLocaleConfig(articleInfoLocales);

    return (): VNode | null =>
      props.tag.length
        ? h(
            "span",
            {
              ariaLabel: pageInfoLocale.value.tag,
              ...(props.hint ? { "data-balloon-pos": "down" } : {}),
            },
            [
              h(TagIcon),
              h(
                "ul",
                { class: "tags-wrapper" },
                props.tag.map(({ name, path }, index) =>
                  h(
                    "li",
                    { class: "tag-item" },
                    h(TagItem, {
                      name,
                      path,
                      color: props.color,
                      colorIndex: index,
                    })
                  )
                )
              ),
              h("meta", {
                property: "keywords",
                content: props.tag.map(({ name }) => name).join(","),
              }),
            ]
          )
        : null;
  },
});
