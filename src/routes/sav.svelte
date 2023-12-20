<script>
    import { onMount } from 'svelte';
  
    let name = '';
    let age = '';
    let number = '';
    let users = [];
    let editingUserId = null;
  
    // Fetch users data on component mount
    onMount(async () => {
      await fetchUsers();
    });
  
    async function updateUser() {
      const response = await fetch(`https://sample-mysql.onrender.com/api/users/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age: parseInt(age), number }),
      });
  
      // Check if the response status is ok
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error updating user: ${errorData.error}`);
      }
  
      const result = await response.json();
      console.log(result);
  
      // Reset the form fields and editingUserId after update
      name = '';
      age = '';
      number = '';
      editingUserId = null;
  
      // Refresh the users data after update
      await fetchUsers();
    }
  
    async function handleSubmit() {
      if (editingUserId) {
        // If editing, update the existing user
        await updateUser();
      } else {
        // If not editing, add a new user
        await addUser();
      }
  
      // Refresh the users data after submission
      await fetchUsers();
  
      // Optionally, reset the form fields after submission
      name = '';
      age = '';
      number = '';
      editingUserId = null;
    }
  
    async function addUser() {
      const response = await fetch('https://sample-mysql.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age: parseInt(age), number }),
      });
  
      const result = await response.json();
      console.log(result);
    }
  
    async function editUser(userId) {
      // Find the user by ID
      const userToEdit = users.find(user => user.id === userId);
  
      // Set the form fields with the existing data
      name = userToEdit.name;
      age = userToEdit.age;
      number = userToEdit.number;
  
      // Set the editingUserId to the selected user's ID
      editingUserId = userId;
    }
  
    async function deleteUser(userId) {
      // Implement the delete logic here
      const confirmDelete = confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        const response = await fetch(`https://sample-mysql.onrender.com/api/users/${userId}`, {
          method: 'DELETE',
        });
  
        const result = await response.json();
        console.log(result);
  
        // Refresh the users data after deletion
        await fetchUsers();
      }
    }
  
    async function fetchUsers() {
      const response = await fetch('https://sample-mysql.onrender.com/api/users');
      users = await response.json();
    }
  </script>
  
  <main style="margin-top: 10rem;">
    <form on:submit|preventDefault={handleSubmit}>
      <label for="name">Name:</label>
      <input type="text" id="name" bind:value={name} required />
  
      <label for="age">Age:</label>
      <input type="number" id="age" bind:value={age} required />
  
      <label for="number">Phone number:</label>
      <input type="number" id="number" bind:value={number} required />
  
      <button type="submit">{editingUserId ? 'Update' : 'Submit'}</button>
    </form>
  
    <!-- Display Users Table -->
    {#if users.length > 0}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {#each users as user (user.id)}
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.number}</td>
              <td><button on:click={() => editUser(user.id)}>Edit</button></td>
              <td><button on:click={() => deleteUser(user.id)}>Delete</button></td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </main>
  
  <style>
    main {
      text-align: center;
      margin: 2rem;
    }
  
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  
    label {
      margin-bottom: 0.5rem;
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  
    button {
      padding: 0.5rem;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
    }
  
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #4caf50;
      color: white;
    }
  </style>
  