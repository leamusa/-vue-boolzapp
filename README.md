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

## Features

- **Profile Section**: Displays user profile image and settings.
- **Information Section**: Provides options for receiving notifications and other information.
- **Search Bar**: Allows users to search for contacts or start new chats.
- **Address Book**: Displays a list of contacts with their avatars and information.
- **Open Profile Section**: Displays the profile of the currently active contact.
- **Footer Section**: Includes options for sending messages.
- **Messages Section**: Displays sent and received messages with options for message actions.

## js Tools

### Vue.js Methods Used:

The methods used in the object `methods` are as follows:

1. **changeBox(index)**: This method is called when you want to change the active chat window. Take an index as an argument and set `activeBox` on that index.

2. **filterContacts()**: This method filters contacts based on the search string entered in the search bar. Converts the search string to lowercase, then iterates through all contacts and sets the `visible` property of each contact based on whether the contact name includes the search string or not. After filtering contacts, call the `checkContactsFound()` method to check if there are visible contacts after filtering.

3. **addMessage()**: This method is called when sending a new message. Adds the message sent by the user to the message list of the active contact, along with the date and status "sent". Next, it simulates a reply from the recipient by adding an "Ok" message after a second. Finally, it resets the field of the sent message.

4. **selectedMessage(index)**: This method is called when you want to delete a message. It takes the index of the selected message as argument and removes it from the message list of the active contact.

5. **checkContactsFound()**: This method checks for visible contacts after filtering. Use the `some()` method to check if at least one of the contacts has the property `visible` set to `true`. If at least one contact is visible, set `contactsFound` to `true`, otherwise set it to `false`.

### Vue.js Directives Used:

1. **v-model**:

   - Used to link input value to Vue data attributes, such as `search` and `sentMessage`, to synchronize user interface data with application status.

2. **@keyup**:

   - Used to listen to key press events on the keyboard, such as `@keyup="filterContacts"` to perform a function when a key is released on the keyboard.

3. **v-if\***:

   - Used to condition the rendering of HTML elements by the value of a Boolean condition, for example `v-if="contact.visible"` to show only visible contacts.

4. **v-for\***:
   - Used to iterate on a list of elements and dynamically generate HTML elements, for example `<template v-for="(contact, index) in contacts">` to dynamically generate contact boxes.
