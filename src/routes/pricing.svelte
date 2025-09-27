<script>
  let pricingPackages = [
    {
      service: "Website Development",
      basic: "₹15,000",
      standard: "₹30,000",
      premium: "₹50,000",
      description: "Develop a website tailored to your business, from basic to fully custom designs."
    },
    {
      service: "Landing Page",
      basic: "₹5,000",
      standard: "₹10,000",
      premium: "₹15,000",
      description: "Get a high-conversion landing page optimized for your marketing campaigns."
    },
    {
      service: "Dynamic Website",
      basic: "₹20,000",
      standard: "₹40,000",
      premium: "₹60,000",
      description: "A dynamic website with interactive elements and user-friendly interface."
    },
    {
      service: "WordPress Website",
      basic: "₹12,000",
      standard: "₹20,000",
      premium: "₹35,000",
      description: "Create a fully responsive and SEO-friendly WordPress website."
    },
    {
      service: "Joomla / Shopify / Opencart",
      basic: "₹10,000",
      standard: "₹20,000",
      premium: "₹30,000",
      description: "Build an e-commerce site using Joomla, Shopify, or Opencart."
    },
    {
      service: "Marketing",
      basic: "₹7,000",
      standard: "₹15,000",
      premium: "₹25,000",
      description: "Comprehensive digital marketing solutions for brand visibility and growth."
    },
    {
      service: "Social Media Manager",
      basic: "₹8,000/month",
      standard: "₹15,000/month",
      premium: "₹25,000/month",
      description: "Manage your brand’s social media presence with consistent and engaging content."
    },
    {
      service: "Social Media Marketing",
      basic: "₹5,000/month",
      standard: "₹12,000/month",
      premium: "₹20,000/month",
      description: "Run effective ad campaigns on platforms like Facebook, Instagram, and LinkedIn."
    },
    {
      service: "Search Engine Optimization (SEO)",
      basic: "₹10,000/month",
      standard: "₹20,000/month",
      premium: "₹35,000/month",
      description: "Improve your website’s visibility on search engines with expert SEO strategies."
    },
    {
      service: "Social Media Ads Design",
      basic: "₹5,000",
      standard: "₹12,000",
      premium: "₹20,000",
      description: "Create visually stunning ad designs for social media to boost engagement."
    }
  ];
</script>

<div class="pricing-section">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h2 class="section-title">Our Pricing Packages</h2>
        <p class="section-description">Choose a package that best suits your business needs. We offer flexible plans for all kinds of digital solutions.</p>
      </div>
    </div>
    
    <div class="row">
      {#each pricingPackages as { service, basic, standard, premium, description }}
        <div class="col-md-4">
          <div class="pricing-card">
            <h4 class="pricing-title">{service}</h4>
            <p class="pricing-description">{description}</p>
            
            <div class="pricing-plan">
              <div class="pricing-option">
                <h5>Basic</h5>
                <p class="price">{basic}</p>
              </div>
              <div class="pricing-option">
                <h5>Standard</h5>
                <p class="price">{standard}</p>
              </div>
              <div class="pricing-option">
                <h5>Premium</h5>
                <p class="price">{premium}</p>
              </div>
            </div>
            
            <a href="/contact" class="btn btn-primary">Contact Us</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .pricing-section {
    padding: 50px 0;
    background-color: #f9f9f9;
  }

  .section-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .section-description {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .pricing-card {
    background-color: white;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
  }

  .pricing-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .pricing-description {
    font-size: 16px;
    margin-bottom: 20px;
    color: #777;
  }

  .pricing-plan {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  .pricing-option {
    width: 30%;
  }

  .pricing-option h5 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .price {
    font-size: 22px;
    font-weight: bold;
    color: #007bff;
  }

  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>
