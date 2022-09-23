import { computed } from 'vue'
import { useStore } from 'vuex'


const useUI = () => {

    const store = useStore()

    return {

        // Side menu options
        //sideMenuOpen: computed( () => store.getters['ui/isSideMenuOpen'] ),
        sideMenuOpen: computed({
            get() {
                return store.getters['ui/isSideMenuOpen']
            },
            set(val) {
                store.commit('ui/toggleSideMenu')
            }
        }),
        toggleSideMenu() { store.commit('ui/toggleSideMenu') },

    }

}

export default useUI