import {useWindowSize} from '@vueuse/core'
import {computed} from 'vue'
export const useScreen = () => {
    const {width: windowWidth} = useWindowSize() 
    const isXs = computed(() => windowWidth.value < 600)
    return {isXs}
}