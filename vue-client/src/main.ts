import { createApp, provide, h } from 'vue';
import App from './App.vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import apolloClient from './ApolloClient';

const vuetify = createVuetify({
  components,
  directives,
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(vuetify)
  .mount('#app');
