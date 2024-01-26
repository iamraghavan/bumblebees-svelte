<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<div class="main-page-wrapper">
  <Nav />

  <slot></slot>

  <Footer />
</div>
