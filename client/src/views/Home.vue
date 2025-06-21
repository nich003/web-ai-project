<template>
    <div>
        <h2>This is my web ai project</h2>
        <FileUpload />
    </div>
</template>

<script>
import FileUpload from '../components/FileUpload.vue';
export default {
    name: "HomeView",
    components: {
        FileUpload,
    },
    data: () => ({
        resumeFile: ""
    }),
    methods: {

    },
}
</script>