<script>
export default {}
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close">Close</button>
      <slot />
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
}

.modal-content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  min-height: 250px;
  max-width: 500px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  border-radius: 8px;
}
</style>
