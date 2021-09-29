// working counter

const app = new Vue( {
  el: '#counter',
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
});



// Exact copy from webscripting course


// import { createApp } from 'Vue'

// const app = createApp( {
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   mounted() {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }
// })

// app.mount('#counter')