<template>
  <div>
    <Navbar />
    <div v-if="isAuth" class="container mt-5">
      <div class="row bg-dark rounded">
        <div class="col-xl-6 d-flex">
          <div class="m-5">
            <h1 class="pt-2 text-white">Hi Shamantha</h1>
            <p class="p-auto text-secondary">
              Welcome back to the Workspace, we missed you!
            </p>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="project container text-white mt-5">
              <h4>Project</h4>
              <div class="row">
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
                <div class="col">
                  <div class="item-project">
                    <h5 class="text-project">GH</h5>
                  </div>
                  <p class="mt-3">Green House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="side-bar col-xl-6 bg-white rounded mt-1 mb-1">
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <h2 class="pt-4">Cyber Punk</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </div>
              <div class="col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  alt="Avatar"
                />
              </div>
            </div>
            <h6 class="pt-5">Today</h6>
            <hr />

            <table class="table table-borderless">
              <tbody>
                <tr v-for="(item, id) in todos" :key="id">
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                      </label>
                    </div>
                  </td>
                  <td class="">{{ item.first_name }} {{ item.last_name }}</td>
                  <td class="">
                    <button
                      type="button"
                      class="btn-table btn-primary"
                      id="liveToastBtn"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h6 class="pt-5">Upcoming</h6>
            <hr />

            <table class="table table-borderless">
              <tbody>
                <tr v-for="(item, id) in todos" :key="id">
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                      </label>
                    </div>
                  </td>
                  <td class="">{{ item.first_name }} {{ item.last_name }}</td>
                  <td class="">
                    <button
                      type="button"
                      class="btn-table btn-primary"
                      id="liveToastBtn"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" class="btn" id="liveToastBtn">+</button>

          <div class="toast-container">
            <div
              id="liveToast"
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              bg-primary
            >
              <div class="toast-header">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      v-model="task.name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputJob" class="form-label"
                      >Job</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputJob"
                      v-model="task.job"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <h1 class="centerText">Harap Login Terlebih Dahulu</h1>
    </div>
  </div>
</template>

<style>
.centerText {
  margin-top: 250px;
  margin-left: 300px;
}
</style>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  async asyncData({ store }) {
    if (store.state.auth.loggedIn) {
      await Promise.all([store.dispatch("task/getTask")]);
      return;
    }
    return;
  },
  name: "IndexPage",
  computed: {
    ...mapState(["isAuth"]),
    ...mapState({
      todos: (state) => state.task.task,
    }),
  },
  data() {
    return {
      task: {
        name: "",
        job: "",
      },
      errors: null,
    };
  },

  methods: {
    ...mapActions("task", ["getTask", "addNewTask", "deleteTask"]),
    addData() {
      this.addNewTask(this.task);
      this.task = {};
    },
    deleteData(item) {
      this.deleteTask(item.id);
    },
  },
};
</script>
<style scoped>
@import "~/assets/style/main.css";
</style>
