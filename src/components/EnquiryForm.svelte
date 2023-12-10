<script>
    import { onMount } from 'svelte';
    import emailjs from 'emailjs-com';
    import Swal from 'sweetalert2';

      
  
    let name = '';
    let email = '';
    let message = '';
    let contactNumber = '';
    let isWhatsapp ="";
    let whatsappNumber = '';
    let services = [];
    let recaptchaResponse = '';
let appointmentTime ="";

let appointmentDate= "";
  
    onMount(() => {
      emailjs.init('user_your_emailjs_user_id'); // Replace with your EmailJS user ID
    });
  
    const handleSubmit = async () => {
      if (!recaptchaResponse) {
        showError('Please complete the reCAPTCHA verification.');
        return;
      }
  
      try {
        // Send the form using EmailJS
        const templateParams = {
          name,
          email,
          message,
          contactNumber: whatsappNumber ? whatsappNumber : contactNumber,
          selectedServices: selectedServices.join(', '),
        };
  
        const response = await emailjs.send('default_service', 'template_your_emailjs_template_id', templateParams);
  
        // Show success message
        showSuccess('Message sent successfully!');
      } catch (error) {
        console.error('Failed to send:', error);
        showError('Failed to send the message. Please try again.');
      }
    };
  
    const showSuccess = (message) => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: message,
      });
    };
  
    const showError = (message) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
      });
    };
  </script>




<div class="contact-section-one box-layout mt-200 mb-80 lg-mt-130 sm-mb-40">
    <div class="bg-wrapper">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 order-lg-last ms-auto aos-init aos-animate" data-aos="fade-left">
                    <div class="contact-meta-one">
                        <div class="title-style-one">
                            <h2 class="title">Let’s talk <br>about your<span>project</span></h2>
                        </div>
                        <p class="text-lg">Talk to Our Sales & Marketing Team.</p>
                        <div class="help-text">For urgent help call us at</div>
                        <a href="tel:+919942502245" class="call-button">+(91) 9942 502 245</a>
                    </div> 
                </div>
                <div class="col-lg-6 order-lg-first aos-init aos-animate" data-aos="fade-right">
                    <div class="form-style-one md-mt-40">
                        <form id="contact-form" on:submit|preventDefault={handleSubmit}>
                            <div class="messages"></div>
                            <div class="input-group-meta form-group mb-25">
                              <label for="name">Name*</label>
                              <input type="text" id="name" placeholder="Raghavan Jeeva" bind:value={name} required data-error="Name is required." />
                            </div>
                            <div class="input-group-meta form-group mb-25">
                              <label for="email">Email*</label>
                              <input type="email" id="email" placeholder="yourmailid@example.com" bind:value={email} required data-error="Valid email is required." />
                            </div>
                            <div class="input-group-meta form-group mb-25">
                              <label for="contactNumber">Contact Number*</label>
                              <input type="tel" id="contactNumber" placeholder="Your Contact Number" bind:value={contactNumber} required data-error="Contact Number is required." />
                            </div>
                            
                            <div class="input-group-meta form-group mb-25">
                              <label for="appointmentTime">Appointment Time</label>
                              <input type="time" id="appointmentTime" bind:value={appointmentTime} />
                            </div>
                            <div class="input-group-meta form-group mb-25">
                              <label for="appointmentDate">Appointment Date</label>
                              <input type="date" id="appointmentDate" bind:value={appointmentDate} />
                            </div>
                            <div class="col-12"><button class="theme-btn-one ripple-btn w-100">Send Message</button></div>
                          </form>
                    </div> <!-- /.form-style-one -->
                </div>
            </div>
        </div>
    </div> <!-- /.bg-wrapper -->

    <div class="container mt-100 sm-mt-80">
        <div class="row">
            <div class="col-md-4 aos-init" data-aos="fade-up">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt=""></div>
                    <h5 class="title">Our Address</h5>
                    <p>No: 2 Dhermer Street, Collector Office (Pt)  <br>Nagapattinam, Tamil Nadu - 611003</p>
                </div> 
            </div>
            <div class="col-md-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt=""></div>
                    <h5 class="title">Contact Info</h5>
                    <p>Open a chat or give us call at <br><a href="tel:+919942502245">(+91) 9942 502 245</a> <br><a href="tel:+919344223822">(+91) 9344 223 822</a></p>
                </div> 
            </div>
            <div class="col-md-4 aos-init" data-aos="fade-up" data-aos-delay="200">
                <div class="address-block-one text-center mb-40">
                    <div class="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt=""></div>
                    <h5 class="title">Live Support</h5>
                    <p>live chat service <br><a href="/" class="webaddress">www.jsraghavan.me/contact</a></p>
                </div> 
            </div>
        </div>
    </div>
</div>


    



