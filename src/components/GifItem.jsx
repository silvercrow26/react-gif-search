import PropTypes from "prop-types";

export const GifItem = ({url, title}) => {

  return (
    <div className='card'>
        <img data-testid="hola" src={url} alt={ title }></img>
        {/* <p>{title}</p> */}
    </div>
  )

};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};