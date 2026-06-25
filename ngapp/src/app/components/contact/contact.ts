import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact" id="contact">
      <h2 class="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

      <div class="container">
        <div class="content">
          <div class="image-box">
            <img draggable="false" src="assets/images/contact1.png" alt="Contact illustration" />
          </div>
          <form id="contact-form" (submit)="onSubmit($event)">
            <div class="form-group">
              <div class="field">
                <input type="text" name="name" placeholder="Name" aria-label="Name" required />
                <i class="fas fa-user"></i>
              </div>
              <div class="field">
                <input type="email" name="email" placeholder="Email" aria-label="Email" required />
                <i class="fas fa-envelope"></i>
              </div>
              <div class="field">
                <input type="text" name="phone" placeholder="Phone" aria-label="Phone" />
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="message">
                <textarea placeholder="Message" name="message" aria-label="Message" required></textarea>
                <i class="fas fa-comment-dots"></i>
              </div>
            </div>
            <div class="button-area">
              <button type="submit">Submit <i class="fa fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get('name') as string || '').trim();
    const email = (data.get('email') as string || '').trim();
    const phone = (data.get('phone') as string || '').trim();
    const message = (data.get('message') as string || '').trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:akhilnmuthyala@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  }
}
