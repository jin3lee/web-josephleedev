import React from 'react';
import { connect } from 'react-redux';

import profilePhoto from './assets/facePhoto.jpg';
import logoJl from './assets/logo_jl_final.svg';

import lgPortfolioItem from './assets/web_lg_portfolioItem.jpg'
import ibcuPortfolioItem from './assets/web_ibcu_portfolioItem.jpg'
import fidgetPortfolioItem from './assets/android_fidget_portfolioItem.jpg'
import dodgetItCarPortfolioItem from './assets/android_dodgeitcar_portfolioItem.jpg'
import boxswordPortfolioItem from './assets/gms_boxsword_portfolioItem.jpg'
import fighterDemoPortfolioItem from './assets/unity_fighterDemo_portfolioItem.jpg'

import lgBoxshotsBefore from './assets/web_lg_boxshotBefore.png';
import lgBoxshotsAfter from './assets/web_lg_boxshotAfter.png';
import lgBoxshotsDesign from './assets/web_lg_design.png';
import lgBoxshotsDesignImplement from './assets/web_lg_designImplement.jpg';
import lgSortingButton from './assets/web_lg_sortingButton.jpg';
import lgSortingButtonCloseUp from './assets/web_lg_sortingButtonCloseUp.jpg';

import ibcuColorPallet from './assets/web_ibcu_colorPallet.png';
import ibcuLogoAndTitle from './assets/web_ibcu_logoAndTitle.png';
import ibcuHome from './assets/ibcuHome.png';
import ibcuAcademics from './assets/web_ibcu_academics.png';
import ibcuApply from './assets/web_ibcu_apply.png';
import ibcuCampus from './assets/web_ibcu_campus.png';
import ibcuFacultyAndStaff from './assets/web_ibcu_facultyAndStaff.png';

import dodgeScreens from './assets/android_dodge_screens.jpg';
import dodgeFeature from './assets/android_dodge_featureGraphic.png';
import dodgeSpritesheet from './assets/android_dodge_spritesheet.png';

import fidgetFeature from './assets/android_fidget_featureGraphic.png';
import fidgetRating from './assets/android_fidget_rating.jpg';
import fidgetStore from './assets/android_fidget_store.jpg';

import boxswordHome from './assets/game-boxsword-home.png';
import boxswordTutorial from './assets/game-boxsword-tutorial.png';

import fighter1 from './assets/game-fighter-1.png';
import fighter2 from './assets/game-fighter-2.png';
import fighter3 from './assets/game-fighter-3.png';
import fighter4 from './assets/game-fighter-4.png';

import { PAGE_ID_HOME } from './redux/actionTypes'
import { updatePage, updateProjectId } from './redux/actions.js';

import HoverCard from './container/HoverCard.js';

