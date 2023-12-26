<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if error}
	<div class="error-page d-flex align-items-center">
		<div class="content-wrapper">
			<h6>404</h6>
			
		</div> <!-- /.content-wrapper -->
		<img src="images/404.svg" alt="404" class="shapes illustration">
	</div>
{:else}
	<h1>{status}</h1>
	<p>{error.message}</p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
{/if}


<style>
	
	.shapes.illustration {
  /* Adjust the size and alignment of the 404 image for desktop */
  max-width: 50% !important; /* Set the maximum width as needed */
  height: auto !important; /* Maintain aspect ratio */
  display: block !important; /* Ensure the image is a block element */
  margin-top: 20px !important; /* Adjust the top margin as needed */
  margin-left: auto !important; /* Align the image to the left */
  margin-right: auto !important; /* Align the image to the center horizontally */

  /* Mobile responsive styles */
  @media (max-width: 767px) {
    max-width: 100% !important; /* Adjust the maximum width for mobile */
    margin-top: 0 !important; /* Set top margin to 0 for mobile */
    display: block !important; /* Ensure the image is a block element on mobile */
  }
}

.error-page .content-wrapper {
  /* Add padding to the content wrapper to avoid text overflow */
  padding: 20px !important;
  text-align: center !important; /* Center-align text on mobile */
}

.error-page h6 {
  margin-bottom: 10px !important; /* Add margin to the top of h6 */
}



</style>