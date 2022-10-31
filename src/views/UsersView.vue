<template>
  <div class="users">
    <div class="header">
      <h1>User List</h1>
      <div class="buttons">
        <button @click="orderById">Order By Id</button>
        <button @click="orderByName">Order By Name</button>
        <button @click="removeFirstItem">Remove First</button>
      </div>
    </div>
    <div class="list-wrapper">
      <Card v-for="user in usersFiltered" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import UsersData from '../data/users.json';

export default {
  name: 'HomeView',
  components: {
    Card,
  },
  data() {
    return {
      orderBy: '',
      users: UsersData,
    };
  },
  computed: {
    usersFiltered() {
      const newArray = this.users;

      if (this.orderBy === 'id') {
        newArray.sort((a, b) => a.id - b.id);
      } else if (this.orderBy === 'name') {
        newArray.sort((a, b) => {
          const fullNameA = `${a.first_name} ${a.last_name}`;
          const fullNameB = `${b.first_name} ${b.last_name}`;

          return fullNameA.localeCompare(fullNameB);
        });
      }

      return newArray.slice(0, 100);
    },
  },
  methods: {
    orderById() {
      this.orderBy = 'id';
    },
    orderByName() {
      this.orderBy = 'name';
    },
    removeFirstItem() {
      const firstItemId = this.usersFiltered[0].id;

      const indexOfFirstItem = this.users.findIndex((user) => user.id === firstItemId);

      this.users.splice(indexOfFirstItem, 1);
    },
  },
};
</script>

<style lang="scss">
.users {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    z-index: 2;
    position: sticky;
    top: 0;
    padding: 16px;
    margin-bottom: 16px;

    h1 {
      font-size: 16px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 8px;
    }
  }
  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
}
</style>
