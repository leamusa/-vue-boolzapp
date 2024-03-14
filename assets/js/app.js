const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "assets/img/avatar_1.jpg",
          text: "Last message sent",
          hour: "12",
        },
      ],
    };
  },
}).mount("#app");
