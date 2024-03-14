- **Replica of the layout**

# Milestone 1

We replicated the design, allowing messages sent by the user to appear in green and messages from the interlocutor to appear in white, assigning two different CSS classes.

- **Dynamic display of contact list**
  Using the v-for directive, we dynamically display the name and image of each contact.

# Milestone 2

- **Dynamic display of messages**
  Using the v-for directive, we display all messages related to the active contact within the conversation panel.
- **Clicking on a contact shows the conversation**: When a contact is clicked, the conversation of the clicked contact is displayed.

# Milestone 3

- **Adding a message**: The user writes a message in the bottom part, and upon pressing "enter", the message is added to the thread above as a green message.
- **Response from the interlocutor**: With each message insertion, the user receives an "ok" as a response, which appears after 1 second.

# Milestone 4

- **User search**
  By typing something in the input on the left, only contacts whose name contains the entered letters are displayed (e.g., Marco, Matteo, Martina -> Typing "mar" will show only Marco and Martina).

# Milestone 5 (optional)

- **Delete message**
  Clicking on a message displays a dropdown menu that allows deleting the selected message.
- **Display time and last sent/received message in contact list**
  Displaying the time and the last message sent/received in the contact list view.

## Vue tools:

- **v-for**: Used to iterate through the list of contacts in the address book.
- **v-show**: Used to conditionally display elements based on certain conditions, such as the visibility of contacts.
- **@keyup**: Used to listen for keyboard events, specifically to trigger the `filterContacts` method when a key is pressed.
- **v-model**: Used for two-way data binding to synchronize the `search` and `sentMessage` variables with the input fields.
- **@click**: Used to handle click events, such as changing the active contact in the address book.
- **@keyup.enter**: Used to trigger the `addMessage` method when the Enter key is pressed in the message input field.
- **:class**: Used to dynamically bind CSS classes based on certain conditions, such as applying the `active` class to the active contact in the address book.

## Features:

- **Profile Section**: Displays user profile image and settings.
- **Information Section**: Provides options for receiving notifications and other information.
- **Search Bar**: Allows users to search for contacts or start new chats.
- **Address Book**: Displays a list of contacts with their avatars and information.
- **Open Profile Section**: Displays the profile of the currently active contact.
- **Footer Section**: Includes options for sending messages.
- **Messages Section**: Displays sent and received messages with options for message actions.

## js Tools

1. **`const { createApp } = Vue;`**: Destructuring assignment to import the `createApp` function from the Vue object.

2. **`createApp({ ... }).mount("#app");`**: This is where the Vue application is created and mounted to the element with the ID `"app"` in the HTML file.

3. **`data() { ... }`**: This is a method that returns an object containing the data properties for the Vue application. It includes:

   - **`messageSelection`**: Represents the selected option in the message selection dropdown.
   - **`sentMessage`**: Represents the message entered by the user in the input field.
   - **`search`**: Represents the search query entered by the user in the search input field.
   - **`chat`**: Represents some chat-related data, but its purpose is not clear from the provided code snippet.
   - **`contacts`**: Represents an array of contact objects, each containing contact information and an array of messages.
   - **`activeBox`**: Represents the index of the currently active contact box.

4. **`methods: { ... }`**:
   (This) object contains methods that define the behavior of the Vue application. It includes:

   - **`changeBox(index)`**:
     Sets the `activeBox` property to the index of the clicked contact box.
   - **`filterContacts()`**:
     Filters the contacts based on the search query entered by the user.
   - **`addMessage()`**:
     Adds a new message to the active contact's message array, simulates a response after a delay, and resets the `sentMessage` field.
   - **`selectedMessage(index)`**:
     Deletes a message from the active contact's message array based on the selected option in the message selection dropdown.

5. **`.mount("#app")`**:
   Mounts the Vue application to the element with the ID `"app"` in the HTML file, rendering the Vue components and enabling interactivity.
