module.exports = {
    gmailMesaj:(hedefGmail, key)=>{
        require('dotenv').config()
        const nodemailer = require('nodemailer')
        async function main() {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_ADRESS, // generated ethereal user
                    pass: process.env.MAIL_PASSWORD, // generated ethereal password
                },
                tls:{
                    rejectUnauthorized:false
                }
            });

            let info = await transporter.sendMail({
                to: `${hedefGmail}`, // list of receivers
                subject: "Word House", // Subject line
                html: `<div style="width: 400px;
                height: 500px;
                background-color: #323232;
                box-sizing: content-box; 
                border-radius: 10px;">
            <div style="visibility: hiddden;
                width:100%; 
                height:30px;"></div>
            <h2 style="font-weight: 700;
                text-align:center;
                width: 100%;
                height:50px;
                font-size: 35px;
                border-bottom: 3px solid rgb(160, 204, 160);
                color: #b3b3b3;">
                Word House</h2>
            <div style="visibility: hiddden;
                width:100%; 
                height:150px;"></div>
            <div style="width: 100%;
                text-align:center;
                height: 150px;
                color: #b3b3b3;
                font-size: 25px;
                font-weight: 700;">
                <span>Key:</span>
                <span style="color: orange;
                margin-left:10px;
                letter-spacing: 2px;">${key}</span>
            </div>
        </div>`
            });
        }
        main()
    },
    numberProduct: (basamak) => {
        let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','k', 'o', 'r', 's', 't', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '2', '3',
            '4', '5', '6', '7', '8', '9'
        ]
        let key = ''
        for (let i = 0; i < basamak; i++) {
            key += char[Math.floor(Math.random() * char.length)]
        }
        return key
    }
}