const { createApp } = Vue;

createApp({
  data() {
    return {
      contatti: [
        {
          nome: "Michele",
          avatar: "assets/img/avatar_1.jpg",
        },
      ],
    };
  },
}).mount("#app");
