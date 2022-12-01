exports.createPages = async ({ actions }) => {
  actions.createSlice({
    id: `header`,
    component: require.resolve(`/src/components/Header.js`),
  })
}
