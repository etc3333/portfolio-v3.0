import '../../css/Contact.css';
import { useEffect} from 'react';

const Contact = () => {
/*   const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  }); */

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('pop-scale-animation');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      rootMargin: '-100px',
      threshold: .5 }
    );
    
    document.querySelectorAll('.observer-start-element').forEach(element => {
      observer.observe(element);
    });

  },[])

/*   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      email: '',
      company: '',
      description: ''
    });
  }; */

  return (
    <div id='contact-page-container'>
      <div className='title-container'>
        <h2>Contact</h2>
        <div className='banner-span'></div>
      </div>
      <div>
        <div id='contact-box-container' className='observer-start-element'>
          <h4>Sorry Using Github Pages for Hosting. Only Static Content Today :(</h4>
          <h3>
            Contact Info
          </h3>
          <div id='contact-table'>
            <div>Email</div>
            <div>ethan.chen10001@gmail.com</div>
            <div>Number</div>
            <div>(818) 251-6099</div>
            <div>Linkedin</div>
            <div>www.linkedin.com/in/ethan-chen-88649b229</div>
          </div>
        </div>
{/*         <div id='form-container' className='observer-start-element'>
          <form onSubmit={handleSubmit}>
            <div id='form-left-side-container'>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div id='contact-form-note-container'>
                <div>If you don&apos;t want to use contact form or it does not work properly you can reach out at</div>
                <div style={{marginTop: '5px', fontSize: '1.2rem', textDecoration: 'underline'}}>ethan.chen10001@gmail.com</div>
              </div>
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
          </form>
          <div className='button-container'>
            <button>Submit</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
