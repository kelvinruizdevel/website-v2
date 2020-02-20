import React from 'react';
import Layout from '../global/Layout';
import {Column, Row, Container, Divider, Wrapper} from "../components/Sections"
import {Title} from '../components/Heading'
import {Button, Colors} from '../components/Styling'
import Credentials from '../components/Credentials'
import WhoIsHiring from '../components/WhoIsHiring'


const Partners = ({data, pageContext}) => {
    let yml = null;
    try {
        yml = data.allPageYaml.edges[0].node;
    }
    catch (err) {
        console.error("There was a problem loading the data", data);
        console.error(err);
        return <div className="alert alert-danger">There was a problem loading the data</div>
    }
    return (
        <Layout type="page" seo={yml.basic_info} context={pageContext}>
            <Wrapper
                style="default"
                image="yes"
                url={yml.image}
                border="bottom"
                height="500px"
            >
                <Divider height="100px" />
                <Title
                    size="5"
                    title={yml.tagline}
                    paragraph={yml.sub_heading}
                    main
                    color={Colors.white}
                    fontSize="46px"
                    textAlign="center"
                />
                <Row align="center">
                    <Button width="300px" margin="15px 0px" color="red" textColor="white">{yml.button}</Button>
                </Row>
            </Wrapper>
            <Wrapper
                style="default">
                <Credentials move="up" up="100" />
            </Wrapper>
            <Divider height="50px" />
            <Wrapper
                style="default"
            >
                <Title
                    size="10"
                    title="SOME OF OUR PARTNERS AND EMPLOYERS"
                    paragraph="To ensure that our students are getting hired, we work closely with both our hiring partners as well as industry leaders constantly refreshing and optimizing our program and syllabus."
                    primary
                    customParagraphSize="8"
                />
                <Divider height="20px" />
                <WhoIsHiring source="partners" />
            </Wrapper>
            <Divider height="100px" />
            <Wrapper
                style="default"
            >
                <Divider height="50px" />
                <Title
                    title="COMPANIES TRUST US AND HIRE OUR STUDENTS"
                    paragraph="We actively organize and/or participate in the biggest coding initiatives."
                    primary
                />
                <Divider height="20px" />
                <WhoIsHiring source="coding" />
            </Wrapper>
            <Divider height="100px" />
            <Wrapper
                style="default"
            >
                <Divider height="50px" />
                <Title
                    title="IN PARTNERSHIP WITH THE CITY'S BIGGEST INFLUENCERS"
                    paragraph="We actively organize and/or participate in the biggest coding initiatives."
                    primary
                />
                <Divider height="20px" />
                <WhoIsHiring source="influencers" />
                <Row align="center">
                    <Button width="300px" color={Colors.blue} textColor={Colors.white} margin="2rem 0" padding=".85rem">BE A HIRING PARTNER</Button>
                </Row>
            </Wrapper>
        </Layout>
    )
};
export const query = graphql`
  query PartnersQuery($file_name: String!, $lang: String!) {
    allPageYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
            tagline
            sub_heading
            button
            image
        }
      }
    }
  }
`;
export default Partners;