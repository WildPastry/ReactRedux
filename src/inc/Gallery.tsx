import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Zoom from '@material-ui/core/Zoom';

class Gallery extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.changePageFromGallery = this.changePageFromGallery.bind(this);
  }

  changePageFromGallery(value: any) {
    var options = {
      page: 'project',
      project: value[0],
      projectName: value[1],
      projectFields: value[2],
      projectClient: value[3],
      projectTimeline: value[4],
      projectWebsite: value[5],
      projectThumb: value[6],
      projectImages: value[7],
      projectIcons: value[8],
      projectIntro: value[9],
      projectDesc: value[10]
    };
    this.props.changePageFromGallery(options);
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    console.log('Gallery component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* PROJECTS FILTER */}
        <div className='row wrap'>
          <div className='filterWrap flex pad'>
            <h4
              className={this.props.everything}
              onClick={this.props.filterReset.bind(this, 'EVERYTHING')}>
              EVERYTHING
            </h4>
            <h4 className={this.props.branding} onClick={this.props.filter.bind(this, 'Branding')}>
              branding
            </h4>
            <h4 className={this.props.graphic} onClick={this.props.filter.bind(this, 'Graphic')}>
              graphic
            </h4>
            <h4 className={this.props.ux} onClick={this.props.filter.bind(this, 'UX')}>
              ux
            </h4>
            <h4 className={this.props.web} onClick={this.props.filter.bind(this, 'Web')}>
              web
            </h4>
          </div>
          {/* IMAGE THEME ICONS */}
          <div className='galleryWrap pad flex'>
            <img
              className='galleryRGBIcon'
              src={require('./../icon/rgb.svg')}
              onClick={this.props.changeImageTheme}
              alt='RBG Icon'
              title='Hue'
            />
            <div onClick={this.props.changeTheme}>
              <FontAwesomeIcon
                icon={['fas', 'fill-drip']}
                title='Theme'
                className={this.props.galleryFillIcon}
              />
            </div>
          </div>
        </div>
        {/* IMAGE MAP */}
        <div className='row'>
          {this.props.projects.map(
            (singleProject: {
              id: React.Key;
              name: React.ReactNode;
              fields: Array<[]>;
              client: React.ReactNode;
              timeline: React.ReactNode;
              website: React.ReactNode;
              thumb: string;
              images: Array<[]>;
              icons: Array<[]>;
              intro: string;
              desc: string;
            }) => (
              <div key={singleProject.id} className={this.props.imgTheme}>
                {/* IMAGES */}
                <img
                  onClick={this.changePageFromGallery.bind(this, [
                    singleProject.id,
                    singleProject.name,
                    singleProject.fields,
                    singleProject.client,
                    singleProject.timeline,
                    singleProject.website,
                    singleProject.thumb,
                    singleProject.images,
                    singleProject.icons,
                    singleProject.intro,
                    singleProject.desc
                  ])}
                  src={require('./../img/thumb/' + singleProject.thumb[Math.round(Math.random())])}
                  alt='Gallery'
                />
                {/* IMAGE DESCRIPTIONS */}
                <div className='descriptionWrap'>
                  <p className={this.props.singleProjectName}>{singleProject.name}</p>
                  <p>
                    <span className='textSpotGrey text400'>
                      {singleProject.fields[0]}
                      <span className='textLightGrey text400'> / </span>
                      {singleProject.fields[1]}
                      <span className='textLightGrey text400'> / </span>
                      {singleProject.fields[2]}
                    </span>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
