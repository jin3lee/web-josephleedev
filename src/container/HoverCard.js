import React from "react";

class HoverCard extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      isHover: false,
    }
    this._updateIsHover = this._updateIsHover.bind(this);
    this._updateOnMouseOver = this._updateOnMouseOver.bind(this);
    this._updateOnMouseLeave = this._updateOnMouseLeave.bind(this);
  }

  _updateIsHover( isHover ) {
    console.log('_updateIsHover', isHover);
    this.setState({ isHover: isHover });
  }

  _updateOnMouseOver() {
    this._updateIsHover( true );
  }
  _updateOnMouseLeave() {
    this._updateIsHover( false );
  }

  render() {
    return(
      <div onMouseLeave={()=>{ this._updateOnMouseLeave() }} onMouseOver={() => { this._updateOnMouseOver() }} style={ styles.container }>

        {
          this.state.isHover
          &&
          (
            <div style={ styles.hoverCardDescription }>
              <div style={{ width: '90%' }}>{ this.props.title }</div>
              <div style={ styles.hoverCardSubTitle }>{ this.props.subtitle }</div>
            </div>
          )
        }

        <img src={ this.props.image } style={ styles.buttonHoverStyle }>
        </img>

      </div>
    );
  }
}

const styles = {
  container: {

  },
  imageStyle: {
    width: '400px',
    height: '250px',
  },
  buttonHoverStyle: {
    width: '400px',
    height: '250px',
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hoverCardSubTitle: {
    fontSize: '.5em',
    marginTop: '5%',
  },
  hoverCardDescription: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    height: '250px',
    fontSize: '2em',
    fontFamily: 'Avenir',
    backgroundColor: 'rgb(0,0,0,0.8)',
    wordWrap:'break-word',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: '2',
    fontFamily: 'Helvetica',
  },
}

export default HoverCard;
