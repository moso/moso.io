// Import svg files as components
declare module '*.svg' {
    import Vue, { VueConstructor } from 'vue'
    const content: VueConstructor<Vue>
    export default content
}
