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

<div class="pricing-section-alt">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="pricing-heading">Transparent Pricing</h2>
      <p class="pricing-subheading">Affordable packages tailored to your needs.</p>
    </div>

    <div class="row gy-5">
      {#each pricingPackages as pkg, i}
        <div class="col-lg-4 col-md-6">
          <div class="card pricing-card-alt">
            <div class="card-header">
              <h4 class="service-name">{pkg.service}</h4>
              <p class="service-description">{pkg.description}</p>
            </div>

            <div class="card-body">
              <div class="plan">
                <span class="label">Basic</span>
                <span class="amount">{pkg.basic}</span>
              </div>
              <div class="plan highlight">
                <span class="label">Standard</span>
                <span class="amount">{pkg.standard}</span>
              </div>
              <div class="plan">
                <span class="label">Premium</span>
                <span class="amount">{pkg.premium}</span>
              </div>
            </div>

            <div class="card-footer">
              <a href="/contact" class="btn-cta">Let's Talk</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  :root {
    --primary-color: #4f46e5;
    --light-bg: #f8f9fc;
    --card-shadow: rgba(0, 0, 0, 0.06);
    --highlight-bg: #eef2ff;
  }

  .pricing-section-alt {
    padding: 80px 0;
    background-color: var(--light-bg);
  }

  .pricing-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
  }

  .pricing-subheading {
    font-size: 1.1rem;
    color: #6b7280;
  }

  .pricing-card-alt {
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 6px 16px var(--card-shadow);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all 0.3s ease;
  }

  .pricing-card-alt:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  .card-header {
    padding: 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .service-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1f2937;
  }

  .service-description {
    font-size: 0.95rem;
    color: #6b7280;
  }

  .card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .plan {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: #f9fafb;
    color: #111827;
    font-weight: 500;
  }

  .plan.highlight {
    background-color: var(--highlight-bg);
    font-weight: 600;
    color: var(--primary-color);
  }

  .label {
    font-weight: 500;
  }

  .amount {
    font-weight: 700;
  }

  .card-footer {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #e5e7eb;
  }

  .btn-cta {
    display: inline-block;
    padding: 10px 24px;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--primary-color);
    color: white;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-cta:hover {
    background-color: #3730a3;
  }

  @media (max-width: 768px) {
    .plan {
      font-size: 0.9rem;
    }

    .pricing-heading {
      font-size: 2rem;
    }
  }
</style>
