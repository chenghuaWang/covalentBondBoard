<template>
    <codemirror v-model="code" placeholder="Code gose here..." :style="style" :mode="mode" :spellcheck="spellcheck"
        :autofocus="autofocus" :indent-with-tab="indentWithTab" :tabSize="tabSize" @ready="log('ready', $event)"
        @change="log('change', $event)" @focus="log('focus', $event)" @blur="useEditedCode" />
</template>
  
<script lang="ts">
import { Codemirror } from "vue-codemirror";

import { reactive, ref, toRefs } from "vue";

export default {
    components: {
        Codemirror,
    },
    setup() {
        const code = ref(``);
        const selectValue = "cpp";
        const dateTime = "黑夜";
        const options = reactive({
            style: { height: "400px" },
            mode: "text/x-c++src",
            spellcheck: true,
            autofocus: true,
            indentWithTab: true,
            tabSize: 2,
        });


        function useEditedCode() {
            console.log("@@@blur@@@code:", code.value);
        }

        return {
            code,
            selectValue,
            dateTime,
            ...toRefs(options),
            log: console.log,
            useEditedCode,
        };
    },
};
</script>