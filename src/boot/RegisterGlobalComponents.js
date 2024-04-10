import { boot } from "quasar/wrappers";
import GPageContainer from "src/components/global/GPageContainer.vue";
import GActionButton from "src/components/global/GActionButton.vue";

export default boot(async ({ app }) => {
  const components = [GPageContainer, GActionButton];

  components.forEach((component) => {
    app.component(component.name, component);
  });
});
