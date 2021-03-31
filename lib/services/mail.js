'use strict';

const { Service } = require('schmervice');
const Nodemailer = require('nodemailer');

module.exports = class MailService extends Service {

    async newUser(user) {

        const testAccount = await Nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = Nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass  // generated ethereal password
            }
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Bibliothèque de films" <contact@bibliofilm.com>', // sender address
            to: user.mail, // list of receivers
            subject: 'Bienvenue', // Subject line
            text: 'Salut ' + user.username + ', bienvenue !', // plain text body
            html: '<p>Salut ' + user.username + ', bienvenue !</p>' // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', Nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    async newMovie(mails, movie) {

        const testAccount = await Nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = Nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass  // generated ethereal password
            }
        });

        let mailList = '';

        mails.forEach( (mail) => {
            mailList += mail + ', ';
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Bibliothèque de films" <contact@bibliofilm.com>', // sender address
            to: mailList, // list of receivers
            subject: 'Nouveau film', // Subject line
            text: movie.title + ' est disponible ! ', // plain text body
            html: '<p>' + movie.title + ' est disponible ! </p>' // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', Nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    async updateMovie(mails, movie) {

        const testAccount = await Nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = Nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass  // generated ethereal password
            }
        });

        let mailList = '';

        mails.forEach( (mail) => {
            mailList += mail + ', ';
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Bibliothèque de films" <contact@bibliofilm.com>', // sender address
            to: mailList, // list of receivers
            subject: movie.title + ' a changé', // Subject line
            text: movie.title + ' a été modifié, rendez-vous dans votre liste de favories pour voir le changement', // plain text body
            html: '<p><strong>' + movie.title + '</strong> a été modifié, rendez-vous dans votre liste de favories pour voir le changement</p>' // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', Nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    async removeMovie(mails, movie) {

        const testAccount = await Nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = Nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass  // generated ethereal password
            }
        });

        let mailList = '';

        mails.forEach( (mail) => {
            mailList += mail + ', ';
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Bibliothèque de films" <contact@bibliofilm.com>', // sender address
            to: mailList, // list of receivers
            subject: movie.title + ' indisponible', // Subject line
            text: movie.title + ' n\'est plus disponible, il n\'est plus dans votre liste de favories', // plain text body
            html: '<p><strong>' + movie.title + '</strong> n\'est plus disponible, il n\'est plus dans votre liste de favories</p>' // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', Nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
};

