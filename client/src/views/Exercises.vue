<template>
<div>
  <div class="dropdown is-active" >
    <div class="dropdown-trigger">
      <div class="mt-5">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4" @click="isLeftOpen = !isLeftOpen" >
        <span>List of Exercises</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
      </div>
    </div>
    <div class="dropdown-menu" id="dropdown-menu4" role="menu" v-if="isLeftOpen">
      <div class="dropdown-content">
        <hr class="dropdown-divider">
        <a href="#pushups" class="dropdown-item">
          Push Ups
        </a>        
        <hr class="dropdown-divider">
        <a href="#situps" class="dropdown-item">
          Sit Ups
        </a>   
        <hr class="dropdown-divider">
        <a href="#pullups" class="dropdown-item">
          Pull Ups
        </a>
        <hr class="dropdown-divider">
        <a href="#planks" class="dropdown-item">
          Planks
        </a>                  
      </div>
    </div>
  </div>
  <div class="dropdown is-right is-active">
    <div class="dropdown-trigger-right">
      <div class="mt-5">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu6" @click="isRightOpen = !isRightOpen" ref="dropdownObj">
        <span>Exercises Added</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
      </div>
    </div>
    <div class="dropdown-menu-right" id="dropdown-menu6" role="menu" v-if="isRightOpen">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
        </div>
      </div>
    </div>
  </div> 
    <div class="pushups">
      <span id="pushups" class="mt-5">
        hello
      <br>
      <img src="https://upl.stack.com/wp-content/uploads/Quickly-Strengthen-Your-Upper-Body-With-Pyramid-Push-Ups.jpg" 
      alt="pushups" style="width:500px;height:300px;">
      <br> This is a pushup!
      <button class="button"> 
        Add Pushup 
      </button>
      </span>
    </div>
    <div class="situps">
      <span id="situps" class="mt-5">
        hello
      <br>
     <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bootcamp-situp-1441032989.jpg" 
     alt="situps" style="width:1000px; height 500px;">
      <br> This is a situp!
      </span>
    </div>
    <div class="pullups">
      <span id="pullups" class="mt-5">
        Hello 
      <br>
      <img src="https://www.climbing.com/.image/t_share/MTM3MzI0NDMzMjY5MzM1MjA5/trainingperfectpullupsjpg.jpg" 
      alt="pullups" style="width:1000px; height 500px;">
      <br> This is a pullup!    
      </span>    
    </div>
    <div class="planks">
      <span id="planks" class="mt-5">
        Hello
      <br>
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hdm119918mh15842-1545237096.png" 
      alt="planks" style="width:1000px; height 500px;">
      <br> This is a plank!    
      </span>   
    </div>         
</div>
</template>

<script>

export default {
  data  () {
    return {
      isLeftOpen: false,
      isRightOpen: false,
    }
  },
  methods: {
      addItems: function(){
        this.$refs.dropdownObj.addItems()
      }
  }
}

</script>

<style>
div.dropdown-trigger-right{
  position: absolute;
  width:200px;
  left:975px;
}
div.dropdown-menu-right{
  position: absolute;
  top:75px;
  width:200px;
  left:975px;
}
div.pushups {
  position: absolute;
  margin-top: 10px;
  left: 15px;
  top: 300px;
  width:300px;
  bottom:50px;
  height:250px;
  right:500px;
}
div.situps {
  position: absolute;
  margin-top: 10px;
  top: 800px;
  left: 15px;
  width: 300px;
  right: 25px;
}
div.pullups {
  position: absolute;
  margin-top: 10px;
  left: 15px;
  top: 1300px;
  width: 500px;
}
div.planks {
  position: absolute;
  margin-top: 10px;
  left: 15px;
  top: 1800px;
  width: 500px;
}
</style>