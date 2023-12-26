<script>
     const currentYear = new Date().getFullYear();


     let services = [
    { name: "Landing Page", path: "/website/landing-page" },
    { name: "Dynamic Website", path: "/website/dynamic-website" },
    { name: "WordPress Website", path: "/website/wordpress-website" },
    { name: "Joomla / Shopify / Opencart", path: "/website/cms" },
    { name: "Social Media Manager", path: "/marketing/social-media-manager" },
    { name: "Social Media Marketing", path: "/marketing/social-media-marketing" },
    { name: "Search Engine Optimization", path: "/marketing/search-engine-optimization" },
    { name: "Social Media Ads Design", path: "/production/social-media-ads-design" },
  ];

</script>

<style>





</style>
<footer class="vcamp-footer-two dark-footer pt-150 lg-pt-100">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-2 mb-40">
                <div class="logo"><a href="index.html"><img src="images/bbwhite.svg" style="padding: 0rem 1rem;" alt="Bumble Bees IT Solutions"></a></div>
                <div class="newsletter">
                    <p class="">
                        We Design Your Dreams with Care and Creativity
                   </p>
                </div>   
                
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 mb-40">
                <h5 class="title">Links</h5>
                <ul class="footer-list style-none">
                    <li><a href="/who-we-are">Our History</a></li>
                    <li><a href="/contact">Contact Our Team</a></li>
                    <li><a href="/career">Career / Internships</a></li>
        
                </ul>
                <h5 class="title" style="padding-top: 1.6rem;">Legal</h5>
                <ul class="footer-list style-none">
                    <li><a href="/legal/terms-and-condition">Terms &amp; Conditions</a></li>
                    <li><a href="/legal/privacy-policy">Privacy Policy</a></li>
                   
        
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 mb-40">
                <h5 class="title">Our Services</h5>
                <ul class="footer-list style-none">
                    {#each services as { name, path } (name)}
      <li><a href={path}>{name}</a></li>
    {/each}
                  </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-40">
                <h5 class="title">When Our Bee's Got Recognized</h5>
                <div class="row logos-container d-flex justify-content-center align-items-center">
                    <div class="col-6">
                        <img src="images/good-firms.png" alt="" srcset="">
                    </div>
                    <div class="col-6">
                        <img src="images/startup-india-logo1-02-500x500.webp" alt="" srcset="">
                    </div>
                    <div class="col-6">
                        <img src="https://seeklogo.com/images/G/google-partner-logo-2BA563BAC5-seeklogo.com.png" alt="" srcset="">
                    </div>
                    <div class="col-6">
                        <img src="images/aws-partner-network.png" alt="" srcset="">
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    <div class="container">
        <div class="bottom-footer">
            <div class="row">
                <div class="col-lg-4 order-lg-1 mb-15">
                    <ul class="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                        <li><a href="faqV1.html">Privacy &amp; Terms.</a></li>
                        <li><a href="contactV1.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 order-lg-3 mb-15">
                    <ul class="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                        <li><a href="https://www.facebook.com/bumblebeesindia"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/bumblebees_india/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/itzbumblebees/"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div class="col-lg-4 order-lg-2 mb-15">
                    <p class="copyright text-center">All Rights Received &copy; 2020 - {currentYear} <span style="color: #EDA73E;"> Bumble Bees </span> .</p>
                </div>
            </div>
        </div>
    </div>
</footer>