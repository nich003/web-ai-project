<template>
    <div>
        <p>File upload</p>
        <label for="file-input" class="upload-btn">
            Upload
        </label>
        <input id="file-input" type="file" @change="onSelect" hidden />
    </div>
</template>

<script>
export default {
    name:"FileUpload",
    data: () => ({
        file: null,
        message: ""
    }),
    methods: {
        // here we will implement the functions for handling the file upload
        onSelect(event) {
            this.file = event.target.files[0]
        },
        sendFiles() {
            // do backend first then come back to this

        },

    }
}
</script>

<style scoped>
.upload-btn{
    display: inline-block;
    background-color:gray;
    color:white;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 4px 8px;
    font:bold
}
</style>