// Import Vue components everywhere - in this instance in markdown
declare module '*.vue' {
    import { defineComponent } from 'vue';
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
};