class App extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      pageId: PAGE_ID_HOME,
      currentProjectId: -1,
      width: -1,
      height: -1,
    }
    document.body.style = 'background: white;';
    this._body = this._body.bind(this);
    this._stickyHeader = this._stickyHeader.bind(this);
    this._goToWebsite = this._goToWebsite.bind(this);
    this._updatePageTo = this._updatePageTo.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this._getProjectTitleStyle = this._getProjectTitleStyle.bind(this);
    this._getProjectSubtitleStyle = this._getProjectSubtitleStyle.bind(this);
    this._getProjectResultStyle = this._getProjectResultStyle.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _goToProjectDetails( projectName ) {
    // TODO: display the project
  }

  _goToWebsite( website ) {
    window.location.assign( website );
  }

  _updatePageTo ( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  _goToProjectPage( projectId ) {
    this.props.dispatch( updateProjectId( projectId ) );
    window.scrollTo(0, 0);
  }

  _stickyHeader() {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0,0,0,0)',
        width: '100%',
        display: 'flex',
        paddingTop: '4%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          fontFamily: 'Avenir',
          fontWeight: 'bold',
          color:'rgb(60, 157, 155, 0.8)',
          flex: 1,
          marginLeft: '4.5%',
        }}>
          <a href="/" ><img alt='alt' src={ logoJl } style={{ width: '40px' }} /></a>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'flex-end',
          marginRight: '4.5%',
        }}>
        {/*
          <a href="#projects" style={ { ...styles.spacesBetweenTabStyle, ...styles.tabColorStyle, ...styles.headerButtonStyle } } >
            WORK
          </a>
          <a href="#aboutme" style={ { ...styles.spacesBetweenTabStyle, ...styles.tabColorStyle, ...styles.headerButtonStyle } } >
            ABOUT ME
          </a>
          */
        }
        </div>
      </div>
    );
  }

  _body() {
    return (
      <div id='aboutme'>
        <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      backgroundColor: 'rgb(96,96,96,.3)',
                      paddingTop: '5%',
                      paddingBottom: '5%',
                    }}>
          <div style={ styles.cardBackgroundColorStyle }>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10%', fontWeight: 'bold', fontFamily: 'Avenir', fontSize: '2em', color:'rgb(57, 74, 109, 0.8)', }}>ABOUT ME</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <img alt='alt' src={ profilePhoto } style={{ width: '25%', marginLeft: '5%' }} />

              <div style={{ color: 'rgb(82, 222, 151)', marginLeft: '5%', marginTop: '1%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Name:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>Joseph Lee</div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Location:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>Los Angeles, CA</div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Programming Languages:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>Java & Javascript/HTML/CSS</div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Frameworks:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>React.js & React Native</div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Source Control:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>Github & Bitbucket</div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={ styles.cardFieldColorStyle }>Experience:</div>
                  <div style={{ color: 'rgb(0,0,0,0)' }}>...</div>
                  <div style={ styles.cardInputColorStyle }>3 Years</div>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  _projects() {
    return(<div id='projects' style={{ color: 'black', backgroundColor: 'rgb(255,255,255, 0.5)', paddingTop: '5%', paddingBottom: '5%', flexDirection: 'column'}}>

      <div>
        <div style={{ paddingBottom: '10%', paddingTop: '5%',
                      display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly'
                    }}>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ lgPortfolioItem } title={ "Legacy Games" } subtitle={ "Wordpress Ecommerce Site" } portfolioId={1} />
          </div>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ ibcuPortfolioItem } title={ "International Bible College & University" } subtitle={ "React & AWS S3 Website" } portfolioId={2} />
          </div>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ dodgetItCarPortfolioItem } title={ "Dodge it! Car!" } subtitle={ "Android Game" } portfolioId={3} />
          </div>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ fidgetPortfolioItem } title={ "Fidget Spinner Collector" } subtitle={ "Android Game" } portfolioId={4} />
          </div>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ boxswordPortfolioItem } title={ "BoxSword" } subtitle={ "Desktop Game" } portfolioId={5} />
          </div>

          <div style={ styles.portfolioItemContainer }>
            <HoverCard image={ fighterDemoPortfolioItem } title={ "Fighter Demo" } subtitle={ "Desktop Game" } portfolioId={6} />
          </div>
        </div>
      </div>
    </div>);
  }

  _contact() {
    return (<div id='contact' style={{
      paddingTop: '20%',
      paddingBottom: '20%',
      backgroundColor: 'rgb(96,96,96,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
          <h2>CONTACT</h2>
          <div><b>EMAIL</b></div>
          <br />
          <div>joeleeportfolio@gmail.com</div>
      </div>);
  }

  _pageHome() {
    return( <div>{ this._stickyHeader() }
            { /* this._body() */}
            { this._projects() }
            { /* this._contact() */ }
          </div>);
  }

  _renderProjectDetailGallery( gallery ) {
    return gallery.map(art => (
      <div key={ art.key }>
        <div style={ this._getProjectSubtitleStyle() }>{ art.caption }</div>
        <img alt="projectImage" src={ art.image } style={{ width: '100%', marginBottom: '10%', boxShadow: '10px 10px 10px rgb(0,0,0,0.5)' }}/>
      </div>
    ));
  }

  _getProjectTitleStyle() {

    let projectTitleStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: '5em',
      marginTop: '10%',
      marginBottom: '10%',
    };

    if( this.state.width  > 1280 ) {
      projectTitleStyle.fontSize = '5em';
    } else if( this.state.width  > 1000 ) {
      projectTitleStyle.fontSize = '4em';
    } else if( this.state.width  > 800 ) {
      projectTitleStyle.fontSize = '3em';
    } else if( this.state.width  > 600 ) {
      projectTitleStyle.fontSize = '2em';
    } else if( this.state.width  > 400 ) {
      projectTitleStyle.fontSize = '2em';
    } else {
      projectTitleStyle.fontSize = '1em';
    }

    return ( projectTitleStyle );
  }

  _getProjectSubtitleStyle() {

    let projectSubtitleStyle = {
        color: 'gray',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: '2em',
        marginBottom: '5%',
        marginTop: '10%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 20
    };

    if( this.state.width  > 1280 ) {
      projectSubtitleStyle.fontSize = '3em';
    } else if( this.state.width  > 1000 ) {
      projectSubtitleStyle.fontSize = '2em';
    } else if( this.state.width  > 800 ) {
      projectSubtitleStyle.fontSize = '1em';
    } else if( this.state.width  > 600 ) {
      projectSubtitleStyle.fontSize = '.75em';
    } else if( this.state.width  > 400 ) {
      projectSubtitleStyle.fontSize = '.5em';
    } else {
      projectSubtitleStyle.fontSize = '.5em';
    }

    return ( projectSubtitleStyle );
  }

  _getProjectResultStyle() {

    let projectSubtitleStyle = {
      backgroundColor: 'gray',
      padding: '10%',
      color: 'white',
      fontSize: '2em',
      fontFamily: 'Avenir',
      justifyContent: 'center',
      textAlign: 'center'
    };

    if( this.state.width  > 1280 ) {
      projectSubtitleStyle.fontSize = '3.5em';
    } else if( this.state.width  > 1000 ) {
      projectSubtitleStyle.fontSize = '2.5em';
    } else if( this.state.width  > 800 ) {
      projectSubtitleStyle.fontSize = '1.5em';
    } else if( this.state.width  > 600 ) {
      projectSubtitleStyle.fontSize = '1.25em';
    } else if( this.state.width  > 400 ) {
      projectSubtitleStyle.fontSize = '1.25em';
    } else {
      projectSubtitleStyle.fontSize = '1em';
    }

    return ( projectSubtitleStyle );
  }

  _pageProjectDetail( projectId ) {

    // offset id to 1 as starting number
    projectId = projectId - 1;

    const projectDetail = [
      {
        key: 'Legacy Games Project',
        id: 1,
        appType: 'web',
        title: "Legacy Games wanted a nice looking website to sell digital products using wordpress & woocommerce. The following is how I was able to deliver their needs.",
        link: 'https://www.legacygames.com',
        description1: 'Ecommerce Webstie',
        description2: 'Implement javascript functionality',
        description3: 'Connect payment processing using stripe & paypal',
        description4: 'Built using wordpress and woocommerce',
        year: 'Updated July 2020',
        gallery:
        [
          { image: lgBoxshotsBefore, caption: 'The first opportunity to work on the website was to improve the product images. The images were not uniformal and didn\'t convey a clear product message.' },
          { image: lgBoxshotsAfter, caption: 'After discussing with the team, we decided to go with an image that depicts a 3D boxshot. We think transforming a flatten image into a 3D boxshot look we would be adding a sense tangibility, which would ease customers into conceptualizing what they are purchasing. I also added logos on the side of the boxes to increase branding on these products.' },
          { image: lgBoxshotsDesign, caption: 'Next, the designer provided me the design of the single product page that the company wanted.' },
          { image: lgBoxshotsDesignImplement, caption: 'After lots of coding, drinking tea, and back and forth emails the designs were able to come to life.' },
          { image: lgSortingButtonCloseUp, caption: 'Another fun challenge was implmenting buttons that would sort html elements called flipcards. These flipcards are great interfaces for customers to view our product image and read more about the product.' },
          { image: lgSortingButton, caption: 'The biggest part for implementing this sorting algorithm was parsing through many layers of html and identifying which flipcard corresponded to which product. From that point, I created a map that linked products to product data that contains the products name and date. With these I was able to sort by NEW and Alphabetical order.' },
        ],
        result: 'I learned wordpress with woocomerce plugin is a very friendly way of building a ecommerce site, because of the extensibility of adding plugins that can add ecommerce technology. Some of these technologies I setup were: Stripe credit card payment processing, paypal payment processing, taxing based on state, storing backups of the whole site, & adding custom code using snippets. These plugins are the tip of the iceberg. There are plenty of more plugins that will allow the site to add other technologies.',
      },
      {
        key: 'IBCUNI Project',
        id: 2,
        appType: 'web',
        title: "A client asked me to build him a school website and since I never made a school website I thought why not?!",
        link: 'https://www.ibcuni.com',
        description1: 'College Webstie',
        description2: 'UX/UI design',
        description3: 'Hosting using AWS',
        description4: 'Built using React.js',
        year: 'Updated Nov 2019',
        gallery:
        [
          { image: ibcuColorPallet, caption: 'I created a color pallet based on the colors of the logo that was provided' },
          { image: ibcuLogoAndTitle, caption: 'Here is the logo and name of the school' },
          { image: ibcuHome, caption: 'After looking at many school websites I chose to base my design off of washington.edu, because it was simple and something I knew I could build quickly' },
          { image: ibcuAcademics, caption: 'I wanted to have a decent mobile experience, so I decided to center left the body\'s content' },
          { image: ibcuApply, caption: 'For the application page, I decided to display an image that captured the beautiful nature around the school - because many of the students who would be applying come from all parts of the world that have different climate and I thought "why not show them what this school\'s climate and scenery is like?' },
          { image: ibcuCampus, caption: 'I designed the campus page to be as straightforward as possible' },
          { image: ibcuFacultyAndStaff, caption: 'This page was tricky because the images of all the staff were not uniformal - so I photoshopped the images to have a circular frame and changed the colors to black and white instead' }
        ],
        result: 'I learned designing for both web and mobile is important because without a sound design the web page can look unpolished on one platform compared to the other. I wish I could\'ve known to start designing with percentage applied to styles like \'padding\' & \'margins\'; as these ended up giving me great multiplatform results.',
      },
      {
        key: 'Dodge it! Car! Project',
        id: 3,
        appType: 'android',
        title: "My friend and I wanted to build a mobile game over the weekend and ended up designing, programming, & publishing to the android play store after 3 days & little sleep",
        link: 'https://play.google.com/store/apps/details?id=com.byebyegames.dodgeitcar',
        description1: 'Android Game',
        description2: 'UX/UI design',
        description3: 'Sprite asset design',
        description4: 'Publish to appstore',
        year: 'Updated 2015',
        gallery:
        [
          { image: dodgeFeature, caption: 'We chose to go with a simple 2D game where the player dodges cars as a race car driver - here is the featured graphic displayed in the play store' },
          { image: dodgeScreens, caption: 'We wanted the game to be simple and gave the player two instructions' },
          { image: dodgeSpritesheet, caption: 'With little art experience, we were able to manage 9 images + a few sound affects into an entire game' }
        ],
        result: 'As young college students we came into this project not knowing much about game making, but through this project we learned that there are many complexities & difficulties of creating a simple game. We learned how to design assets to match pixel perfect, program game state logic, and publish with a developer account onto the Google Play store. We ended up getting around 150+ downloads.',
      },
      {
        key: 'Fidget Spinner Collector Project',
        id: 4,
        appType: 'android',
        title: "My coworker and I made a fun fidget spinner android app!",
        link: 'https://play.google.com/store/apps/details?id=com.byebyegames.dodgeitcar',
        description1: 'Android Game',
        description2: 'UX/UI design',
        description3: 'Sprite asset design',
        description4: 'Publish to appstore',
        year: 'Updated Nov 2017',
        gallery:
        [
          { image: fidgetFeature, caption: 'Our concept was to go simple and have neat fidgets that spin and vibrate the phone. This is how the app looks on different parts of the screen.' },
          { image: fidgetStore, caption: 'Soon afterwards, we decided to add a store where users can purchase different fidgets with in-game points. Points can be collected for every revolution the fidget spins.' },
          { image: fidgetRating, caption: 'Overall we didn\'t as many downloads as we liked, but the ratings were satisfactory on our end!' },
        ],
        result: 'Overall, the app got over a 100+ downloads before it was removed from the store.',
      },
      {
        key: 'BoxSword Project',
        id: 5,
        appType: 'Desktop Game',
        title: "I have been wanting to develop a game using GameMakerStudio2 and currently came up with this concept of a box fighting with a sword",
        link: 'https://www.boxsword.com',
        description1: 'Computer Game',
        description2: 'Physics programming',
        description3: 'Sprite asset design',
        description4: 'Animation',
        year: 'Updated Oct 2019',
        gallery:
        [
          { image: boxswordHome, caption: 'Here is a sneek peak of the home screen' },
          { image: boxswordTutorial, caption: 'Update 12/19/2019: Here is a sneek peak of the Tutorial screen' }
        ],
        result: 'The works of this game is still in the making... to be continued...',
      },
      {
        key: 'Fighter Demo Project',
        id: 6,
        appType: 'Desktop Game',
        title: "My friend John wanted to build a fighter game with me and I said \"Let's do it!\"",
        link: 'https://drive.google.com/drive/folders/1wZchLIwC5MpXkDlO44ZVM3ViA9lH_oDW?usp=sharing',
        description1: 'Computer Game for Mac & PC',
        description2: 'Unity2D Game Editor',
        description3: 'Physics and Game Programming',
        description4: 'Utilitze Github & Scrum',
        year: 'Updated Nov 2019',
        gallery:
        [
          { image: fighter1, caption: 'We decided to use street fighter sprites and images that were already available on the internet' } ,
          { image: fighter2, caption: 'After a few brain storm sessions and trial and errors we ended up having a few collision boxes and polygon - the polygon is important as you can see in the image below, because with this simple shape we were able to easily implement player to player collision from all angles.' } ,
          { image: fighter3, caption: 'We added sprite animation for punching and kicking - on top of those animations we placed hurt/hit boxes' } ,
          { image: fighter4 , caption: 'Here you can see the hurt box(red) that would do damage when colliding with the opposing player\'s hit box(green)' }
        ],
        result: 'I learned developing a fighter game containing hitbox/hurtbox logic to be debug heavy type of development. There was a lot of instances where our programming logic didn\'t work as inteded and we had to keep digging and digging for where the bugs truly lied. Keeping track of player state and timing hit/hurt box collisions was no easy feat. We never published the game to any store, but our friends who were able to try out the game thought it was pretty cool.',
      },
    ];

    const projectCount = projectDetail.length;

    return( <div style={{
                          display: 'flex',
                          flexDirection: 'row'
                        }}>
              <button
                style={{
                  fontFamily: 'Avenir',
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: '1%',
                  marginLeft: '1%',
                  flex: 1,
                  position: 'fixed',
                  fontSize: '2em',
                  border: 'none'
                }}
                onClick={ () => { this._goToProjectPage(-1)  } }
              >⤬</button>

              <div style={{ flex: 9, marginLeft: '10%', marginRight: '10%', fontFamily: 'Avenir' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%', fontSize: '.9em' }}>Project</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '.9em' }}>{ projectDetail[projectId].id } — { projectCount }</div>
                <div style={ this._getProjectTitleStyle() }>{ projectDetail[projectId].title }</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.8em', marginLeft: '30%' }} onClick={ () => { this._goToWebsite("" + projectDetail[projectId].link) }}>View { projectDetail[projectId].appType } app ⟶</div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '.7em', marginLeft:'58%', marginTop: '2%' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>{ projectDetail[projectId].description1 }</div>
                    <div style={{ marginRight: '40%' }}>{ projectDetail[projectId].year }</div>
                  </div>
                  <div>{ projectDetail[ projectId ].description2 }</div>
                  <div>{ projectDetail[ projectId ].description3 }</div>
                  <div>{ projectDetail[ projectId ].description4 }</div>
                </div>

                <div style={{ width: '100%', marginTop: '15%' }}>
                  { this._renderProjectDetailGallery( projectDetail[ projectId ].gallery ) }
                </div>

                <div style={ this._getProjectResultStyle() }>
                  { projectDetail[ projectId ].result }
                </div>

                {
                  ( projectId < projectCount - 1)
                  &&
                  <button
                  onClick={ () => { this._goToProjectPage(projectId + 2) } }
                  style={{
                    width: '100%',
                    height: '50px',
                    border: 'none',
                    backgroundColor: 'black',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '1em',
                    alignItems: 'center'
                  }}>
                    Next Project ⟼
                  </button>
                }
              </div>
          </div>);
  }

  render() {
    // update state
    let pageId = this.state.pageId;

    if( pageId !== this.props.pageId ) {
      pageId = this.props.pageId;
    }

    return (
        <div style={ styles.container }>
        { ( PAGE_ID_HOME === pageId ) && ( -1 === this.props.projectId ) && this._pageHome() }
        { ( -1 !== this.props.projectId ) && this._pageProjectDetail( this.props.projectId ) }
        </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tabColorStyle: {
    color: 'gray',
    fontSize: 14,
    "hover": {
     color: "#efefef"
   }
  },
  headerButtonStyle: {
    textDecoration: 'none',
  },
  spacesBetweenTabStyle: {
    marginRight: '2%',
  },
  cardFieldColorStyle: {
    color: 'rgb(60, 157, 155, 0.8)',
    fontWeight: 'bold'
  },
  cardInputColorStyle:{
    color: 'black',
  },
  cardBackgroundColorStyle: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 30,
    paddingBottom: '2%',
  },
  portfolioItemContainer: {
    width: '400px',
    height: '250px',
    marginTop: '2%',
  },
  portfolioItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '2em',
    fontFamily: 'Avenir',
    backgroundColor: 'rgb(96,96,96,0.3)',
    wordWrap:'break-word',
    color: 'black',
    textDecoration: 'none',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
  },
  portfolioItemDescription: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    height: '250px',
    fontSize: '2em',
    backgroundColor: 'rgb(0,0,0,0.65)',
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
  portfolioItemSubTitle: {
    fontSize: '.5em',
    marginTop: '5%',
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    pageId: state.reducer.pageId,
    projectId: state.reducer.projectId
  };
};

export default connect( mapStateToProps )( App );
