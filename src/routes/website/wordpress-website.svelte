<svelte:head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bumble Bees IT Solutions: Expert WordPress Website Development for Your Business Success</title>
<meta name="description" content="Unlock the potential of your business with Bumble Bees IT Solutions. We specialize in creating powerful WordPress websites tailored to your needs.">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
</svelte:head>

<script>
    import EnquiryForm from "../../components/EnquiryForm.svelte";
  
      let wordpressSections = [
          { title: "Custom WordPress Themes", description: "Crafting unique and visually appealing WordPress themes tailored to your brand." },
          { title: "Plugin Development", description: "Creating custom plugins to enhance functionality and meet specific business requirements." },
          { title: "WordPress Maintenance", description: "Providing ongoing support and maintenance to ensure your WordPress website runs smoothly." },
      ];

      let logos = [

"https://wpsso.com/wp-content/uploads/2019/03/woocommerce-logo-1200x1200.png",
"https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
"https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
"https://upload.wikimedia.org/wikipedia/commons/3/3d/Square%2C_Inc._logo.svg",
"https://wpengine.com/solution-center/wp-content/uploads/wprocket-1544x500.png",
"https://upload.wikimedia.org/wikipedia/commons/a/ac/Semrush_logo.svg",
"https://historichawaii.org/wp-content/plugins/wp-mail-smtp/assets/images/reports/email/wp-mail-smtp-logo.png",
"https://www.thebpmfestival.com/wp-content/plugins/wordfence/images/logo.png",

    ];
  </script>
  
  <div class="inside-hero-three bg-color">
      <img src="images/shape/shape_35.svg" alt="" class="shapes shape-one">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h2 class="page-title font-recoleta">Empower Your Online Presence with <span>Bumble Bees</span> WordPress Solutions</h2>
              </div>
              <div class="col-xxl-5 col-md-6 ms-auto">
                  <!-- Replace the following with your own introductory content -->
                  <p>Transform your digital presence with Bumble Bees WordPress solutions, designed to elevate your website's performance and user experience.</p>
              </div>
          </div>
      </div>
  </div>
  
  <!-- Section for showcasing WordPress services -->
  <div class="vcamp-text-block-thirteen pt-150 mb-130 lg-pt-100 lg-mb-80">
      <div class="container">
          <div class="img-media mb-80 lg-mb-40"><img src="images/wordpress.png" alt="" class="w-100"></div>
          <div class="row mb-40">
              <div class="col-lg-12">
                  <!-- Replace the following with your introductory content -->
                  <p class="lead">Explore the capabilities of WordPress with Bumble Bees IT Solutions, your go-to partner for crafting dynamic and functional WordPress websites.</p>
              </div>
          </div>
  
          <!-- Why Choose Bumble Bees IT Solutions for WordPress -->
          <div class="row mt-5">
              <div class="col-lg-6">
             
                  <ul class="ui-list-item-one style-none">
                      <!-- Replace the following with your specific points -->
                      <li><strong>Expertise:</strong> Specialized in creating custom WordPress themes.</li>
                      <li><strong>Innovation:</strong> Developing unique plugins for enhanced functionality.</li>
                      <li><strong>Ongoing Support:</strong> Providing maintenance to ensure optimal performance.</li>
                  </ul>
              </div>
              <div class="col-lg-6">
             
                  <ul class="ui-list-item-one style-none">
                      <!-- Replace the following with your specific WordPress services -->
                      <li><strong>Custom Themes:</strong> Tailored designs reflecting your brand identity.</li>
                      <li><strong>Plugin Development:</strong> Custom plugins for unique functionality.</li>
                      <li><strong>Maintenance:</strong> Ongoing support for a seamless WordPress experience.</li>
                  </ul>
              </div>
          </div>
  
          <!-- Additional Information -->
          <div class="row mt-5">
              <div class="col-lg-12">
                  <!-- Replace the following with your closing statement -->
                  <p>Choose Bumble Bees IT Solutions for WordPress excellence. Ready to enhance your online presence? Contact us today.</p>
              </div>
          </div>
      </div>
  </div>


  <div class="partner-section-two pt-180 mb-200 lg-pt-50 lg-mb-100">
    <img src="images/shape/shape_13.svg" alt="" class="shapes shape-one">
    <div class="container">
      <div class="row">
        <div class="col-xxl-7 col-xl-8 col-lg-6 col-md-8 col-sm-10 m-auto">
          <div class="title-style-one text-center">
            <div class="upper-title">In partners</div>
            <h2 class="title">WordPress <span>Trusted and Authorized </span> Collaborator</h2>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="partent-logos">
            <div class="row g-0">
              {#each logos as logo, index (index)}
                <div class="col-md-3 col-6">
                  <div class="logo d-flex align-items-center justify-content-center">
                    <a href="/"><img src={logo} style="height: auto;
                        padding: 0 1.8rem;
                        width: 15rem;" alt={`Logo ${index + 1}`} class="tran3s"></a>
                  </div>
                </div>
              {/each}
            </div>
          </div> <!-- /.partent-logos -->
        </div>
      </div>
    </div>
  </div>
  
  <!-- Section for showcasing individual WordPress services -->
  <div class="vcamp-feature-section-seven mt-70">
      <div class="container">
          <div class="row">
              <div class="col-xxl-7 col-xl-8 col-lg-6 col-md-8 m-auto aos-init aos-animate" data-aos="fade-up">
                  <div class="title-style-one text-center">
                      <h2 class="title">WordPress Excellence by <span>Bumble Bees</span></h2>
                  </div>
              </div>
          </div>
      </div>
      <div class="box-layout mt-40 lg-mt-10">
          <div class="row">
              {#each wordpressSections as { title, description } (title)}
                  <div class="col-md-4 col-sm-6 d-flex mt-45 aos-init aos-animate" data-aos="fade-up">
                      <div class="card-style-seven">
                          <h4>{title}</h4>
                          <p>{description}</p>
                      </div>
                  </div>
              {/each}
          </div>
      </div>
      <img src="images/shape/shape_36.svg" alt="" class="shapes shape-one">
      <img src="images/shape/shape_37.svg" alt="" class="shapes shape-two">
  </div>
  

  <EnquiryForm/>