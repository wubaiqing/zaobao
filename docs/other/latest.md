<script>
export default {
  mounted () {
    const latest = document.querySelector('#app > div.theme-container > aside > ul > li:nth-child(2) > section > ul > li:nth-child(1) > a')
    window.location.href = latest;
  }
}
</script>
