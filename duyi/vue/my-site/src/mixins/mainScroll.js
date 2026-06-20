export default function (ref) {
  return {
    mounted() {
      this.$bus.$on('mainScrollTo', this.handleScrollTo)
      this.$refs[ref].addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll')
      this.$refs[ref].removeEventListener('scroll', this.handleScroll)
      this.$bus.$off('mainScrollTo', this.handleScrollTo)
    },
    methods: {
      handleScroll() {
        this.$bus.$emit('mainScroll', this.$refs[ref])
      },
      handleScrollTo(scrollTop) {
        this.$refs[ref].scrollTop = scrollTop
      }
    }
  }
}