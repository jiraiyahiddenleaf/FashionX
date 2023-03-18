import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding-top:30px;
  padding-bottom:30px;
  letter-spacing:1px;
  line-height:25px;
  ${mobile({ flexDirection: "column" , paddingTop:"20px" , paddingBottom: "0"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ paddingBottom: "35px" , paddingLeft: "25px"})}
`;

const Logo = styled.h1`
padding-left:20px;
${mobile({ paddingLeft: "0"})}
`;

const Desc = styled.p`
  margin: 20px 0px;
  padding-left:20px;
  padding-right:20px;
  ${mobile({ paddingLeft: "0", paddingRightt: "0", letterSpacing:"0.8px"})}
`;

const SocialContainer = styled.div`
  display: flex;
  padding-left:20px;
  ${mobile({ paddingLeft: "0"})}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  curser:pointer;

  &:hover{
    color:black;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  curser:pointer;
  margin-bottom: 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "black" , color: "white", paddingTop: "35px" , paddingBottom: "45px" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  padding-right:10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 90%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>fashionX.</Logo>
        <Desc>
        Fashion is a popular aesthetic expression. Most Noteworthy, it is something that is in vogue. Fashion appears in clothing, footwear, accessories, makeup, hairstyles, lifestyle, and body proportions. Furthermore.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Privacy</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Cancillations</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Refund Policy</ListItem>
          <ListItem>FAQS</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Payments</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 89, competition colony, near ghatotkach circle, rangbadi road, Kota
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 8005798686
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@fashionX.shop
        </ContactItem>
        <Payment src="./payments.png" />
      </Right>
    </Container>
  );
};

export default Footer;
