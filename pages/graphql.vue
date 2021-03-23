<template>
  <div>
      <div 
        class="character-box"
        v-for="character in characters.results" :key="character.id"
      >
          {{character.name}}
          {{character.status}}
      </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    apollo: {
        characters: gql`
        query getCharacters {
            characters {
                results {
                    id
                    name
                    status
                }
            }
        }
        `
    }
}
</script>

<style>

</style>