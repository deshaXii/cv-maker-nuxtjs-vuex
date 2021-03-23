const state = () => ({
    user: null,
});
const getters = {
    isLoggedIn: state => !!state.user
};
const mutations = {
    SET_USER: (state, payload) => state.user = payload,
};
const actions = {
    logOutActions({commit}) {
        return new Promise( (resolve) => {
            this.$cookies.remove('user_token');
            commit('SET_USER', null)
            this.$router.push({path: '/'})
            resolve()
        })
    },
    loginActions({commit}, loginData) {
        let {email, password} = loginData
        return new Promise( (resolve, reject) => {
            this.$axios.$post('http://localhost:9000/api/login', { email, password })
            .then( data => {
                if (data.status === 'sucsses') {
                    commit('SET_USER', data.userData)
                    resolve(data)
                } else {
                    reject(data.message)
                }
            })
            .catch ( e => {
                e = 'الرجاء المحاولة في وقت اخر'
                reject(e)
            })
        })
        
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
