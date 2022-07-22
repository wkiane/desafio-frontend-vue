import { Login } from "@/login/models/login_model";
import { fazer_login } from "@/login/services/login_service";
import router from "@/router";

export default {
    state: {
        login: null,
        erro: null
    },
    mutations: {
        setLogin(state: any, login: Login) {
            state.login = login
        },
        setErro(state: any, mensagem: string) {
            state.erro = mensagem
        }
    },
    actions: {
        initLogin({ commit }: any) {
            const login = localStorage.getItem('login')
            commit('setLogin', login ? JSON.parse(login) : null)
        },
        fazerLogin({ commit }: any, data: Login) {
            const login = fazer_login(data);
            if(!login) {
                commit('setErro', "Email ou senha inválidos!")
            }
            localStorage.setItem('login', JSON.stringify(data));
            commit('setLogin', login);
            router.push('/')
        },
        fazerLogout({ commit }: any) {
            localStorage.removeItem('login')
            commit('setLogin', null);
        },
        atualizaErro({ commit }: any, mensagem: string) {
            commit('setErro', mensagem);
        }
    },
    getters: {
        login(state: any) {
            return state.login
        },
        erroLogin(state: any) {
            return state.erro
        }
    }
}