import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import { action } from "@storybook/addon-actions"

import AddButton from "../components/atoms/buttons/AddButton.vue"
import DeleteButton from "../components/atoms/buttons/AddButton.vue"

storiesOf("atoms", module)
  .addDecorator(Centered)
  .add("AddButton", () => ({
    components: { AddButton },
    template: `<add-button>label</add-button>`
  }))
  .add("DeleteButton", () => ({
    components: { DeleteButton },
    template: `<delete-button @click="action"></delete-button>`,
    methods: { action: action("deleted!") }
  }))
