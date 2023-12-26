<svelte:head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bumble Bees IT Solutions: Empowering Your Success with Innovative Landing Page Designs</title>
<meta name="description" content="Elevate your online presence with Bumble Bees IT Solutions. Expertly crafted landing pages for a seamless user experience. Drive success today!">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
</svelte:head>

<script>

    import EnquiryForm from "../../components/EnquiryForm.svelte";

    let sections = [
      { title: "Landing Page Boosts Business", description: "Elevate your powerful online presence for long-term success with our expert landing web design in Chennai." },
      { title: "Maximize ROI with Web Design", description: "Elevate your business impact by investing in a strategic web design tailored for optimal results." },
      { title: "Digital Success Through Design", description: "Achieve lasting business goals with our Chennai-based web design expertise for effective online engagement." },

    ];

    
    let logos = [

    "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
    "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png",
    "https://miro.medium.com/v2/resize:fit:720/format:webp/0*lPloL8w-ZKtjxeB5.png",
    "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",
    

    ];
  </script>

<div class="inside-hero-three bg-color">
    <img src="images/shape/shape_35.svg" alt="" class="shapes shape-one">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="page-title font-recoleta">We understand<span>your importance </span></h2>
            </div>
            <div class="col-xxl-5 col-md-6 ms-auto">
                <p>Transform your online presence with innovative landing page development solutions crafted by our expert team. Our goal is to simplify the online experience for you and your visitors.</p>
            </div>
        </div>
    </div>
</div>

<div class="vcamp-text-block-thirteen pt-150 mb-130 lg-pt-100 lg-mb-80">
    <div class="container">
        <div class="img-media mb-80 lg-mb-40"><img src="images/landing-page.png" alt="" class="w-100"></div>
        <div class="row">
            <div class="col-lg-6">
                <ul class="ui-list-item-one style-none">
                    <li>Brief company overview</li>
        <li>Unique selling points (USP) of your product or service</li>
        <li>Visitor expectations from your business</li>
                </ul>
            </div>
            <div class="col-lg-6">
                <ul class="ui-list-item-one style-none">
                    <li>Creative titles to match PPC titles</li>
        <li>Call-to-action buttons & Testimonials </li>
        <li>Contact form & Privacy policies</li>
                </ul>
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
          <h2 class="title">Our <span>Trusted and Authorized </span> Technology Collaborator</h2>
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

<div class="vcamp-feature-section-seven mt-70">
    <div class="container">
        <div class="row">
            <div class="col-xxl-7 col-xl-8 col-lg-6 col-md-8 m-auto aos-init aos-animate" data-aos="fade-up">
                <div class="title-style-one text-center">
                    <h2 class="title">Customized Landing <span> Page Solutions</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="box-layout mt-40 lg-mt-10">
        <div class="row">
          <div class="col-xxl-11 m-auto">
            <div class="row">
              {#each sections as { title, description } (title)}
                <div class="col-md-4 col-sm-6 d-flex mt-45 aos-init aos-animate" data-aos="fade-up">
                  <div class="card-style-seven">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div> <!-- /.card-style-seven -->
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    <img src="images/shape/shape_36.svg" alt="" class="shapes shape-one">
    <img src="images/shape/shape_37.svg" alt="" class="shapes shape-two">
</div>


<EnquiryForm/>