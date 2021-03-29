export const state = () => ({
    pageTitle: 'Default Title'
})

export const mutations = {
    setPageTitle(state, title) {
        state.pageTitle = title
    }
}
