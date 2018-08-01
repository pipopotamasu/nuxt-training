import { storiesOf } from "@storybook/vue";

import AddButton from "../components/atoms/buttons/AddButton.vue";

storiesOf("AddButton", module).add("simple", () => ({
  components: { AddButton },
  template: `<AddButton>add button</AddButton>`
}));
