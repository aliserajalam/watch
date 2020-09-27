import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Phone 1800 875 462</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link>FAQ</Footer.Link>
          <Footer.Link>Investor relations</Footer.Link>
          <Footer.Link>Ways to Watch</Footer.Link>
          <Footer.Link>Corporate Information</Footer.Link>
          <Footer.Link>Netflix Originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Help Centre</Footer.Link>
          <Footer.Link>Jobs</Footer.Link>
          <Footer.Link>Terms of Use</Footer.Link>
          <Footer.Link>Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Account</Footer.Link>
          <Footer.Link>Redeem gift cards</Footer.Link>
          <Footer.Link>Privacy</Footer.Link>
          <Footer.Link>Speed test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Media Centre</Footer.Link>
          <Footer.Link>Buy gift cards</Footer.Link>
          <Footer.Link>Cookie preferences</Footer.Link>
          <Footer.Link>Legal notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Australia</Footer.Text>
    </Footer>
  );
}
