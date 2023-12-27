import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});


// src/client.js

if (typeof window !== 'undefined') {
	// Check if the page has been reloaded before
	const hasReloaded = sessionStorage.getItem('hasReloaded');
  
	if (!hasReloaded) {
	  // If not reloaded before, wait for 2 seconds and then reload the page
	  setTimeout(() => {
		location.reload(true);
  
		// Set a flag in sessionStorage indicating that the page has been reloaded
		sessionStorage.setItem('hasReloaded', 'true');
	  }, 1000);
	}
  
	// Reset the flag when navigating to a new page
	window.addEventListener('beforeunload', () => {
	  sessionStorage.removeItem('hasReloaded');
	});
  }