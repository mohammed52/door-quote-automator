"use-strict";

// import _ from 'lodash';
import SelectedOptions from '../db/mongo/models/selectedOptionsModel';
import nodemailerHelper from './nodemailerHelper'
import { controllers } from '../db';

// const selectedOptionsController = controllers && controllers.selectedOptionsController;

// send email
export function sendEmail(req, res) {

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'mohammed.petiwala52@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>Click <a href="http://localhost:5000/sendquote">here</a> to send quote-2' // html body
  };

  nodemailerHelper(mailOptions);

  return res.json({
    message: "MAP this is working"
  })
}

export function sendQuote(req, res) {
  console.log("MAP sendQuote is working");


  async function getData(req, res) {
    const response = await controllers.selectedOptionsController.all(req, res);
    console.log("response", response);
    return response
  }

  getData(req, res).then((res) => {
    console.log('MAP RESPONSE RECEIVED')
    console.log("res", res);
    let mailOptions = {
      from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
      to: 'mohammed.petiwala52@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'MEK', // plain text body
      html: 'MEK' // html body
    };

    nodemailerHelper(mailOptions)
    return res.redirect('/')
  }
  );


  // function resolveAfter2Seconds(x) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       console.log("x", x);
  //       resolve(x);
  //     }, 2000);
  //   });
  // }



  // const a = resolveAfter2Seconds(20);
  // console.log("a", a);

  // async function add(x) {
  //   const a = resolveAfter2Seconds(20);
  //   console.log("a", a);

  // }

  // add(10).then((v) => {
  //   console.log("v", v);
  // })



  // async function add1(x) {
  //   const a = await resolveAfter2Seconds(20);
  //   const b = await resolveAfter2Seconds(30);
  //   return x + a + b;
  // }

// add1(10).then(v => console.log(v) // prints 60 after 4 seconds.
// );    
// })
}
