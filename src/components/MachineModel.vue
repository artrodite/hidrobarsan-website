<template>
  <!-- eslint-disable  -->
    <div v-if="!!productName" class="w-full h-full">

        <TresCanvas preset="realistic">
            <OrbitControls id="orbitControls" :enableZoom="false" :maxPolarAngle="Math.PI / 2"
                           :minPolarAngle="Math.PI / 4"/>
            <TresPerspectiveCamera :aspect="1" :far="1000" :fov="40" :near="0.1" :position="cameraPosition"/>
            <TresScene>

                <!--                    <GLTFModel ref="cardRef"-->
                <!--                               :path="'/models/' + productName +'/' + productName +'.gltf'" draco/>-->

                <!--                <TresMesh v-bind="scene"/>-->
                <Suspense>
                    <GLTFModel draco :path="'/models/' + productName +'/' + productName +'.gltf'"/>
                </Suspense>

                <TresDirectionalLight :intensity=".25" :position="[0, 3, -6]" cast-shadow/>
                <TresDirectionalLight :intensity=".25" :position="[0, 3, 6]" cast-shadow/>
                <TresDirectionalLight :intensity=".25" :position="[12, 3, 0]" cast-shadow/>
                <TresDirectionalLight :intensity=".25" :position="[-12, 3, -50]" cast-shadow/>
            </TresScene>
        </TresCanvas>

    </div>
</template>


<script>
import {ref} from 'vue';
import {useGLTF} from '@tresjs/cientos'
import {OrbitControls, GLTFModel} from '@tresjs/cientos';

export default {
    name: 'MachineModel',
    components: {
        OrbitControls,
        GLTFModel
    },
    props: {
        productName: {
            type: String,
            required: true
        }
    },
    async setup() {

        const cameraPosition = ref([10, 10, 2]);
        // const {scene} = await useGLTF('/models/3000M/3000M.gltf', {draco: true})
        // console.log('scene', scene)

        return {
            // scene,
            cameraPosition
        }
    },
}
// const cameraPosition = ref([10, 10, 2]);
//
// const props = defineProps({
//     productName: String
// })
//
// console.log(props);


</script>

<style lang="scss" scoped></style>
