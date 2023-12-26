<svelte:head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bumble Bees IT Solutions - Transforming Ideas into Reality for Your Tech Excellence</title>
<meta name="description" content="Discover seamless IT solutions with Bumble Bees in Chennai. From troubleshooting to innovations, we've got your tech covered! ">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
</svelte:head>

<script>
  import Cta from "../components/CTA.svelte";
  import EnquiryForm from "../components/EnquiryForm.svelte";
import Loader from "../components/Loader.svelte";
  import Test from "../components/Test.svelte";

  let heroHeading = "Empowering Your Ideas with Us";
  let heroSubHeading =
    "Transforming your concepts into reality, Bumble Bees IT Solutions is your dedicated partner for innovative and tailored IT solutions.";

  let services = [
    {
      icon: "images/icon/icon_25.svg",
      title: "Design",
      description:
        "Crafting innovative and visually stunning designs that elevate user experiences. From conceptualization to the digital realm, our designs leave a lasting impression.",
    },
    {
      icon: "images/icon/icon_24.svg",
      title: "Development",
      description:
        "Building the foundation for seamless digital experiences. Our development process ensures fluidity in user interactions and efficient navigation.",
    },
    {
      icon: "images/icon/icon_26.svg",
      title: "Marketing",
      description:
        "Empowering businesses with comprehensive digital marketing solutions. Take command of your digital presence with our strategic and effective marketing approaches.",
    },
  ];

  let whyChooseUs = {
    upperTitle: " ",
    title: "We solve your Problem.",
  };

  let bumbleBeesContent = {
    startupInfo:
      "We're a startup from India helping small and medium businesses save money with smart solutions.",
    partnershipInfo: "We team up with great founders for shared success.",
  };

  let featureSectionContent = {
    title: `We turn your ideas into successful real businesses`,

    cards: [
      { image: "images/assets/ils_08.png", heading: "Build like a co-founder" },
      { image: "images/assets/ils_09.png", heading: "Investing as a Partner" },
      { image: "images/assets/ils_10.png", heading: "Work for our company" },
    ],
  };


</script>

<style>
   @media (min-width: 576px) { 

    .h1of{
      font-size: 85px !important;
    }

    }
</style>


<div class="hero-banner-five mt-225 md-mt-150">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 ms-auto">
        <h1 class="hero-heading h1of" >{heroHeading}</h1>
        <p class="hero-sub-heading text-lg">{heroSubHeading}</p>
      </div>
    </div>
  </div>
  <div class="illustration-container">
    <img src="images/assets/ils_04.svg" alt="" />
  </div>
</div>

<div class="vcamp-text-block-eleven mt-140 lg-mt-120">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="title-style-nine">
          <div class="upper-title">{whyChooseUs.upperTitle}</div>
          <h2 class="title">{whyChooseUs.title}</h2>
        </div>
      </div>
      <div class="col-lg-5 ms-auto">
        <!-- <p class="meta-info-text md-pt-30">{bumbleBeesContent.startupInfo}</p> -->
        <p class="meta-info-text">{bumbleBeesContent.partnershipInfo}</p>
      </div>
    </div>
  </div>
</div>

<div class="vcamp-text-block-three dark-bg mt-150 p0">
  <div class="pt-150 pb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 ms-auto order-md-last">
          <div class="text-wrapper">
            <h6>Over <span class="counter">30</span>+ Client</h6>
            <p>
              We created over <span>38+</span> stunning &amp; quality products over
              last 4 year with satisfaction.
            </p>
            <div class="name position-relative">
              Raghavan Jeeva (Lead Development Executive).
            </div>
          </div>
        </div>
        <div class="col-md-6 text-md-start text-center">
          <div class="img-container position-relative d-inline-block sm-mt-50">
            <img src="images/media/img_22.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-100 lg-mt-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 pe-xl-5 text-lg-end text-start">
            <div class="counter-block">
              <div class="main-count"><span class="counter">30</span>+</div>
              <p>Client's</p>
            </div>
            <div class="counter-block">
              <div class="main-count">
                <span class="counter">38</span>+ Projects
              </div>
              <p>40 avg rating</p>
            </div>
          </div>
          <div class="col-lg-4 ps-xxl-3">
            <div class="text-block">
              <h4>Who we are?</h4>
              <p>
                Empowering success through IT solutions. Bumble Bees, since
                2020, delivers excellence in web solutions for clients and team
                prosperity.
              </p>
              <p></p>
            </div>
            <!-- /.text-block -->
          </div>
          <div class="col-lg-4 ps-xxl-5">
            <div class="text-block">
              <h4>Our Goal</h4>
              <p>
                We're a startup from India helping small and medium businesses
                save money with smart solutions. We team up with great founders
                for shared success.
              </p>
            </div>
            <!-- /.text-block -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vcamp-feature-section-three mt-200 lg-mt-120">
  <div class="container">
    <div class="row align-items-center mb-40 md-mb-20">
      <div
        class="col-lg-5 col-md-6 col-sm-8 aos-init aos-animate"
        data-aos="fade-right"
      >
        <div class="title-style-five">
          <h2 class="title">Digital Design Services.</h2>
        </div>
      </div>
      <div
        class="col-md-6 col-sm-4 me-auto text-sm-end text-start aos-init aos-animate"
        data-aos="fade-left"
      >
        <a href="/" class="theme-btn-five position-relative xs-mt-30"
          >See all Services</a
        >
      </div>
    </div>

    <div class="row gx-xl-5 justify-content-between">
      {#each services as { icon, title, description }}
        <div class="col-md-4 col-sm-6 aos-init aos-animate" data-aos="fade-up">
          <div class="card-style-three mt-50">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src={icon} alt="" class="tran3s" />
            </div>
            <h4 class="title">{title}</h4>
            <p>{description}</p>
          </div>
          <!-- /.card-style-three -->
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="vcamp-feature-section-nine pt-170 lg-pt-120" id="about">
  <div class="container">
    <div class="title-style-seven text-center pb-60 lg-pb-20">
      <h2 class="title">
        {@html featureSectionContent.title}
      </h2>
    </div>

    <div class="row">
      {#each featureSectionContent.cards as { image, heading } (image)}
        <div class="col-lg-4 col-sm-6 aos-init" data-aos="fade-up">
          <div class="card-style-nine mt-40">
            <div
              class="img-holder d-flex align-items-center justify-content-center"
            >
              <img src={image} alt="" />
            </div>
            <h3>{heading}</h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="counter-section-one mt-170 lg-mt-120">
  <div class="inner-container">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="counter-block-one text-center mb-45">
          <div class="main-count font-recoleta">
            <span class="counter">40</span>+
          </div>
          <p class="theme-mb-0">Project done successfully</p>
        </div>
        <!-- /.counter-block-one -->
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="counter-block-one text-center mb-45">
          <div class="main-count font-recoleta">
            <span class="counter">35</span>+
          </div>
          <p class="theme-mb-0">Happy clients</p>
        </div>
        <!-- /.counter-block-one -->
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="counter-block-one text-center mb-45">
          <div class="main-count font-recoleta">
            <span class="counter">10</span>+
          </div>
          <p class="theme-mb-0">Teams</p>
        </div>
        <!-- /.counter-block-one -->
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="counter-block-one text-center mb-45">
          <div class="main-count font-recoleta">
            <span class="counter">24</span>/7
          </div>
          <p class="theme-mb-0">Customer Support</p>
        </div>
        <!-- /.counter-block-one -->
      </div>
    </div>
  </div>
</div>


  
<Test/>



<EnquiryForm/>

<Cta/>