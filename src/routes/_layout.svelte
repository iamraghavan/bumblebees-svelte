<script>
	import Footer from '../components/Footer.svelte';
import Nav from '../components/Nav.svelte';

</script>


<Nav/>

<main>
	<div class="main-page-wrapper">
		<slot></slot>
	</div>
</main>


<Footer/>