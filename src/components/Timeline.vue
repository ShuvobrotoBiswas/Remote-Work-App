<template>
  <div class="row " style="max-width: 1000px" id="timeline-wrap">
    <div id="timeline"></div>
    <div class="marker mfirst timeline-icon one">
      <p>1</p>
    </div>
    <div class="marker m2 timeline-icon two">
      <p>2</p>
    </div>
    <div class="marker m3 timeline-icon three">
      <p>3</p>
    </div>
    <div class="marker m4 timeline-icon four">
      <p>4</p>
    </div>
    <div class="marker mlast timeline-icon four">
      <p>5</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TimeLine",
});
</script>
<style lang="sass" scoped>
#timeline-wrap
  margin: 20%% 20%
  top: 100
  position: relative


#timeline
  height: 4px
  width: 100%
  background-color: #808080
  position: relative


.marker
  z-index: 1000
  color: #fff
  width: 32px
  height: 32px
  line-height: 32px
  font-size: 1.4em
  text-align: center
  position: absolute
  margin-left: -25px
  background-color: #008080
  border-radius: 50%


.timeline-icon.one
  background-color: #000000!important


.timeline-icon.two
  background-color: #808080 !important


.timeline-icon.three
  background-color: #808080 !important


.timeline-icon.four
  background-color: #808080 !important


.mfirst
  top: -16px


.m2
  top: -16px
  left: 25%


.m3
  top: -16px
  left: 50%


.m4
  top: -16px
  left: 75%

.mlast
  top: -16px
  left: 100%
</style>
