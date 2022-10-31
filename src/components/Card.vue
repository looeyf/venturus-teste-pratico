<template>
  <div class="user-card">
    <div class="avatar">
      <img :src="`https://picsum.photos/100?imageId=${user.id}`" alt="Random User Picture" />
    </div>
    <div class="content">
      <div class="name">{{ userName }}</div>
      <div class="email">{{ user.email }}</div>
      <div class="gender">{{ user.gender }}</div>
      <div class="ip">{{ user.ip_address }}</div>
    </div>
    <span class="user-id">{{ user.id }}</span>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    user: Object,
  },
  computed: {
    userName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
};
</script>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
  background-color: #fff;
  border: none;
  border-radius: 4.8px;
  padding: 15px;
  width: 300px;
  height: 150px;
  overflow: hidden;
  z-index: 1;
  position: relative;

  .avatar > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    padding: 16px;
    font-size: 14px;
    position: relative;

    .name {
      font-weight: bold;
      margin-bottom: 6px;
    }
    .email {
      font-size: 10px;
      margin-bottom: 6px;
    }
    .gender {
      margin-bottom: 6px;
    }
  }

  .user-id {
    position: absolute;
    top: 15px;
    right: 15px;

    border-radius: 4px;
    background: #6a99ff;
    padding: 3px 5px;
    font-weight: bold;
    font-size: 10px;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%), 0 2px 2px -1px rgb(0 0 0 / 30%);
    transform: translateY(-2px);
    cursor: pointer;
  }
}
</style>
