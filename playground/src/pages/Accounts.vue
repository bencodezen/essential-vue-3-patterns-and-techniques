<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>

<template>
  <DefaultLayout>
    <h1>🏦 Accounts Page</h1>
    <hr />
    <div class="accounts-grid">
      <section>
        <h2>New Account</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="account-title" class="base-input-label">Title</label>
            <input type="text" id="account-title" class="base-input" />
          </div>
          <button class="base-button">Add New Acccount</button>
        </form>
      </section>
      <section>
        <h2>Existing Accounts</h2>
        <table class="account-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account #1</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
            <tr>
              <td>Account #2</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
        <button class="base-button">Generate Sync Error</button>
      </section>
    </div>
  </DefaultLayout>
</template>

<style>
.base-button {
  padding: 0.25rem 0.5rem;
}

.base-input {
  display: flex;
  width: 100%;
  padding: 0.25rem;
}

.base-input-label {
  display: block;
  margin-bottom: 0.5rem;
}

.base-input-wrapper {
  margin-bottom: 1rem;
}

.accounts-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
}

.account-table {
  margin-bottom: 1rem;
}

.account-table,
.account-table th,
.account-table td {
  width: 100%;
  border: 1px solid #222;
}

.account-table tr {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
