<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/unair.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <v-row class="mb-13 text-center">
      <v-col></v-col>
      <v-col lg="6" md="6" cols="10" class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          Airlangga University Score Conversion
        </h1>

        <v-form v-model="valid">    
          <v-row>
  
              <v-text-field
                v-model="scoreValue"
                :rules="scoreRules"                
                label="Your score"
                required
              ></v-text-field>               
          </v-row>    
        </v-form>
        
        <v-card
            :loading="loading"
            class="mx-auto mb-5"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>


            <v-card-title>Conversion result :</v-card-title>

            <v-card-text class="text-center">
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                   <v-avatar
                    class="mx-auto"
                    color="indigo"
                    size="80"
                  >
                    <span class="white--text headline">{{convertScore(scoreValue)}}</span>
                  </v-avatar>

              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reset"
              >
                Reset
              </v-btn>
            </v-card-actions>
          </v-card>

        <p class="subheading font-weight-regular">
          Build with
          <v-icon class="mr-1"
            medium
            color="red darken-2"
          >
            mdi-cards-heart
          </v-icon> by 
          <a
            href="https://github.com/dsatriia"
            target="_blank"
          >dsatriia</a>
        </p>
      </v-col>
      <v-col></v-col>

    </v-row>

  </v-container>
</template>

<script>
import convertScore from "../../helpers/scoreConversion"
  export default {
    name: 'ScoreConversion',

    data: () => ({
      loading: false,
      selection: 1,
      valid: false,
      scoreValue: '',
      scoreRules: [
        v => !!v || 'Score is required',                        
      ]
    }),
    methods: {
      reset () {
        const vm =this;
        this.loading = true

        setTimeout(function(){vm.loading = false; vm.scoreValue = ''}, 1000);
      },
      convertScore      
    },
  }
</script>
