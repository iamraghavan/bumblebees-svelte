<svelte:head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contact Us - Bumble Bees IT Solutions - Connect with Excellence</title>
<meta name="description" content="Reach out to Bumble Bees IT Solutions for personalized tech services. Let's shape your success together. Contact us now!">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
</svelte:head>

<script>

import emailjs from 'emailjs-com';
  import Swal from 'sweetalert2';

  let firstName = '';
  let lastName = '';
  let phone = '';
  let email = '';
  let message = '';

  const handleSubmit = async () => {
    const data = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };

    try {
      const response = await emailjs.send('service_oz7fhvm', 'template_lgkftv9', data, 'pJwMrOQHE7viiRAtn');
      
      if (response.status === 200) {
        // Use SweetAlert for success
        Swal.fire({
          icon: 'success',
          title: 'Email sent successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // Use SweetAlert for failure
        Swal.fire({
          icon: 'error',
          title: 'Failed to send email',
          text: 'Please try again.',
        });
        console.error('Failed to send email:', response);
      }
    } catch (error) {
      // Use SweetAlert for error
      Swal.fire({
        icon: 'error',
        title: 'Error sending email',
        text: 'An error occurred. Please try again later.',
      });
      console.error('Error sending email:', error);
    }
  };

    let a = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.95375547503!2d79.7500019072146!3d10.79945309398845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e20bdc4bfed073%3A0x7fca72dab56ace1e!2sBumble%20Bees%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1702625808604!5m2!1sen!2sin";
</script>

<div class="inside-hero-one hero-spacing">
    <div class="container">
        <h2 class="page-title font-recoleta">Get in Touch</h2>
        <p>Talk to Our Sales & Marketing Team</p>
    </div>
</div>


<div class="contact-section-four mt-120 lg-mt-100">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt=""></div>
                    <h5 class="title">Our Address</h5>
                    <p>No: 2 Dhermer Street, Collector Office (Pt)
                        <br>Nagapattinam, Tamil Nadu - 611003</p>
                </div> <!-- /.address-block-one -->
            </div>
            <div class="col-md-4">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt=""></div>
                    <h5 class="title">Contact Info</h5>
                    <p>Open a chat or give us call at <br><a href="tel:+919942502245" class="call">(+91) 99425 02245</a></p>
                </div> <!-- /.address-block-one -->
            </div>
            <div class="col-md-4">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt=""></div>
                    <h5 class="title">Live Support</h5>
                    <p>live chat service <br><a href="/" class="webaddress">www.bumblebees.co.in/chat/whatsapp</a></p>
                </div> <!-- /.address-block-one -->
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-xl-11 m-auto">
                <div class="form-style-one">
                    <form action="" id="contact-form" data-toggle="validator" novalidate="true">
                        <div class="messages"></div>
                        <div class="row controls">
                            <div class="col-sm-6">
                                <div class="input-group-meta form-group mb-25">
                                    <label for="">First Name*</label>
                                    <input type="text" placeholder="Rashed" name="name" required="required" data-error="Name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group-meta form-group mb-25">
                                    <label for="">Last Name*</label>
                                    <input type="text" placeholder="Kabir" name="Lname" required="required" data-error="Name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group-meta form-group mb-25">
                                    <label for="">Phone*</label>
                                    <div class="intl-tel-input allow-dropdown">
                                        <div class="flag-container">
                                           

                                            <div class="selected-flag" role="combobox" aria-owns="country-listbox" aria-controls="country-listbox" aria-expanded="false" tabindex="0" title="India: +91">
                                                <div class="iti-flag in"></div>
                                                <!-- <div class="iti-arrow"></div> -->
                                            </div>
                                             <ul class="country-list hide" id="country-listbox" aria-expanded="false" role="listbox" aria-activedescendant="iti-item-us" tabindex="0">
                                                <li class="country" id="iti-item-in" role="option" data-dial-code="91" data-country-code="in" aria-selected="false">
                                                    <div class="flag-box">
                                                        <div class="iti-flag in"></div>
                                                    </div>
                                                    <span class="country-name">India (भारत)</span><span class="dial-code">+91</span>
                                                </li>
                                            </ul>
                                            
                                             </div><input id="phone" name="phone" placeholder="(+91) 924422-3822" type="tel" required="required" data-error="Phone is required." autocomplete="off"></div>

                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-group-meta form-group mb-40">
                                    <label for="">Email*</label>
                                    <input type="email" placeholder="rshdkabir@gmail.com" name="email" required="required" data-error="Valid email is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group-meta form-group mb-25">
                                    <input type="text" placeholder="Enter your Request / Message " name="Lname" required="required" data-error="Name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            
                        
                            <div class="col-12"><button class="theme-btn-one ripple-btn">Send Message</button></div>
                        </div>
                    </form>
                </div> <!-- /.form-style-one -->
            </div>
        </div>
    </div>

    <div class="map-area-one mt-150 mb-90 lg-mt-100 lg-mb-50">
        <div class="box-layout">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" src={a} title="Google Map"></iframe>

                </div>
            </div>
        </div>
    </div>
</div>