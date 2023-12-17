<script>
  import EnquiryForm from "../../components/EnquiryForm.svelte";

    let cmsSections = [
        { title: "Joomla Development", description: "Crafting dynamic and feature-rich websites using the powerful Joomla CMS platform." },
        { title: "Shopify Solutions", description: "Building scalable and visually stunning online stores with customized Shopify development." },
        { title: "Opencart Expertise", description: "Providing comprehensive Opencart solutions for seamless e-commerce experiences." },
    ];
</script>




<div class="inside-hero-three bg-color">
    <img src="images/shape/shape_35.svg" alt="" class="shapes shape-one">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="page-title font-recoleta">Unlock Your Potential with <span>Bumble Bees</span> CMS Solutions</h2>
            </div>
            <div class="col-xxl-5 col-md-6 ms-auto">
                <!-- Replace the following with your own introductory content -->
                <p>Elevate your digital presence with Bumble Bees CMS solutions tailored for your business needs. Discover the power of Joomla, Shopify, and Opencart in transforming your online experience.</p>
            </div>
        </div>
    </div>
</div>


<div class="vcamp-text-block-thirteen pt-150 mb-130 lg-pt-100 lg-mb-80">
    <div class="container">
        <div class="img-media mb-80 lg-mb-40"><img src="images/cms.png" alt="" class="w-100"></div>
        <div class="row mb-40">
            <div class="col-lg-12">
                <!-- Replace the following with your introductory content -->
                <p class="lead">Explore the power of CMS with Bumble Bees IT Solutions, your partner in crafting dynamic online experiences. Discover why businesses choose us for their CMS needs.</p>
            </div>
        </div>

        <!-- Why Choose Bumble Bees IT Solutions -->
        <div class="row mt-5">
            <div class="col-lg-6">
            
                <ul class="ui-list-item-one style-none">
                    <!-- Replace the following with your specific points -->
                    <li><strong>Expertise:</strong> Years of experience crafting powerful CMS solutions.</li>
                    <li><strong>Innovation:</strong> Creative solutions that make your website stand out.</li>
                    <li><strong>Client-Centric Approach:</strong> Your goals are our priority.</li>
                </ul>
            </div>
            <div class="col-lg-6">
               
                <ul class="ui-list-item-one style-none">
                    <!-- Replace the following with your specific CMS services -->
                    <li><strong>Bespoke Design:</strong> Tailored web designs reflecting your brand identity.</li>
                    <li><strong>Advanced Functionality:</strong> Cutting-edge features for seamless user experiences.</li>
                    <li><strong>Responsive Development:</strong> Stunning websites functioning flawlessly across all devices.</li>
                </ul>
            </div>
        </div>

        <!-- Additional Information -->
        <div class="row mt-5">
            <div class="col-lg-12">
                <!-- Replace the following with your closing statement -->
                <p>Choose Bumble Bees IT Solutions for CMS excellence. Ready to redefine your digital presence? Contact us today.</p>
            </div>
        </div>
    </div>
</div>



<div class="vcamp-feature-section-seven mt-70">
    <div class="container">
        <div class="row">
            <div class="col-xxl-7 col-xl-8 col-lg-6 col-md-8 m-auto aos-init aos-animate" data-aos="fade-up">
                <div class="title-style-one text-center">
                    <h2 class="title">Powerful CMS Solutions  <span>by Bumble Bees</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="box-layout mt-40 lg-mt-10">
        <div class="row">
          <div class="col-xxl-11 m-auto">
            <div class="row">
                {#each cmsSections as { title, description } (title)}
                        <div class="col-md-4 col-sm-6 d-flex mt-45 aos-init aos-animate" data-aos="fade-up">
                            <div class="card-style-seven">
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
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