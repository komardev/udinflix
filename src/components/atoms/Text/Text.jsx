import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
    const { children, innerHTML, className, p, h1, h2, h3, h4, h5, h6 } = props;
    return (
        <>
            { p && innerHTML === '' && ( <p className={className}>{ children }</p>) }
            { p && innerHTML !== '' && ( <p className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></p>) }
            { h1 && innerHTML === '' && ( <h1 className={className}>{ children }</h1>) }
            { h1 && innerHTML !== '' && ( <h1 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h1>) }
            { h2 && innerHTML === '' && ( <h2 className={className}>{ children }</h2>) }
            { h2 && innerHTML !== '' && ( <h2 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h2>) }
            { h3 && innerHTML === '' && ( <h3 className={className}>{ children }</h3>) }
            { h3 && innerHTML !== '' && ( <h3 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h3>) }
            { h4 && innerHTML === '' && ( <h4 className={className}>{ children }</h4>) }
            { h4 && innerHTML !== '' && ( <h4 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h4>) }
            { h5 && innerHTML === '' && ( <h5 className={className}>{ children }</h5>) }
            { h5 && innerHTML !== '' && ( <h5 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h5>) }
            { h6 && innerHTML === '' && ( <h6 className={className}>{ children }</h6>) }
            { h6 && innerHTML !== '' && ( <h6 className={className} dangerouslySetInnerHTML={{__html: innerHTML }}></h6>) }
        </>
    )
};
Text.defaultProps = {
    children: 'Text',
    innerHTML: '',
    p: false,
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
};
Text.propTypes = {
    children: PropTypes.any,
    innerHTML: PropTypes.any,
    className: PropTypes.string,
    p: PropTypes.bool,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    h6: PropTypes.bool,
};
export default Text;