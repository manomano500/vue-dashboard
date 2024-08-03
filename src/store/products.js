import axiosClient from "@/axios";

const state = {
    products: [],
    meta: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        total: 0,
        links: {
            first: null,
            last: null,
            prev: null,
            next: null,
        },
    },
    loading: false,
    errors: [],
};

const mutations = {
    setProducts(state, payload) {
        state.products = payload.data;
        state.meta = payload.meta;
    },
    // Other mutations as needed
};

const actions = {
    async fetchProducts({ commit }, { page = 1 } = {}) {
        try {
            const { data } = await axiosClient.get(`/api/admin/products?page=${page}`);
            commit('setProducts', data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    },

    async deleteProduct({ commit, dispatch }, id) {
        try {
            await axiosClient.delete(`/api/admin/products/${id}`);
            dispatch('fetchProducts');
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    },
    // Other actions as needed
};

export default {
    state,
    mutations,
    actions,
};
