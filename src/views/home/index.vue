<template>
  <div class="home">
    <div class="timeline">
     
      <h1>Home</h1>
      <br>
      <br>
      <CustomText tag="p">
            dlsls
      </CustomText>
      <HomeIcon/>
      
    </div>
     <div class="sidebar">
       <p>
         kadslpasdölsaöd
       </p>
     </div>


  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import HomeIcon from '../../icons/home.svg'
export default {
  name:"Home",
  components:{
    CustomText,
    HomeIcon
  }
}
</script>

<style scoped>
.home{
 max-width: 605px;
 margin-left: auto;
 margin-right: auto;
  @media(--t){
    max-width: none;
 display: grid;
  grid-template-columns:1fr 295px;
  grid-gap:38px;
  }
}
.sidebar{
  display: none;
  @media(--t){
    display:block;
  }
}
</style>


