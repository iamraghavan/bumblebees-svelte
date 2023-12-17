<script>
  import EnquiryForm from "../../components/EnquiryForm.svelte";

    let sections = [
      { title: "Custom Web Development", description: "Crafting tailored web solutions to meet your unique business needs." },
      { title: "Dynamic Content Management", description: "Empowering your website with a user-friendly CMS for easy content updates." },
      { title: "Responsive Design", description: "Ensuring your website looks stunning and functions seamlessly across all devices." },
    ];
  </script>



<div class="inside-hero-three bg-color">
    <img src="images/shape/shape_35.svg" alt="" class="shapes shape-one">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="page-title font-recoleta">Unlock Your Potential with<span>Bumble Bees</span> IT Solutions</h2>
            </div>
            <div class="col-xxl-5 col-md-6 ms-auto">
                <p>At Bumble Bees IT Solutions, we specialize in creating dynamic websites that go beyond the ordinary. Here's why we stand out.</p>
            </div>
        </div>
    </div>
</div>

<div class="vcamp-text-block-thirteen pt-150 mb-130 lg-pt-100 lg-mb-80">
    <div class="container">
        <div class="img-media mb-80 lg-mb-40"><img src="images/website-dy.png" alt="" class="w-100"></div>
        <div class="row mb-40">
            <div class="col-lg-12">
                <p class="lead">Elevate your online presence with Bumble Bees IT Solutions, the dynamic website development experts. Our commitment goes beyond mere websites; we create digital experiences that leave a lasting impression.</p>
            </div>
        </div>

        <!-- Why Choose Bumble Bees IT Solutions -->
        <div class="row mt-5">
            <div class="col-lg-6">
               
                <ul class="ui-list-item-one style-none">
                    <li><strong>Expertise:</strong> With years of experience, we excel in crafting dynamic websites that meet your unique business needs.</li>
                    <li><strong>Innovation:</strong> Our team thrives on innovation, ensuring your website stands out with creative solutions.</li>
                    <li><strong>Client-Centric Approach:</strong> Your goals are our goals. We work closely with you to understand your vision and deliver beyond expectations.</li>
                </ul>
            </div>
            <div class="col-lg-6">
            
                <ul class="ui-list-item-one style-none">
                    <li><strong>Bespoke Design:</strong> Tailored web designs that reflect your brand identity and engage your audience.</li>
                    <li><strong>Advanced Functionality:</strong> Implementing cutting-edge features and technologies for seamless user experiences.</li>
                    <li><strong>Responsive Development:</strong> Ensuring your website looks stunning and functions flawlessly across all devices.</li>
                </ul>
            </div>
        </div>

        <!-- Additional Information -->
        <div class="row mt-5">
            <div class="col-lg-12">
                <p>Partner with Bumble Bees IT Solutions for dynamic websites that not only meet the standards but redefine them. Ready to embark on a journey of digital excellence? Contact us today.</p>
            </div>
        </div>
    </div>
</div>


<div class="vcamp-feature-section-seven mt-70">
    <div class="container">
        <div class="row">
            <div class="col-xxl-7 col-xl-8 col-lg-6 col-md-8 m-auto aos-init aos-animate" data-aos="fade-up">
                <div class="title-style-one text-center">
                    <h2 class="title">Let's build your online  <span>success together!</span></h2>
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