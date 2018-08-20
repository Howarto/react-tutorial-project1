import Firebase from 'firebase/app';
import 'firebase/database';

export default class FirebaseDB {
  constructor() {
    const config = {
      apiKey: 'AIzaSyA5PAa1DO1-1OLk9s80tdd4E4m0y9hmG7E',
      authDomain: 'react-tutorial-project1.firebaseapp.com',
      databaseURL: 'https://react-tutorial-project1.firebaseio.com',
      projectId: 'react-tutorial-project1',
      storageBucket: 'react-tutorial-project1.appspot.com',
      messagingSenderId: '565705398150',
    };
    Firebase.initializeApp(config);

    /**
     * Connection with firebase databse.
     * @type {object}
     */
    this.firebaseDBConnection = Firebase.database();
  }

  /**
   * Gets all todo instances from the database.
   * @param {function} callback callback function.
   * @returns {array}
   */
  getTodos(callback) {
    this.firebaseDBConnection.ref('todos/').once('value').then((snapshot) => {
      callback(snapshot.val());
    });
  }

  /**
   * Creates a todo instance in Firebase.
   * @param {object} todo object representing a todo instance inside the system.
   * @property {number} id todo id.
   * @property {string} text todo text.
   */
  createTodo(todo) {
    this.firebaseDBConnection.ref(`todos/${todo.id}`).set({
      text: todo.text,
    });
  }

  /**
   * Removes a todo instance in Firebase.
   * @param {number} todoId todo's id.
   */
  removeTodo(todoId) {
    this.firebaseDBConnection.ref(`todos/${todoId}`).remove();
  }
}
