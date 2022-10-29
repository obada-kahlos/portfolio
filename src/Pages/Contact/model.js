import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
export const social = [
    {
        icon : <ion-icon name="logo-linkedin"></ion-icon>,
        title : 'LinkedIn',
        link: 'linkedin.com/in/obada-kahlous-22487a1b3',
        content : 'Obada Kahlous',
        placement: 'bottom',
    },
    {
        icon : <ion-icon name="logo-github"></ion-icon>,
        title : 'GitHub',
        link: 'https://github.com/Obadaa-Kahlous',
        content : 'Obadaa-Kahlous',
        lacement: 'bottom',
    },
    {
        icon : <ion-icon name="logo-google"></ion-icon>,
        title : 'Google',
        link: '',
        content : 'kahlousobada@gmail.com',
        lacement: 'bottom',
    },
]
export const moreSocial = [
    {
        icon : <ion-icon name="logo-facebook"></ion-icon>,
        title : 'Facebook',
        link: '',
        content : 'عبادة كحلوس',
        lacement: 'bottom',
    },
    {
        icon : <ion-icon name="logo-whatsapp"></ion-icon>,
        title : 'WhatsApp',
        link: '',
        content : '+963 997741497',
        lacement: 'bottom',
    },
]
export const InputForm  = [
    {   
        id:'name',
        as :'input',
        name :'name',
        type :'text',
        placeholder : "Your name",
        autocomplete :"off",
        class : 'input',
        iconStyle : 'icon',
        icon : <PersonIcon />
    },
    {   
        id : 'name',
        as :'input',
        name :'email',
        type :'text',
        placeholder : "email",
        autocomplete :"off",
        class : 'input',
        iconStyle : 'icon',
        icon : <EmailIcon />
    },
    {
        id : "text",
        as : "textarea",
        name :"message",
        placeholder :"Your message here",
        cols :"30",
        rows : "10",
        autocomplete :"off",
        class : 'textarea resize-none',
        iconStyle : 'icontextarea',
        icon : <MessageIcon />
    },
]