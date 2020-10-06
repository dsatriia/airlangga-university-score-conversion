<template>
  <v-app>
    <v-app-bar      
      color="yellow accent-4"
      light
      dense      
    >
      <div class="d-flex align-center">

        <v-img
          alt="Unair Slogan"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('./assets/unair-slogan.png')"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Get Source Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
          <v-bottom-navigation
      :value="0"
      fixed
      color="primary"      
      horizontal          
    >
      <v-btn>
        <span>Score Conversion</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn @click="gotoUrl('https://github.com/dsatriia')">
        <span>Github</span>

        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn @click="gotoUrl('https://linkedin.com/in/dsatriia')">
        <span>Linkedin</span>

        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn @click="gotoUrl('https://instagram.com/dsatriia')">
        <span>Instagram</span>

        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {
    gotoUrl(url){
      window.open(
      url,
      '_blank' 
      );
    }
  }
};
</script>
