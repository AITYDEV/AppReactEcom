import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <h2>Contactez-Nous.</h2>
      <div className={style.container}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.3415861265908!2d-8.04544182340502!3d31.597098643345547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe9240e9a11f5%3A0xe91c698fc0bc190!2sEXCEL%20MHAMID!5e0!3m2!1sfr!2sma!4v1771501323074!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className={style.form}>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message ..." rows="5" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
