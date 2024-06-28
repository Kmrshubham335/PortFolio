import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <div className={styles.container}>
      <a href="mailto:shubhamkumar01924@gmail.com">
        <button className={styles.contactButton}>
          Get in Touch
        </button>
      </a>
    </div>
  );
}

export default Contact;
