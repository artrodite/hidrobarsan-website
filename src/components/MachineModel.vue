<template>
  <!-- eslint-disable  -->
    <Suspense>
        <TresCanvas preset="realistic">
            <OrbitControls id="orbitControls" :minPolarAngle="Math.PI / 4" :maxPolarAngle="Math.PI / 2" :enableZoom="false" />
            <TresPerspectiveCamera :position="cameraPosition" :fov="50" :aspect="1" :near="0.1" :far="1000" />
            <TresScene>
                <GLTFModel ref="cardRef" path="/models/3000m/3000m.gltf" draco />
                <TresDirectionalLight :position="[0, 3, -6]" :intensity=".25" cast-shadow />
                <TresDirectionalLight :position="[0, 3, 6]" :intensity=".25" cast-shadow />
                <TresDirectionalLight :position="[12, 3, 0]" :intensity=".25" cast-shadow />
                <TresDirectionalLight :position="[-12, 3, -50]" :intensity=".25" cast-shadow />
            </TresScene>
        </TresCanvas>
    </Suspense>
</template>


<script setup>
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
import { ref } from 'vue';

const cameraPosition = ref([10, 10, 10]);


</script>

<style lang="scss" scoped></style>
