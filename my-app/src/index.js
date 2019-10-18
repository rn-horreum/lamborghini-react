import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <div className='black-background-color'>
          <Menu borderless icon size='mini' className="fixed navbar">
            <Container>
              <Menu.Item className="ui tiny image"><Image src="http://www.car-brand-names.com/wp-content/uploads/2015/03/Lamborghini-Logo.png"/></Menu.Item>
              <Menu.Item>MODELS</Menu.Item>
              <Menu.Item>BRAND</Menu.Item>
              <Menu.Item>OWNERSHIP</Menu.Item>
              <Menu.Item>EXPERIENCE</Menu.Item>
              <Menu.Item>MOTORSPORT</Menu.Item>
              <Menu.Item>STORE</Menu.Item>

              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="cog"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="share alternate icon"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="search icon"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="audio description icon"/></Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}

class Background extends React.Component {
  render() {
    const itemStyle = { color: "orange" };
    return (
        <Menu borderless className="lambo-background">
          <Menu.Item position="center" style={itemStyle}> <h1> Lamborghini Hawaii </h1> </Menu.Item>
        </Menu>
    )
  }
}

class Footer extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <div className="footer-background">
          <div className="ui four column grid container">
                 <List className="column">
                   <List.Item>MODELS</List.Item>
                   <hr/>

                   <List.Item>Urus</List.Item>
                   <List.Item>Huracan</List.Item>
                   <List.Item>Aventador</List.Item>
                   <List.Item>Few Off</List.Item>
                   <List.Item>Concept</List.Item>
                   <List.Item>Ad Personam</List.Item>

                 </List>

            <List className="column">
              <List.Item>BRAND</List.Item>
              <hr/>

              <List.Item>People</List.Item>
              <List.Item>History</List.Item>
              <List.Item>Masterpieces</List.Item>
              <List.Item>Forged Compositions</List.Item>
              <List.Item>Carbon Fiber</List.Item>

            </List>

            <List className="column">
              <List.Item>OWNERSHIP</List.Item>
              <hr/>

              <List.Item>Financial Services</List.Item>
              <List.Item>Dealer Locator</List.Item>
              <List.Item>Service Locator</List.Item>
              <List.Item>Accessori Originali</List.Item>
              <List.Item>Spare Parts</List.Item>
              <List.Item>Services</List.Item>
              <List.Item>Polo Storico</List.Item>

            </List>

            <List className="column">
              <List.Item>EXPERIENCE</List.Item>
              <hr/>

              <List.Item>Lamborghini Lounge</List.Item>
              <List.Item>News</List.Item>
              <List.Item>Events</List.Item>
              <List.Item>Museum</List.Item>
              <List.Item>Esperienza Programs</List.Item>
              <List.Item>Mobile App</List.Item>

            </List>
        </div>
        </div>
    )
  }
}

class Lamborghini extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Background/>
          <Footer/>
        </div>
  );
  }
}

ReactDOM.render(<Lamborghini/>, document.getElementById('root'));
