<svelte:head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bumble Bees IT Solutions - Unveiling Our Identity and Expertise</title>
<meta name="description" content="Discover the essence of Bumble Bees IT Solutions. Who we are, what we stand for – your partner in tech innovation and excellence.">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
</svelte:head>

<script>


  import Cta from "../components/CTA.svelte";
import EnquiryForm from "../components/EnquiryForm.svelte";

  import Test from "../components/Test.svelte";

  import { onMount } from 'svelte';
  
  let name = '';
  let age = '';
  let number = '';
  let users = [];
  let editingUserId = null;

  // Fetch users data on component mount
  onMount(async () => {
    await fetchUsers();
  });

  async function updateUser() {
    const response = await fetch(`https://sample-mysql.onrender.com/api/users/${editingUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age: parseInt(age), number }),
    });

    // Check if the response status is ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error updating user: ${errorData.error}`);
    }

    const result = await response.json();
    console.log(result);

    // Reset the form fields and editingUserId after update
    name = '';
    age = '';
    number = '';
    editingUserId = null;

    // Refresh the users data after update
    await fetchUsers();
  }

  async function handleSubmit() {
    if (editingUserId) {
      // If editing, update the existing user
      await updateUser();
    } else {
      // If not editing, add a new user
      await addUser();
    }

    // Refresh the users data after submission
    await fetchUsers();

    // Optionally, reset the form fields after submission
    name = '';
    age = '';
    number = '';
    editingUserId = null;
  }

  async function addUser() {
    const response = await fetch('https://sample-mysql.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age: parseInt(age), number }),
    });

    const result = await response.json();
    console.log(result);
  }

  async function editUser(userId) {
    // Find the user by ID
    const userToEdit = users.find(user => user.id === userId);

    // Set the form fields with the existing data
    name = userToEdit.name;
    age = userToEdit.age;
    number = userToEdit.number;

    // Set the editingUserId to the selected user's ID
    editingUserId = userId;
  }

  async function deleteUser(userId) {
    // Implement the delete logic here
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const response = await fetch(`https://sample-mysql.onrender.com/api/users/${userId}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      console.log(result);

      // Refresh the users data after deletion
      await fetchUsers();
    }
  }

  async function fetchUsers() {
    const response = await fetch('https://sample-mysql.onrender.com/api/users');
    users = await response.json();
  }

</script>


<div class="inside-hero-one hero-spacing">
    <div class="container">
        <h2 class="page-title font-recoleta">Our Inspiring Story</h2>
        <p>Elevate your web development experience with Bumble Bees</p>
    </div>
</div>


<div class="vcamp-text-block-five mt-170 lg-mt-120">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xxl-6 col-xl-7 col-lg-5">
                <div class="text-wrapper">
                    <div class="title-style-five">
                        <div class="upper-title">About us</div>
                        <h2 class="title">Empowering Growth Through IT Solutions</h2>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-6 ms-auto">
                <div class="accordion accordion-style-one md-mt-40" id="accordionOne">
                    <div class="accordion-item">
                        <div class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Who we are?
                            </button>
                        </div>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOne" style="">
                            <div class="accordion-body">
                                <p>Bumble Bees IT Solutions, founded in 2020 in Tamil Nadu, India, is dedicated to providing web solutions that foster success for our clients and team. With extensive experience, we're committed to delivering excellent support and solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What’s our goal?
                            </button>
                        </div>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne" style="">
                            <div class="accordion-body">
                                <p>Our goal at Bumble Bees IT Solutions is to continually evolve our expertise and provide outstanding services to our customers. We are dedicated to contributing to the success of our clients by delivering high-quality web solutions tailored to their unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Our vision
                            </button>
                        </div>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOne" style="">
                            <div class="accordion-body">
                                <p>Driven by our founders' vision and commitment, Bumble Bees IT Solutions aims to be a leading force in the IT industry, providing innovative and reliable solutions. We aspire to be the go-to partner for businesses seeking growth through cutting-edge technology and digital strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="vcamp-text-block-one mt-200 lg-mt-120">
    <div class="container">
        <div class="row">
            <div class="col-xxl-5 col-lg-6 ms-auto order-lg-last aos-init aos-animate" data-aos="fade-left">
                <div class="text-wrapper pt-0">
                    
                    <div class="title-style-two">
                        <h3 class="title">Bumble Bees IT Solutions - Transforming Solutions Globally</h3>
                    </div>

                    <p class="mt-3">Empowering Growth Through IT Solutions - Driving success and prosperity by providing innovative and tailored technology solutions</p>
                    
                </div>
            </div>
            <div class="col-xxl-6 col-lg-6 aos-init aos-animate" data-aos="fade-right">
                <div class="img-container position-relative">
                    <img src="images/media/img_40.jpg" alt="" class="ceo-avatar">
                    <div class="quote-wrapper">
                        <img src="images/icon/icon_10.svg" alt="" class="icon">
                        <blockquote>Our partnership with Bumble Bees IT Solutions has been transformative. Their support has been instrumental in solving every challenge.</blockquote>
                        <h6 class="name">Raghavan Jeeva (Business Development Executive).</h6>
                    </div> <!-- /.quote-wrapper -->
                </div>
            </div>
        </div>
    </div>
    <img src="images/shape/shape_05.svg" alt="" class="shapes shape-two">
</div>

<div class="partner-section-three mb-100 mt-200 lg-mt-120">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-5 col-lg-4 col-md-8">
                <div class="title-style-one">
                    <h2 class="title">Our best <span>Clients</span> for the long run.</h2>
                </div>
            </div>

            <div class="col-xl-6 col-lg-7 ms-auto">
                <p class="info-text">In the last four years, we've developed over <span>38+</span> stunning and high-quality Project.</p>
                <div class="row">
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img src="images/EGSPJ-International-School-Nagapattinam-Logo.png" alt="EGSPJ INT School" class="tran3s"></a></div>
                    </div>
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img src="images/GoGreenColor.webp" alt="GoGreen" class="tran3s"></a></div>
                    </div>
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img src="https://q3carcare.netlify.app/Logo/Q3%20-BLB%20BG.png" alt="Q3CareCare" class="tran3s"></a></div>
                    </div>
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/adhitya-builders.appspot.com/o/Assets%2FLogo%2Flogo.png?alt=media&token=0ff9ca9a-a9a5-4eaa-b679-266a39141a31" alt="AD Builders" class="tran3s"></a></div>
                    </div>
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img style="background-color: #222d35; padding: 0.5rem; " src="https://andavarcon.edu.in/images/logo-white.svg" alt="" class="tran3s"></a></div>
                    </div>
                    <div class="col-sm-4 col-6">
                        <div class="logo d-flex align-items-center"><a href="/"><img src="https://sarkconstruction.netlify.app/img/Sark-black.svg" alt="" class="tran3s"></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Test/>
<EnquiryForm/>
<Cta/>


