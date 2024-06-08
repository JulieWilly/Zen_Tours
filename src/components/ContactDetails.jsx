const ContactDetails = ({
  twitter,
  facebook,
  instagram,
  linkedin,
  phone,
  email,
}) => {
  return (
    <>
      <div className="contacts">
        <div className="contacts_socials">
          <i>{twitter}</i>
          <i>{instagram}</i>
          <i>{facebook}</i>
          <i>{linkedin}</i>
        </div>
        <div className="phone_number">
          <div className="contact">
            <i>{phone}</i>
            <p>+254 114139590</p>
          </div>
          <div className="contact">
            <i>{email}</i>
            <p>wilfredmuchirekiama@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
