import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});


// src/client.js

if (typeof window !== 'undefined') {
  // Check if the page has been refreshed before
  const hasRefreshed = sessionStorage.getItem('hasRefreshed');

  if (!hasRefreshed) {
    // If not refreshed before, refresh the page
    location.reload(true);

    // Set a flag in sessionStorage indicating that the page has been refreshed
    sessionStorage.setItem('hasRefreshed', 'true');
  }
}