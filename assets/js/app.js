const { createApp } = Vue;

createApp({
  data() {
    return {
      messageSelection: "0",
      sentMessage: "",
      search: "",
      chat: "",
      contacts: [
        {
          name: "Michele",
          avatar: "assets/img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Did you take the dog for a walk?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Remember to hang out the laundry?",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "All done!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "assets/img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Hi, how are you?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Fine thanks! See you tonight?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "I would love to but I have to go grocery shopping.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "assets/img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "Is Marianna going to the countryside?",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Are you sure you didn't get the wrong chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah sorry!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "assets/img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Did you know that a new pizzeria opened?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Yes, but I'd prefer to go to the cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "assets/img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Remember to call grandma",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Alright, I'll call her tonight",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "assets/img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hi Claudia, any news?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Not yet",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "No news is good news",
              status: "sent",
            },
          ],
        },
      ],
      activeBox: 0,
      contactsFound: true, // Initially set to true
    };
  },
  methods: {
    changeBox(index) {
      this.activeBox = index;
    },
    filterContacts() {
      const searchLowerCase = this.search.toLowerCase();
      this.contacts.forEach((contact) => {
        contact.visible = contact.name.toLowerCase().includes(searchLowerCase);
      });
      this.checkContactsFound(); // Check if there are contacts found after filtering
    },
    addMessage() {
      const today = new Date();

      // Add the message sent by the user
      this.contacts[this.activeBox].messages.push({
        date: today.toLocaleString(),
        message: this.sentMessage,
        status: "sent",
      });

      // Simulate a response from the recipient
      setTimeout(() => {
        this.contacts[this.activeBox].messages.push({
          date: today.toLocaleString(),
          message: "Ok",
          status: "received",
        });
      }, 1000); // After 1 second

      // Reset the sent message field
      this.sentMessage = "";
    },

    selectedMessage(index) {
      // Remove the selected message
      this.contacts[this.activeBox].messages.splice(index, 1);
    },
    checkContactsFound() {
      // Check if there are visible contacts after filtering
      this.contactsFound = this.contacts.some((contact) => contact.visible);
    },
  },
}).mount("#app");
