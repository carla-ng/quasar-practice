<template>
    <q-page class="flex column q-pa-md">

        <span class="text-h1">Headline 1</span>
        <span class="text-h2">Headline 2</span>
        <span class="text-h3">Headline 3</span>
        <span class="text-h4">Headline 4</span>
        <span class="text-h5">Headline 5</span>
        <span class="text-h6">Headline 6</span>

        <q-separator />

        <span class="text-subtitle1">Subtitle 1</span>
        <span class="text-subtitle2">Subtitle 2</span>

        <q-separator />

        <p class="text-body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vel hic libero architecto fugit porro quaerat beatae at possimus minima quo illum sunt sequi, cumque laudantium ut culpa corrupti! Similique?</p>
        <p class="text-body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil incidunt expedita laborum mollitia aperiam adipisci praesentium autem cumque dolore placeat tenetur amet, similique voluptates voluptatum tempora inventore doloribus sequi culpa.</p>

        <q-separator />

        <span class="text-weight-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur veritatis quasi, deserunt modi quam laudantium dicta tenetur ullam optio voluptates beatae quaerat itaque sint temporibus provident quod accusamus corrupti!</span>
        <span class="text-weight-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores esse, dolorem excepturi minima rerum pariatur corrupti doloribus repudiandae, reprehenderit placeat similique accusantium odio minus. Exercitationem delectus doloremque atque voluptatum deserunt!</span>
        <span class="text-weight-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magnam impedit molestiae, in modi eveniet exercitationem eaque sit velit est voluptate aut corrupti nihil repellat quos iure aliquam itaque architecto.</span>
        <span class="text-weight-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam labore tempore nihil omnis magnam eveniet adipisci laboriosam accusamus beatae ratione fugiat suscipit provident, id eaque obcaecati mollitia, incidunt itaque eos.</span>
        <span class="text-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit accusamus laboriosam dolorum, quibusdam, eveniet necessitatibus, quidem aspernatur expedita cupiditate alias ipsum porro commodi velit tenetur! Eveniet dolore molestiae fuga?</span>
        <span class="text-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nihil natus omnis repudiandae fuga adipisci debitis hic doloribus in deleniti! Aut nobis architecto minus placeat. Iste iusto consequatur at accusamus.</span>

        <q-btn 
          color="primary"
          :label="sideMenuOpen ? 'Close side menu' : 'Open side menu'"
          class="q-mt-md"
          @click="toggleSideMenu"
        />

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import useUI from '../composables/useUI'
  
  export default defineComponent({
    name: 'TypographyPage',

    setup() {

      const { sideMenuOpen, toggleSideMenu } = useUI()

      return {
        sideMenuOpen,
        toggleSideMenu,
      }

    }

  })
  </script>
  