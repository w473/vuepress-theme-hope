import { defineComponent, h } from "vue";
import { useRoute, useRouter } from "vue-router";

import type { VNode } from "vue";

import "../styles/tag-item.scss";

// TODO: magic number 9 is tricky here
const generateColorIndex = (name: string): number => {
  let hash = 1;

  for (let i = 0; i < name.length; i++) {
    // Jenkins one-at-a-time
    hash += name.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >> 6;
  }

  hash += hash << 3;
  hash ^= hash >> 11;

  return hash % 9;
};

export default defineComponent({
  name: "TagItem",

  props: {
    name: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      default: "",
    },

    active: {
      type: Boolean,
      default: false,
    },

    color: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const navigate = (path = ""): void => {
      if (path && route.path !== path) void router.push(path);
    };

    return (): VNode | null =>
      h(
        "span",
        {
          class: [
            "tag-item",
            {
              [`tag${generateColorIndex(props.name || "dummy")}`]: props.color,
              clickable: props.path,
              active: props.active,
            },
          ],
          role: props.path ? "navigation" : "",
          onClick: () => navigate(props.path),
        },
        props.name
      );
  },
});
