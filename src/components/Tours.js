import { tours } from '../data';
import Title from './Title';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subtitle='Tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const {
            id,
            img,
            title,
            country,
            date,
            description,
            duration,
            price,
          } = tour;

          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={img} alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {country}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
