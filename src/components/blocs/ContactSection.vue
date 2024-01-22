<template>
    <section id="contact" class="contact">
      <div class="container">
        <TitleSection 
          title = "Contact"
          :paragraph = "paragraph"
        />
        <div class="row" data-aos="fade-in">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>ATO-078 BIS Ambohitrimanjaka</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>fandrianarisata2@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+261 34 84 765 91</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40455.008178658194!2d47.40351974302511!3d-18.84219941817866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fa7f936e7c42f9%3A0x27afb29a38cece5c!2sAmbatomainty!5e0!3m2!1sfr!2smg!4v1705654404790!5m2!1sfr!2smg" style="border:0; width: 100%; height: 290px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div v-show="isSend" id="error" v-html="error"></div>
              <div class="text-center"><button @click.prevent="sendEmailError" type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
</template>
<style scoped lang="scss">
  #error{
    background-color: rgb(209, 9, 9, 0.8);
    color : white;
    padding-left: 10px;
    margin-bottom: 25px;
  }
</style>
<script>
//import nodemailer from 'nodemailer';

import TitleSection from '@/components/elements/TitleSection.vue';

export default{
    components : {
      TitleSection
    },
    data(){
      return {
        person : {
          name : '',
          email : '',
          subject : '',
          message : ''
        },
        paragraph : `
          Get in touch with us through our Contact section to seamlessly connect and explore collaboration opportunities. We value open communication and are eager to hear from you. Whether you have inquiries about our services, want to discuss a potential project, or simply wish to say hello, our team is ready to assist. Fill out the form below, and we'll ensure a prompt response. Your feedback and inquiries are important to us, and we look forward to the opportunity to engage with you.
        `,
        isSend : false,
        error : 'The email sending service is not yet operational. Please send email to <a href="mailto:fandrianarisata2@gmail.com">fandrianarisata2@gmail.com</a>'
      }
    },
	methods: {
    
    sendEmailError(){
      this.isSend = true;
    }
	},
	mounted(){
		//this.sendEmail()
	}
}
</script>