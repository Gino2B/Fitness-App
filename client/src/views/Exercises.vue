<template>
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <p class="mt-5">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>List of Exercises</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
    </p>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        Exercise 1
      </a>        
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        Exercise 2
      </a>   
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        Exercise 3
      </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        Exercise 4
      </a>                  
    </div>
  </div>
</div>
</template>

<script>
    

export default {
  data: function () {
    return {
      isToggled: false
    }
  }  
}

</script>

<style>

</style>