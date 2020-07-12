import React, {useContext} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Title, H1, H2, H3, H4, Span, Paragraph, Separator} from '../Heading';
import {Container, Row, Column, Wrapper, Divider} from '../Sections'
import {Button, Colors, Check, ArrowRight, RoundImage, Over} from '../Styling'
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Card} from '../Card';
import Link from 'gatsby-link'
import {SessionContext} from '../../session'


const Loc = (props) => {
  const {session, setSession} = useContext(SessionContext);
  console.log("LOCSESSION: ", session)
  let loc = props.lang
  return (
    <>
      <Row>
        <Column
          size="12"
          border="bottom"
          image="no"
          color={Colors.white}
        ><Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          interval={5000}
          transitionTime={1000}
        >
            {loc != null &&
              loc.map((item, index) => {
                return (
                  <Card key={index} shadow borders="1.25rem" height="500px">
                    <Row
                      height="100%"
                      marginLeft="0"
                      marginRight="0"
                      customRespSize

                    >
                      <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" image="yes" url={item.node.image} border="custom" customBorderRadius="1.25rem 0 0 1.25rem" />
                      <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" image="no" border="bottom">
                        <Row align="center" height="100%">
                          <Column size="9" height="100%">
                            <Divider height="10%" />
                            <Row height="10%">
                              <Column size="12">
                                <H3
                                  fs_xs="20px"
                                  fs_sm="22px"
                                  fs_md="20px"
                                  fs_lg="20px"
                                  fs_xl="20px"
                                  primary
                                  align="left"
                                >
                                  {item.node.city}
                                </H3>
                              </Column>
                            </Row>
                            <Row height="5%" align="left">

                              <Separator al_xs="center" />

                            </Row>
                            <Row height="auto" marginBottom="10px">
                              <Column size="12">
                                <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="14px" lineHeight="20px">{item.node.carousel_box.content}</Paragraph>
                              </Column>
                            </Row>
                            {/* <Row height="5%">
                              <Column size="12">
                                <H4 primary align="left" >{item.node.city}</H4>
                              </Column>
                            </Row>

                            <Row height="10%">
                              <Column size="12">
                                <Paragraph color={Colors.blue} align="left" fontSize="14px" lineHeight="20px">test</Paragraph>
                              </Column>
                            </Row> */}
                          </Column>
                        </Row>


                      </Column>
                    </Row>
                  </Card>
                )
              })

            }
          </Carousel>
        </Column>
      </Row>
      <Divider height="10px" />
      <Row height="auto" align="center">

        {loc.map((pic, i) => {
          console.log("PIC", pic)
          let randLocImgIndex = Math.floor(Math.random() * pic.node.carousel_box.images.length)
          return (
            <Column key={i} size="2" customRespSize respSize="2" padding="0 25px">
              {/* <Card width="100%" > */}
              <Link to={`/${session.language}/location/${pic.node.meta_info.slug}`}>
                <RoundImage
                  h_xs="40px"
                  h_sm="70px"
                  h_md="60px"
                  h_lg="80px"
                  h_xl="90px"
                  width="100%"
                  br_xs=".25rem"
                  br_sm=".25rem"
                  br_md=".25rem"
                  br_lg=".25rem"
                  br_xl=".25rem"
                  url={pic.node.carousel_box.images[randLocImgIndex].path}
                  border=".75rem"
                  bsize="cover"
                  position="center"
                  height="100%"
                  // width="auto"
                  mb="1.25rem">

                  <Row
                    height="100%"
                    align="around"
                    backgroundHover={Colors.blue}
                    marginHover="0"
                    borderRadiusHover=".25rem"
                  >
                    <Column size="12" alignSelf="center" align="center">

                      <H4
                        color={Colors.white}
                        fs_xs="9px"
                        fs_sm="12px"
                        fs_md="12px"
                        fs_lg="14px"
                        fs_xl="16px"

                      >
                        {pic.node.city}
                      </H4>

                    </Column>
                  </Row>

                </RoundImage>
              </Link>
              {/* </Card> */}
            </Column>
          )
        })}
      </Row>
    </>)
};


export default Loc;