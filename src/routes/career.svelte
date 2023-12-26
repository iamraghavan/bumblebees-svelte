<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Create and append the Typeform embed script
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
  
      // Wait for the Typeform script to be loaded
      script.onload = () => {
        // Display the Typeform container
        const typeformContainer = document.querySelector('[data-tf-live="01HJJDCXKM4MH9RN7AEV9N0E1T"]');
        typeformContainer.style.display = 'block';
  
        // Hide the button
        const hideButton = document.querySelector('.ButtonWrapper-sc-__sc-1qu8p4z-0.cctNKX.BrandButton-sc-__sc-1ckh2u2-6.cJwpQj');
        hideButton.style.display = 'none';
      };
    });
  </script>
  
  <!-- Typeform embed container -->
  <div data-tf-live="01HJJDCXKM4MH9RN7AEV9N0E1T"></div>
  

  
  <style>
    /* Add any custom styles for your Typeform container if needed */
    /* For example: */
    /* .tf-container { width: 100%; height: 500px; } */
  </style>
  