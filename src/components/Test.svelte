<script>

  let testimonials = [
    {
      name: "Mohamed Ishaq Syed",
      company: "Bench Mark Builder",
      location: "Chennai",
	  testimonialsContent : "Bumble Bees IT Solutions exceeded our expectations with their innovative solutions and prompt service. A reliable partner for our technological needs!"
    },
    {
      name: "Nivethaidha",
      company: "Vaibhaav LLC",
      location: "USA (Denver)",
	  testimonialsContent : "Impressed by the professionalism and expertise of Bumble Bees IT Solutions. They transformed our ideas into seamless digital experiences. Highly recommended!"
    },
    {
      name: "Priya Thirumalainambi",
      company: "GoGreen LLC",
      location: "USA (Denver)",
	  testimonialsContent : "Exceptional service from Bumble Bees IT Solutions! Their team's dedication and technical prowess made our project a success. Thank you!"
    },
    {
      name: "Sathish Kotti",
      company: "Sri Thiruthani Builders and Foundation",
      location: "Chennai",
	  testimonialsContent : "Raghavan is a visionary leader with a passion for driving positive change. His strategic insights and commitment to excellence have made a lasting impact in the tech industry."
    },
  ];

</script>


<div class="feedback-section-ten dark-bg mt-150 lg-mt-120 pb-5">
	<div class="container">
	  <div class="row">
		<div class="col-xxl-10 col-xl-11 m-auto">
		  <div class="row">
			{#each testimonials as { name, company, location, testimonialsContent } (name)}
			  <div class="col-sm-6">
				<div class="testimonial-block-one mb-40">
				  <!-- <div class="icon d-flex align-items-center justify-content-center">
					<img src="images/icon/icon_15.svg" alt="">
				  </div> -->
				 
				  <blockquote>
					{testimonialsContent}
				  </blockquote>
				  <div class="name">{name} <span>{company} - {location}</span></div>
				</div> <!-- /.testimonial-block-one -->
			  </div>
			{/each}
		  </div>
		</div>
		
	  </div> <!-- /.row -->
	</div> <!-- /.container -->
  </div>