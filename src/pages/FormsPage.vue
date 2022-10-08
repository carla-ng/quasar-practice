<template>
    <q-page class="q-ma-md">
      
      <span class="text-h3">Forms</span>
      <q-separator spaced />

      <div class="row justify-center">

          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
          >
            <q-input
              filled
              v-model="userForm.email"
              label="Email"
              type="email"
              lazy-rules
              no-error-icon
              :rules="[
                val => val && val.length > 0 || 'Please type something',
                isValidEmail
              ]"
            />

            <q-input
              filled
              v-model="userForm.password"
              label="Password"
              type="password"
              lazy-rules
              no-error-icon
              :rules="[ val => val && val.length > 0 || 'Please type something' ]"
            />

            <q-input
              filled
              v-model="userForm.password2"
              label="Repeat password"
              type="password"
              lazy-rules
              no-error-icon
              :rules="[
                val => val && val.length > 0 || 'Please type something',
                isSamePassword
              ]"
            />

            <q-checkbox
              v-model="userForm.conditions"
              label="Accept terms and conditions"
              :style="userForm.errorInConditions && 'color: red'" />

            <div class="row justify-end">
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              <q-btn unelevated label="Submit" type="submit" color="primary" />
            </div>
          </q-form>

      </div>

    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  import { useQuasar } from 'quasar'

  
  export default defineComponent({
    name: 'FormsPage',
    setup() {

      const $q = useQuasar()

      const userForm = ref({
        email: '',
        password: '',
        password2: '',
        conditions: false,
        errorInConditions: false
      })

      return {
        userForm,

        onSubmit() {

          userForm.value.errorInConditions = false

          if ( !userForm.value.conditions ) {
            $q.notify({
              message: 'Must accept terms and conditions',
              icon: 'las la-exclamation-circle'
            })
            userForm.value.errorInConditions = true
            return
          }

          console.log(userForm.value);
        },

        onReset() {
          userForm.value = {
            email: '',
            password: '',
            password2: '',
            conditions: false,
            errorInConditions: false
          }
        },

        isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || 'Please type a valid email';
        },

        isSamePassword( val ) {
          return ( val === userForm.value.password ) || 'The passwords do not match'
        }

      }

    }
  })
  </script>
  