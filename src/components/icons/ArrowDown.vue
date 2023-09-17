<template>
    <svg  viewBox="0 0 54 25" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow">
<line x1="4.00231" y1="3.50849" x2="26.2735" y2="20.9079" stroke="#565252" stroke-width="5.70264" stroke-linecap="round"/>
<line x1="27.2569" y1="20.9088" x2="49.5278" y2="3.50893" stroke="#565252" stroke-width="5.70264" stroke-linecap="round"/>
</svg>

</template>
<script setup>
    import gsap from 'gsap'
    import {onMounted,ref} from 'vue'

    const props = defineProps({
        animated: {
            default: true,
            type: Boolean,
        }
    })

    const arrow = ref(null);

    onMounted(() => {
        if (!props.animated) return;
        const tl = gsap.timeline({repeat: -1});
        tl.to(arrow.value, {
            y: -5,
            ease: 'power2.out',
            duration: 0.75
        })
         tl.to(arrow.value, {
            y: 0,
            ease: 'bounce.out',
            duration: 1.25
        })

    })
</script>