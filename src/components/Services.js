import { services } from '../data';
import Title from './Title';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Our' subtitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, faIcon, title, text } = service;

          return (
            <article key={id} className='service'>
              <span className='service-icon'>
                <i className={faIcon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
