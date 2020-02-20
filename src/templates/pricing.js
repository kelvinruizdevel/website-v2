import React from 'react';
import Layout from '../global/Layout';
import {Column, Row, Container, Divider, Wrapper} from "../components/Sections"
import {Title, H5} from '../components/Heading'
import {Button, Colors, RoundImage} from '../components/Styling'
import PricesAndPayment from '../components/PricesAndPayment';
import WhoIsHiring from '../components/WhoIsHiring'

const Pricing = ({data, pageContext}) => {
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
                backgroundSize="cover"
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
            </Wrapper>
            <Wrapper
                style="default">
                {/* <QueryTest up="80" /> */}
            </Wrapper>
            <Divider height="100px" />
            <Container fluid >
                <Row>
                    <Column size="1" />
                    <Column size="11" >
                        <Row>
                            <Column size="1" />
                            <Column size="10">
                                <Row>
                                    <Column size="5" height="300px">
                                        <RoundImage url="../pricing.png" height="400px" bsize="contain" />
                                    </Column>
                                    <Column size="4">
                                        <Divider height="100px" />
                                        <H5 uppercase align="left" fontSize="20px" fontHeight="30px">Our program was specifically built to efficiently deliver the most current and essential  tech knowledge and skills while remaining affordable. </H5>
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Container>
            <Divider height="200px" />
            <Wrapper
                style="default"
                image="no"
                color={Colors.lightGray}
                border="top"
                height="430px"
            >
                <Divider height="100px" />

                {/* <PricesAndPayment /> */}
            </Wrapper>
            <Divider height="230px" />
            <Wrapper
                style="custom"
                full
            >
                <Title
                    size="10"
                    title="PAYMENT GUIDE"
                    paragraph="Do you have any questions on financing or our extended payment plans?"
                    primary
                />
                <Divider height="30px" />
                <Row align="center">
                    <Button outline color={Colors.blue}>REVIEW GUIDEBOOK</Button>
                </Row>
                <Divider height="50px" />
            </Wrapper>
            <Wrapper
                style="default"
                image="no"
                color={Colors.lightGray}
                border="top"
            ><Title
                    size="10"
                    title="IMMERSED IN MIAMI'S CODING ECOSYSTEM"
                    paragraph="We actively organize and/or participate in the biggest coding initiatives."
                    primary
                />
                <Divider height="20px" />
                {/* <WhoIsHiring source="financials" /> */}
                <Divider height="150px" />
            </Wrapper>
        </Layout >
    )
};
export const query = graphql`
  query PricingQuery($file_name: String!, $lang: String!) {
    allPageYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
            tagline
            image
            sub_heading
        }
      }
    }
  }
`;
export default Pricing;