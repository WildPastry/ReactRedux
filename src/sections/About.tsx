import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import { MDBAnimation } from 'mdbreact';
import { RootState } from '../redux/reducers/rootReducer';
import { initSpace } from '../utilities/space';
import { useSelector } from 'react-redux';

// About
const About: React.FC = () => {
  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  // Handle reference to external JS fucntion
  function useHandleSpace<T extends HTMLElement>() {
    const currentRef = useRef<T>(null);
    return { ref: currentRef };
  }

  const { ref: spaceRef } = useHandleSpace<HTMLDivElement>();

  // Load external JS function
  useEffect(() => initSpace(appTheme), [ appTheme ]);

  return (
    <section aria-label='About Section'>
      <MDBAnimation type='fadeIn'>
        <Row className='wrap'>
          <Col sm={12}>
            <h1 className={`colWrap marBot text${appTheme}`}>About</h1>
          </Col>
          <br />
          <Col sm={12} md={6} lg={4} className='colWrap'>
            <p aria-label='About Description' className={`text${appTheme}`}>
              TypeScript, Angular, and React front-end developer with a strong background in design.
              <br />
              <br />
              Currently developing Angular software in Wellington for Snapper.
              Love the gym, tramping, swimming, DNB, animals and craft beer.
              Constantly improving by learning new techniques and skills.
              <br />
              <br />
            </p>
            <h3
              aria-label='About Contact Number'
              className={'marBot textSpotGrey'}>
              Call/Text <span className='textPeach ml-1'>022 5025 485</span>
            </h3>
          </Col>
          <Col sm={12} md={6} lg={8} className='colWrap'>
            <div
              aria-label='Space Animation'
              id='space'
              className={`space bg${appTheme}`}
              ref={spaceRef as React.RefObject<HTMLDivElement>}
            />
          </Col>
        </Row>
      </MDBAnimation>
    </section>
  );
};

// EXPORT About
About.displayName = 'About';
export default About;
