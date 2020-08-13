import React from "react";

import { connect } from 'react-redux';
import { updateProjectId } from './../redux/actions.js';

class HoverCard extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      isHover: false,
      portfolioId: -1,
    }
    this._updateIsHover = this._updateIsHover.bind(this);
    this._updateOnMouseOver = this._updateOnMouseOver.bind(this);
    this._updateOnMouseLeave = this._updateOnMouseLeave.bind(this);
    this._onMouseClick = this._onMouseClick.bind(this);
  }
  componentDidMount() {
      if( this.state.portfolioId !== this.props.portfolioId ) {
          this.setState({ portfolioId: this.props.portfolioId });
      }
  }

  _updateIsHover( isHover ) {
    this.setState({ isHover: isHover });
  }

  _updateOnMouseOver() {
    this._updateIsHover( true );
  }

  _updateOnMouseLeave() {
    this._updateIsHover( false );
  }

  _onMouseClick() {
    this.props.dispatch( updateProjectId( this.state.portfolioId ) );
    window.scrollTo(0, 0);
  }

  render() {

    return(
      <div onMouseLeave={ ()=>{ this._updateOnMouseLeave() }} onMouseOver={ () => { this._updateOnMouseOver() }} style={ styles.container }>

        {
          this.state.isHover
          &&
          (
            <button onClick={ this._onMouseClick } style={ styles.hoverCardDescription }>
              <div style={{ width: '90%' }}>{ this.props.title }</div>
              <div style={ styles.hoverCardSubTitle }>{ this.props.subtitle }</div>
            </button>
          )
        }

        <img alt="hoverButton" src={ this.props.image } style={ styles.buttonHoverStyle }>
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

const mapStateToProps = (state, ownProps) => {
  return {
    pageId: state.reducer.pageId,
  };
};

export default connect( mapStateToProps )( HoverCard );
