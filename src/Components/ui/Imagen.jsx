import './Imagen.css';

const Imagen = ({ img, type = 'normal', alt }) => {
  retur(
    <>
      {type === 'logo' ? (
        <div className='text-logo'>
          <img
            src={img}
            alt={alt}
            className={type === 'logo' ? 'logo' : 'normal'}
          />
        </div>
      ) : (
        <img src={img} alt={alt} className='normal' />
      )}
    </>
  );
};
export default Imagen;
