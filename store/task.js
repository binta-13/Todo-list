export const state = () => ({
  task: [],
  taskId: [],
});

export const mutations = {
  SET_TASK_DATA(state, payload) {
    state.task = payload;
  },

  SET_TASK_ID(state, payload) {
    state.taskId = payload;
  },
};

export const actions = {
  async getTask({ state, commit, dispatch }) {
    try {
      await this.$axios.get("api/users").then((response) => {
        commit("SET_TASK_DATA", response.data.data);
      });
    } catch (error) {
      alert(e.response.data.message);
    }
  },

  async getTaskById({ commit }, payload) {
    try {
      const response = await this.$axios.get(`api/users${payload}`);
      commit("SET_TASK_ID", response.data.data);
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  },

  async addNewTask({dispatch}, payload) {
     try {
      await this.$axios.post('api/users', payload)
      dispatch('getTask')
      alert('Berhasil Menambah user')
     } catch (error) {
      alert(error.response.data.message);
     }

  },

  async updateTaskId({dispatch}, payload) {
      try {
          await this.$axios.put(`api/users/${payload.id}`, payload)
          dispatch('getTask')
          alert('Berhasil Update user')
      } catch (error) {
          alert(error.response.data.message)
      }
  },

  async deleteTask({dispatch}, payload) {
      try {
       await this.$axios.delete(`api/users${payload}`)
       dispatch('getTask')
       alert('Berhasil Menghapus data')
      } catch (error) {
       alert(e.response.data.message);
      }

   }
};
