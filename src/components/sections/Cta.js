import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  var firestore = firebase.firestore();
  var validator = require("email-validator");

  const MySwal = withReactContent(Swal)

  function call_data() { 
    console.log("mon ami");
    var txt = document.getElementById('newsletter').value;
    if (validate_email(txt)) {
      document.getElementById('newsletter').value = ''; //empty the cell because data 
      MySwal.fire({
        title: 'Confirmation',
        footer: 'Your email has been successfully registrered',
      });
      firestore.collection("emails").add({
        Email: txt
      }).then(function() {
        console.log(txt);
      }).catch(function(error) {
        console.log("There was en error: ", error);
      })
    } else {
      document.getElementById('newsletter').style.color = "red";
      MySwal.fire({
        title: 'Wrong Email Format',
        footer: 'Your email has not been registrered!',
      });
      console.log("The email you provided is not valid")
    }
  };

  function validate_email(mail) {
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(mail).toLowerCase()) && validator.validate(mail);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id='contact'>
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0 text_email" >
              Join our newsletter and stay updated !
             </h3>
          </div>
          <div style={{display:'inline-flex'}} className="cta-action">
            <Input id="newsletter" type="email" placeholder="Your email" style={{display:'inline-block'}} onKeyPress={
              (e) => {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                if (document.getElementById('newsletter').style.color == "red") {
                  document.getElementById('newsletter').style.color = "black";
                }
                if (keycode == '13') { 
                  call_data(document.getElementById('newsletter').value);
                }
              }} onSubmit = {
                (e) => {
                  document.getElementById('newsletter').style.color = "black";
                }
              } onKeyDown = {(e) => {
                document.getElementById('newsletter').style.color = "black";
              }}
            >
              </Input>
              <form style={{display:'inline-block'}} >
                <button style={{
                  backgroudColor:'transparant', 
                  height:'100%', 
                  borderWidth:0,
                  borderTopRightRadius:'2px',
                  borderBottomRightRadius:'2px',
                  cursor:'pointer'
                  }}
                  onClick= {(e) => {
                    e.preventDefault();
                    call_data();
                  }}
                  >
                    <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                    </svg> 
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;